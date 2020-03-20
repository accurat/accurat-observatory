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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
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
