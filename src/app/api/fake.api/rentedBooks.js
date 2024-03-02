import apiMethods from "../apiMethods";

export const rentedBooks = [
    {
        _id: "66kzei8bbv9m0fylgv982463",
        userId: "66kzei8bbv9m0fylgv982463",
        booksRented: [
            {
                _id: "75hbjd4fkv4s5asdco530669",
                bookId: "75hbjd4fkv4s5asdco530669",
                rentalPeriod: "week",
                rentalDate: "2024-02-26",
                returnDate: "2024-03-04"
            },
            {
                _id: "04lzag0lpm6n8hkqbd150483",
                bookId: "04lzag0lpm6n8hkqbd150483",
                rentalPeriod: "twoWeeks",
                rentalDate: "2024-02-28",
                returnDate: "2024-03-07"
            }
        ]
    }
];

const fetchAllRentedBooks = () => apiMethods.getAllData(rentedBooks);

const getRentedBookById = (bookId) =>
    apiMethods.getDataById(rentedBooks, bookId);

const addRentedBook = (userId, newRentedBook) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const storedRentedBooks = JSON.parse(
                localStorage.getItem("rentedBooks")
            );
            const booksList = storedRentedBooks ?? rentedBooks;
            console.log("storedRentedBooks: ", storedRentedBooks);
            const userIndex = booksList.findIndex(
                (userRentalCard) => userRentalCard.userId === userId
            );
            if (userIndex !== -1) {
                booksList[userIndex].booksRented.push(newRentedBook);
            } else {
                booksList.push({
                    _id: userId,
                    userId,
                    booksRented: [newRentedBook]
                });
            }
            resolve(booksList);
        }, 1000);
    });
};

export default {
    fetchAllRentedBooks,
    getRentedBookById,
    addRentedBook
};
