import React from "react";
import { useApp } from "../../contexts/appContext";
import { Link } from "react-router-dom";
import DataListPage from "../page/dataListPage";
import _ from "lodash";

const PurchasedBooksList = () => {
    const { purchasedBooks, books, genres, authors, currentUser } = useApp();
    const getDataById = (data, dataId) =>
        Object.values(data).find((item) => item._id === dataId);
    const userPurchasedCard =
        purchasedBooks.length > 0 &&
        getDataById(purchasedBooks, currentUser._id);
    const booksPurchasedId =
        userPurchasedCard && userPurchasedCard.booksPurchased;
    const booksPurchased =
        booksPurchasedId &&
        booksPurchasedId.map(({ _id, total, purchaseDate }) => {
            const foundBook = books.find((book) => book._id === _id);
            return { ...foundBook, total, purchaseDate };
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
        total: {
            _id: "63cqeb2sl5z9siywk258567",
            path: "total",
            name: "Total"
        },
        purchaseDate: {
            _id: "29ruiv3pml4t6buwjn319348",
            path: "purchaseDate",
            name: "Purchase Date"
        }
    };

    return !_.isEmpty(booksPurchased) ? (
        <DataListPage
            {...{ books: booksPurchased, genres, authors, columns }}
        />
    ) : (
        "Not found"
    );
};

export default PurchasedBooksList;
