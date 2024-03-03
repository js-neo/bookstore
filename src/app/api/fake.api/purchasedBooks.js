import apiMethods from "../apiMethods";

export const purchasedBooks = [
    {
        _id: "66kzei8bbv9m0fylgv982463",
        userId: "66kzei8bbv9m0fylgv982463",
        booksPurchased: [
            {
                _id: "65yggc4xrh5g7nsrxv940981",
                bookId: "65yggc4xrh5g7nsrxv940981",
                total: 1,
                purchaseDate: "2024-02-29"
            },
            {
                _id: "40kfrx6sqb9d7muubf722089",
                bookId: "40kfrx6sqb9d7muubf722089",
                total: 1,
                purchaseDate: "2024-02-29"
            }
        ]
    }
];

const dataList = (data, storedKey) => {
    try {
        const storedData = localStorage.getItem(storedKey);
        return storedData ? JSON.parse(storedData) : data;
    } catch (error) {
        console.error("Error parsing JSON data:", error);
        return data;
    }
};

const booksList = dataList(purchasedBooks, "purchasedBooks");
const fetchAllPurchasedBooks = () => apiMethods.getAllData(booksList);

const getPurchasedBookById = (bookId) =>
    apiMethods.getDataById(booksList, bookId);

const addPurchasedBook = (userId, newPurchasedBook) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const userIndex = booksList.findIndex(
                (userPurchaseCard) => userPurchaseCard.userId === userId
            );
            if (userIndex !== -1) {
                const foundBookId = booksList[
                    userIndex
                ].booksPurchased.findIndex((book) => {
                    return book._id === newPurchasedBook._id;
                });
                if (foundBookId !== -1) {
                    booksList[userIndex].booksPurchased[foundBookId].total += 1;
                } else {
                    booksList[userIndex].booksPurchased.push(newPurchasedBook);
                }
            } else {
                booksList.push({
                    _id: userId,
                    userId,
                    booksPurchased: [newPurchasedBook]
                });
            }
            resolve(booksList);
        }, 1000);
    });
};

export default {
    fetchAllPurchasedBooks,
    getPurchasedBookById,
    addPurchasedBook
};
