import React , {Component}from 'react';
import Slider from './Slider/Slider';
require('./Slider/Slider.less');
let home = class home extends Component {
  constructor (props) {
    super (props)
  }
    render() { 
      const IMAGE_DATA = [
      {
        src: require('./images/demo1.jpg'),
        alt: 'images-1',
      },
      {
        src: require('./images/demo2.jpg'),
        alt: 'images-2',
      },
      {
        src: require('./images/demo3.jpg'),
        alt: 'images-3',
      }
    ];
      return (
        <Slider
        items={this.props.data}
        speed={1.2}
        delay={2.1}
        pause={true}
        autoplay={true}
        dots={true}
        arrows={false}
      />
      )
    }   
  }
  export default home
