import React from 'react';
import imgMain1 from '../../images/imgMain1.jpg';
import imgMain2 from '../../images/imgMain2.jpg';
import imgMain3 from '../../images/imgMain3.jpg';
import imgMain4 from '../../images/imgMain4.jpg';
import imgMain5 from '../../images/imgMain5.jpg';
import imgMain6 from '../../images/imgMain6.jpg';
import imgMain7 from '../../images/imgMain7.jpg';
import imgMain8 from '../../images/imgMain8.jpg';
import imgMain9 from '../../images/imgMain9.jpg';
import { Carousel } from 'antd';
import './Main.css';

export default function MainList(props) {
  return (
    <div className="main">
       <h2 className="header">VALLEY  MUSIC  AND  ARTS  FESTIVAL</h2>
          <Carousel autoplay>
            <div><img src={imgMain1} alt={props.imgMain} className="imgMain" /></div>
            <div><img src={imgMain2} alt={props.imgMain} className="imgMain" /></div>
            <div><img src={imgMain3} alt={props.imgMain} className="imgMain" /></div>
            <div><img src={imgMain4} alt={props.imgMain} className="imgMain" /></div>
            <div><img src={imgMain5} alt={props.imgMain} className="imgMain" /></div>
            <div><img src={imgMain6} alt={props.imgMain} className="imgMain" /></div>
            <div><img src={imgMain7} alt={props.imgMain} className="imgMain" /></div>
            <div><img src={imgMain8} alt={props.imgMain} className="imgMain" /></div>
            <div><img src={imgMain9} alt={props.imgMain} className="imgMain" /></div>
          </Carousel>
          <span><img src={ require('../../images/codechella.png') } alt={'home'} className="mainName"/></span>
          <h3>About Codechella:</h3>
             <p>We are full-stack software developers from GA cracking the code, working with client- and server-sides,
                databases and UI/UX design who know how to collaborate and rapidly build static and dynamic web apps.
                Our industry software experts have months of experience building web sites and solutions for a number of projects.
                We know our way around JavaScript, React, CSS, HTML, SQL, Express, Node.js, Sequelize.
             </p>
          <h3>Contacts:</h3>
             <p>Contacts: 4th floor in General Assembly, 10 E 21st St, New York, NY 10010</p>
     </div>
   )
}

// class Carousel expends React.Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      images: [],
//      currentIndex: 0,
//      index: 0
//    };
//    this.previousSlide = this.previousSlide.bind(this)
//  }
//  previousSlide() {
//    const lastIndex = images.length - 1;
//    const ResetingIndex = this.state.currentIndex === 0;
//    const index = ResetingIndex ? lastIndex : this.state.currentIndex-1;
//    this.setState({
//       currentIndex: index
//    });
//  }
//  nextSlide() {
//    const lastIndex = images.length - 1;
//    const ResetingIndex = this.state.currentIndex === lastImage;
//    const index = ResetingIndex ? 0 : this.state.currentIndex+1;
//      this.setState({
//       currentIndex: index
//    });
//    }
//render() {
  //return (
//  )
//}
// }
