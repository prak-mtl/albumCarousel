import React, { Component } from 'react';
import Axios from "axios";
import Carousel from "../../Carousel/Carousel";
import { LazyImageProvider } from "../../LazyImage/LazyImageContext";
import LazyImage from "../../LazyImage/LazyImage"; // Import LazyImage

export default class AlbumSlider extends Component {
    state = {
        imagesArr: []
    }
    componentDidMount() {
        Axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${this.props.id}`).then(
            response => {
                this.setState({ imagesArr: response.data });
            }
        );
    }
    render() {
        const { imagesArr } = this.state;
        if (!imagesArr.length)
            return null;
        return (
            <LazyImageProvider>
                <Carousel>
                    {imagesArr.map((image, index) => (
                        <>
                            <LazyImage aspectRatio={[10, 7]} src={image.url} key={index} />
                            <div className="imageTitle">{image.title}</div>
                            <div className="imageId">id: {image.id}</div>
                        </>
                    ))}
                </Carousel>
            </LazyImageProvider>
        )
    }
}
