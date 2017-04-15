import React, {PropTypes} from 'react';
import './buttons.css';

const Button = ({text, onClick, className}) => {
    return (
        <button
            className={'button button--moema button--text-thick button--text-upper button--size-s ' + className}
            onClick={onClick}>{text}</button>
    );

}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Button;