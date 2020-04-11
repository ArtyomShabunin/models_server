import React from 'react';

const Pipe = (props) => {
  const groundStyle = {
    fill: '#59a941',
  }
  const division = {
    stroke: '#3333FF',
    strokeWidth: '5px',
  }

  const groundWidth = 5000;

  return (

    <line
      x1={props.x1}
      y1={props.y1}
      x2={props.x2}
      y2={props.y2}
      style={division}
    />
  )
}

export default Pipe
