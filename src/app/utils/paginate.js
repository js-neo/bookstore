import _ from "lodash";

export const paginate = (books, pageSize, pageNumber) => {
    console.log("books:", books);
    const startIndex = (pageNumber - 1) * pageSize;
    return _(books).slice(startIndex).take(pageSize).value();
};
