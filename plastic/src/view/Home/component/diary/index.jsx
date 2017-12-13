import React, {Component} from 'react'
import './diary'
let diary = class diary extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <div className="diary">
        <div className="riji">整形日记</div>
        {
          this.props.data&&this.props.data.map((item, k) => {
            return (
              <div className="diaryBox" key={k}>
                <dl>
                  <dt>
                    <img src={item.portrait} alt=""/>
                  </dt>
                  <dd>
                    <p>{item.name}</p>
                    <h5>{item.version}</h5>
                  </dd>
                </dl>
                <div className="content">
                  {item.content}
                </div>
                <div className="img">
                  {
                    item.imhmain.map((item1, k1) => {
                      return (
                        <span key={k1}><img src={item1.afterImg}   alt=""/></span>
                      )
                    })
                  }
                </div>
                <div className="face">
                  {item.change.map((item2, k3) => {
                    return (
                      <span key={k3}>{item2.face}</span>
                    )
                  })}
                </div>
                <div className="timer">
                  <span>{item.time}</span>
                  <b>交流：{item.count}</b>
                </div>
              </div>
             
            )
          })

        }
         <div className="more" onClick={() => this.props.loadMore()}>加载更多</div>
      </div>
    )
  }
}
export default diary;