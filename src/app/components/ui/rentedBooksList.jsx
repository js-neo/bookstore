import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../contexts/appContext";
import BooksListPage from "../page/booksListPage";
import PropTypes from "prop-types";

const RentedBooksList = () => {
    const { rentedBooks, books, genres, authors, currentUser } = useApp();

    console.log("rentedBooks :", rentedBooks);
    const getDataById = (data, dataId) =>
        Object.values(data).find((item) => item._id === dataId);
    const userRentalCard = getDataById(rentedBooks, currentUser._id);
    const booksRentedId = userRentalCard ? userRentalCard.booksRented : null;
    const booksRented = booksRentedId.map(({ _id, returnDate }) => {
        const foundBook = books.find((book) => book._id === _id);
        return { ...foundBook, returnDate };
    });

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
        returnDate: {
            _id: "29ruiv3pml4t6buwjn319348",
            path: "returnDate",
            name: "Return date"
        }
    };
    return booksRented ? (
        <BooksListPage {...{ books: booksRented, genres, authors, columns }} />
    ) : (
        "Not found"
    );
};

BooksListPage.propTypes = {
    currentUser: PropTypes.object
};

export default RentedBooksList;
