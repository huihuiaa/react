import React, {Component} from 'react'
import './nav'
let nav = class nav extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <div className="nav">
        <ul>
          {this.props.data&&this.props.data.map((item,key)=> {
            return (
              <li key={key}>
                <span className={item.icon}></span>
                <b> {item.content}</b>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default nav;