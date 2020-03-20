import React from 'react'

import { Link } from 'react-router-dom'
import Tag from './Tag'

export default class ChapterCard extends React.Component {
  render() {
    const { idRef, chapNum, audience, readTime, title, coverImg, children } = this.props

    return (
      <div className="pv4 mv3" id={idRef}>
        <h5>Chapter {chapNum}</h5>
        <Link to={`/chapter/${idRef}`}>
          <div className="mv3 ba br2 b--light-gray w-100 h5 overflow-hidden">
            <img src={coverImg} className="h-100 object-fit-cover" />
          </div>
        </Link>
        <div className="pv2 w-100 flex flex-row">
          <Tag label={audience} />
          <p className="mv0 ml3 f6 black">{readTime}</p>
        </div>
        <Link to={`/chapter/${idRef}`} className="black no-underline">
          <h2 className="mb4">{title}</h2>
        </Link>
        {children}
      </div>
    )
  }
}
