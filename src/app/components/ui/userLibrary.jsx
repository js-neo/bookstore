import React from "react";
import { Link } from "react-router-dom";
import Badge from "../common/badge";

const UserLibrary = () => {
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
        }
    };
    return <div>User Library</div>;
};

export default UserLibrary;
