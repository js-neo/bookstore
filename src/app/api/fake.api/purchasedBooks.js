import apiMethods from "../apiMethods";

export const purchasedBooks = [
    {
        userId: "66kzei8bbv9m0fylgv982463",
        booksPurchased: [
            {
                bookId: "65yggc4xrh5g7nsrxv940981",
                purchaseDate: "2024-02-29"
            },
            {
                bookId: "40kfrx6sqb9d7muubf722089",
                purchaseDate: "2024-02-29"
            }
        ]
    }
];

const fetchAllPurchasedBooks = () => apiMethods.getAllData(purchasedBooks);

const getPurchasedBookById = (bookId) =>
    apiMethods.getDataById(purchasedBooks, bookId);

const addPurchasedBook = (userId, newPurchasedBook) => {
    console.log("newPurchasedBook: ", newPurchasedBook);
    return new Promise((resolve) => {
        setTimeout(() => {
            const userIndex = purchasedBooks.findIndex(
                (userPurchaseCard) => userPurchaseCard.userId === userId
            );
            if (userIndex !== -1) {
                purchasedBooks[userIndex].booksPurchased.push(newPurchasedBook);
            } else {
                purchasedBooks.push({
                    userId,
                    booksPurchased: [newPurchasedBook]
                });
            }
            resolve(purchasedBooks);
        }, 1000);
    });
};

export default {
    fetchAllPurchasedBooks,
    getPurchasedBookById,
    addPurchasedBook
};
