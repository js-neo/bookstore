export const genres = {
        fantasy: {
            _id: "67rdca3eeb7f6fgeed471811",
            name: "Фэнтези",
            color: "primary"
        },
        horror: {
            _id: "67rdca3eeb7f6fgeed471812",
            name: "Ужасы",
            color: "danger"
        },
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
    },
    fetchAllGenres = () => {
        return genres;
    };

export default {
    fetchAllGenres
};
