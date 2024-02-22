import apiMethods from "../apiMethods";

export const genres = {
    adventure: {
        _id: "57piwe2gbc7v3uovns491259",
        name: "Приключения",
        color: "success"
    },
    fantasy: {
        _id: "07pwsw5ekc9o7klxtl289521",
        name: "Фэнтези",
        color: "primary"
    },
    fiction: {
        _id: "55wkwa7bhp7i6veomt998866",
        name: "Художественная литература",
        color: "secondary"
    },
    history: {
        _id: "60dwwj1zcf9v7sbifs198209",
        name: "Исторический роман",
        color: "info"
    },
    horror: {
        _id: "12duyo5ush3p4xvcmf276403",
        name: "Ужасы",
        color: "danger"
    },
    mystery: {
        _id: "06fkky1jgq0y6ipaws194991",
        name: "Мистика",
        color: "warning"
    },
    romance: {
        _id: "53hduy0zin2j1lfpqe211908",
        name: "Романтика",
        color: "success"
    },
    science: {
        _id: "83wnks3orf1j7cgdti200234",
        name: "Научная литература",
        color: "info"
    },
    thriller: {
        _id: "54pete4gjn4q2blpln177669",
        name: "Триллер",
        color: "dark"
    }
};
const fetchAllGenres = () => apiMethods.getAllData(genres);
const getGenreById = (genreId) => apiMethods.getDataById(genres, genreId);

export default {
    fetchAllGenres,
    getGenreById
};
