import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../contexts/appContext";
import DataListPage from "../page/dataListPage";

const UserManagement = () => {
    const { users, setUsers } = useApp();
    console.log("users: ", users);
    const handleDelete = (userId) => {
        const newUsers = users.filter((user) => user._id !== userId);
        setUsers(newUsers);
        localStorage.setItem("users", JSON.stringify(newUsers));
    };

    const columns = {
        rowNumber: {
            _id: "42gths3daw1x9gscwl566272",
            name: "#"
        },
        username: {
            _id: "29oice4med6v9liwle494953",
            path: "username",
            name: "Username",
            component: (user) => (
                <Link
                    className="text-decoration-none"
                    to={`/books/${user._id}`}
                >
                    {user.username}
                </Link>
            )
        },
        email: {
            _id: "19hwiy1srb6y4chiso290687",
            path: "email",
            name: "Email"
        },
        role: {
            _id: "18cieb1ssk5s7siybk258557",
            path: "role",
            name: "Role"
        },
        delete: {
            _id: "71lvpb4qfu9h8tbsgh207532",
            name: "Delete",
            component: (book) => (
                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(book._id)}
                >
                    Удалить пользователя
                </button>
            )
        }
    };
    return users ? (
        <DataListPage {...{ books: users, columns }} />
    ) : (
        "Not found"
    );
};

export default UserManagement;
