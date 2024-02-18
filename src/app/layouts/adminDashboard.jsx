import React from "react";

const AdminDashboard = () => {
    return (
        <div className="custom-container d-flex justify-content-center">
            <div className="col-11">
                <div
                    className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
                    style={{ width: "280px" }}
                >
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <a
                                href="#"
                                className="nav-link active"
                                aria-current="page"
                            >
                                <i className="bi bi-house-door"></i>
                                <span className="ms-2">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <i className="bi bi-speedometer2"></i>
                                <span className="ms-2">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <i className="bi bi-table"></i>
                                <span className="ms-2">Orders</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <i className="bi bi-grid"></i>
                                <span className="ms-2">Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <i className="bi bi-person-circle"></i>
                                <span className="ms-2">Customers</span>
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown">
                        <a
                            href="#"
                            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                            id="dropdownUser1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="https://github.com/mdo.png"
                                alt=""
                                width="32"
                                height="32"
                                className="rounded-circle me-2"
                            />
                            <strong>mdo</strong>
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-dark text-small shadow"
                            aria-labelledby="dropdownUser1"
                        >
                            <li>
                                <a className="dropdown-item" href="#">
                                    New project...
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Profile
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
