import { genres } from "./genres";
import { authors } from "./authors";
import apiMethods from "../apiMethods";

const books = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        title: "Властелин колец",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_fellowship_of_the_ring.jpg?raw=true",
        genre: genres.fantasy,
        author: authors.tolkien,
        publicationYear: 1954,
        rating: 4.8,
        price: 25.99,
        status: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        title: "Гарри Поттер и философский камень",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/harry_potter_and_the_sorcerer's_stone.jpg?raw=true",
        genre: genres.fantasy,
        author: authors.rowling,
        publicationYear: 1997,
        rating: 4.5,
        price: 19.99,
        status: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        title: "Оно",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/it.jpg?raw=true",
        genre: genres.horror,
        author: authors.king,
        publicationYear: 1986,
        rating: 4.4,
        price: 22.99,
        status: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        title: "Гордость и предубеждение",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/pride_and_prejudice.jpg?raw=true",
        genre: genres.romance,
        author: authors.austen,
        publicationYear: 1813,
        rating: 4.6,
        price: 18.99,
        status: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        title: "Приключения Шерлока Холмса",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_adventures_of_sherlock_holmes.jpg?raw=true",
        genre: genres.mystery,
        author: authors.doyle,
        publicationYear: 1892,
        rating: 4.7,
        price: 21.99,
        status: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        title: "Точка обмана",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/deception_point_dan_brown.jpg?raw=true",
        genre: genres.thriller,
        author: authors.brown,
        publicationYear: 2001,
        rating: 4.2,
        price: 20.99,
        status: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        title: "1984",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/1984_george_orwell.png?raw=true",
        genre: genres.fiction,
        author: authors.orwell,
        publicationYear: 1949,
        rating: 4.5,
        price: 16.99,
        status: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        title: "Ромео и Джульетта",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/romeo_and_juliet.jpg?raw=true",
        genre: genres.romance,
        author: authors.shakespeare,
        publicationYear: 1597,
        rating: 4.7,
        price: 14.99,
        status: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        title: "Игра престолов",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/a_game_of_thrones.jpg?raw=true",
        genre: genres.fantasy,
        author: authors.martin,
        publicationYear: 1996,
        rating: 4.8,
        price: 23.99,
        status: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        title: "Мастер и Маргарита",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_master_and_margarita.jpg?raw=true",
        genre: genres.fiction,
        author: authors.bulgakov,
        publicationYear: 1967,
        rating: 4.6,
        price: 19.99,
        status: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471825",
        title: "Война и мир",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/war_and_peace.jpg?raw=true",
        genre: genres.fiction,
        author: authors.tolstoy,
        publicationYear: 1869,
        rating: 4.9,
        price: 29.99,
        status: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471826",
        title: "Три товарища",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/three_comrades.jpg?raw=true",
        genre: genres.fiction,
        author: authors.remarque,
        publicationYear: 1936,
        rating: 4.4,
        price: 17.99,
        status: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471827",
        title: "Метро 2033",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/metro-2033.jpg?raw=true",
        genre: genres.science,
        author: authors.glukhovsky,
        publicationYear: 2005,
        rating: 4.2,
        price: 20.99,
        status: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471828",
        title: "Психология масс",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_psychology_of_the_masses.jpg?raw=true",
        genre: genres.science,
        author: authors.lebon,
        publicationYear: 1895,
        rating: 4.1,
        price: 12.99,
        status: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471829",
        title: "Тень ветра",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_shadow_of_the_wind.jpg?raw=true",
        genre: genres.mystery,
        author: authors.zafon,
        publicationYear: 2001,
        rating: 4.5,
        price: 18.99,
        status: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471830",
        title: "Граф Монте-Кристо",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_count_of_monte_cristo.jpg?raw=true",
        genre: genres.adventure,
        author: authors.dumas,
        publicationYear: 1844,
        rating: 4.7,
        price: 21.99,
        status: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471831",
        title: "Маленький принц",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_little_prince.jpg?raw=true",
        genre: genres.fiction,
        author: authors.saintExupery,
        publicationYear: 1943,
        rating: 4.8,
        price: 15.99,
        status: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471832",
        title: "Возвращение Мюнхгаузена",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_return_of_munchausen.jpg?raw=true",
        genre: genres.fiction,
        author: authors.krzhizhanovsky,
        publicationYear: 1928,
        rating: 4.0,
        price: 13.99,
        status: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471833",
        title: "Приключения Чиполлино",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_adventures_of_chipollino.jpg?raw=true",
        genre: genres.fantasy,
        author: authors.rodari,
        publicationYear: 1971,
        rating: 4.2,
        price: 9.99,
        status: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471834",
        title: "Код Да Винчи",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_da_vinci_code.jpg?raw=true",
        genre: genres.mystery,
        author: authors.brown,
        publicationYear: 2003,
        rating: 4.3,
        price: 24.99,
        status: false
    }
];

const fetchAllBooks = () => apiMethods.getAllData(books);

const getBookById = (bookId) => apiMethods.getDataById(books, bookId);

const createNewBook = (newBook) => {
    return apiMethods
        .createNewData([...books], newBook)
        .then((updatedBooks) => {
            books.splice(0, books.length, updatedBooks);
            return updatedBooks;
        });
};

export default {
    fetchAllBooks,
    getBookById,
    createNewBook
};
