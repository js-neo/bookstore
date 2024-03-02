import apiMethods from "../apiMethods";

const users = [
    {
        _id: "66kzei8bbv9m0fylgv982463",
        username: "user1",
        email: "user1@example.com",
        password: "userpassword",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=c2ezq",
        role: "user"
    },
    {
        _id: "91hpop8fgl7z8fiqcm736108",
        username: "admin",
        email: "admin1@example.com",
        password: "adminpassword",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=e0ng6",
        role: "admin"
    }
];

const fetchAllUsers = () => apiMethods.getAllData(users);
const getUserById = (userId) => apiMethods.getDataById(users, userId);
const createNewUser = (newUser) => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    const usersList = storedUsers ?? users;
    return apiMethods.createNewData(usersList, newUser);
};

export default {
    fetchAllUsers,
    getUserById,
    createNewUser
};
