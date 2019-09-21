import React, { Component } from 'react';
import Axios from "axios";
import Slider from './Slider';

export default class AlbumSlider extends Component {
    state = {
        imagesArr: []
    }
    componentWillMount() {
        Axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${this.props.id}`).then(
            response => {
                this.setState({ imagesArr: response.data });
            }
        );
    }
    render() {
        const { imagesArr } = this.state;
        if (imagesArr == []) return <div>Loading...</div>;
        return (
            <Slider images={imagesArr} />
        )
    }
}
