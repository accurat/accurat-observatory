import React from 'react'

export default class Tag extends React.Component {
  render() {
    const { label } = this.props

    return (
      <>
        {label === 'general' ? (
          <p className="mv0 ph2 ba br2 general-tag-color ttc f6 h-fit">{label}</p>
        ) : label === 'advanced' ? (
          <p className="mv0 ph2 ba br2 advanced-tag-color ttc f6 h-fit">{label}</p>
        ) : (
          <p className="mv0 ph2 ba br2 general-tag-color ttc f6">{label}</p>
        )}
      </>
    )
  }
}
