import React, { useEffect, useState } from "react";

const ModernCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(0);

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
    const totalSlides = carouselContent.length;

    console.log("activeIndex:", activeIndex);
    console.log("previousIndex:", previousIndex);
    const styles = {
        container_1: {
            height: "calc(100vh - 125px)",
            position: "relative",
            overflow: "hidden"
        },
        container_img: {
            margin: "0 auto",
            objectFit: "contain",
            height: "100%"
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

    useEffect(() => {
        const carouselItems = document.querySelectorAll(".carousel-item");
        carouselItems[activeIndex].classList.add("active");
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (activeIndex !== previousIndex) {
            const carouselItems = document.querySelectorAll(".carousel-item");
            carouselItems.forEach((item, index) => {
                if (index === activeIndex) {
                    item.classList.add(
                        "carousel-item-next",
                        "carousel-item-start"
                    );
                    setTimeout(() => {
                        item.classList.remove(
                            "carousel-item-next",
                            "carousel-item-start"
                        );
                        item.classList.add("active");
                    }, 1000);
                }
                if (index === previousIndex) {
                    console.log("activeIndex_use:", activeIndex);
                    console.log("previousIndex_use:", previousIndex);
                    item.classList.add("carousel-item-start");
                    setTimeout(() => {
                        item.classList.remove("active", "carousel-item-start");
                    }, 1000);
                }
            });
            setPreviousIndex(activeIndex);
        }
    }, [activeIndex]);

    const handleNext = () => {
        setActiveIndex(activeIndex === totalSlides - 1 ? 0 : activeIndex + 1);
    };

    const handlePrev = () => {
        setActiveIndex(activeIndex === 0 ? totalSlides - 1 : activeIndex - 1);
    };

    console.log("activeIndex_down:", activeIndex);
    console.log("previousIndex_down:", previousIndex);

    return (
        <div id="myCarousel" className="carousel slide my-3 w-100">
            <div className="carousel-inner">
                {carouselContent.map((item) => (
                    <div
                        key={item._id}
                        className="carousel-item"
                        style={styles.container_1}
                    >
                        <div
                            className="border"
                            style={{
                                ...styles.blurredBackground,
                                backgroundImage: `url('${item.img}')`
                            }}
                        ></div>
                        <img
                            src={item.img}
                            className="d-block w-100"
                            alt={item.title}
                            style={styles.container_img}
                        />
                    </div>
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                onClick={handlePrev}
            >
                <span
                    className="carousel-control-prev-icon border border-2 bg-dark rounded-circle"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                onClick={handleNext}
            >
                <span
                    className="carousel-control-next-icon border border-2 bg-dark rounded-circle"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default ModernCarousel;
