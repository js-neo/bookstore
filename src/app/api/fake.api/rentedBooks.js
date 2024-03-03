import apiMethods from "../apiMethods";

export const rentedBooks = [
    {
        _id: "66kzei8bbv9m0fylgv982463",
        userId: "66kzei8bbv9m0fylgv982463",
        booksRented: [
            {
                _id: "75hbjd4fkv4s5asdco530669",
                bookId: "75hbjd4fkv4s5asdco530669",
                total: 1,
                rentalPeriod: "week",
                rentalDate: "2024-02-26",
                returnDate: "2024-03-04"
            },
            {
                _id: "04lzag0lpm6n8hkqbd150483",
                bookId: "04lzag0lpm6n8hkqbd150483",
                total: 1,
                rentalPeriod: "twoWeeks",
                rentalDate: "2024-02-28",
                returnDate: "2024-03-07"
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

const booksList = dataList(rentedBooks, "rentedBooks");

const fetchAllRentedBooks = () => apiMethods.getAllData(booksList);

const getRentedBookById = (bookId) => apiMethods.getDataById(booksList, bookId);

const addRentedBook = (userId, newRentedBook) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const userIndex = booksList.findIndex(
                (userRentalCard) => userRentalCard.userId === userId
            );
            if (userIndex !== -1) {
                const foundBookId = booksList[userIndex].booksRented.findIndex(
                    (book) => {
                        return book._id === newRentedBook._id;
                    }
                );
                if (foundBookId !== -1) {
                    booksList[userIndex].booksRented[foundBookId].total += 1;
                } else {
                    booksList[userIndex].booksRented.push(newRentedBook);
                }
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
