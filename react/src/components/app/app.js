import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {HomePage, ModelsPage, Dashboard, ControlPage, InfoPage} from '../pages'

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

    </Switch>
  )
}

export default App
