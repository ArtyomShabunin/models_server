import React from 'react';

const Valve = (props) => {

  const left_style = {
    fill: 'red',
    stroke: 'black',
    strokeWidth: '3px',
  }
  const right_style = {
    fill: 'green',
    stroke: 'black',
    strokeWidth: '3px',
  }
  const circle_style = {
    fill: 'none',
    stroke: 'black',
    strokeWidth: '3px',
  }


  return (
    <g>
      <defs>
        <g id="valve">
          <polygon points="0 0, -40 -20, -40 20"
                   style={left_style}/>
          <polygon points="0 0, 40 -20, 40 20"
                   style={right_style}/>
          <circle cx={0}
                  cy={-40}
                  r={20}
                  style={circle_style}/>
          <path d="M -15, -40 C 0, -60, 0, -20, 15, -40"
                style={circle_style}/>
                <line
                  x1={0}
                  y1={0}
                  x2={0}
                  y2={-20}
                  style={circle_style}
                />
        </g>
      </defs>
      <use xlinkHref="#valve" x={props.x} y={props.y}/>
    </g>
  )
}

export default Valve
