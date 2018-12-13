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
import imgMain10 from '../../images/imgMain10.jpg';
import imgMain11 from '../../images/imgMain11.jpg';
import imgMain12 from '../../images/imgMain12.jpg';
import imgMain13 from '../../images/imgMain13.jpg';
import imgMain14 from '../../images/imgMain14.jpg';
import imgMain15 from '../../images/imgMain15.jpg';
import imgMain16 from '../../images/imgMain16.jpg';
import imgMain17 from '../../images/imgMain17.jpg';
import imgMain18 from '../../images/imgMain18.jpg';
import imgMain19 from '../../images/imgMain19.jpg';
import { Carousel } from 'antd';
import './Main.css';

export default function MainList(props) {
  return (
    <div className="main">
        <h1>Music Festival</h1>
        <Carousel autoplay>
    <div><img src={imgMain1} alt={props.imgMain} className="imgMain" minWidth={1300} maxHeight={400} /></div>
    <div><img src={imgMain2} alt={props.imgMain} className="imgMain" /></div>
    <div><img src={imgMain3} alt={props.imgMain} className="imgMain" /></div>
    <div><img src={imgMain4} alt={props.imgMain} className="imgMain" /></div>
    <div><img src={imgMain5} alt={props.imgMain} className="imgMain" /></div>
    <div><img src={imgMain6} alt={props.imgMain} className="imgMain" /></div>
    <div><img src={imgMain7} alt={props.imgMain} className="imgMain" /></div>
    <div><img src={imgMain8} alt={props.imgMain} className="imgMain" /></div>
    <div><img src={imgMain9} alt={props.imgMain} className="imgMain" /></div>
    <div><img src={imgMain10} alt={props.imgMain} className="imgMain" /></div>
    <div><img src={imgMain11} alt={props.imgMain} className="imgMain" /></div>
    <div><img src={imgMain12} alt={props.imgMain} className="imgMain" /></div>
    <div><img src={imgMain13} alt={props.imgMain} className="imgMain" /></div>
    <div><img src={imgMain14} alt={props.imgMain} className="imgMain" /></div>
    <div><img src={imgMain15} alt={props.imgMain} className="imgMain" /></div>
    <div><img src={imgMain16} alt={props.imgMain} className="imgMain" /></div>
    <div><img src={imgMain17} alt={props.imgMain} className="imgMain" /></div>
    <div><img src={imgMain18} alt={props.imgMain} className="imgMain" /></div>
    <div><img src={imgMain19} alt={props.imgMain} className="imgMain" /></div>
  </Carousel>
    </div>
  )
}
