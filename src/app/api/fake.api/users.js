import apiMethods from "../apiMethods";

const users = [
    {
        _id: "66kzei8bbv9m0fylgv982463",
        username: "user1",
        email: "user1@example.com",
        password: "userpassword",
        role: "user"
    },
    {
        _id: "91hpop8fgl7z8fiqcm736108",
        username: "admin",
        email: "admin1@example.com",
        password: "adminpassword",
        role: "admin"
    }
];

const fetchAllUsers = () => apiMethods.getAllData(users);
const getUserById = (userId) => apiMethods.getDataById(users, userId);
const createNewUser = (newUser) => apiMethods.createNewData(users, newUser);

export default {
    fetchAllUsers,
    getUserById,
    createNewUser
};
