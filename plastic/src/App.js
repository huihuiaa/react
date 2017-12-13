import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './static/css/reset.css';
import './static/font/iconfont.css';
import './static/font1/iconfont.css';
import Router from './router'
import mock from './mock'
mock.bootstrap()
class App extends Component {
  render() {
    return (
     <div>
       <Router></Router> 
     </div>  
     
    );
  }
}

export default App;
