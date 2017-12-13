import React , {Component} from 'react'
import './header'
import {NavLink} from 'react-router-dom'
let cityHeader = class cityHeader extends Component {
  constructor (props) {
    super (props)
  }
  render () {
    return (
       <div className='Header'>
          <div className="city">
             <NavLink to="/citys"><span className="icon iconfont icon-bottom"></span><b>返回</b></NavLink>
          </div> 
          <h1>悦美</h1>
          <div className="search">
            <span className="icon iconfont icon-search3"></span>
            <span className="icon iconfont icon-diandian2x"></span>
          </div>
       </div>
    )
 }
}
export default cityHeader
