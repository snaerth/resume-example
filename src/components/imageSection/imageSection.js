import React, {Component} from 'react';
import CoverPhoto from '../coverPhoto';
import './imageSection.css';
import Me from './snaer_seljan_thoroddsson.jpg';

class ImageSection extends Component {
    render() {
        return (
            <div className="image-container text-center">
                <CoverPhoto src={Me} alt="Snær Seljan Þóroddsson" className="coverImage"/>
                <div className="overlay" />
            </div>
        );
    }
}

export default ImageSection;