import React from "react";
import PropTypes from "prop-types";
import Bookmark from "./bookmark";
import Badge from "./badge";

const Book = ({
    index,
    _id,
    title,
    genre,
    author,
    publicationYear,
    rating,
    price,
    onToggleBookmark,
    status,
    ...rest
}) => {
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{title}</td>
            <td>
                <Badge {...genre} />
            </td>
            <td>{author.name}</td>
            <td>{publicationYear}</td>
            <td>{rating}</td>
            <td>{price}</td>
            <td className="text-center">
                <Bookmark
                    onClick={() => onToggleBookmark(_id)}
                    status={status}
                />
            </td>
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
    onToggleBookmark: PropTypes.func,
    status: PropTypes.bool,
    rest: PropTypes.shape({
        onClick: PropTypes.func
    })
};

export default Book;
