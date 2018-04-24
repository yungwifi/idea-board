import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import IdeaPage from './components/IdeaPage'

const Container = styled.div`
margin-left: 35px;
margin-top: 35px;`

class App extends Component {
  render() {
    return (
      <Container >
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LogInPage} />
              <Route path="/user/:userId" component={IdeaPage} />
            </Switch>
          </div>
        </Router>
      </Container>
    )
  }
}

export default App
