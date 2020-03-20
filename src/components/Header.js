import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <div
        className="absolute h3 bb ph4-ns ph3 top-0 left-0 vw-100 kazoo bg-white flex justify-between flex-row"
        id="header"
      >
        <div className="flex flex-center">
          <Link to="/" className="no-underline">
            <strong>Accurat </strong>Data Visualization Observatory
          </Link>
        </div>
        <div className="flex justify-end flex-center">
          <div className="pl4">
            <Link to="/select-module" className="no-underline">
              Home
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
