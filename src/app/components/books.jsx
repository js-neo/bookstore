import React, { useEffect, useState } from "react";
import Book from "./book";
import Pagination from "./pagination";
import PropTypes from "prop-types";
import { paginate } from "../utils/paginate";
import Dropdown from "./dropdown";

const Books = ({ books, onDelete, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1),
        [currentFilter, setCurrentFilter] = useState(""),
        [menuVisibility, setMenuVisibility] = useState({}),
        [selectedFilter, setSelectedFilter] = useState(null),
        PAGE_SIZE = 8,
        pagesCount = Math.ceil(books.length / PAGE_SIZE),
        pages = Array.from({ length: pagesCount }, (_, i) => i + 1),
        filteredBooks = selectedFilter
            ? books.filter((book) => {
                  console.log("book:", book);
                  console.log(
                      "selectedFilter.listItem:",
                      selectedFilter.listItem
                  );
                  return typeof book[selectedFilter.propKey] === "number" ||
                      typeof book[selectedFilter.propKey] === "string"
                      ? selectedFilter.listItem === book
                      : selectedFilter.listItem ===
                            book[selectedFilter.propKey];
              })
            : books,
        booksSlice = paginate(filteredBooks, PAGE_SIZE, currentPage),
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
            console.log("filteredBooks:", filteredBooks);
        };

    console.log("selectedFilter:", selectedFilter);

    useEffect(() => {
        const handleOutsideClickMenu = ({ target }) => {
            console.log("Document click");
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
        <>
            <Dropdown
                currentFilter={currentFilter}
                menuVisibility={menuVisibility}
                onSelect={handleSelect}
                onFilter={handleFilter}
            />
            {books.length > 0 && (
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
                <Pagination
                    onChangePage={handleChangePage}
                    pages={pages}
                    currentPage={currentPage}
                />
            )}
        </>
    );
};

Books.propTypes = {
    books: PropTypes.array,
    onDelete: PropTypes.func
};

export default Books;
