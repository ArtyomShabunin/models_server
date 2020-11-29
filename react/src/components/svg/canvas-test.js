import React from 'react'
import Background from './background'
import Pipe from './pipe'
import ElectrifiedValve from './electrified-valve'

import './canvas-test.css'

const CanvasTest = () => {
  const viewBox = [0, 0, 1400, 900]

  // const viewBox = [-500, -500, 500, 0]

  const superheater_style = {
    fill: 'none',
    stroke: '#ce00bd',
    strokeWidth: '3px',
  }

  const reheater_style = {
    fill: 'none',
    stroke: '#ff41ce',
    strokeWidth: '3px',
  }

  const fedwater_style = {
    fill: 'none',
    stroke: '#32a632',
    strokeWidth: '3px',
  }

  const equipment = {
    fill: 'none',
    stroke: 'black',
    strokeWidth: '1px',
  }

  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}>

      <Background/>

      <polyline points=" 280,22 280,225 295,235 265,245 280,255 280,290 435,310 435,315 450,325 420,335 435,345 435,350 280,370 280,375 295,385 265,395 280,405 280,440 435,460 435,465 450,475 420,485 435,495 435,500 280,520 280,580 295,590 265,600 280,610 280,650 295,660 265,670 280,680 280,685 295,695 265,705 280,715 280,720"
                style={superheater_style}/>
      <polyline points=" 435,22 435,225 450,235 420,245 435,255 435,290 280,310 280,315 295,325 265,335 280,345 280,350 435,370 435,375 450,385 420,395 435,405 435,440 280,460 280,465 295,475 265,485 280,495 280,500 435,520 435,580 450,590 420,600 435,610 435,650 450,660 420,670 435,680 435,685 450,695 420,705 435,715 435,720"
                style={superheater_style}/>
      <polyline points=" 315,720 315,645 280,645"
                style={superheater_style}/>
      <polyline points=" 400,720 400,645 435,645"
                style={superheater_style}/>

      <polyline points=" 315,790 315,820 335,820 255,820 265,820 265,830 250,835 260,840 250,845 265,850 265,860 255,860 335,860 315,860 315,890 685,890 685,820 657.5,820 657.5,760 970,760 970,855"
                style={fedwater_style}/>
      <polyline points=" 400,790 400,820 380,820 460,820 450,820 450,830 465,835 455,840 465,845 450,850 450,860 460,860 380,860 400,860 400,870 630,870 630,820 657.5,820"
                style={fedwater_style}/>
      <polyline points=" 820,760 820,855 1390,855"
                style={fedwater_style}/>
      <polyline points=" 740,805 657.5,805"
                style={fedwater_style}/>
      <polyline points=" 1100,880 1020,880 1020,855"
                style={fedwater_style}/>
      <polyline points=" 1305,855 1305,785 1020,785 1020,700 690,700 690,160 435,160"
                style={fedwater_style}/>
      <polyline points=" 590,160 590,115 460,115 435,160"
                style={fedwater_style}/>
      <polyline points=" 680,160 680,80 440,80"
                style={fedwater_style}/>
      <polyline points=" 430,80 285,80"
                style={fedwater_style}/>
      <polyline points=" 275,80 45,80 45,160 280,160"
                style={fedwater_style}/>
      <polyline points=" 125,160 125,115 255,115 280,160"
                style={fedwater_style}/>
      <polyline points=" 690,630 440,630"
                style={fedwater_style}/>
      <polyline points=" 645,630 645,585 460,585 435,555"
                style={fedwater_style}/>
      <polyline points=" 430,630 285,630"
                style={fedwater_style}/>
      <polyline points=" 275,630 25,630 25,585 255,585 280,555"
                style={fedwater_style}/>

      <polyline points=" 920,22 920,170 935,180 905,190 920,200 920,345 1130,365 1130,410 1145,420 1115,430 1130,440 1130,675"
                style={reheater_style}/>
      <polyline points=" 1130,22 1130,170 1145,180 1115,190 1130,200 1130,345 920,365 920,410 935,420 905,430 920,440 920,675"
                style={reheater_style}/>

      <path d="M312.5 720 H 450 C 480 730 480 780 450 790 H 265 C 235 780 235 730 265 720 Z"
            style={equipment}/>

      <ElectrifiedValve x={500} y={150} rotation={45}/>



    </svg>
  );
};

export default CanvasTest;
