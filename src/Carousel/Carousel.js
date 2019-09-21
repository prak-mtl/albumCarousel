import React, { useState, useEffect, useCallback } from "react";
import EmblaCarouselReact from "embla-carousel-react";
import { DotBtn, PrevBtn, NextBtn } from "./CarouselButtons";
import "./carousel.css";

const Carousel = ({ children }) => {
    const [carousel, initCarousel] = useState(null);
    // Add selectedIndex state containing the selected index
    const [selectedIndex, setSelectedIndex] = useState(0);
    // Add scrollSnaps state containing all snap points
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollTo = useCallback(index => carousel.scrollTo(index), [carousel]);
    // Add scrollPrev
    const scrollPrev = useCallback(() => carousel.scrollPrev(), [carousel]);
    // Add scrollNext
    const scrollNext = useCallback(() => carousel.scrollNext(), [carousel]);
    // Add prev button enabled state
    const [prevBtnEnabled, togglePrevBtnEnabled] = useState(false);
    // Add next button enabled state 
    const [nextBtnEnabled, toggleNextBtnEnabled] = useState(false);

    useEffect(() => {
        // On every new snap point select, update selectedIndex
        const onSelect = () => {
            setSelectedIndex(carousel.selectedScrollSnap());
            // Toggle buttons enabled/disabled
            togglePrevBtnEnabled(carousel.canScrollPrev());
            toggleNextBtnEnabled(carousel.canScrollNext());
        };

        // When our carousel has mounted:
        if (carousel) {
            // Store snap points provided by the carousel
            setScrollSnaps(carousel.scrollSnapList());
            // Hook our onSelect function to the carousel select event
            carousel.on("select", onSelect);
            // Invoke onSelect
            onSelect();
        }
        // Destroy the carousel component on unmount
        return () => carousel && carousel.destroy();
    }, [carousel]);
    return (
        <div className="carousel">
            <div className="carousel__wrap">
                {/* Grab the carousel API in the emblaRef function prop and assign it to our carousel state  */}
                <EmblaCarouselReact
                    className="carousel__viewport"
                    emblaRef={initCarousel}
                    options={{ loop: false /* Carousel Options */ }}
                    htmlTagName="div"
                >
                    <div className="carousel__container">
                        {children && children.map((Child, index) => (
                            <div className="carousel__item" key={index}>
                                {Child}
                            </div>
                        ))}
                    </div>
                </EmblaCarouselReact>
                <PrevBtn onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextBtn onClick={scrollNext} enabled={nextBtnEnabled} />
            </div>
            <div className="carousel__dots">
                {scrollSnaps && scrollSnaps.map((snap, index) => (
                    <DotBtn
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;