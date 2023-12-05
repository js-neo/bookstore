import React from "react";
import { sortingCriteria } from "../constants/sortingCriteria";
import api from "../api";
import PropTypes from "prop-types";

const Dropdown = ({ selectedOption, menuVisibility, onSelect }) => {
    const toggleShow = (eventKey) => {
        return menuVisibility[eventKey] && selectedOption === eventKey
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
                            className={`btn btn-primary dropdown-toggle mx-2 border border-light ${toggleShow(
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
                        <ul className={`dropdown-menu ${toggleShow(eventKey)}`}>
                            {Object.values(
                                api[category][
                                    `fetchAll${
                                        category.slice(0, 1).toUpperCase() +
                                        category.slice(1)
                                    }`
                                ]()
                            ).map((item, i) => {
                                return (
                                    <li key={i}>
                                        <a className="dropdown-item" href="#">
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
    selectedOption: PropTypes.string,
    menuVisibility: PropTypes.object,
    onSelect: PropTypes.func
};

export default Dropdown;
