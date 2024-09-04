import React from 'react'
import Container from './Container'
import bannerOne from '../assets/clg_buildinga.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bannertwo from '../assets/clg_-building2.jpg'
import bannerthree from '../assets/clg_gate.jpg'
import banner from '../assets/clg_Shaheed_Mina.jpg'

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    appendDots: dots => (
      <div
        style={{
          position: "absolute", 
          top: "0px",             
          right: "0px",  
          fontSize: '30px',
        }}
      >
        <ul
          style={{
            position: "absolute",
            top: '10px',         
            right: 0,
            borderRadius: "20px",
            padding: "20px",
            margin: "0", 
            color: 'green', 
            fontSize: '30px',
          }}
        >
          
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          color: "transparent",
          height:"15px",
          redius:"10px",
          width:"15px",
          background:"#FFFFFF",
          borderRadius:"30px",
        }}
      >
        {i + 1}
      </div>
    )
  };
  

  
  
  
  
  
  return (
    <div>
      <Container>
      <Slider {...settings}>
        <div className="">
            <img src={bannerOne} alt="" />
        </div>
        <div className="">
            <img src={bannertwo} alt="" />
        </div>
        <div className="">
            <img src={bannerthree} alt="" />
        </div>
        <div className="">
            <img src={banner} alt="" />
        </div>
        </Slider>
      </Container>
    </div>
  )
}

export default Banner
