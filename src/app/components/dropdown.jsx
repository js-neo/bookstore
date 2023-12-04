import React from "react";
import { sortingCriteria } from "../constants/sortingCriteria";
import PropTypes from "prop-types";

const Dropdown = ({ selectedOption, onSelect }) => {
    console.log("selectedOption:", selectedOption);
    const toggleShow = (eventKey) => {
        return selectedOption === eventKey ? "show" : "";
    };

    return (
        <div className="d-flex">
            <span className="text-light">Сортировка по: </span>
            {sortingCriteria.map(({ _id, eventKey, criteria }) => (
                <div key={_id} className="dropdown">
                    <button
                        type="button"
                        className={`btn btn-primary dropdown-toggle mx-2 border border-light ${toggleShow(
                            eventKey
                        )}`}
                        data-bs-toggle="dropdown"
                        aria-expanded={
                            selectedOption === eventKey ? "true" : "false"
                        }
                        onClick={() => onSelect(eventKey)}
                    >
                        {criteria}
                    </button>
                    <ul className={`dropdown-menu ${toggleShow(eventKey)}`}>
                        <li>
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Separated link
                            </a>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
};

Dropdown.propTypes = {
    selectedOption: PropTypes.string,
    onSelect: PropTypes.func
};

export default Dropdown;
