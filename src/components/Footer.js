import React from 'react'
import { Link } from 'react-router-dom'

const chaptersTitles = {
  '1_1': { module: '2020, June', title: 'Release 1' },
  '1_2': { module: '2020, July', title: 'Release 2' },
  '1_3': { module: '2020, August', title: 'Release 3' },
}

export default class Footer extends React.Component {
  render() {
    const { idRef } = this.props
    const previous = `${parseInt(idRef[0])}_${parseInt(idRef[2]) - 1}`
    const next = `${parseInt(idRef[0])}_${parseInt(idRef[2]) + 1}`
    console.log(next)

    return (
      <div className="h4 vw-100 bt kazoo flex justify-between flex-row">
        <div>
          <>
            {idRef === '1_0' ? (
              <div />
            ) : idRef === '1_1' ? (
              <Link to={`/select-module`} className="no-underline">
                <div className="ph4-ns ph3 h-100 vw-50 tl kazoo hover-bg-kazoo hover-white overflow-hidden fade">
                  <h3 className="mt3 mt4-ns mb0">{'← '}Home</h3>
                </div>
              </Link>
            ) : (
              <Link to={`/chapter/${previous}`} className="no-underline">
                <div className="ph4-ns ph3 h-100 vw-50 tl kazoo hover-bg-kazoo hover-white overflow-hidden fade">
                  <h3 className="mt3 mt4-ns mb0">
                    {'← '} {chaptersTitles[previous].module}
                  </h3>
                  <p className="f6 f5-ns mt2-ns mt1 mb0 lh-copy">
                    {chaptersTitles[previous].title}
                  </p>
                </div>
              </Link>
            )}
          </>
        </div>
        <div>
          <>
            {idRef === '1_3' ? (
              <div className="h-100 vw-50 bl kazoo" />
            ) : (
              <Link to={`/chapter/${next}`} className="no-underline">
                <div className="ph4-ns ph3 h-100 vw-50 tr bl kazoo hover-bg-kazoo hover-white overflow-hidden fade">
                  <h3 className="mt3 mt4-ns mb0">
                    {chaptersTitles[next].module}
                    {' →'}
                  </h3>
                  <p className="f6 f5-ns mt2-ns mt1 mb0 lh-copy">{chaptersTitles[next].title}</p>
                </div>
              </Link>
            )}
          </>
        </div>
      </div>
    )
  }
}
