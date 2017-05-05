import React, { Component } from 'react';

class WaveSvg extends Component {
	render() {
		return (
			<svg viewBox="0 0 500 70" preserveAspectRatio="xMinYMin meet">
				<path d="M0,50 C200,100 200,0 500,50 L500,00 L0,0 Z" />
			</svg>
		);
	}
}

export default WaveSvg;
