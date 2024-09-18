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
                <div className=" my-[30px] text-center lg:text-start">
                    
                    <h3 className=' text-[20px] text-white font-semibold font-bangla'>সরকারি শাহ্ আব্দুর রউফ কলেজ</h3>
                    <p className=' font-medium text-white text-[15px] font-bangla'>পীরগঞ্জ, রংপুর</p>
                </div>

            </div>
            <div className="lg:w-[18%]">
                <div className="">
                    <h2 className=' font-semibold text-[18px] text-white border-b-[1px] border-gray-300  font-bangla'>শিক্ষক</h2>
                    <ul className=' my-[20px] lg:my-0'> 
                        <li className=' font-light text-gray-400 text-[14px] my-2 font-bangla hover:text-red-400 duration-300'> <Link to={'/Pteacher'}>বর্তমান শিক্ষকদের তালিকা </Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] my-2 font-bangla hover:text-red-400 duration-300'><Link to={'/empty'}> শুন্যপদের তালিকা </Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] my-2 font-bangla hover:text-red-400 duration-300'><Link to={'/pastteacher'}> প্রাক্তন শিক্ষকদের তালিকা </Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] my-2 font-bangla hover:text-red-400 duration-300'>৩য় ও ৪র্থ শ্রেণির কর্মচারী</li>
                    </ul>
                </div>
            </div>
            <div className="lg:w-[18%]">
                <div className="">
                    <h2 className=' font-semibold text-[18px] text-white border-b-[1px] border-gray-300  font-bangla'>শিক্ষার্থী</h2>
                    <ul className=' my-[20px] lg:my-0'>
                        <li className=' font-light text-gray-400 text-[14px] my-2 font-bangla hover:text-red-400 duration-300'>শিক্ষার্থীদের তালিকা</li>
                        <li className=' font-light text-gray-400 text-[14px] my-2 font-bangla hover:text-red-400 duration-300'><Link to={'/notice'}>নোটিশবোর্ড </Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] my-2 font-bangla hover:text-red-400 duration-300'><Link to={'/class'}>ক্লাস রুটিন </Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] my-2 font-bangla hover:text-red-400 duration-300'> <Link to={'/ExamRou'}>পরীক্ষার রুটিন </Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] my-2 font-bangla hover:text-red-400 duration-300'>পরীক্ষার ফলাফল</li>
                    </ul>
                </div>
            </div>
            <div className="lg:w-[18%]">
                <div className="">
                    <h2 className=' font-semibold text-[18px] text-white border-b-[1px] border-gray-300  font-bangla'>অভিভাবক</h2>
                    <ul className=' my-[20px] lg:my-0'>
                        <li className=' font-light text-gray-400 text-[14px] my-2 font-bangla hover:text-red-400 duration-300'> <Link to={'/garPanel'}>অভিভাবক প্যানেল</Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] my-2 font-bangla hover:text-red-400 duration-300'><Link to={'/Addinfor'}>ভর্তি তথ্য</Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] my-2 font-bangla hover:text-red-400 duration-300'> <Link to={'/Complaint'}>অভিযোগ</Link> </li>
                    </ul>
                </div>
            </div>
            <div className="lg:w-[18%]">
                <div className=" my-[30px]">
                    <h2 className=' text-[20px] text-white font-semibold font-bangla'>যোগাযোগের তথ‍্য</h2>
                    <p className=' font-medium text-white text-[12px] font-bangla'>উপজেলা পরিষদ রোড, পীরগঞ্জ, রংপুর।</p>
                    <p className=' font-medium text-white text-[12px] font-bangla'>ই-মেইল: sarcpir@yahoo.com</p>
                    <p className=' font-medium text-white text-[12px] font-bangla'>মোবাইল: +8801717-013948</p>
                </div>
            </div>
        </div>
        <div className=" lg:flex justify-between bg-slate-400 py-3" >
            <div className="lg:w-[30%]">
                <div className="">
                    <h3 className=' font-medium text-[16px] text-white'>© 2024. All rights reserved.</h3>
                </div>
            </div>
            <div className="lg:w-[70%] lg:my-0 my-2">
                <div className="">
                    <ul className=' flex justify-around'>
                        <li className=' font-medium text-[16px] text-white'>Student Mail</li>
                        <li className=' font-medium text-[16px] text-white'>APA</li>
                        <li className=' font-medium text-[16px] text-white'>Contact</li>
                        <li className=' font-medium text-[16px] text-white'>Support</li>
                        <li className=' font-medium text-[16px] text-white'> Credits</li>
                    </ul>
                </div>
            </div>
        </div>
      </Container>
      <ScrollToTop color='#38bdf8' top='300' smooth />
    </div>
  )
}

export default Footer
