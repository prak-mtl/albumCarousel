import React, { Component } from 'react';
import Axios from "axios";
import AlbumSlider from '../Slider/AlbumSlider';
import LazyLoad from 'react-lazyload';

export default class Album extends Component {
    state = {
        albumArr: []
    }
    componentDidMount() {
        Axios.get("https://jsonplaceholder.typicode.com/albums").then(
            response => {
                this.setState({ albumArr: response.data });
            }
        );
    }

    render() {
        const { albumArr } = this.state;
        return (
            albumArr && albumArr.map((item, index) => (
                <div className="album">
                    <h3>{item.title}</h3>
                    <span>id: {item.id}, </span><span>user Id: {item.userId}</span>
                    <hr />
                    <LazyLoad height={200}>
                        <AlbumSlider id={item.id} />
                    </LazyLoad>
                </div>
            ))
        )
    }
}