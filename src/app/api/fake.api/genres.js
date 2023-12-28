export const genres = {
    fantasy: {
        _id: "60rdca3eeb7f6fgeed471811",
        name: "Фэнтези",
        color: "primary"
    },
    horror: {
        _id: "61rdca3eeb7f6fgeed471812",
        name: "Ужасы",
        color: "danger"
    },
    romance: {
        _id: "62rdca3eeb7f6fgeed471813",
        name: "Романтика",
        color: "success"
    },
    mystery: {
        _id: "63rdca3eeb7f6fgeed471814",
        name: "Мистика",
        color: "warning"
    },
    fiction: {
        _id: "64rdca3eeb7f6fgeed471815",
        name: "Художественная литература",
        color: "secondary"
    },
    history: {
        _id: "65rdca3eeb7f6fgeed471816",
        name: "Исторический роман",
        color: "info"
    },
    thriller: {
        _id: "66rdca3eeb7f6fgeed471817",
        name: "Триллер",
        color: "dark"
    },
    science: {
        _id: "67rdca5eeb7f6fgeed471816",
        name: "Научная литература",
        color: "info"
    },
    adventure: {
        _id: "68rdca3eeb7f6fgeed471817",
        name: "Приключения",
        color: "success"
    }
};
const fetchAllGenres = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(genres), 2000);
    });
};

export default {
    fetchAllGenres
};
