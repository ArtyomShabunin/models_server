import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {HomePage, CartPage, Dashboard} from '../pages'

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
        path='/cart'
        component={CartPage}
      />

      <Route
        path='/dashboard'
        component={Dashboard}
      />

    </Switch>
  )
}

export default App
