import React, { Component } from 'react';

class Wave2Svg extends Component {
	render() {
		return (
			<svg viewBox="0 0 500 70" preserveAspectRatio="xMinYMin meet">
				<path d="M0,0 C100,100 200,0 500,50 L500,00 L0,0 Z" />
			</svg>
		);
	}
}

export default Wave2Svg;