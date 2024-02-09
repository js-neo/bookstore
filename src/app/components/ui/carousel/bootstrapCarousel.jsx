import React from "react";

const BootstrapCarousel = () => {
    const carouselContent = [
        {
            _id: "67rdca3eeb7f6fgeed471819",
            title: "Приключения Шерлока Холмса",
            img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_adventures_of_sherlock_holmes.jpg?raw=true"
        },
        {
            _id: "67rdca3eeb7f6fgeed471830",
            title: "Граф Монте-Кристо",
            img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_count_of_monte_cristo.jpg?raw=true"
        },
        {
            _id: "67rdca3eeb7f6fgeed471831",
            title: "Маленький принц",
            img: "https://github.com/Yupiter78/bookstore/blob/main/src/app/assets/the_little_prince.jpg?raw=true"
        }
    ];

    const styles = {
        container_1: {
            height: "calc(100vh - 125px)",
            position: "relative",
            overflow: "hidden"
        },
        container_img: {
            margin: "0 auto",
            objectFit: "contain",
            height: "100%",
            boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.5)"
        },
        blurredBackground: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            filter: "blur(15px)",
            backgroundRepeat: "no-repeat",
            zIndex: -1,
            backgroundSize: "100%",
            backgroundPosition: "center"
        }
    };

    return (
        <div
            id="myCarousel"
            className="carousel slide my-3 w-100"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                {carouselContent.map((item, index) => (
                    <div
                        key={item._id}
                        className={`carousel-item ${
                            index === 0 ? "active" : ""
                        }`}
                        style={styles.container_1}
                    >
                        <div
                            style={{
                                ...styles.blurredBackground,
                                backgroundImage: `url('${item.img}')`
                            }}
                        ></div>
                        <img
                            src={item.img}
                            className="d-block"
                            alt={item.title}
                            style={styles.container_img}
                        />
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
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

export default BootstrapCarousel;
