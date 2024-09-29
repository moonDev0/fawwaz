import React, { Component } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

import Card from "./card";

export default class Testimonies extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      arrows: false,
      
    };
    return (
      <div className="container px-5 md:px-0 mx-auto right-0 left-0 absolute ">
        <Slider {...settings} className="">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Slider>
      </div>
    );
  }
}