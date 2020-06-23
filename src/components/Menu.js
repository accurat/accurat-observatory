import React from 'react'
import { Link } from 'react-router-dom'
import Tag from './Tag'

const scrollBuilder = id => event => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default class Menu extends React.Component {
  render() {
    return (
      <div className="w-100 mt4 sticky-top">
        <div className="bg-kazoo" style={{ height: '3px' }} />
        <h5 className="mt4 mb3 kazoo">Design</h5>
        <Link to="#module01" className="no-underline black" onClick={scrollBuilder('module01')}>
          <h4 className="semi-b mb4">The data visualization observatory</h4>
        </Link>
        <Link to="#1_1" className="no-underline black db mv3" onClick={scrollBuilder('1_1')}>
          <div className="w-100 flex flex-row">
            <Tag label="2020, Jun" />
            <p className="mv0 ml3 f5">1.1 Numero 01</p>
          </div>
        </Link>

        <div className="bg-gray" style={{ height: '1px' }} />
      </div>
    )
  }
}
