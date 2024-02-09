import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ isOpen, src, onClose }) => {
    console.log("SRC: ", src);

    useEffect(() => {
        const handleOutsideClose = ({ target }) => {
            if (target.id === "modal") {
                onClose();
            }
        };

        isOpen
            ? window.addEventListener("click", handleOutsideClose)
            : window.removeEventListener("click", handleOutsideClose);

        return () => window.removeEventListener("click", handleOutsideClose);
    }, [isOpen]);

    return (
        <div className="custom_modal" id="modal">
            <span className="close" onClick={onClose}>
                &times;
            </span>
            <img src={src} alt="Large Image" className="custom_modal-content" />
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool,
    src: PropTypes.string,
    onClose: PropTypes.func
};

export default Modal;
