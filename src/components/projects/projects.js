import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './projects.css';

class Projects extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired
	};
    
	render() {
		return <h1>Projects</h1>;
	}
}

export default Projects;
