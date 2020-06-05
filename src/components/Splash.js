import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

export default class Splash extends React.Component {
  componentDidMount() {
    document.title = 'Accurat - Dataviz Observatory'
  }

  render() {
    return (
      <div className="bg-kazoo white vh-100 pa3 flex">
        <Header />
        <div className="mh6-l mh4-m flex flex-column justify-center">
          <h1 className="mt5-m w-100">Data Visualization Observatory</h1>
          <div className="f5 lh-copy">
            <p className="w-60-l w-100">
              Grazie alla vastissima quantità di dati che ad oggi siamo in grado di raccogliere e
              alla semplificazione dei processi tecnologici avvenuta negli ultimi anni, la data
              visualization è un campo di ricerca in notevole espansione e di interesse globale.
              Rappresentando i dati si cerca di dare una forma...
            </p>
          </div>
          <Link to="/select-module" className="no-underline w4 ph3 mt4-l ba br1 flex button-splash">
            <p>Enter</p>
            <p className="pl2">→</p>
          </Link>
        </div>
      </div>
    )
  }
}
