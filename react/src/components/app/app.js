import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {HomePage, ModelsPage, Dashboard, ControlPage, InfoPage} from '../pages'

import {Canvas, CanvasTest} from '../svg'

import MetsoHeader from '../metso-header'

import './app.css'

const App = () => {
  return (
    <Switch>
      <Route
        path='/'
        component={HomePage}
        exact
      />

      <Route
        path='/models'
        component={ModelsPage}
      />

      <Route
        path='/control'
        component={ControlPage}
      />

      <Route
        path='/dashboard'
        component={Dashboard}
      />

      <Route
        path='/info'
        component={InfoPage}
      />

      <Route
        path='/test'
        component={CanvasTest}
      />

      <Route
        path='/test2'
        component={MetsoHeader}
      />

    </Switch>
  )
}

export default App
