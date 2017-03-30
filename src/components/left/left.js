import React, {Component} from 'react';
import CoverPhoto from '../coverPhoto';
import './left.css';
import Me from './snaer_seljan_thoroddsson.jpg';

class Left extends Component {
    render() {
        return (
            <div className="left-container text-center">
                <CoverPhoto src={Me} alt="Snær Seljan Þóroddsson" className="coverImage"/>
                <div className="overlay" />
            </div>
        );
    }
}

export default Left;