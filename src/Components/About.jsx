import React from 'react'
import Container from './Container'
import { FaSearch } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import shaAbdur from '../assets/founder_abdur_rouf.jpg'
import AbuBokkor from '../assets/abu-bokor.jpg'
import bayascop from '../assets/imb3.jpg'
import Slider from "react-slick";
import eventImg from '../assets/Imb15.jpg'
import eventImg2 from '../assets/Imb5.jpg'
import eventImg3 from '../assets/Imb7.jpg'





const About = () => {
 

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
  
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
          height: "15px",
          width: "15px",
          background: "#FFFFFF",
          borderRadius: "30px",
        }}
      >
        {i + 1}
      </div>
    )
  };

  
  return (
    <div className=' py-2 overflow-hidden'>
      <Container>
        <div className=" lg:flex justify-between mx-4 lg:mx-0">


          <div className="lg:w-[20%] my-3 lg:my-0">
            <div className=" pt-[20px] px-[20px] bg-gvd-cy pb-[50px]">
              <h2>প্রতিষ্ঠাতা</h2>
              <div className=" relative py-[15px]">
                <div className=" border-[5px] border-black w-[20%] z-10"> </div>
                <h2 className=' border-[1px] border-[#FFFFFF]  absolute top-[19px] left-[20%] w-[80%]'></h2>
              </div>
              <div className=" relative">
                <img src={shaAbdur} alt="" />
                <div className=" backdrop-opacity-10 backdrop-invert bg-black/30  py-[30px] absolute bottom-0 left-[0] w-full ">
                  <h3 className=' text-[16px] text-white font-medium pl-[20px] font-bangla'>শাহ আব্দুর রউফ</h3>
                  <p className=' text-[14px] text-white font-medium pl-[20px] font-bangla'>সমাজসেক</p>
                </div>
              </div>
            </div>
          </div>


          <div className="lg:w-[58%] w-full my-3 lg:my-0">
            <div className="">
              <Slider {...settings}>

                <div className="lg:w-[30%] w-full bg-gvd-b p-3 ">
                  <div className="">
                    <img src={bayascop} className=' w-full' alt="" />
                  </div>
                  <h2 className='font-open text-[15px] text-white'>Lorem ipsum dolor sit amet consectetur.</h2>
                  <div className=" border-[2px] border-[#7f8617] py-2 px-3 text-center">
                    <h2>START DATE</h2>
                    <p>01.10.2024</p>
                  </div>
                  <h2 className='font-open text-[15px] text-[#bfca0f] my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque impedit?</h2>
                  <div className=" flex justify-end">
                    <button className='  py-2 px-3 bg-gvd-sky font-open text-[15px] text-white hover:bg-gvd-r duration-300 '>Read more</button>
                  </div>
                </div>

                <div className="lg:w-[30%]  w-full bg-gvd-b p-3 ">
                  <div className="">
                    <img src={eventImg} className=' w-full' alt="" />
                  </div>
                  <h2 className='font-open text-[15px] text-white'>Lorem ipsum dolor sit amet consectetur.</h2>
                  <div className=" border-[2px] border-[#7f8617] py-2 px-3 text-center">
                    <h2>START DATE</h2>
                    <p>01.10.2024</p>
                  </div>
                  <h2 className='font-open text-[15px] text-[#bfca0f] my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque impedit?</h2>
                  <div className=" flex justify-end">
                    <button className='  py-2 px-3 bg-gvd-sky font-open text-[15px] text-white hover:bg-gvd-r duration-300 '>Read more</button>
                  </div>
                </div>

                <div className="lg:w-[30%]  w-full bg-gvd-b p-3 ">
                  <div className="">
                    <img src={eventImg2} className=' w-full' alt="" />
                  </div>
                  <h2 className='font-open text-[15px] text-white'>Lorem ipsum dolor sit amet consectetur.</h2>
                  <div className=" border-[2px] border-[#7f8617] py-2 px-3 text-center">
                    <h2>START DATE</h2>
                    <p>01.10.2024</p>
                  </div>
                  <h2 className='font-open text-[15px] text-[#bfca0f] my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque impedit?</h2>
                  <div className=" flex justify-end">
                    <button className='  py-2 px-3 bg-gvd-sky font-open text-[15px] text-white hover:bg-gvd-r duration-300 '>Read more</button>
                  </div>
                </div>

                <div className="lg:w-[30%] w-full bg-gvd-b p-3 ">
                  <div className="">
                    <img src={eventImg3} className=' w-full' alt="" />
                  </div>
                  <h2 className='font-open text-[15px] text-white'>Lorem ipsum dolor sit amet consectetur.</h2>
                  <div className=" border-[2px] border-[#FFFF] py-2 px-3 text-center">
                    <h2>START DATE</h2>
                    <p>01.10.2024</p>
                  </div>
                  <h2 className='font-open text-[15px] text-[#bfca0f] my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque impedit?</h2>
                  <div className=" flex justify-end">
                    <button className='  py-2 px-3 bg-gvd-sky font-open text-[15px] text-white hover:bg-gvd-r duration-300 '>Read more</button>
                  </div>
                </div>

              </Slider>
            </div>
          </div>


          <div className="lg:w-[20%] my-3 lg:my-0">
            <div className=" pt-[20px] px-[20px] bg-gvd-sky pb-[50px]">
              <h2>অধ্যক্ষ</h2>
              <div className=" relative py-[15px]">
                <div className=" border-[5px] border-black w-[20%] z-10"> </div>
                <h2 className=' border-[1px] border-[#FFFFFF]  absolute top-[19px] left-[20%] w-[80%]'></h2>
              </div>
              <div className=" relative">
                <img src={AbuBokkor} className=' w-full' alt="" />
                <div className=" backdrop-opacity-10 backdrop-invert bg-black/30  py-[30px] absolute bottom-0 left-[0] w-full ">
                  <h3 className=' text-[16px] text-white font-medium pl-[20px] font-bangla'>মো. আবু বকর সিদ্দিক সরকার</h3>
                </div>
              </div>
            </div>
          </div>


        </div>
      </Container>
    </div>
  )
}

export default About
