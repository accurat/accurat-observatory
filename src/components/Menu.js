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
            <Tag label="2020, Apr" />
            <p className="mv0 ml3 f5">1.1 First release</p>
          </div>
        </Link>
        <Link to="#1_2" className="no-underline black db mv3" onClick={scrollBuilder('1_2')}>
          <div className="w-100 flex flex-row">
            <Tag label="2020, Jun" />
            <p className="mv0 ml3 f5">1.2 Second release</p>
          </div>
        </Link>
        <Link to="#1_3" className="no-underline black db mv3" onClick={scrollBuilder('1_3')}>
          <div className="w-100 flex flex-row">
            <Tag label="2020, Sep" />
            <p className="mv0 ml3 f5">1.3 Third release</p>
          </div>
        </Link>

        <div className="bg-gray mt4" style={{ height: '1px' }} />
        <h5 className="mt4 mb3 kazoo o-70">Development</h5>
        <Link to="#module02" className="no-underline black" onClick={scrollBuilder('module02')}>
          <h4 className="semi-b mb4 black">Lorem ipsum</h4>
        </Link>

        <div className="bg-gray" style={{ height: '1px' }} />
        <h5 className="mt4 mb3 kazoo o-70">Other category</h5>
        <Link to="#module03" className="no-underline black" onClick={scrollBuilder('module03')}>
          <h4 className="semi-b mb4 black">Lorem ipsumn</h4>
        </Link>
        <div className="bg-gray" style={{ height: '1px' }} />
      </div>
    )
  }
}
