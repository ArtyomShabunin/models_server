import React from 'react'

const Background = () => {
  const backgroundStyle = {
    fill: '#e7dfde',
  }
  const backgroundWidth = 1400
  const backgroundHeight = 900
  return (
    <rect
      style={backgroundStyle}
      x={0}
      y={0}
      width={backgroundWidth}
      height={backgroundHeight}
    />
  )
}

export default Background
