import React, {Component} from 'react'
import GridLayout from 'react-grid-layout';
import Draggable from 'react-draggable';
import {Canvas} from '../svg'
import {Frame1} from '../frames'

import '../../../node_modules/react-grid-layout/css/styles.css'
import '../../../node_modules/react-resizable/css/styles.css'
import './dashboard.css'

class Dashboard extends Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      {i: 'a', x: 0, y: 0, w: 6, h: 8, minW: 4, maxW: 8},
      {i: 'b', x: 8, y: 0, w: 6, h: 8, minW: 4, maxW: 8},
      {i: 'c', x: 0, y: 0, w: 6, h: 8, minW: 4, maxW: 8},
      {i: 'd', x: 8, y: 0, w: 6, h: 8, minW: 4, maxW: 8}
    ];


    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">ТЭС симулятор</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">Модели<span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="#">Управление симуляцией</a>
              <a class="nav-item nav-link" href="#">Видеокадры</a>
              <a class="nav-item nav-link disabled" href="#">Справка</a>
            </div>
          </div>
        </nav>

        <div class="pos-f-t">
          <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
              <ul class="list-group list-group-flush frame-list">
                <li class="list-group-item bg-dark">Паротурбинная установка</li>
                <li class="list-group-item bg-dark">Котельная установка</li>
                <li class="list-group-item bg-dark">Общестанционные системы</li>
                <li class="list-group-item bg-dark">Защиты и блокировки</li>
                <li class="list-group-item bg-dark">Вводные</li>
              </ul>

            </div>
          </div>
          <nav class="navbar navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>


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
        <div className='d-flex'>
          <h1>Toolbox</h1>
        </div>
      </div>
    )
  }
}

export default Dashboard
