import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Badge from "./badge";
import Bookmark from "./bookmark";

const BooksTable = ({
    books,
    selectedSort,
    currentPage,
    pageSize,
    onDelete,
    onSort,
    onToggleBookmark
}) => {
    const columns = {
            rowNumber: {
                _id: "42gths3daw1x9gscwl566272",
                name: "#"
            },
            title: {
                _id: "29oice4med6v9liwle494953",
                path: "title",
                name: "Title"
            },
            genres: {
                _id: "75ykdo4aea1y9blgnl414513",
                path: "genre.name",
                name: "Genre",
                component: (book) => <Badge {...book.genre} />
            },
            authors: {
                _id: "19hwiy1srb6y4chiso290687",
                path: "author.name",
                name: "Author"
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
            delete: {
                _id: "71lvpb4qfu9h8tbsgh207532",
                component: (book) => (
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => onDelete(book.status, book._id)}
                    >
                        Delete
                    </button>
                )
            }
        },
        startRowIndex = currentPage * pageSize - pageSize;
    return (
        <table className="table table-dark table-striped table-hover mt-4">
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ data: books, columns, startRowIndex }} />
        </table>
    );
};
BooksTable.propTypes = {
    books: PropTypes.array,
    selectedSort: PropTypes.object,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    onDelete: PropTypes.func,
    onSort: PropTypes.func,
    onToggleBookmark: PropTypes.func
};

export default BooksTable;
