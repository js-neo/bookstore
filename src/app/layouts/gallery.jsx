import React, { useEffect, useState } from "react";
import api from "../api";
import Modal from "../components/modal";
import _ from "lodash";
import ProgressBar from "../components/progress-bar";

const Gallery = () => {
    const [books, setBooks] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState("");
    useEffect(() => {
        api.books.fetchAllBooks().then((data) => setBooks(data));
    }, []);

    const handleOpenModal = (src) => {
        setModalImageSrc(src);
        setModalOpen(true);
    };

    const handleCloseModal = () => setModalOpen(false);
    return (
        <>
            {_.isEmpty(books) ? (
                <ProgressBar />
            ) : (
                <div className="custom_album album py-5 mt-2">
                    <div className="container">
                        <div
                            className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
                            id="custom_box"
                        >
                            {books.map((item) => (
                                <div key={item._id} className="col">
                                    <div className="card shadow-sm">
                                        <img
                                            src={item.img}
                                            width="100%"
                                            height="100%"
                                            alt="image"
                                            className="modal-trigger"
                                        />
                                        <div className="card-body">
                                            {item.title ? (
                                                <div className="card-text text-center mb-2">
                                                    {item.title}
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                            <div className="d-flex justify-content-center align-items-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-primary w-75"
                                                    onClick={() =>
                                                        handleOpenModal(
                                                            item.img
                                                        )
                                                    }
                                                >
                                                    Просмотр
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {modalOpen && (
                <Modal
                    isOpen={modalOpen}
                    src={modalImageSrc}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
};

export default Gallery;
