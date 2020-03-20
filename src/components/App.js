import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Splash from './Splash'
import Chapter from './Chapter'

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Splash} />
          <Route exact path="/select-module" component={Home} />
          <Route exact path="/chapter/:idRef" component={Chapter} />
        </>
      </Router>
    )
  }
}

export default AppRouter
