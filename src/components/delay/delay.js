import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DelayWrapper extends Component {
    static propTypes = {
        delay: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            waiting: true
        }
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({ waiting: false });
        }, this.props.delay);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        if (!this.state.waiting) {
            return <div>{this.props.children}</div>;
        }

        return null;
    }
}

export default DelayWrapper;