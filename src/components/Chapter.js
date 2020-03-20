import React from 'react'
import { Link } from 'react-router-dom'

import Chapter01 from './chapters/Chapter01'
import Chapter02 from './chapters/Chapter02'
import Chapter03 from './chapters/Chapter03'
import Chapter04 from './chapters/Chapter04'
import Chapter05 from './chapters/Chapter05'

import Header from './Header'
import Footer from './Footer'

const texts = {
  '1_1': Chapter01,
  '1_2': Chapter02,
  '1_3': Chapter03,
  '1_4': Chapter04,
  '1_5': Chapter05,
}

const scrollBuilder = id => event => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default class Chapter extends React.Component {
  render() {
    const { idRef } = this.props.match.params

    const Content = texts[idRef]

    return (
      <div>
        <div className="pa4-l pa3 pt4 mt5-ns mt3">
          <div className="light-purple">
            <Header />
          </div>
          <div className="mh5-l mh4-m flex flex-row">
            <div className="mr3-ns w-60-l w-80-m w-100">
              <Content />
            </div>
            <div className="mr3-ns w-40-ns w-20-m dn db-l">
              <div className="fixed bottom-4 right-0 mb4 mr5">
                <Link
                  to={`/chapter/${idRef}`}
                  className="no-underline"
                  onClick={scrollBuilder('header')}
                >
                  Back to top ↑
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer idRef={idRef} />
      </div>
    )
  }
}
