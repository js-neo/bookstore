import React, { useEffect, useState } from "react";
import Book from "./book";
import Pagination from "./pagination";
import Header from "./header";
import TotalStatus from "./totalStatus";
import PropTypes from "prop-types";
import { paginate } from "../utils/paginate";
import Dropdown from "./dropdown";

const Books = ({ books, onDelete, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1),
        [selectedFilter, setSelectedFilter] = useState(""),
        [menuVisibility, setMenuVisibility] = useState({}),
        [filterValue, setFilterValue] = useState({}),
        PAGE_SIZE = 2,
        filteredBooks = filterValue
            ? books.filter((book) => {
                  return typeof book[filterValue.propKey] === "number" ||
                      typeof book[filterValue.propKey] === "string"
                      ? filterValue.listItem === book
                      : filterValue.listItem === book[filterValue.propKey];
              })
            : books,
        count = filteredBooks.length,
        booksSlice = paginate(filteredBooks, PAGE_SIZE, currentPage),
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
        handleClearFilter = () => setFilterValue({});

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
                <table className="table table-dark table-striped table-hover m-0">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Author</th>
                            <th scope="col">Publication year</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Price</th>
                            <th scope="col" className="text-center">
                                Favorites
                            </th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {booksSlice.map((book, i) => (
                            <Book
                                key={book._id}
                                index={i}
                                onClick={() => onDelete(book.status, book._id)}
                                {...rest}
                                {...book}
                            />
                        ))}
                    </tbody>
                </table>
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
