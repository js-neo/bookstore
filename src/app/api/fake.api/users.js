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

const dataList = (data, storedKey) => {
    try {
        const storedData = localStorage.getItem(storedKey);
        return storedData ? JSON.parse(storedData) : data;
    } catch (error) {
        console.error("Error parsing JSON data:", error);
        return data;
    }
};

const usersList = dataList(users, "users");

const fetchAllUsers = () => apiMethods.getAllData(usersList);
const getUserById = (userId) => apiMethods.getDataById(usersList, userId);
const createNewUser = (newUser) => apiMethods.createNewData(usersList, newUser);

export default {
    fetchAllUsers,
    getUserById,
    createNewUser
};
