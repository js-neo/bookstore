import React, { useEffect, useState } from "react";
import Pagination from "./pagination";
import Header from "./header";
import TotalStatus from "./totalStatus";
import PropTypes from "prop-types";
import { paginate } from "../utils/paginate";
import Dropdown from "./dropdown";
import BooksTable from "./booksTable";
import _ from "lodash";
import api from "../api";

const Books = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilter, setSelectedFilter] = useState("");
    const [menuVisibility, setMenuVisibility] = useState({});
    const [filterValue, setFilterValue] = useState({});
    const [sortBy, setSortBy] = useState({ path: "title", order: "asc" });
    const [books, setBooks] = useState({});
    useEffect(() => {
        api.books.fetchAllBooks().then((data) => setBooks(data));
    }, []);
    const [genres, setGenres] = useState({});
    useEffect(() => {
        api.genres.fetchAllGenres().then((data) => setGenres(data));
    }, []);

    const [authors, setAuthors] = useState({});
    useEffect(() => {
        api.authors.fetchAllAuthors().then((data) => setAuthors(data));
    });
    const PAGE_SIZE = 8;
    const handleDelete = (status, bookId) => {
        if (status) return;
        setBooks(books.filter((book) => book._id !== bookId));
    };
    const handleToggleBookmark = (bookId) => {
        setBooks(
            books.map((book) => {
                return book._id === bookId
                    ? { ...book, status: !book.status }
                    : book;
            })
        );
    };
    const handleChangePage = (page) => {
        setCurrentPage(page);
    };
    const handleSelect = (propEvent) => {
        setSelectedFilter(propEvent);
        setMenuVisibility((prevState) => {
            return { [propEvent]: !prevState[propEvent] };
        });
    };
    const handleFilter = (listItem, propKey) => {
        setFilterValue({
            listItem,
            propKey
        });
    };
    const handleClearFilter = () => setFilterValue({});
    const handleSort = (sortConfig) => {
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

    if (!_.isEmpty(books) && !_.isEmpty(genres) && !_.isEmpty(authors)) {
        const filteredBooks = _.isEmpty(filterValue)
            ? books
            : books.filter((book) => {
                  return typeof book[filterValue.propKey] === "object"
                      ? filterValue.listItem === book[filterValue.propKey]
                      : filterValue.listItem === book;
              });
        const count = filteredBooks.length;
        const sortedBooks = _.orderBy(
            filteredBooks,
            [sortBy.path],
            [sortBy.order]
        );
        const booksSlice = paginate(sortedBooks, PAGE_SIZE, currentPage);
        const pagesCount = Math.ceil(count / PAGE_SIZE);
        const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

        if (currentPage > pagesCount) {
            setCurrentPage(pagesCount);
        }

        return (
            <div className="custom-container">
                <div className="row justify-content-center">
                    <div className="col-11">
                        <div className="vh-100 bg-dark">
                            <Header />
                            <TotalStatus
                                length={count}
                                favorites={
                                    filteredBooks.filter(
                                        (book) => book.status === true
                                    ).length
                                }
                            />
                            <Dropdown
                                {...{ books, genres, authors }}
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
                                    onDelete={handleDelete}
                                    onSort={handleSort}
                                    onToggleBookmark={handleToggleBookmark}
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
                    </div>
                </div>
            </div>
        );
    }
    return <span className="text-light">loading...</span>;
};

Books.propTypes = {
    books: PropTypes.array,
    onDelete: PropTypes.func,
    onToggleBookmark: PropTypes.func
};

export default Books;
