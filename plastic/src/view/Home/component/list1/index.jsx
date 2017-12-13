import React, {Component} from 'react'
import './list1'
let nav = class nav extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <div className="list11">
      {this.props.data&&this.props.data.map((item, key) => {
        return (
        <div className={"left" + key} key={key}>
          <img src={item.img} alt=""/>
        </div>
        )
      })}
      </div>
    )
  }
}
export default nav;