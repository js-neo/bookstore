import React, { useEffect, useState, useRef } from "react";
import sherlockHolmesImg from "../../../assets/the_adventures_of_sherlock_holmes.jpg";
import monteCristoImg from "../../../assets/the_count_of_monte_cristo.jpg";
import littlePrinceImg from "../../../assets/the_little_prince.jpg";

const ModernCarousel2 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const previousIndexRef = useRef(0);

    const carouselContent = [
        {
            _id: "67rdca3eeb7f6fgeed471819",
            title: "Приключения Шерлока Холмса",
            img: sherlockHolmesImg
        },
        {
            _id: "67rdca3eeb7f6fgeed471830",
            title: "Граф Монте-Кристо",
            img: monteCristoImg
        },
        {
            _id: "67rdca3eeb7f6fgeed471831",
            title: "Маленький принц",
            img: littlePrinceImg
        }
    ];

    const totalSlides = carouselContent.length;
    const carouselItemsRef = useRef([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    useEffect(() => {
        if (activeIndex !== previousIndexRef.current) {
            const currentCarouselItem = carouselItemsRef.current[activeIndex];
            const previousCarouselItem =
                carouselItemsRef.current[previousIndexRef.current];
            console.log("previousCarouselItem:", previousCarouselItem);

            currentCarouselItem.classList.add(
                "carousel-item-next",
                "carousel-item-start"
            );
            previousCarouselItem.classList.add("carousel-item-start");

            setTimeout(() => {
                currentCarouselItem.classList.remove(
                    "carousel-item-next",
                    "carousel-item-start"
                );
                currentCarouselItem.classList.add("active");
                previousCarouselItem.classList.remove(
                    "active",
                    "carousel-item-start"
                );
            }, 1000);
            previousIndexRef.current = activeIndex;
        }
    }, [activeIndex]);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    return (
        <div id="myCarousel" className="carousel slide my-3 w-100">
            <div className="carousel-inner">
                {carouselContent.map((item, index) => (
                    <div
                        key={item._id}
                        ref={(el) => (carouselItemsRef.current[index] = el)}
                        className="carousel-item"
                        style={{
                            height: "calc(100vh - 125px)",
                            position: "relative",
                            overflow: "hidden"
                        }}
                    >
                        <div
                            className="border"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                filter: "blur(15px)",
                                backgroundRepeat: "no-repeat",
                                zIndex: -1,
                                backgroundSize: "100%",
                                backgroundPosition: "center",
                                backgroundImage: `url('${item.img}')`
                            }}
                        ></div>
                        <img
                            src={item.img}
                            className="d-block w-100"
                            alt={item.title}
                            style={{
                                margin: "0 auto",
                                objectFit: "contain",
                                height: "100%"
                            }}
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

export default ModernCarousel2;
