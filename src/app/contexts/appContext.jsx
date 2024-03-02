import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api";

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [genres, setGenres] = useState([]);
    const [rentedBooks, setRentedBooks] = useState([]);
    const [purchasedBooks, setPurchasedBooks] = useState([]);

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem("books"));
        const storedRentedBooks = JSON.parse(
            localStorage.getItem("rentedBooks")
        );
        const storedPurchasedBooks = JSON.parse(
            localStorage.getItem("purchasedBooks")
        );
        if (storedBooks) {
            setBooks(storedBooks);
        } else {
            api.books.fetchAllBooks().then((booksData) => setBooks(booksData));
        }

        if (storedRentedBooks) {
            setRentedBooks(storedRentedBooks);
        } else {
            api.rentedBooks
                .fetchAllRentedBooks()
                .then((booksData) => setRentedBooks(booksData));
        }

        if (storedPurchasedBooks) {
            setPurchasedBooks(storedPurchasedBooks);
        } else {
            api.purchasedBooks
                .fetchAllPurchasedBooks()
                .then((booksData) => setPurchasedBooks(booksData));
        }
    }, []);

    useEffect(() => {
        Promise.all([
            api.genres.fetchAllGenres(),
            api.authors.fetchAllAuthors()
        ]).then(([genresData, authorsData]) => {
            setGenres(genresData);
            setAuthors(authorsData);
        });
    }, []);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("currentUser"));
        console.log("storedUser: ", storedUser);
        if (storedUser) {
            setCurrentUser(storedUser);
        }
    }, []);

    return (
        <AppContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                books,
                setBooks,
                authors,
                setAuthors,
                genres,
                setGenres,
                rentedBooks,
                setRentedBooks,
                purchasedBooks,
                setPurchasedBooks
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired
};
