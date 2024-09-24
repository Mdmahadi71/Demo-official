import React from 'react'
import Container from './Container'
import bannerOne from '../assets/clg_buildinga.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bannertwo from '../assets/clg_-building2.jpg'
import bannerthree from '../assets/clg_gate.jpg'
import banner from '../assets/clg_Shaheed_Mina.jpg'
import shaAbdur from '../assets/founder_abdur_rouf.jpg'
import AbuBokkor from '../assets/abu-bokor.jpg'
import Sirtwo from '../assets/noName.jpg'
import RoyhanAlom from '../assets/Rayhan-Alam.jpg'

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
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
    <div className='overflow-hidden lg:pt-0 '>
      <Container>
        <Slider {...settings}>
          <div className=" z-[-10] w-full">
            <img src={bannerOne} className=' w-full' alt="" />
          </div>
          <div className="w-full  z-[-10]">
            <img src={bannertwo} className=' w-full' alt="" />
          </div>
          <div className=" w-full  z-[-10]">
            <img src={bannerthree} className=' w-full' alt="" />
          </div>
          <div className=" w-full  z-[-10]">
            <img src={banner} className=' w-full' alt="" />
          </div>
        </Slider>

        <Container>
        <div className={`relative lg:mt-0 mt-[100px] hidden lg:table-cell `}>
          <div class="relative flex overflow-x-hidden bg-gvd-b  w-[98%]  ">
            <div class="py-[14px] animate-marquee whitespace-nowrap">
              <span class="text-[18px] text-white mx-4 font-medium font-bangla ">***  জন্মাষ্টমী উপলক্ষ্যে কলেজ বন্ধরবিবার, আগস্ট 25, 2024  *** |</span>
              <span class="text-[18px] text-white mx-4 font-medium font-bangla">***  উচ্চ মাধ্যমিক ১ম বর্ষের বৃত্তি সংক্রান্ত জরুরী বিজ্ঞপ্তি
                রবিবার, আগস্ট 18, 2024 *** |</span>
              <span class="text-[18px] text-white mx-4 font-medium font-bangla">***  উচ্চ মাধ্যমিক শ্রেনির ক্লাস শুরু
                সোমবার, আগস্ট 12, 2024  *** |</span>
            </div>
          </div>
          <div className="  py-[16px] px-4 inline-block bg-gvd-r absolute top-[0px] left-0">
            <h2 className=' text-[16px] text-white font-medium font-open'>Letas News</h2>
          </div>
        </div>
        </Container>

        <div className=" lg:flex justify-around pb-[30px] mx-3 lg:mx-0 border-b-[1px] border-gray-400 ">
          <div className="lg:w-[27%] py-3   z-10">
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
          <div className="lg:w-[27%] py-3  z-10">
            <div className=" bg-gvd-r py-[20px] px-[20px]">
              <h2 className=' font-bangla  font-medium text-[16px]'>নোটিশবোর্ড</h2>
              <div className=" relative">
                <div className=" border-[5px] border-black w-[20%] z-10"></div>
                <h2 className=' border-[1px] border-[#FFF]  absolute top-[4px] left-[20%] w-[80%]'></h2>
              </div>
              <div className=" border-b-[1px] border-white py-3 ">
                <h3 className=' text-[18px] text-white font-medium font-bangla'>জন্মাষ্টমী উপলক্ষ্যে কলেজ বন্ধ</h3>
                <p className=' text-end text-[12px] text-white font-normal  font-bangla'>রবিবার, আগস্ট 25, 2024</p>
              </div>
              <div className=" border-b-[1px] border-white py-3 ">
                <h3 className=' text-[16px] text-white font-semibold font-bangla'>উচ্চ মাধ্যমিক ১ম বর্ষের বৃত্তি সংক্রান্ত জরুরী বিজ্ঞপ্তি</h3>
                <p className=' text-end text-[12px] text-white font-normal  font-bangla'>রবিবার, আগস্ট 18, 2024</p>
              </div>
              <div className=" border-b-[1px] border-white py-3 ">
                <h3 className=' text-[16px] text-white font-semibold font-bangla'>উচ্চ মাধ্যমিক শ্রেনির ক্লাস শুরু</h3>
                <p className=' text-end text-[12px] text-white font-normal font-bangla '>সোমবার, আগস্ট 12, 2024</p>
              </div>
              <div className=" border-b-[1px] border-white py-3 ">
                <h3 className=' text-[13px] text-white font-medium font-bangla'>অনার্স ৪র্থ বর্ষ ও ডিগ্রি ২য় বর্ষের ২টি পরীক্ষা স্থগিত সংক্রান্ত জরুরি নোটিশ</h3>
                <p className=' text-end text-[12px] text-white font-normal font-bangla '>রবিবার, জুন 23, 2024</p>
              </div>
              <div className=" border-b border-white flex justify-between py-3 items-center">
                <h3 className=' text-[14px] text-white font-semibold font-open'>Form fillup Notice</h3>
                <p className=' text-end text-[12px] text-white font-normal font-bangla '>বুধবার, মে 29, 2024</p>
              </div>
              <button className=' py-[9px] px-[15px] bg-black text-white my-[20px] text-[16px] font-medium  hover:bg-white hover:text-black duration-300 font-bangla'>সকল নোটিশ দেখুন</button>
            </div>
          </div>
          <div className="lg:w-[27%] py-3  z-10">
            <div className=" bg-gvd-cy2 p-[20px]">
              <h2 className=' text-[16px] font-bangla font-semibold'>শিক্ষকদের তালিকা</h2>
              <div className=" relative">
                <div className=" border-[5px] border-black w-[20%] z-10"></div>
                <h2 className=' border-[1px] border-[#FFF]  absolute top-[4px] left-[20%] w-[80%]'></h2>

              </div>
              <div className=" flex justify-between gap-x-3 py-[5px]">
                <div className=" w-[100px] h-[100px] ">
                  <img src={AbuBokkor} alt="" />
                </div>
                <div className="">
                  <h2 className=' font-medium text-[#FFFFFF] text-[16px] font-bangla'>মো. আবু বকর সিদ্দিক সরকার</h2>
                  <p className=' font-light text-[12px] text-white font-bangla'>অধ্যক্ষ</p>
                </div>
              </div>
              <div className=" flex justify-between py-[5px]">
                <div className=" w-[100px] h-[100px] ">
                  <img src={Sirtwo} alt="" />
                </div>
                <div className="">
                  <h2 className=' font-medium text-[#FFFFFF] text-[16px] font-bangla'>মো. জাহিদুল ইসলাম</h2>
                  <p className=' font-light text-[12px] text-white font-bangla'>প্রভাষক, তথ্য ও যোগাযোগ প্রযুক্তি</p>
                </div>
              </div>
              <div className=" flex justify-between py-[5px]">
                <div className=" w-[100px] h-[100px] ">
                  <img src={RoyhanAlom} alt="" />
                </div>
                <div className="">
                  <h2 className=' font-medium text-[#FFFFFF] text-[16px] font-bangla'>ই.এম.এম. রায়হান আলম</h2>
                  <p className=' font-light text-[12px] text-white font-bangla'>প্রভাষক</p>
                  <p className=' font-light text-[8px] text-white font-bangla'>যোগদানের তারিখ: ০৮/০৭/২০০৪ খ্রি.</p>
                </div>
              </div>
              <button className=' py-[9px] px-[15px] bg-black text-white my-[20px] text-[16px] font-medium hover:bg-white hover:text-black duration-300 font-bangla'>সকল শিক্ষকের তালিকা</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner
