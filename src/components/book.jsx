import React from "react";
import PropTypes from "prop-types";

const Book = ({
    index,
    _id,
    title,
    genre,
    author,
    publicationYear,
    rating,
    price,
    ...rest
}) => {
    console.log("rest:", rest);
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{title}</td>
            <td>{genre.name}</td>
            <td>{author.name}</td>
            <td>{publicationYear}</td>
            <td>{rating}</td>
            <td>{price}</td>
            <td>
                <button className="btn btn-sm btn-danger" {...rest}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

Book.propTypes = {
    index: PropTypes.number,
    _id: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.object,
    author: PropTypes.object,
    publicationYear: PropTypes.number,
    rating: PropTypes.number,
    price: PropTypes.number,
    rest: PropTypes.shape({
        onClick: PropTypes.func
    })
};

export default Book;
