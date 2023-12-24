import React, { useEffect, useState } from "react";
import Pagination from "./pagination";
import Header from "./header";
import TotalStatus from "./totalStatus";
import PropTypes from "prop-types";
import { paginate } from "../utils/paginate";
import Dropdown from "./dropdown";
import BooksTable from "./booksTable";
import _ from "lodash";

const Books = ({ books, onDelete, onToggleBookmark }) => {
    const [currentPage, setCurrentPage] = useState(1),
        [selectedFilter, setSelectedFilter] = useState(""),
        [menuVisibility, setMenuVisibility] = useState({}),
        [filterValue, setFilterValue] = useState({}),
        [sortBy, setSortBy] = useState({ iterator: "title", order: "asc" }),
        PAGE_SIZE = 8,
        filteredBooks = _.isEmpty(filterValue)
            ? books
            : books.filter((book) => {
                  return typeof book[filterValue.propKey] === "object"
                      ? filterValue.listItem === book[filterValue.propKey]
                      : filterValue.listItem === book;
              }),
        count = filteredBooks.length,
        sortedBooks = _.orderBy(
            filteredBooks,
            [sortBy.iterator],
            [sortBy.order]
        ),
        booksSlice = paginate(sortedBooks, PAGE_SIZE, currentPage),
        pagesCount = Math.ceil(count / PAGE_SIZE),
        pages = Array.from({ length: pagesCount }, (_, i) => i + 1),
        handleChangePage = (page) => {
            setCurrentPage(page);
        },
        handleSelect = (propEvent) => {
            setSelectedFilter(propEvent);
            setMenuVisibility((prevState) => {
                return { [propEvent]: !prevState[propEvent] };
            });
        },
        handleFilter = (listItem, propKey) => {
            setFilterValue({
                listItem,
                propKey
            });
        },
        handleClearFilter = () => setFilterValue({}),
        handleSort = (sortConfig) => {
            setSortBy(sortConfig);
        };

    useEffect(() => {
        const handleOutsideClickMenu = ({ target }) => {
            if (!target.closest(".dropdown")) {
                setMenuVisibility({});
            }
        };
        document.addEventListener("click", handleOutsideClickMenu);
        return () =>
            document.removeEventListener("click", handleOutsideClickMenu);
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [filterValue]);

    if (currentPage > pagesCount) {
        setCurrentPage(pagesCount);
    }

    return (
        <div className="vh-100 bg-dark">
            <Header />
            <TotalStatus
                length={count}
                favorites={
                    filteredBooks.filter((book) => book.status === true).length
                }
            />
            <Dropdown
                selectedFilter={selectedFilter}
                menuVisibility={menuVisibility}
                filterValue={filterValue}
                onSelect={handleSelect}
                onFilter={handleFilter}
                onClearFilter={handleClearFilter}
            />
            {count > 0 && (
                <BooksTable
                    books={booksSlice}
                    selectedSort={sortBy}
                    currentPage={currentPage}
                    pageSize={PAGE_SIZE}
                    onDelete={onDelete}
                    onSort={handleSort}
                    onToggleBookmark={onToggleBookmark}
                />
            )}
            {pagesCount > 1 && (
                <div className="d-flex justify-content-center">
                    <Pagination
                        onChangePage={handleChangePage}
                        pages={pages}
                        currentPage={currentPage}
                    />
                </div>
            )}
        </div>
    );
};

Books.propTypes = {
    books: PropTypes.array,
    onDelete: PropTypes.func,
    onToggleBookmark: PropTypes.func
};

export default Books;
