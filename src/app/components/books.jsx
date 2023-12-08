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
        [currentFilter, setCurrentFilter] = useState(""),
        [menuVisibility, setMenuVisibility] = useState({}),
        [selectedFilter, setSelectedFilter] = useState({}),
        PAGE_SIZE = 8,
        filteredBooks = selectedFilter
            ? books.filter((book) => {
                  return typeof book[selectedFilter.propKey] === "number" ||
                      typeof book[selectedFilter.propKey] === "string"
                      ? selectedFilter.listItem === book
                      : selectedFilter.listItem ===
                            book[selectedFilter.propKey];
              })
            : books,
        booksSlice = paginate(filteredBooks, PAGE_SIZE, currentPage),
        pagesCount = Math.ceil(filteredBooks.length / PAGE_SIZE),
        pages = Array.from({ length: pagesCount }, (_, i) => i + 1),
        handleChangePage = (page) => {
            setCurrentPage(page);
        },
        handleSelect = (propEvent) => {
            setCurrentFilter(propEvent);
            setMenuVisibility((prevState) => {
                return { [propEvent]: !prevState[propEvent] };
            });
        },
        handleFilter = (listItem, propKey) => {
            setSelectedFilter({
                listItem,
                propKey
            });
        },
        handleClearFilter = () => setSelectedFilter({});

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

    if (currentPage > pagesCount) {
        setCurrentPage(pagesCount);
    }

    return (
        <div className="vh-100 bg-dark">
            <Header />
            <TotalStatus
                length={filteredBooks.length}
                favorites={
                    filteredBooks.filter((book) => book.status === true).length
                }
            />
            <Dropdown
                currentFilter={currentFilter}
                menuVisibility={menuVisibility}
                selectedFilter={selectedFilter}
                onSelect={handleSelect}
                onFilter={handleFilter}
                onClearFilter={handleClearFilter}
            />
            {filteredBooks.length > 0 && (
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
