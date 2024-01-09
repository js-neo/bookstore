import React, { useState } from "react";
import { genres } from "../api/fake.api/genres";
import { authors } from "../api/fake.api/authors";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const quantitySlides = 3;
    const carouselContent = [
        {
            _id: "67rdca3eeb7f6fgeed471819",
            slideIndex: 1,
            title: "Приключения Шерлока Холмса",
            img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_adventures_of_sherlock_holmes.jpg?raw=true",
            genre: genres.mystery,
            author: authors.doyle,
            publicationYear: 1892,
            rating: 4.7,
            price: 21.99,
            status: false
        },
        {
            _id: "67rdca3eeb7f6fgeed471830",
            slideIndex: 2,
            title: "Граф Монте-Кристо",
            img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_count_of_monte_cristo.jpg?raw=true",
            genre: genres.adventure,
            author: authors.dumas,
            publicationYear: 1844,
            rating: 4.7,
            price: 21.99,
            status: false
        },
        {
            _id: "67rdca3eeb7f6fgeed471831",
            slideIndex: 3,
            title: "Маленький принц",
            img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_little_prince.jpg?raw=true",
            genre: genres.fiction,
            author: authors.saintExupery,
            publicationYear: 1943,
            rating: 4.8,
            price: 15.99,
            status: false
        }
    ];
    const styles = {
        container_1: {
            height: "calc(100vh - 125px)",
            backgroundImage: "url('images/image_blur_09_09_8.png')",
            backgroundPosition: "center",
            backgroundSize: "cover"
        },
        container_img: {
            margin: "0 auto",
            objectFit: "contain",
            height: "100%"
        },
        container_content: {
            padding: "0 20px"
        }
    };

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex % quantitySlides) + 1);
    };

    const handlePrevSlide = () => {
        setCurrentIndex(
            (prevIndex) =>
                ((prevIndex - 2 + quantitySlides) % quantitySlides) + 1
        );
    };

    return (
        <div
            id="myCarousel"
            className="carousel slide my-3 w-100"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner">
                {carouselContent.map((item) => (
                    <div
                        key={item._id}
                        className={`carousel-item ${
                            item.slideIndex === currentIndex ? "active" : ""
                        }`}
                        style={styles.container_1}
                    >
                        <img
                            src={item.img}
                            className="d-block"
                            alt="..."
                            style={styles.container_img}
                        />
                        <div
                            className="container d-flex align-items-center justify-content-center"
                            style={styles.container_content}
                        >
                            <div className="carousel-caption text-end">
                                <h1>Пример заголовка 1</h1>
                                <p className="opacity-75">
                                    Некоторый контент-заполнитель для первого
                                    слайда карусели.
                                </p>
                                <p>
                                    <a
                                        className="btn btn-lg btn-primary"
                                        href="#"
                                    >
                                        Зарегистрироваться сейчас
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
                onClick={handlePrevSlide}
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
                onClick={handleNextSlide}
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
