import React, { useEffect } from "react";
import { withLazyImageContext } from "./LazyImageContext"; // Grab the context connector
import "./lazyImage.css";

const LazyImage = ({ src, aspectRatio, lazyLoad }) => {
    // Calculate the aspect ratio
    useEffect(() => {
        if (lazyLoad) lazyLoad.update();
    }, [src, aspectRatio, lazyLoad]);

    const paddingTop = `${(aspectRatio[1] / aspectRatio[0]) * 100}%`;

    // Set the placeholder size on our wrapper div
    return (
        <div className="lazyImage" style={{ paddingTop }}>
            <img className="lazyImage__img" data-src={src} />
        </div>
    );
};

export default withLazyImageContext(LazyImage);