import React, { useEffect, useState } from "react";
import Pagination from "../../common/pagination";
import TotalStatus from "../../ui/totalStatus";
import { paginate } from "../../../utils/paginate";
import Dropdown from "../../ui/dropdown";
import BooksTable from "../../ui/booksTable";
import _ from "lodash";
import ProgressBar from "../../common/progress-bar";
import SearchField from "../../common/form/searchField";
import PropTypes from "prop-types";
import api from "../../../api";

const BooksListPage = ({ books, genres, authors, onToggleBookmark }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilter, setSelectedFilter] = useState("");

    const [menuVisibility, setMenuVisibility] = useState({});
    const [filterValue, setFilterValue] = useState({});
    const [sortBy, setSortBy] = useState({ path: "title", order: "asc" });

    const [searchQuery, setSearchQuery] = useState("");

    const handleRent = (userId, bookId, rentalPeriod) => {
        const currentDate = new Date();

        // Вычисление даты возврата на основе выбранного периода аренды
        const returnDate = new Date(currentDate);
        switch (rentalPeriod) {
            case "week":
                returnDate.setDate(returnDate.getDate() + 7);
                break;
            case "twoWeeks":
                returnDate.setDate(returnDate.getDate() + 14);
                break;
            case "month":
                returnDate.setMonth(returnDate.getMonth() + 1);
                break;
            default:
                break;
        }

        // Обновление коллекции арендованных книг пользователя через ваш fake-api
        api.rentedBooks
            .addRentedBook(userId, {
                bookId,
                rentalPeriod,
                rentalDate: currentDate.toISOString().split("T")[0],
                returnDate: returnDate.toISOString().split("T")[0]
            })
            .then((message) => {
                console.log(message);
                // Здесь можно добавить логику для обновления интерфейса или состояния при успешной аренде книги
            })
            .catch((error) => {
                console.error("Ошибка при аренде книги:", error);
            });
    };

    const PAGE_SIZE = 8;

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    const handleSelect = (propEvent) => {
        setSelectedFilter(propEvent);
        setMenuVisibility((prevState) => {
            return { [propEvent]: !prevState[propEvent] };
        });
    };
    const handleFilter = (listItem, propKey) => {
        setFilterValue({
            listItem,
            propKey
        });
        setSearchQuery("");
    };
    const handleClearFilter = () => setFilterValue({});
    const handleSort = (sortConfig) => {
        setSortBy(sortConfig);
    };

    const handleChange = ({ target }) => {
        const { value } = target;
        setSearchQuery(value);
        setFilterValue({});
    };

    useEffect(() => {
        const handleOutsideClickMenu = ({ target }) => {
            if (!target.closest(".dropdown")) {
                setMenuVisibility({});
            }
        };
        document.addEventListener("click", handleOutsideClickMenu);
        return () =>
            document.removeEventListener("click", handleOutsideClickMenu);
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [filterValue, searchQuery]);

    if (!_.isEmpty(books) && !_.isEmpty(genres) && !_.isEmpty(authors)) {
        const filteredBooks = searchQuery.trim()
            ? books.filter((book) => {
                  const { title, author: authorId } = book;
                  const { name } = authors.find(
                      (author) => author._id === authorId
                  );
                  return `${title} ${name}`
                      .toLowerCase()
                      .includes(searchQuery.trim().toLowerCase());
              })
            : !_.isEmpty(filterValue)
            ? books.filter((book) => {
                  const { listItem, propKey } = filterValue;
                  return listItem[propKey]
                      ? listItem[propKey] === book[propKey]
                      : listItem._id === book[propKey];
              })
            : books;

        const count = filteredBooks.length;

        function sortingWithSearchValue(
            collection,
            path,
            order,
            genres,
            authors
        ) {
            return collection.sort((a, b) => {
                const valueA = getValue(a, path, genres, authors);
                const valueB = getValue(b, path, genres, authors);

                if (valueA < valueB) {
                    return order === "asc" ? -1 : 1;
                }
                if (valueA > valueB) {
                    return order === "asc" ? 1 : -1;
                }
                return 0;
            });
        }

        function getValue(obj, path, genres, authors) {
            if (path === "genre") {
                return genres.find((genre) => genre._id === obj.genre).name;
            } else if (path === "author") {
                return authors.find((author) => author._id === obj.author).name;
            } else {
                return obj[path];
            }
        }

        const sortedBooks = sortingWithSearchValue(
            filteredBooks,
            sortBy.path,
            sortBy.order,
            genres,
            authors
        );
        const booksSlice = paginate(sortedBooks, PAGE_SIZE, currentPage);
        const pagesCount = Math.ceil(count / PAGE_SIZE);
        const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

        if (currentPage > pagesCount) {
            setCurrentPage(pagesCount);
        }

        return (
            <div className="custom-container bg-dark">
                <div className="d-flex justify-content-center">
                    <div className="col-11">
                        <div className="vh-100">
                            <div className=" d-flex justify-content-end">
                                <div className="mt-3 col-6">
                                    <SearchField
                                        value={searchQuery}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <TotalStatus
                                length={count}
                                favorites={
                                    filteredBooks.filter(
                                        (book) => book.status === true
                                    ).length
                                }
                            />
                            <Dropdown
                                {...{ books, genres, authors }}
                                selectedFilter={selectedFilter}
                                menuVisibility={menuVisibility}
                                filterValue={filterValue}
                                onSelect={handleSelect}
                                onFilter={handleFilter}
                                onClearFilter={handleClearFilter}
                            />
                            {count > 0 && (
                                <BooksTable
                                    {...{ genres, authors }}
                                    books={booksSlice}
                                    selectedSort={sortBy}
                                    currentPage={currentPage}
                                    pageSize={PAGE_SIZE}
                                    onRent={handleRent}
                                    onSort={handleSort}
                                    onToggleBookmark={onToggleBookmark}
                                />
                            )}
                            {pagesCount > 1 && (
                                <div className="d-flex justify-content-center">
                                    <Pagination
                                        onChangePage={handleChangePage}
                                        pages={pages}
                                        currentPage={currentPage}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return <ProgressBar />;
};

BooksListPage.propTypes = {
    books: PropTypes.array,
    genres: PropTypes.array,
    authors: PropTypes.array,
    onToggleBookmark: PropTypes.func,
    onDelete: PropTypes.func
};
export default BooksListPage;
