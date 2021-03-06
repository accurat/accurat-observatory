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
        <Link to="#1_2" className="no-underline black db mv3" onClick={scrollBuilder('1_2')}>
          <div className="w-100 flex flex-row">
            <Tag label="2020, Jul" />
            <p className="mv0 ml3 f5">1.2 Numero 02</p>
          </div>
        </Link>
        <Link to="#1_3" className="no-underline black db mv3" onClick={scrollBuilder('1_3')}>
          <div className="w-100 flex flex-row">
            <Tag label="2020, Aug" />
            <p className="mv0 ml3 f5">1.3 Numero 03</p>
          </div>
        </Link>

        <Link to="#1_4" className="no-underline black db mv3" onClick={scrollBuilder('1_4')}>
          <div className="w-100 flex flex-row">
            <Tag label="2020, Sep" />
            <p className="mv0 ml3 f5">1.4 Numero 04</p>
          </div>
        </Link>

        <Link to="#1_5" className="no-underline black db mv3" onClick={scrollBuilder('1_5')}>
          <div className="w-100 flex flex-row">
            <Tag label="2020, Oct" />
            <p className="mv0 ml3 f5">1.5 Numero 05</p>
          </div>
        </Link>

        <Link to="#1_6" className="no-underline black db mv3" onClick={scrollBuilder('1_6')}>
          <div className="w-100 flex flex-row">
            <Tag label="2020, Nov" />
            <p className="mv0 ml3 f5">1.6 Numero 06</p>
          </div>
        </Link>

        <Link to="#1_5" className="no-underline black db mv3" onClick={scrollBuilder('1_7')}>
          <div className="w-100 flex flex-row">
            <Tag label="2020, Dec" />
            <p className="mv0 ml3 f5">1.7 Numero 07</p>
          </div>
        </Link>
        <div className="bg-gray" style={{ height: '1px' }} />
      </div>
    )
  }
}
