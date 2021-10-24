import React from 'react'

export default function GraphTest() {
  return (
    <div className="App">
      <svg style={{ backgroundColor: "mistyrose" }} viewBox="0 0 30 10">
        <g stroke="#000" strokeWidth=".01">
          <line x1="5" y1="0" x2="5" y2="10" />
          <line x1="10" y1="0" x2="10" y2="10" />
          <line x1="15" y1="0" x2="15" y2="10" />
          <line x1="20" y1="0" x2="20" y2="10" />
          <line x1="25" y1="0" x2="25" y2="10" />
          <line x1="0" y1="5" x2="30" y2="5" />
        </g>

        <text style={{ fontSize: 1 }} x="5" y="5" color="#000">
          My cat is grumpy
        </text>

        <circle cx="25" cy="5" r="1" stroke="green" stroke-width="2%" />

        <rect x="16" y="6" width="3" height="3" rx="0.3" />
      </svg>
    </div>
  );
}
