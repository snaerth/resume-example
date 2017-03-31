import React, {Component} from 'react';
import Button from '../button';
import './contentSection.css';

class Right extends Component {
    render() {
        return (
            <div className="content-container">
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