import React, { useState } from 'react'
import Container from './Container'
import Navlogo from '../assets/logo.png'
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link} from 'react-router-dom'
const Navbar = () => {
    let [bars, setbars] = useState(false)
    return (
        <div className=' py-[30px] bg-white '>
            <Container className={`relative`}>
                <div className=" lg:flex justify-between lg:py-0 py-[50px]">
                    <div className=" flex gap-x-3">
                        <div className="lg:w-[10%] w-[30%]">
                            <img src={Navlogo} alt="" />
                        </div>
                        <div className="lg:w-[60%] w-[70%]">
                            <h2 className=' lg:text-[30px] text-[25px] text-black font-bold'>সরকারি শাহ্ আব্দুর রউফ কলেজ</h2>
                            <h5 className=' lg:text-[20px] text-[15px] text-gray-500'>পীরগঞ্জ, রংপুর</h5>
                        </div>
                    </div>
                    <div className="lg:w-[30%] pt-[15px] text-center lg:text-start">
                        <h3 className=' text-[18px] font-medium text-black'>Estd. 1970, EIIN: 127938</h3>
                        <h5>ই-মেইল: <span className=' text-blue-400'>sarcpir@yahoo.com </span></h5>

                    </div>
                </div>

                <div className={`lg:flex border-t-[1px] border-gray-400 lg:static absolute duration-300  ${bars== true ? ' top-[0px] left-0 backdrop-opacity-10 backdrop-invert bg-teal-400/30 w-full' : 'top-[-380px] left-0  w-full'}`}>
                    <div className="lg:w-[16%] lg:border-b-[6px] lg:border-teal-500 lg:bg-teal-500  lg:text-center  py-[10px]">
                      <Link to={'/'}><h2 className='text-[17px] text-white font-medium '>প্রথম পাতা</h2></Link>  
                    </div>
                    
                    <div className="lg:w-[16%] relative lg:border-b-[6px] lg:border-green-600 lg:text-center text-black hover:bg-green-600 hover:text-white duration-300 py-[10px] group">
                    <Link to={'/coll'}><h2 className='text-[17px] font-medium'>কলেজ সম্পর্কে</h2> 
                        <ul className='absolute top-[55px] left-0 w-[250px] text-start bg-green-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-20'>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>অধ্যক্ষের কথা</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>কলেজের ইতিহাস</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>অবকাঠামো</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>সুবিধাসমূহ</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>শিক্ষক</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>কর্মচারী</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>শুন্যপদ</li>
                        </ul>
                        </Link>
                    </div>
                  
                    <div className="lg:w-[16%] relative lg:border-b-[6px] lg:border-cyan-600 lg:text-center text-black hover:bg-cyan-600 hover:text-white duration-300 py-[10px] group">
                        <Link to={'/student'}><h2 className='text-[17px]  font-medium '>শিক্ষার্থী</h2>
                        <ul className='absolute top-[55px] left-0 w-[250px] text-start bg-cyan-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-20'>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>নোটিশ বোর্ড</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>ক্লাস রুটিন</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>পরীক্ষার রুটিন</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>পরীক্ষার ফলাফল</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>একাডেমিক ক্যালেন্ডার</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>শিক্ষার্থীর তালিকা</li>
                        </ul>
                        </Link> 
                    </div>
                    <div className="lg:w-[16%] relative lg:border-b-[6px] lg:border-fuchsia-900 lg:text-center text-black hover:bg-fuchsia-900 hover:text-white duration-300 py-[10px] group ">
                    <Link to={'/guardian'}><h2 className='text-[17px]  font-medium '>অভিভাবক</h2>
                        <ul className='absolute top-[55px] left-0 w-[250px] text-start bg-fuchsia-900 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-20'>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-300'>অভিভাবক প্যানেল</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-300'>ভর্তি তথ্য</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-300'>অভিযোগ</li>

                        </ul>
                        </Link> 
                    </div>
                    <div className="lg:w-[16%] lg:border-b-[6px] lg:border-amber-600 lg:text-center text-black hover:bg-amber-600 hover:text-white duration-300 py-[10px] ">
                        <h2 className='text-[17px]] font-medium '>ছবিঘর</h2>
                    </div>
                    <div className="lg:w-[16%] lg:border-b-[6px] lg:border-orange-500 lg:text-center text-black hover:bg-orange-500 hover:text-white duration-300 py-[10px]">
                       <Link to={'/Contact'}><h2 className='text-[17px]  font-medium '>যোগাযোগ</h2></Link> 
                    </div>

                </div>
               
                    <div onClick={() => setbars(!bars)} className=" flex items-center gap-x-1 lg:hidden absolute top-0 right-0 py-2 px-3 bg-slate-500 rounded-[5px] text-white cursor-pointer">
                        <h2 className=' font-normal text-[17px] text-white'>Menu</h2>
                        {bars == true ? <RxCross1 /> : <FaBars />}
                    </div>
               
            </Container>
        </div>
    )
}

export default Navbar
