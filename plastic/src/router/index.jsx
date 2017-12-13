import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from '../view/Home'
import City from '@/view/City'
export default class router extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/home' component={Home}></Route>
          <Route path='/citys' component={City}></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
      </Router>
    )
  }
}