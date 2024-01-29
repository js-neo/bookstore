import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const navBarLabel = [
        {
            _id: "9b5d8k3d1e4l2q1g4p1h0j8f",
            label: "Main",
            path: "/"
        },
        {
            _id: "4w3q1i0r5g7j3h7n8d4a5u2m",
            label: "Gallery",
            path: "/gallery"
        },
        {
            _id: "0u7y2f2o3n9d0d8b0w0a2d3b",
            label: "Books",
            path: "/books"
        }
    ];
    const { pathname } = useLocation();
    console.log("pathname: ", pathname);
    return (
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {navBarLabel.map((item) => (
                <li key={item._id}>
                    <Link
                        to={`${item.path}`}
                        className={`nav-link px-2 ${
                            pathname === item.path && "text-light"
                        }`}
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Navbar;

// import { useLocation } from "react-router-dom";
// import { pathToRegexp } from "path-to-regexp";
//
// const Navbar = () => {
//     const navBarLabel = [
//         {
//             _id: "9b5d8k3d1e4l2q1g4p1h0j8f",
//             label: "Main",
//             path: "/"
//         },
//         {
//             _id: "1s2p7i9o5c2j1h4v9z6t5d6x",
//             label: "Login",
//             path: "/login"
//         },
//         {
//             _id: "0u7y2f2o3n9d0d8b0w0a2d3b",
//             label: "Books",
//             path: "/books"
//         }
//     ];
//     const location = useLocation();
//     const isActive = (path) => {
//         const match = pathToRegexp(path).exec(location.pathname);
//         return match ? "text-light" : "";
//     };
//     return (
//         <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
//             {navBarLabel.map((item) => (
//                 <li key={item._id}>
//                     <Link
//                         to={item.path}
//                         className={`nav-link px-2 ${isActive(item.path)}`}
//                     >
//                         {item.label}
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     );
// };
