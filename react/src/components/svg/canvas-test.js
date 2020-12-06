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

  const water_from_cond = {
    fill: 'none',
    stroke: '#009e73',
    strokeWidth: '3px',
  }

  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}>

      <defs>
          <marker id="triangle" viewBox="0 0 10 10"
                refX="1" refY="5"
                markerUnits="strokeWidth"
                markerWidth="10" markerHeight="10"
                orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#f00"/>
          </marker>
      </defs>

      <Background/>
      // Линии пароперегревателя
      <polyline points=" 280,22 280,225 295,235 265,245 280,255 280,290 435,310 435,315 450,325 420,335 435,345 435,350 280,370 280,375 295,385 265,395 280,405 280,440 435,460 435,465 450,475 420,485 435,495 435,500 280,520 280,580 295,590 265,600 280,610 280,650 295,660 265,670 280,680 280,685 295,695 265,705 280,715 280,720"
                style={superheater_style}/>
      <polyline points=" 435,22 435,225 450,235 420,245 435,255 435,290 280,310 280,315 295,325 265,335 280,345 280,350 435,370 435,375 450,385 420,395 435,405 435,440 280,460 280,465 295,475 265,485 280,495 280,500 435,520 435,580 450,590 420,600 435,610 435,650 450,660 420,670 435,680 435,685 450,695 420,705 435,715 435,720"
                style={superheater_style}/>
      <polyline points=" 315,720 315,645 280,645"
                style={superheater_style}/>
      <polyline points=" 400,720 400,645 435,645"
                style={superheater_style}/>
      // Линии питательной воды
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
      // Питательная воды на пароохладители промежуточного пароперегревателя
      <polyline points=" 1365,855 1365,135 1340,135 1340,120 1130,120"
                style={fedwater_style}
                marker-end="url(#triangle)"/>
      <polyline points=" 1340,135 1340,150 1135,150"
                style={fedwater_style}/>
      <polyline points=" 1125,150 925,150"
                style={fedwater_style}/>
      <polyline points=" 915,150 710,150 710,120 920,120"
                style={fedwater_style}/>
      <polyline points=" 1365,365 1155,365 1130,315"
                style={fedwater_style}/>
      <polyline points=" 1230,365 1230,315 1130,315"
                style={fedwater_style}/>
      <polyline points=" 1340,365 1340,390 1135,390"
                style={fedwater_style}/>
      <polyline points=" 1125,390 925,390"
                style={fedwater_style}/>
      <polyline points=" 915,390 710,390 710,365 895,365 920,315"
                style={fedwater_style}/>
      <polyline points=" 820,365 820,315 920,315"
                style={fedwater_style}/>

      // Линии пароперегревателя промежуточного перегрева
      <polyline points=" 920,22 920,170 935,180 905,190 920,200 920,345 1130,365 1130,410 1145,420 1115,430 1130,440 1130,675"
                style={reheater_style}/>
      <polyline points=" 1130,22 1130,170 1145,180 1115,190 1130,200 1130,345 920,365 920,410 935,420 905,430 920,440 920,675"
                style={reheater_style}/>
      <polyline points=" 1130,480 1275,480 1275,515 1290,525 1260,535 1275,545 1275,570 1130,570"
                style={reheater_style}/>
      <polyline points=" 1240,480 1240,515 1255,525 1225,535 1240,545 1240,570"
                style={reheater_style}/>
      <polyline points=" 1205,480 1205,515 1220,525 1190,535 1205,545 1205,570"
                style={reheater_style}/>
      <polyline points=" 920,480 775,480 775,515 790,525 760,535 775,545 775,570 920,570"
                style={reheater_style}/>
      <polyline points=" 810,480 810,515 825,525 795,535 810,545 810,570"
                style={reheater_style}/>
      <polyline points=" 845,480 845,515 860,525 830,535 845,545 845,570"
                style={reheater_style}/>

      // Охлаждающая воды от конденсационной установки
      // Первый пароохладитель
      <polyline points=" 20,40 20,490 70,490 70,515 250,515 280,555"
                style={water_from_cond}/>
      <polyline points=" 70,490 70,463 275,463"
                style={water_from_cond}/>
      <polyline points=" 285,463 430,463"
                style={water_from_cond}/>
      <polyline points=" 440,463 645,463 645,515 465,515 435,555"
                style={water_from_cond}/>
      // Второй пароохладитель
      <polyline points=" 20,400 70,400 70,425 280,425"
                style={water_from_cond}/>
      <polyline points=" 70,400 70,373 275,373"
                style={water_from_cond}/>
      <polyline points=" 285,373 430,373"
                style={water_from_cond}/>
      <polyline points=" 440,373 645,373 645,425 435,425"
                style={water_from_cond}/>
      // Третий пароохладитель
      <polyline points=" 20,230 70,230 70,270 280,270"
                style={water_from_cond}/>
      <polyline points=" 70,230 70,190 275,190"
                style={water_from_cond}/>
      <polyline points=" 285,190 430,190"
                style={water_from_cond}/>
      <polyline points=" 440,190 645,190 645,270 435,270"
                          style={water_from_cond}/>

      // Барабан котла
      <path d="M312.5 720 H 450 C 480 730 480 780 450 790 H 265 C 235 780 235 730 265 720 Z"
            style={equipment}/>

      // <ElectrifiedValve x={500} y={150} rotation={45}/>



    </svg>
  );
};

export default CanvasTest;
