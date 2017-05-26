import React from 'react';
import './waveSvg.css';

const WaveSvg = () => (
  <div className="container-wave">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 500 70"
      preserveAspectRatio="xMinYMin slice"
    >
      <path d="M0,50 C200,100 200,0 500,50 L500,00 L0,0 Z" />
    </svg>
  </div>
);

export default WaveSvg;
