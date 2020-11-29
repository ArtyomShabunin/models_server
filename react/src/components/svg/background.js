import React from 'react'

const Background = () => {
  const backgroundStyle = {
    fill: '#e7dfde',
  }
  const backgroundWidth = 5000
  const backgroundHeight = 1200
  return (
    <rect
      style={backgroundStyle}
      x={backgroundWidth / -2}
      y={-backgroundHeight}
      width={backgroundWidth}
      height={backgroundHeight}
    />
  )
}

export default Background
