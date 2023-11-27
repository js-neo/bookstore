import React from "react";
import PropTypes from "prop-types";

const TotalStatus = ({ length }) => {
    const editorWords = (num) => {
        console.log("num:", num);
        console.log(
            "num.toString().slice(-2, 1):",
            num.toString().slice(-2, 1)
        );
        const penultimateDigit = Number(num.toString().slice(-2, -1)),
            lastOneDigit = Number(num.toString().slice(-1)),
            exceptions = [2, 3, 4];
        if (exceptions.includes(lastOneDigit) && penultimateDigit !== 1) {
            return "и";
        }

        console.log(`${penultimateDigit} !== 1:`, penultimateDigit !== 1);

        if (lastOneDigit === 1 && penultimateDigit !== 1) {
            return "а";
        }

        return "";
    };
    editorWords(length);
    return (
        <div className="text-light">{`В коллекции ${length} книг${editorWords(
            length
        )}`}</div>
    );
};

TotalStatus.propTypes = {
    length: PropTypes.number
};

export default TotalStatus;
