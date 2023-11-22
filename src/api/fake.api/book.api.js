const genres = {
    fantasy: {
        _id: "67rdca3eeb7f6fgeed471811",
        name: "Фэнтези",
        color: "primary"
    },
    horror: { _id: "67rdca3eeb7f6fgeed471812", name: "Ужасы", color: "danger" },
    romance: {
        _id: "67rdca3eeb7f6fgeed471813",
        name: "Романтика",
        color: "success"
    },
    mystery: {
        _id: "67rdca3eeb7f6fgeed471814",
        name: "Мистика",
        color: "warning"
    },
    fiction: {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "Художественная литература",
        color: "secondary"
    },
    history: {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Исторический роман",
        color: "info"
    },
    thriller: {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Триллер",
        color: "dark"
    },
    science: {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Научная литература",
        color: "info"
    },
    adventure: {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Приключения",
        color: "success"
    }
};

const authors = {
    tolkien: {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "Дж.Р.Р. Толкин",
        birthYear: 1892,
        deathYear: 1973
    },
    rowling: {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Джоан Роулинг",
        birthYear: 1965,
        deathYear: null
    },
    king: {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Стивен Кинг",
        birthYear: 1947,
        deathYear: null
    },
    austen: {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Джейн Остин",
        birthYear: 1775,
        deathYear: 1817
    },
    doyle: {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Артур Конан Дойл",
        birthYear: 1859,
        deathYear: 1930
    },
    brown: {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Дэн Браун",
        birthYear: 1964,
        deathYear: null
    },
    orwell: {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Джордж Оруэлл",
        birthYear: 1903,
        deathYear: 1950
    },
    shakespeare: {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Уильям Шекспир",
        birthYear: 1564,
        deathYear: 1616
    },
    martin: {
        _id: "67rdca3eeb7f6fgeed471823",
        name: "Джордж Мартин",
        birthYear: 1948,
        deathYear: null
    },
    bulgakov: {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Михаил Булгаков",
        birthYear: 1891,
        deathYear: 1940
    },
    tolstoy: {
        _id: "67rdca3eeb7f6fgeed471825",
        name: "Лев Толстой",
        birthYear: 1828,
        deathYear: 1910
    },
    remarque: {
        _id: "67rdca3eeb7f6fgeed471826",
        name: "Эрих Мария Ремарк",
        birthYear: 1898,
        deathYear: 1970
    },
    rodari: {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "Джани Родари",
        birthYear: 1920,
        deathYear: 1980
    },
    krzhizhanovsky: {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "Сигизмунд Кржижановский",
        birthYear: 1887,
        deathYear: 1950
    },
    saintExupery: {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "Антуан де Сент-Экзюпери",
        birthYear: 1900,
        deathYear: 1944
    },
    dumas: {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "Александр Дюма",
        birthYear: 1802,
        deathYear: 1870
    },
    zafon: {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "Карлос Руис Сафон",
        birthYear: 1964,
        deathYear: null
    },
    lebon: {
        _id: "67rdca3eeb7f6fgeed471823",
        name: "Гюстав Лебон",
        birthYear: 1841,
        deathYear: 1931
    },
    glukhovsky: {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "Дмитрий Глуховский",
        birthYear: 1979,
        deathYear: null
    }
};

const books = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        title: "Властелин колец",
        genre: genres.fantasy,
        author: authors.tolkien,
        publicationYear: 1954,
        rating: 4.8,
        price: 25.99
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        title: "Гарри Поттер и философский камень",
        genre: genres.fantasy,
        author: authors.rowling,
        publicationYear: 1997,
        rating: 4.5,
        price: 19.99
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        title: "Оно",
        genre: genres.horror,
        author: authors.king,
        publicationYear: 1986,
        rating: 4.4,
        price: 22.99
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        title: "Гордость и предубеждение",
        genre: genres.romance,
        author: authors.austen,
        publicationYear: 1813,
        rating: 4.6,
        price: 18.99
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        title: "Приключения Шерлока Холмса",
        genre: genres.mystery,
        author: authors.doyle,
        publicationYear: 1892,
        rating: 4.7,
        price: 21.99
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        title: "Точка обмана",
        genre: genres.thriller,
        author: authors.brown,
        publicationYear: 1998,
        rating: 4.2,
        price: 20.99
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        title: "1984",
        genre: genres.fiction,
        author: authors.orwell,
        publicationYear: 1949,
        rating: 4.5,
        price: 16.99
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        title: "Ромео и Джульетта",
        genre: genres.romance,
        author: authors.shakespeare,
        publicationYear: 1597,
        rating: 4.7,
        price: 14.99
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        title: "Игра престолов",
        genre: genres.fantasy,
        author: authors.martin,
        publicationYear: 1996,
        rating: 4.8,
        price: 23.99
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        title: "Мастер и Маргарита",
        genre: genres.fiction,
        author: authors.bulgakov,
        publicationYear: 1967,
        rating: 4.6,
        price: 19.99
    },
    {
        _id: "67rdca3eeb7f6fgeed471825",
        title: "Война и мир",
        genre: genres.fiction,
        author: authors.tolstoy,
        publicationYear: 1869,
        rating: 4.9,
        price: 29.99
    },
    {
        _id: "67rdca3eeb7f6fgeed471826",
        title: "Три товарища",
        genre: genres.fiction,
        author: authors.remarque,
        publicationYear: 1936,
        rating: 4.4,
        price: 17.99
    },
    {
        _id: "67rdca3eeb7f6fgeed471827",
        title: "Метро 2033",
        genre: genres.science,
        author: authors.glukhovsky,
        publicationYear: 2005,
        rating: 4.2,
        price: 20.99
    },
    {
        _id: "67rdca3eeb7f6fgeed471828",
        title: "Психология масс",
        genre: genres.science,
        author: authors.lebon,
        publicationYear: 1895,
        rating: 4.1,
        price: 12.99
    },
    {
        _id: "67rdca3eeb7f6fgeed471829",
        title: "Тень ветра",
        genre: genres.mystery,
        author: authors.zafon,
        publicationYear: 2001,
        rating: 4.5,
        price: 18.99
    },
    {
        _id: "67rdca3eeb7f6fgeed471830",
        title: "Граф Монте-Кристо",
        genre: genres.adventure,
        author: authors.dumas,
        publicationYear: 1844,
        rating: 4.7,
        price: 21.99
    },
    {
        _id: "67rdca3eeb7f6fgeed471831",
        title: "Маленький принц",
        genre: genres.fiction,
        author: authors.saintExupery,
        publicationYear: 1943,
        rating: 4.8,
        price: 15.99
    },
    {
        _id: "67rdca3eeb7f6fgeed471832",
        title: "Магнат",
        genre: genres.fiction,
        author: authors.krzhizhanovsky,
        publicationYear: 1926,
        rating: 4.0,
        price: 13.99
    },
    {
        _id: "67rdca3eeb7f6fgeed471833",
        title: "Странствия Чиполлино",
        genre: genres.fantasy,
        author: authors.rodari,
        publicationYear: 1971,
        rating: 4.2,
        price: 9.99
    },
    {
        _id: "67rdca3eeb7f6fgeed471834",
        title: "Код Да Винчи",
        genre: genres.mystery,
        author: authors.brown,
        publicationYear: 2003,
        rating: 4.3,
        price: 24.99
    }
];

export function fetchAllBooks() {
    return books;
}
