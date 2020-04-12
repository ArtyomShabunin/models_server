import React from 'react'
import {Link} from "react-router-dom";

import './app-header.css'

const AppHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">ТЭС симулятор</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/models">Модели<span class="sr-only">(current)</span></Link>
          <Link className="nav-item nav-link" to="/control">Управление симуляцией</Link>
          <Link className="nav-item nav-link" to="/dashboard">Видеокадры</Link>
          <Link className="nav-item nav-link" to="/info">Справка</Link>
        </div>
      </div>
    </nav>
  )
}

export default AppHeader
