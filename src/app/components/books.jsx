import React, { useEffect, useState } from "react";
import Book from "./book";
import Pagination from "./pagination";
import PropTypes from "prop-types";
import { paginate } from "../utils/paginate";
import Dropdown from "./dropdown";

const Books = ({ books, onDelete, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1),
        [selectedOption, setSelectedOption] = useState(""),
        [menuVisibility, setMenuVisibility] = useState({}),
        PAGE_SIZE = 8,
        pagesCount = Math.ceil(books.length / PAGE_SIZE),
        pages = Array.from({ length: pagesCount }, (_, i) => i + 1),
        booksSlice = paginate(books, PAGE_SIZE, currentPage),
        handleChangePage = (page) => {
            setCurrentPage(page);
        },
        handleSelect = (propEvent) => {
            setSelectedOption(propEvent);
            setMenuVisibility((prevState) => {
                return { ...prevState, [propEvent]: !prevState[propEvent] };
            });
        };
    console.log("menuVisibility:", menuVisibility);

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
                selectedOption={selectedOption}
                menuVisibility={menuVisibility}
                onSelect={handleSelect}
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
