import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      {/* M letter centered inside the hexagon */}
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontSize="40"
        fontFamily="Arial, Helvetica, sans-serif"
        fill="currentColor"
        fontWeight="bold"
        dominantBaseline="middle">
        M
      </text>

      {/* Hexagon shape */}
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M 50,5
           L 11,27
           L 11,72
           L 50,95
           L 89,73
           L 89,28 Z"
      />
    </g>
  </svg>
);

export default IconLoader;
