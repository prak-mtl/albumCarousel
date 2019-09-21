import React, { Component } from 'react';
import Carousel from "../../Carousel/Carousel";
import { LazyImageProvider } from "../../LazyImage/LazyImageContext";
import LazyImage from "../../LazyImage/LazyImage"; // Import LazyImage
import data from '../../LazyImage/data.json';

export default class Slider extends Component {
    render() {
        const { images } = this.props;
        if (images == []) return <div>Loading...</div>;
        else
            return (
                <LazyImageProvider>
                    <Carousel>
                        {data.map((image, index) => (
                            <>
                                <LazyImage aspectRatio={[10, 7]} src={image.Url} key={index} />
                                <div className="imageTitle">{image.Title}</div>
                                <div className="imageId">id: {image.Id}</div>
                            </>
                        ))}
                    </Carousel>
                </LazyImageProvider>
            )
    }
}
