import apiMethods from "../apiMethods";

export let rentedBooks = [
    {
        userId: "66kzei8bbv9m0fylgv982463",
        booksRented: [
            {
                bookId: "75hbjd4fkv4s5asdco530669",
                rentalPeriod: "week",
                rentalDate: "2024-02-26",
                returnDate: "2024-03-04"
            },
            {
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
            const userRentingBooks = rentedBooks.find(
                (userRentalCard) => userRentalCard.userId === userId
            );
            if (userRentingBooks) {
                const updatedUserRentalCard = {
                    ...userRentingBooks,
                    booksRented: [
                        ...userRentingBooks.booksRented,
                        newRentedBook
                    ]
                };
                rentedBooks = rentedBooks.map((userRentalCard) =>
                    userRentalCard.userId === userId
                        ? updatedUserRentalCard
                        : userRentalCard
                );
            } else {
                rentedBooks.push({ userId, booksRented: [newRentedBook] });
            }
            resolve("Арендованная книга успешно добавлена в коллекцию");
        }, 1000);
    });
};

export default {
    fetchAllRentedBooks,
    getRentedBookById,
    addRentedBook
};
