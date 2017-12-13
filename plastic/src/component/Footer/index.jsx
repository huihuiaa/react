import React , {Component} from 'react'
import './footer'
import {NavLink} from 'react-router-dom'
let footer = class footer extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="Footer">
        <ul>
         <li>
           <span className="icon iconfont icon-weibiaoti1"></span>
           我的
         </li>
         <li>
           <span className="icon iconfont icon-home"></span>
           首页
         </li>
         <li>
           <span className="icon iconfont icon-search3"></span>
           搜索
         </li>
         <li>
           <span className="icon iconfont icon-download"></span>
           APP
         </li>
         <li>
           <span className="icon iconfont icon-phone"></span>
           客服
         </li>
        </ul>
      </div>
    )
  }
}
export default footer