import React, {Component} from 'react';
import Button from '../button';
import './right.css';

class Right extends Component {
    render() {
        return (
            <div className="right-content-container">
                <h2>Snær Seljan Þóroddsson</h2>
                <a
                    href="mailto:snaerth@gmail.com"
                    title="Senda póst snaerth@gmail.com"
                    className="link-slideright">snaerth@gmail.com</a>
                <div className="job-application--button-container"><Button text="Ferilskrá"/></div>
            </div>
        );
    }
}

export default Right;