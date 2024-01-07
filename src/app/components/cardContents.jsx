import React from "react";
// import Badge from "./badge";
import PropTypes from "prop-types";
import Badge from "./badge";

const CardContents = ({ book }) => {
    return (
        <table className="table table-dark table-striped table-hover m-3">
            <tbody>
                {Object.entries(book).map(([key, value]) => (
                    <tr key={key}>
                        <th>{key}</th>
                        <td>
                            {typeof value === "object" ? (
                                <Badge {...value} />
                            ) : (
                                value
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        // <h2>
        //     <span className="font-monospace">Title: </span>
        //     {`${book.title}`}
        // </h2>
        // <h3>
        //     <span className="font-monospace">Genre: </span>
        //     <Badge {...book.genre} />
        // </h3>
        // <h3>
        //     <span className="font-monospace">Author: </span>
        //     {`${book.author.name}`}
        // </h3>
        // <h3>
        //     <span className="font-monospace">Publication year: </span>
        //     {`${book.publicationYear}`}
        // </h3>
        // <h3>
        //     <span className="font-monospace">Rating: </span>
        //     {`${book.rating}`}
        // </h3>
        // <h3>
        //     <span className="font-monospace">Price: </span>
        //     {`${book.price}`}
        // </h3>
    );
};

CardContents.propTypes = {
    book: PropTypes.object
};

export default CardContents;
