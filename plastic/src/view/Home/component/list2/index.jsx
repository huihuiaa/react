import React, {Component} from 'react'
import './list2'
let list2 = class list2 extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <div className="list2">
        <p className="eyes">眼部</p>
        {
          this.props.data&&this.props.data.map((item, k)=> {
            return (
                <dl key={k}>
                  <dt>
                    <img src={item.img} alt=""/>
                  </dt>
                  <dd>
                    <h2>{item.company}</h2>
                    <p>{item.content}</p>
                    <h4>￥<b>{item.money}</b>/次<span>{item.return}</span></h4>
                  </dd>
                </dl>
            )
          }) 
        }
        <div className="more">查看更多眼部淘整容>></div>

        <p className="eyes">鼻部</p>
        {
          this.props.data&&this.props.data.map((item, k)=> {
            return (
                <dl key={k}>
                  <dt>
                    <img src={item.img} alt=""/>
                  </dt>
                  <dd>
                    <h2>{item.company}</h2>
                    <p>{item.content}</p>
                    <h4>￥<b>{item.money}</b>/次<span>{item.return}</span></h4>
                  </dd>
                </dl>
            )
          }) 
        }
        <div className="more">查看更多其他淘整容>></div>
      </div>

      
    )
  }
}
export default list2;