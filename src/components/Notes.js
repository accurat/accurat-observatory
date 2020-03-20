import React from 'react'

export default class Notes extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="mv5 ph3 pv2 ba br2 notes-color w-90-ns w-100 center notes">
        <h5 className="pt3 pl2">Notes</h5>
        <p className="f5 ph2 mb3 lh-copy">{children}</p>
      </div>
    )
  }
}
