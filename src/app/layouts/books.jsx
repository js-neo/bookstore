import React from "react";
import { Link, useParams } from "react-router-dom";
import BookPage from "../components/page/bookPage";
import BooksListPage from "../components/page/booksListPage";
import { useApp } from "../contexts/appContext";
import api from "../api";
import Badge from "../components/common/badge";
import Bookmark from "../components/common/bookmark";

const Books = () => {
    const {
        books,
        setBooks,
        genres,
        authors,
        currentUser,
        setRentedBooks,
        setPurchasedBooks
    } = useApp();
    console.log("books: ", books);

    const { bookId } = useParams();

    const handleRent = (bookId, rentalPeriod) => {
        const currentDate = new Date();

        const returnDate = new Date(currentDate);
        switch (rentalPeriod) {
            case "week":
                returnDate.setDate(returnDate.getDate() + 7);
                break;
            case "twoWeeks":
                returnDate.setDate(returnDate.getDate() + 14);
                break;
            case "month":
                returnDate.setMonth(returnDate.getMonth() + 1);
                break;
            default:
                break;
        }

        api.rentedBooks
            .addRentedBook(currentUser._id, {
                _id: bookId,
                bookId,
                rentalPeriod,
                rentalDate: currentDate.toISOString().split("T")[0],
                returnDate: returnDate.toISOString().split("T")[0]
            })
            .then((data) => {
                console.log("data: ", data);
                setRentedBooks(data);
                localStorage.setItem("rentedBooks", JSON.stringify(data));

                console.log(
                    `Книга арендована на ${rentalPeriod} и успешно добавлена в коллекцию`
                );
            })
            .catch((error) => {
                console.error("Ошибка при аренде книги:", error);
            });
        api.rentedBooks
            .fetchAllRentedBooks()
            .then((data) => console.log("rentedBooks: ", data));
    };
    const handleBuy = (bookId) => {
        const currentDate = new Date();

        api.purchasedBooks
            .addPurchasedBook(currentUser._id, {
                bookId,
                purchaseDate: currentDate.toISOString().split("T")[0]
            })
            .then((data) => {
                setPurchasedBooks(data);
                localStorage.setItem("purchasedBooks", JSON.stringify(data));
                console.log(`Книга куплена и успешно добавлена в коллекцию`);
            })
            .catch((error) => {
                console.error("Ошибка при покупке книги:", error);
            });
        api.purchasedBooks
            .fetchAllPurchasedBooks()
            .then((data) => console.log("purchasedBooks: ", data));
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
                    onClick={() => handleToggleBookmark(book._id)}
                    status={book.status}
                />
            )
        },
        buy: {
            _id: "71lvpb4qfu9h8tbsgh207532",
            component: (book) => (
                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleBuy(book._id)}
                >
                    Купить
                </button>
            )
        },
        rent: {
            _id: "64kwpd7glu0b4unsqh503519",
            component: (book) => (
                <div className="dropdown">
                    <button
                        className="btn btn-sm btn-primary dropdown-toggle"
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
                                onClick={() => handleRent(book._id, "week")}
                            >
                                На неделю
                            </button>
                        </li>
                        <li>
                            <button
                                className="dropdown-item"
                                onClick={() => handleRent(book._id, "twoWeeks")}
                            >
                                На две недели
                            </button>
                        </li>
                        <li>
                            <button
                                className="dropdown-item"
                                onClick={() => handleRent(book._id, "month")}
                            >
                                На месяц
                            </button>
                        </li>
                    </ul>
                </div>
            )
        }
    };

    return (
        <>
            {bookId ? (
                <BookPage bookId={bookId} {...{ books, genres, authors }} />
            ) : (
                <BooksListPage {...{ books, genres, authors, columns }} />
            )}
        </>
    );
};

export default Books;
