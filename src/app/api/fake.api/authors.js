import apiMethods from "../apiMethods";

export const authors = {
    austen: {
        _id: "17zvqy2ebi1a1eljcp751733",
        name: "Джейн Остин",
        birthYear: 1775,
        deathYear: 1817
    },
    brown: {
        _id: "78trvf3hhk4d5elrhd331159",
        name: "Дэн Браун",
        birthYear: 1964,
        deathYear: null
    },
    bulgakov: {
        _id: "89eeqm6zli5f0kvqvu452501",
        name: "Михаил Булгаков",
        birthYear: 1891,
        deathYear: 1940
    },
    doyle: {
        _id: "31mlrl3pwn0y0izepw848596",
        name: "Артур Конан Дойл",
        birthYear: 1859,
        deathYear: 1930
    },
    dumas: {
        _id: "09woah6xnk6e8jcpap115825",
        name: "Александр Дюма",
        birthYear: 1802,
        deathYear: 1870
    },
    freeman: {
        _id: "46ybzx6cat6q5zybrl915717",
        name: "Эрик Фримэн",
        birthYear: null,
        deathYear: null
    },
    glukhovsky: {
        _id: "59kkuh1pgt4t9rlbcv393847",
        name: "Дмитрий Глуховский",
        birthYear: 1979,
        deathYear: null
    },
    king: {
        _id: "72dldm8dqc9c5dapkz972971",
        name: "Стивен Кинг",
        birthYear: 1947,
        deathYear: null
    },
    krzhizhanovsky: {
        _id: "33dwva5bdz9a5mnrku672709",
        name: "Сигизмунд Кржижановский",
        birthYear: 1887,
        deathYear: 1950
    },
    lebon: {
        _id: "43anxi1pxu1l6ultfc060113",
        name: "Гюстав Лебон",
        birthYear: 1841,
        deathYear: 1931
    },
    martin: {
        _id: "20swsg1zqc9z2yrqcq138846",
        name: "Джордж Мартин",
        birthYear: 1948,
        deathYear: null
    },
    orwell: {
        _id: "23nhfe5tko7u3sejqc092305",
        name: "Джордж Оруэлл",
        birthYear: 1903,
        deathYear: 1950
    },
    remarque: {
        _id: "54lgim0xlb4u6xoihb728024",
        name: "Эрих Мария Ремарк",
        birthYear: 1898,
        deathYear: 1970
    },
    rodari: {
        _id: "95ndwp6ujz4m5khkpa392182",
        name: "Джани Родари",
        birthYear: 1920,
        deathYear: 1980
    },
    rowling: {
        _id: "50nnzf7zpd0n7mzcxi542827",
        name: "Джоан Роулинг",
        birthYear: 1965,
        deathYear: null
    },
    saintExupery: {
        _id: "81isnq2nhb7l4zihmq635336",
        name: "Антуан де Сент-Экзюпери",
        birthYear: 1900,
        deathYear: 1944
    },
    simpson: {
        _id: "51ywxq0ctk5z1oxugn518024",
        name: "Кайл Симпсон",
        birthYear: null,
        deathYear: null
    },
    shakespeare: {
        _id: "13ecje8kdt1p6gwpsd586763",
        name: "Уильям Шекспир",
        birthYear: 1564,
        deathYear: 1616
    },
    tolkien: {
        _id: "11xpqh1ddu4p4kvpxw433231",
        name: "Дж.Р.Р. Толкин",
        birthYear: 1892,
        deathYear: 1973
    },
    tolstoy: {
        _id: "58kpwk1ixp7k5jvbgo457733",
        name: "Лев Толстой",
        birthYear: 1828,
        deathYear: 1910
    },
    zafon: {
        _id: "32zfpx2sid7b0gliah780352",
        name: "Карлос Руис Сафон",
        birthYear: 1964,
        deathYear: null
    }
};
const fetchAllAuthors = () => apiMethods.getAllData(authors);
const getAuthorById = (authorId) => apiMethods.getDataById(authors, authorId);
export default {
    fetchAllAuthors,
    getAuthorById
};
