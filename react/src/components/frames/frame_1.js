import React from 'react'
import {Valve} from '../svg'

const Frame1 = () => {
  const viewBox = [window.innerWidth / -2, - window.innerHeight, window.innerWidth, window.innerHeight];

  return (
    <svg
      /*preserveAspectRatio="xMaxYMax none"*/
      /*viewBox={viewBox}*/
    >

      <Valve x={300} y={100}/>
    </svg>
  );
};

export default Frame1;
