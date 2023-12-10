import React, { useEffect, useState } from "react";
import Pagination from "./pagination";
import Header from "./header";
import TotalStatus from "./totalStatus";
import PropTypes from "prop-types";
import { paginate } from "../utils/paginate";
import Dropdown from "./dropdown";
import BooksTable from "./booksTable";

const Books = ({ books, onDelete, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1),
        [selectedFilter, setSelectedFilter] = useState(""),
        [menuVisibility, setMenuVisibility] = useState({}),
        [filterValue, setFilterValue] = useState({}),
        [sortBy, setSortBy] = useState({ iterator: "title", order: "up" }),
        PAGE_SIZE = 8,
        filteredBooks =
            Object.keys(filterValue).length !== 0
                ? books.filter((book) => {
                      return typeof book[filterValue.propKey] === "object"
                          ? filterValue.listItem === book[filterValue.propKey]
                          : filterValue.listItem === book;
                  })
                : books,
        count = filteredBooks.length,
        sortedBooks = (sortedKey, direct) => {
            return direct === "up"
                ? filteredBooks.sort((a, b) => {
                      let prop1 = a[sortedKey] ? a[sortedKey] : false,
                          prop2 = b[sortedKey] ? b[sortedKey] : false;
                      if (typeof prop1 === "object") {
                          prop1 = prop1.name;
                          prop2 = prop2.name;
                      }
                      return prop1 > prop2 ? 1 : -1;
                  })
                : filteredBooks.sort((a, b) => {
                      let prop1 = a[sortedKey] ? a[sortedKey] : false,
                          prop2 = b[sortedKey] ? b[sortedKey] : false;
                      if (typeof a[sortedKey] === "object") {
                          prop1 = prop1.name;
                          prop2 = prop2.name;
                      }
                      return prop2 > prop1 ? 1 : -1;
                  });
        },
        booksSlice = paginate(
            sortedBooks(sortBy.iterator, sortBy.order),
            PAGE_SIZE,
            currentPage
        ),
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
        handleSort = (sortedKey, direct) => {
            setSortBy({ iterator: sortedKey, order: direct });
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
                    onDelete={onDelete}
                    onSort={handleSort}
                    {...rest}
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
    onDelete: PropTypes.func
};

export default Books;
