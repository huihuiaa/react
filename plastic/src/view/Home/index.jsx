import React, {Component} from 'react';
import Hedaer from '@/component/Header'
import Footer from '@/component/Footer'
import Swiper from '@/component/swiper'
import NavList from '@/component/Nav'
import List1 from './component/list1'
import List2 from './component/list2'
import Diary from './component/diary'
import './home.less'
import axios from 'axios'
let home = class home extends Component {
  constructor (props) {
    super (props)
    this.state = {
      city: '北京',
      swiperArr: [],
      navList: [],
      list1: [],
      list2: [],
      diary: []
    }
  }
  loadMore(qq) {
   this.setState({diary:[...this.state.diary, ...this.state.diary]})
  }
  componentDidMount() {
    axios.get('/swiper').then((res) => {
     this.setState({swiperArr:res.data.img})
    })

     axios.get('/navList').then((res) => {
       this.setState({navList:res.data.list})
    })

    axios.get('/list1').then((res) => {
      this.setState({list1:res.data.img})
    })

    axios.get('/list2').then((res) => {
      this.setState({list2:res.data.img})
    })

    axios.get('/diary').then((res) => {
      this.setState({diary:res.data.img})
    })
  }
    render() { 
      return (
          <div className='main'>
             <Hedaer city={this.state.city}></Hedaer>
             <div className="section">
              <Swiper data={this.state.swiperArr}></Swiper>
              <NavList data={this.state.navList}></NavList>
              <List1 data={this.state.list1}></List1> 
              <List2 data={this.state.list2}></List2>  
              <Diary data={this.state.diary} loadMore={this.loadMore.bind(this)}></Diary>
             </div>
             <Footer></Footer>
          </div>
      )
    }   
  }
  export default home