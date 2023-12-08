import _ from "lodash";

export const paginate = (books, pageSize, pageNumber) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(books).slice(startIndex).take(pageSize).value();
};
