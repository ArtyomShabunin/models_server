import React from 'react';

const ElectrifiedValve= (props) => {

  const background_style = {
    fill: 'bacabd'
  }

  const left_style = {
    fill: 'black',
  }
  const right_style = {
    fill: 'black',
  }

  const transform = `rotate(${props.rotation}, 0, 0)`;

  return (
    <g>
      <defs>

        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#656966"/>
          <stop offset="40%" stop-color="#a4a4a4"/>
          <stop offset="100%" stop-color="black"/>
        </linearGradient>

        <g id="valve"
           transform={transform}>>
          <rect x="0"
                y="0"
                width="65"
                height="65"
                style={background_style}
                />
          <polygon points="3 3, 21 21, 21 43, 3 61"
                   style={{fill: 'url(#grad)'}}/>
          <polygon points="62 3, 62 61, 44 43, 44 21"
                   style={{fill: 'url(#grad)'}}/>
        </g>
      </defs>
      <use xlinkHref="#valve" x={props.x} y={props.y}/>
    </g>
  )
}

export default ElectrifiedValve
