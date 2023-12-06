import React from "react";
import PropTypes from "prop-types";

const TotalStatus = ({ length, favorites }) => {
    const editorWords = (num) => {
        const penultimateDigit = Number(num.toString().slice(-2, -1)),
            lastOneDigit = Number(num.toString().slice(-1)),
            exceptions = [2, 3, 4];
        if (exceptions.includes(lastOneDigit) && penultimateDigit !== 1) {
            return "и";
        }

        if (lastOneDigit === 1 && penultimateDigit !== 1) {
            return "а";
        }

        return "";
    };
    editorWords(length);
    return (
        <div>
            {length > 0 && (
                <div className="badge bg-primary border border-light border-2 text-start text-light my-4">
                    <h4>{`Всего в коллекции ${length} книг${editorWords(
                        length
                    )}`}</h4>
                    {favorites > 0 && (
                        <h4>{`Всего в избранном ${favorites} книг${editorWords(
                            favorites
                        )}`}</h4>
                    )}
                </div>
            )}
        </div>
    );
};

TotalStatus.propTypes = {
    length: PropTypes.number,
    favorites: PropTypes.number
};

export default TotalStatus;
