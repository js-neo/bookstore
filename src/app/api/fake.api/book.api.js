import apiMethods from "../apiMethods";

const books = [
    {
        _id: "75hbjd4fkv4s5asdco530669",
        title: "Властелин колец",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_fellowship_of_the_ring.jpg?raw=true",
        genre: "07pwsw5ekc9o7klxtl289521",
        author: "11xpqh1ddu4p4kvpxw433231",
        publicationYear: 1954,
        rating: 4.8,
        price: 25.99,
        status: false
    },
    {
        _id: "04lzag0lpm6n8hkqbd150483",
        title: "Гарри Поттер и философский камень",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/harry_potter_and_the_sorcerer's_stone.jpg?raw=true",
        genre: "07pwsw5ekc9o7klxtl289521",
        author: "50nnzf7zpd0n7mzcxi542827",
        publicationYear: 1997,
        rating: 4.5,
        price: 19.99,
        status: false
    },
    {
        _id: "12duyo5ush3p4xvcmf276403",
        title: "Оно",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/it.jpg?raw=true",
        genre: "12duyo5ush3p4xvcmf276403",
        author: "72dldm8dqc9c5dapkz972971",
        publicationYear: 1986,
        rating: 4.4,
        price: 22.99,
        status: false
    },
    {
        _id: "63xivo0btt8k5onotj600282",
        title: "Гордость и предубеждение",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/pride_and_prejudice.jpg?raw=true",
        genre: "53hduy0zin2j1lfpqe211908",
        author: "17zvqy2ebi1a1eljcp751733",
        publicationYear: 1813,
        rating: 4.6,
        price: 18.99,
        status: false
    },
    {
        _id: "65yggc4xrh5g7nsrxv940981",
        title: "Приключения Шерлока Холмса",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_adventures_of_sherlock_holmes.jpg?raw=true",
        genre: "06fkky1jgq0y6ipaws194991",
        author: "31mlrl3pwn0y0izepw848596",
        publicationYear: 1892,
        rating: 4.7,
        price: 21.99,
        status: false
    },
    {
        _id: "32dfmh7axg3u7wswwn830386",
        title: "Точка обмана",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/deception_point_dan_brown.jpg?raw=true",
        genre: "54pete4gjn4q2blpln177669",
        author: "78trvf3hhk4d5elrhd331159",
        publicationYear: 2001,
        rating: 4.2,
        price: 20.99,
        status: false
    },
    {
        _id: "15kegp3cfv1i8ztqkx090130",
        title: "1984",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/1984_george_orwell.png?raw=true",
        genre: "55wkwa7bhp7i6veomt998866",
        author: "23nhfe5tko7u3sejqc092305",
        publicationYear: 1949,
        rating: 4.5,
        price: 16.99,
        status: false
    },
    {
        _id: "95wxhk7xqx2s7ubgeh241980",
        title: "Ромео и Джульетта",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/romeo_and_juliet.jpg?raw=true",
        genre: "53hduy0zin2j1lfpqe211908",
        author: "13ecje8kdt1p6gwpsd586763",
        publicationYear: 1597,
        rating: 4.7,
        price: 14.99,
        status: false
    },
    {
        _id: "40kfrx6sqb9d7muubf722089",
        title: "Игра престолов",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/a_game_of_thrones.jpg?raw=true",
        genre: "07pwsw5ekc9o7klxtl289521",
        author: "20swsg1zqc9z2yrqcq138846",
        publicationYear: 1996,
        rating: 4.8,
        price: 23.99,
        status: false
    },
    {
        _id: "47ftni0exp0j1qvskr931458",
        title: "Мастер и Маргарита",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_master_and_margarita.jpg?raw=true",
        genre: "55wkwa7bhp7i6veomt998866",
        author: "89eeqm6zli5f0kvqvu452501",
        publicationYear: 1967,
        rating: 4.6,
        price: 19.99,
        status: false
    },
    {
        _id: "47esfp3dhc5o5wbcxm930424",
        title: "Война и мир",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/war_and_peace.jpg?raw=true",
        genre: "55wkwa7bhp7i6veomt998866",
        author: "58kpwk1ixp7k5jvbgo457733",
        publicationYear: 1869,
        rating: 4.9,
        price: 29.99,
        status: false
    },
    {
        _id: "32rkie1pul5r4gmbld378793",
        title: "Три товарища",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/three_comrades.jpg?raw=true",
        genre: "55wkwa7bhp7i6veomt998866",
        author: "54lgim0xlb4u6xoihb728024",
        publicationYear: 1936,
        rating: 4.4,
        price: 17.99,
        status: false
    },
    {
        _id: "98yxgl1bgs4g8mjzxa135187",
        title: "Метро 2033",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/metro-2033.jpg?raw=true",
        genre: "83wnks3orf1j7cgdti200234",
        author: "59kkuh1pgt4t9rlbcv393847",
        publicationYear: 2005,
        rating: 4.2,
        price: 20.99,
        status: false
    },
    {
        _id: "39xvtj6tcy4m8vjiwt188070",
        title: "Психология масс",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_psychology_of_the_masses.jpg?raw=true",
        genre: "83wnks3orf1j7cgdti200234",
        author: "43anxi1pxu1l6ultfc060113",
        publicationYear: 1895,
        rating: 4.1,
        price: 12.99,
        status: false
    },
    {
        _id: "71ypfx2ixv5r8wfumy488308",
        title: "Тень ветра",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_shadow_of_the_wind.jpg?raw=true",
        genre: "06fkky1jgq0y6ipaws194991",
        author: "32zfpx2sid7b0gliah780352",
        publicationYear: 2001,
        rating: 4.5,
        price: 18.99,
        status: false
    },
    {
        _id: "20wknj9wpy3j2frjzl443334",
        title: "Граф Монте-Кристо",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_count_of_monte_cristo.jpg?raw=true",
        genre: "57piwe2gbc7v3uovns491259",
        author: "09woah6xnk6e8jcpap115825",
        publicationYear: 1844,
        rating: 4.7,
        price: 21.99,
        status: false
    },
    {
        _id: "81vxmf3dom7t8bfqqr658999",
        title: "Маленький принц",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_little_prince.jpg?raw=true",
        genre: "55wkwa7bhp7i6veomt998866",
        author: "81isnq2nhb7l4zihmq635336",
        publicationYear: 1943,
        rating: 4.8,
        price: 15.99,
        status: false
    },
    {
        _id: "01svsh0jjr3v0dsycj382475",
        title: "Возвращение Мюнхгаузена",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_return_of_munchausen.jpg?raw=true",
        genre: "55wkwa7bhp7i6veomt998866",
        author: "33dwva5bdz9a5mnrku672709",
        publicationYear: 1928,
        rating: 4.0,
        price: 13.99,
        status: false
    },
    {
        _id: "13ssdk8hrv8q2ujjvx138207",
        title: "Приключения Чиполлино",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_adventures_of_chipollino.jpg?raw=true",
        genre: "07pwsw5ekc9o7klxtl289521",
        author: "95ndwp6ujz4m5khkpa392182",
        publicationYear: 1971,
        rating: 4.2,
        price: 9.99,
        status: false
    },
    {
        _id: "91cuid1tjg6h7xqcsn098841",
        title: "Код Да Винчи",
        img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_da_vinci_code.jpg?raw=true",
        genre: "06fkky1jgq0y6ipaws194991",
        author: "78trvf3hhk4d5elrhd331159",
        publicationYear: 2003,
        rating: 4.3,
        price: 24.99,
        status: false
    }
];

const fetchAllBooks = () => apiMethods.getAllData(books);

const getBookById = (bookId) => apiMethods.getDataById(books, bookId);

const createNewBook = (newBook) => apiMethods.createNewData(books, newBook);

export default {
    fetchAllBooks,
    getBookById,
    createNewBook
};
