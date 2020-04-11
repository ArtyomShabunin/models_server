import React from 'react'
import Background from './background'
import Pipe from './pipe'
import Valve from './valve'

import './canvas.css'

const Canvas = () => {
  const viewBox = [window.innerWidth / -2, - window.innerHeight, window.innerWidth, window.innerHeight];

  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
    >
      <Background/>
      <Pipe x1={-100} y1={-100} x2={100} y2={-100}/>
      <Valve x={-500} y={-500}/>
      <Valve x={0} y={-500}/>
      <circle cx={0} cy={0} r={50} />
    </svg>
  );
};

export default Canvas;
