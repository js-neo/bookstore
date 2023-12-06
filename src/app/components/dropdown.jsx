import React from "react";
import { sortingCriteria } from "../constants/sortingCriteria";
import api from "../api";
import PropTypes from "prop-types";

const Dropdown = ({ currentFilter, menuVisibility, onSelect, onFilter }) => {
    const toggleShow = (eventKey) => {
        return menuVisibility[eventKey] && currentFilter === eventKey
            ? "show"
            : "";
    };
    return (
        <div className="d-flex">
            <span className="text-light">Сортировка по: </span>
            {sortingCriteria.map(
                ({ _id, eventKey, criteria, category, filterKey }) => (
                    <div key={_id} className="dropdown">
                        <button
                            type="button"
                            id={_id}
                            className={`btn btn-primary dropdown-toggle mx-2 border border-light border-2 ${toggleShow(
                                eventKey
                            )}`}
                            data-bs-toggle="dropdown"
                            aria-expanded={
                                menuVisibility[eventKey] === eventKey
                                    ? "true"
                                    : "false"
                            }
                            onClick={() => onSelect(eventKey)}
                        >
                            {criteria}
                        </button>
                        <ul
                            className={`dropdown-menu dropdown-menu-dark ${toggleShow(
                                eventKey
                            )}`}
                            aria-labelledby={_id}
                            style={{
                                maxHeight: "200px",
                                overflowY: "auto",
                                overflowX: "hidden"
                            }}
                        >
                            {Object.values(
                                api[category][
                                    `fetchAll${
                                        category.slice(0, 1).toUpperCase() +
                                        category.slice(1)
                                    }`
                                ]()
                            )
                                .sort((a, b) =>
                                    a[filterKey] > b[filterKey] ? 1 : -1
                                )
                                .map((item) => {
                                    return (
                                        <li
                                            key={item._id}
                                            onClick={() =>
                                                onFilter(item, eventKey)
                                            }
                                        >
                                            <a
                                                className={`dropdown-item`}
                                                href="#"
                                            >
                                                {item[filterKey]}
                                            </a>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                )
            )}
        </div>
    );
};

Dropdown.propTypes = {
    currentFilter: PropTypes.string,
    menuVisibility: PropTypes.object,
    onSelect: PropTypes.func,
    onFilter: PropTypes.func
};

export default Dropdown;
