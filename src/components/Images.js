import React from 'react'

export default class Images extends React.Component {
  render() {
    const { image, caption, title, alt } = this.props

    return (
      <div className="mb4 mt6">
        <img src={image} className="mb3" alt={alt} />
        <h5 className="mb2">{title}</h5>
        <small className="lh-copy">{caption}</small>
      </div>
    )
  }
}
