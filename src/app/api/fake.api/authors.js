export const authors = {
    tolkien: {
        _id: "67rdca3eeb1f6fgeed471815",
        name: "Дж.Р.Р. Толкин",
        birthYear: 1892,
        deathYear: 1973
    },
    rowling: {
        _id: "67rdca3eeb2f6fgeed471816",
        name: "Джоан Роулинг",
        birthYear: 1965,
        deathYear: null
    },
    king: {
        _id: "67rdca3eeb3f6fgeed471817",
        name: "Стивен Кинг",
        birthYear: 1947,
        deathYear: null
    },
    austen: {
        _id: "67rdca3eeb4f6fgeed471818",
        name: "Джейн Остин",
        birthYear: 1775,
        deathYear: 1817
    },
    doyle: {
        _id: "67rdca3eeb5f6fgeed471819",
        name: "Артур Конан Дойл",
        birthYear: 1859,
        deathYear: 1930
    },
    brown: {
        _id: "67rdca3eeb6f6fgeed471820",
        name: "Дэн Браун",
        birthYear: 1964,
        deathYear: null
    },
    orwell: {
        _id: "67rdca3eeb7f7fgeed471821",
        name: "Джордж Оруэлл",
        birthYear: 1903,
        deathYear: 1950
    },
    shakespeare: {
        _id: "67rdca3eeb8f6fgeed471822",
        name: "Уильям Шекспир",
        birthYear: 1564,
        deathYear: 1616
    },
    martin: {
        _id: "67rdca3eeb9f6fgeed471823",
        name: "Джордж Мартин",
        birthYear: 1948,
        deathYear: null
    },
    bulgakov: {
        _id: "67rdca3eeb7f1fgeed471824",
        name: "Михаил Булгаков",
        birthYear: 1891,
        deathYear: 1940
    },
    tolstoy: {
        _id: "67rdca3eeb7f2fgeed471825",
        name: "Лев Толстой",
        birthYear: 1828,
        deathYear: 1910
    },
    remarque: {
        _id: "67rdca3eeb7f3fgeed471826",
        name: "Эрих Мария Ремарк",
        birthYear: 1898,
        deathYear: 1970
    },
    rodari: {
        _id: "67rdca3eeb7f4fgeed471818",
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
        _id: "67rdca3eeb7f7fgeed471820",
        name: "Антуан де Сент-Экзюпери",
        birthYear: 1900,
        deathYear: 1944
    },
    dumas: {
        _id: "67rdca3eeb7f8fgeed471821",
        name: "Александр Дюма",
        birthYear: 1802,
        deathYear: 1870
    },
    zafon: {
        _id: "67rdca3eeb7f9fgeed471822",
        name: "Карлос Руис Сафон",
        birthYear: 1964,
        deathYear: null
    },
    lebon: {
        _id: "67rdca3eeb7f6fgeed571823",
        name: "Гюстав Лебон",
        birthYear: 1841,
        deathYear: 1931
    },
    glukhovsky: {
        _id: "67rdca3eeb7f6fgeed671824",
        name: "Дмитрий Глуховский",
        birthYear: 1979,
        deathYear: null
    }
};
const fetchAllAuthors = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(authors), 2000);
    });
};

export default {
    fetchAllAuthors
};
