import React, { useState } from 'react'
import Container from './Container'
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Menu = () => {
    let [bars,setbars] = useState(false)

    return (
        <div>
            <Container>
                <div className=" lg:flex ">
                    <div className="lg:w-[16%] lg:border-b-[6px] lg:border-teal-500 lg:bg-teal-500  lg:text-center  py-[10px]">
                        <h2 className='text-[17px] text-white font-medium '>প্রথম পাতা</h2>
                    </div>
                    <div className="lg:w-[16%] relative lg:border-b-[6px] lg:border-green-600 lg:text-center text-black hover:bg-green-600 hover:text-white duration-300 py-[10px] group">
                        <h2 className='text-[17px] font-medium'>কলেজ সম্পর্কে</h2>
                        <ul className='absolute top-[55px] left-0 w-[250px] text-start bg-green-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-20'>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>অধ্যক্ষের কথা</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>কলেজের ইতিহাস</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>অবকাঠামো</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>সুবিধাসমূহ</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>শিক্ষক</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>কর্মচারী</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>শুন্যপদ</li>
                        </ul>
                    </div>

                    <div className="lg:w-[16%] relative lg:border-b-[6px] lg:border-cyan-600 lg:text-center text-black hover:bg-cyan-600 hover:text-white duration-300 py-[10px] group">
                        <h2 className='text-[17px]  font-medium '>শিক্ষার্থী</h2>
                        <ul className='absolute top-[55px] left-0 w-[250px] text-start bg-cyan-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-20'>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>নোটিশ বোর্ড</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>ক্লাস রুটিন</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>পরীক্ষার রুটিন</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>পরীক্ষার ফলাফল</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>একাডেমিক ক্যালেন্ডার</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>শিক্ষার্থীর তালিকা</li>
                        </ul>
                    </div>
                    <div className="lg:w-[16%] relative lg:border-b-[6px] lg:border-fuchsia-900 lg:text-center text-black hover:bg-fuchsia-900 hover:text-white duration-300 py-[10px] group ">
                        <h2 className='text-[17px]  font-medium '>অভিভাবক</h2>
                        <ul className='absolute top-[55px] left-0 w-[250px] text-start bg-fuchsia-900 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-20'>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-300'>অভিভাবক প্যানেল</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-300'>ভর্তি তথ্য</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-300'>অভিযোগ</li>

                        </ul>
                    </div>
                    <div className="lg:w-[16%] lg:border-b-[6px] lg:border-amber-600 lg:text-center text-black hover:bg-amber-600 hover:text-white duration-300 py-[10px] ">
                        <h2 className='text-[17px]] font-medium '>ছবিঘর</h2>
                    </div>
                    <div className="lg:w-[16%] lg:border-b-[6px] lg:border-orange-500 lg:text-center text-black hover:bg-orange-500 hover:text-white duration-300 py-[10px]">
                        <h2 className='text-[17px]  font-medium '>যোগাযোগ</h2>
                    </div>

                </div>
                <div onClick={()=>setbars(!bars)} className=" flex items-center gap-x-1 lg:hidden">
                    <h2>Menu</h2>
                   {bars==true ? <RxCross1/> : <FaBars/>}
                </div>
            </Container>
        </div>
    )
}

export default Menu
