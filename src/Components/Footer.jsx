import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <div className='bg-stone-800 py-[40px]'>
      <Container>
        <div className=" lg:flex justify-between">
            <div className="lg:w-[18%]">
                <div className=" text-center lg:text-start ml-2">
                    
                    <h3 className=' text-[20px] text-white font-semibold font-bangla my-3'>সরকারি শাহ্ আব্দুর রউফ কলেজ</h3>
                    <p className=' font-medium text-white text-[15px] font-bangla my-2'>পীরগঞ্জ, রংপুর</p>
                </div>

            </div>
            <div className="lg:w-[18%] lg:ml-0 ml-4">
                <div className="">
                    <div className=" border-b-[1px] border-gray-300  ">
                      <h2 className=' font-semibold text-[18px] text-white font-bangla mb-3'>শিক্ষক</h2>
                    </div>
                    <ul className=' my-[20px] lg:my-0'> 
                        <li className=' font-light text-gray-400 text-[14px] my-5 font-bangla hover:text-red-400 duration-300'> <Link to={'/Pteacher'}>বর্তমান শিক্ষকদের তালিকা </Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] my-4  font-bangla hover:text-red-400 duration-300'><Link to={'/empty'}> শুন্যপদের তালিকা </Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] my-4  font-bangla hover:text-red-400 duration-300'><Link to={'/pastteacher'}> প্রাক্তন শিক্ষকদের তালিকা </Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] my-4  font-bangla hover:text-red-400 duration-300'>৩য় ও ৪র্থ শ্রেণির কর্মচারী</li>
                    </ul>
                </div>
            </div>
            <div className="lg:w-[18%] lg:ml-0 ml-4">
                <div className="">
                        <div className=" border-b-[1px] border-gray-300">
                           <h2 className=' font-semibold text-[18px] text-white mb-3 font-bangla'>শিক্ষার্থী</h2>
                        </div>
                    <ul className=' my-[20px] lg:my-0'>
                        <li className=' font-light text-gray-400 text-[14px] my-5 font-bangla hover:text-red-400 duration-300'>শিক্ষার্থীদের তালিকা</li>
                        <li className=' font-light text-gray-400 text-[14px] my-4 font-bangla hover:text-red-400 duration-300'><Link to={'/notice'}>নোটিশবোর্ড </Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] my-4 font-bangla hover:text-red-400 duration-300'><Link to={'/class'}>ক্লাস রুটিন </Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] my-4 font-bangla hover:text-red-400 duration-300'> <Link to={'/ExamRou'}>পরীক্ষার রুটিন </Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] my-4 font-bangla hover:text-red-400 duration-300'>পরীক্ষার ফলাফল</li>
                    </ul>
                </div>
            </div>
            <div className="lg:w-[18%] lg:ml-0 ml-4">
                <div className=" ">
                    <div className="border-b-[1px] border-gray-300">
                       <h2 className=' font-semibold text-[18px] text-white mb-3 font-bangla'>অভিভাবক</h2>
                    </div>
                    <ul className=' my-[20px] lg:my-0'>
                        <li className=' font-light text-gray-400 text-[14px] my-5 font-bangla hover:text-red-400 duration-300'> <Link to={'/garPanel'}>অভিভাবক প্যানেল</Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] my-4 font-bangla hover:text-red-400 duration-300'><Link to={'/Addinfor'}>ভর্তি তথ্য</Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] my-4 font-bangla hover:text-red-400 duration-300'> <Link to={'/Complaint'}>অভিযোগ</Link> </li>
                    </ul>
                </div>
            </div>
            <div className="lg:w-[18%] lg:ml-0 ml-4">
                <div className="mr-[10px]">
                    <h2 className=' text-[20px] text-white font-semibold font-bangla my-3'>যোগাযোগের তথ‍্য</h2>
                    <p className=' font-medium text-white text-[12px] font-bangla my-2'>উপজেলা পরিষদ রোড, পীরগঞ্জ, রংপুর।</p>
                    <p className=' font-medium text-white text-[12px] font-bangla my-2'>ই-মেইল: sarcpir@yahoo.com</p>
                    <p className=' font-medium text-white text-[12px] font-bangla my-2'>মোবাইল: +8801717-013948</p>
                </div>
            </div>
        </div>
        <div className="" >
            <div className="lg:w-[30%] lg:ml-0 ml-4">
                <div className="">
                    <h3 className=' font-medium text-[16px] text-white'>© 2024. All rights reserved.</h3>
                </div>
            </div>
          
        </div>
      </Container>
      <ScrollToTop color='#38bdf8' top='300' smooth />
    </div>
  )
}

export default Footer
