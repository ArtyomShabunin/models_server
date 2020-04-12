import React, {Component} from 'react'
import GridLayout from 'react-grid-layout';
import Draggable from 'react-draggable';

import {Canvas} from '../svg'
import {Frame1} from '../frames'

import './frames-space.css'
import '../../../node_modules/react-grid-layout/css/styles.css'
import '../../../node_modules/react-resizable/css/styles.css'

class FramesSpace extends Component {
  render() {
    const layout = [
      {i: 'a', x: 0, y: 0, w: 6, h: 8, minW: 4, maxW: 8},
      {i: 'b', x: 8, y: 0, w: 6, h: 8, minW: 4, maxW: 8},
      {i: 'c', x: 0, y: 0, w: 6, h: 8, minW: 4, maxW: 8},
      {i: 'd', x: 8, y: 0, w: 6, h: 8, minW: 4, maxW: 8}
    ];
    return (
      <div className='work-space'>
      <Draggable>
        <div className='block button-block'>
          <div className='title'>Hello!</div>
          <div className='content'>
            <button>Push</button>
          </div>
        </div>
      </Draggable>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        draggableHandle = '.MyDragHandle'
        draggableCancel = '.MyDragCancel'
        >
        <div key="a" className='block'>
          <div className='MyDragHandle title d-flex justify-content-between'>
            Window 1
            <div className='btn-group'>
              <button className='btn btn-outline-secondary'>_</button>
              <button className='btn btn-outline-secondary'>O</button>
              <button className='btn btn-outline-secondary'>X</button>
            </div>
          </div>
          <div className='content'>
            <Frame1/>
          </div>
        </div>
        <div key="b" className='block'>
          <div className='MyDragHandle title'>Window 2</div>
          <div className='content'>
            <Canvas/>
          </div>
        </div>
        <div key="c" className='block'>
          <div className='MyDragHandle title'>Window 3</div>
          <div className='content'></div>
        </div>
        <div key="d" className='block'>
          <div className='MyDragHandle title'>Window 4</div>
          <div className='content'></div>
        </div>
      </GridLayout>
      </div>
    )
  }
}

export default FramesSpace
