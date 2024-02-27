import React from "react";
import PropTypes from "prop-types";
import Badge from "../common/badge";
import Bookmark from "../common/bookmark";
import Table from "../common/table";
import { Link } from "react-router-dom";

const BooksTable = ({
    genres,
    authors,
    books,
    selectedSort,
    currentPage,
    pageSize,
    onRent,
    onSort,
    onToggleBookmark,
    onDelete
}) => {
    const getDataById = (data, dataId) =>
        Object.values(data).find((item) => item._id === dataId);
    const columns = {
        rowNumber: {
            _id: "42gths3daw1x9gscwl566272",
            name: "#"
        },
        title: {
            _id: "29oice4med6v9liwle494953",
            path: "title",
            name: "Title",
            component: (book) => (
                <Link
                    className="text-decoration-none"
                    to={`/books/${book._id}`}
                >
                    {book.title}
                </Link>
            )
        },
        genres: {
            _id: "75ykdo4aea1y9blgnl414513",
            path: "genre",
            name: "Genre",
            component: (book) => <Badge {...getDataById(genres, book.genre)} />
        },
        authors: {
            _id: "19hwiy1srb6y4chiso290687",
            path: "author",
            name: "Author",
            component: (book) =>
                authors.length > 0
                    ? getDataById(authors, book.author).name
                    : "No author"
        },
        publicationYear: {
            _id: "18cieb1ssk5s7siybk258557",
            path: "publicationYear",
            name: "Publication Year"
        },
        rating: {
            _id: "37onhi7uui3z9qvzoa123482",
            path: "rating",
            name: "Rating"
        },
        price: {
            _id: "44fvsa9lrq8o4pvlfo223222",
            path: "price",
            name: "Price"
        },
        bookmark: {
            _id: "22jphs8qxp3v2mwuyo449643",
            path: "status",
            name: "Favorites",
            component: (book) => (
                <Bookmark
                    onClick={() => onToggleBookmark(book._id)}
                    status={book.status}
                />
            )
        },
        buy: {
            _id: "71lvpb4qfu9h8tbsgh207532",
            component: (book) => (
                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onDelete(book.status, book._id)}
                >
                    Delete
                </button>
            )
        },
        rent: {
            _id: "64kwpd7glu0b4unsqh503519",
            component: (book) => (
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Арендовать
                    </button>
                    <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <li>
                            <button
                                className="dropdown-item"
                                onClick={() => onRent("week")}
                            >
                                На неделю
                            </button>
                        </li>
                        <li>
                            <button
                                className="dropdown-item"
                                onClick={() => onRent("twoWeeks")}
                            >
                                На две недели
                            </button>
                        </li>
                        <li>
                            <button
                                className="dropdown-item"
                                onClick={() => onRent("month")}
                            >
                                На месяц
                            </button>
                        </li>
                    </ul>
                </div>
            )
        }
    };
    const startRowIndex = currentPage * pageSize - pageSize;
    return (
        <Table {...{ onSort, selectedSort, columns, books, startRowIndex }} />
    );
};
BooksTable.propTypes = {
    books: PropTypes.array,
    selectedSort: PropTypes.object,
    genres: PropTypes.array,
    authors: PropTypes.array,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    onDelete: PropTypes.func,
    onRent: PropTypes.func,
    onSort: PropTypes.func,
    onToggleBookmark: PropTypes.func
};

export default BooksTable;
