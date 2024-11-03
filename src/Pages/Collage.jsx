import React from 'react'
import Container from '../Components/Container'
import { FaLink ,FaSearch } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Sharee from '../Components/Sharee';

const Collage = () => {
  return (
    <div className=' py-[40px]'>
        <Container>
            <div className=" lg:flex justify-between mx-3 lg:mx-0">
                <div className="lg:w-[60%]">
                    <h2 className=' font-semibold text-[24px] text-black font-bangla'>কলেজ সম্পর্কে</h2>
                    <div className=" lg:flex justify-between py-[22px] ">
                        
                        <div className="lg:w-[32%] py-3 lg:py-0">
                        <Link to={'/principal'}>
                            <div className=" flex gap-x-1 items-center w-full h-[80px] justify-center bg-goved-pp hover:bg-goved-aa text-white duration-300  ">
                                <FaLink className='text-[18px]'/>
                                <h2 className=' font-medium text-[18px]  font-bangla'> অধ্যক্ষের কথা</h2>
                            </div>
                            </Link>
                        </div>
                        
                        <div className="lg:w-[32%] py-3 lg:py-0 ">
                            <Link to={'/history'}>
                            <div className=" flex gap-x-1 items-center w-full h-[80px] justify-center bg-goved-pp hover:bg-goved-aa text-white duration-300 ">
                                <FaLink className='text-[18px]'/>
                                <h2 className=' font-medium text-[17px]  font-bangla'> কলেজের ইতিহাস</h2>
                            </div>
                            </Link>
                        </div>
                        <div className="lg:w-[32%] py-3 lg:py-0 ">
                            <Link to={'/infras'}>
                            <div className="flex gap-x-1 items-center w-full h-[80px] justify-center bg-goved-pp hover:bg-goved-aa text-white duration-300 ">
                                <FaLink className='text-[18px]'/>
                                <h2 className=' font-medium text-[18px]  font-bangla'>  অবকাঠামো</h2>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className=" lg:py-[22px] lg:flex justify-between ">
                        <div className="lg:w-[32%] py-3 lg:py-0">
                            <Link to={'/facilities'}>
                            <div className=" flex gap-x-2 items-center w-full h-[80px] justify-center bg-goved-pp hover:bg-goved-aa text-white duration-300 ">
                                <FaLink className='text-[18px]'/>
                                <h2 className='font-medium text-[18px] font-bangla'>সুবিধাসমূহ</h2>
                            </div>
                            </Link>
                        </div>
                        <div className="lg:w-[32%] py-3 lg:py-0">
                            <Link to={'/teacher'}>
                            <div className=" flex gap-x-2 items-center w-full h-[80px] justify-center bg-goved-pp hover:bg-goved-aa text-white duration-300 ">
                                <FaLink className='text-[18px]'/>
                                <h2 className='font-medium text-[18px] font-bangla'> শিক্ষক</h2>
                            </div>
                            </Link>
                        </div>
                        <div className="lg:w-[32%] py-3 lg:py-0">
                            <Link to={'/Pteacher'}>
                            <div className=" flex gap-x-1 items-center w-full h-[80px] justify-center bg-goved-pp hover:bg-goved-aa text-white duration-300 ">
                                <FaLink className='text-[18px]'/>
                                <h2 className='font-medium text-[18px] text-center font-bangla'> বর্তমান শিক্ষকদের তালিকা</h2>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className=" py-[22px] lg:flex justify-between ">
                        <div className="lg:w-[32%] py-3 lg:py-0">
                            <Link to={'/pastteacher'}>
                            <div className=" flex gap-x-1 items-center w-full h-[80px] justify-center bg-goved-pp hover:bg-goved-aa text-white duration-300 ">
                                <FaLink className='text-[18px] text-center'/>
                                <h2 className='font-medium text-[18px] text-center font-bangla'> প্রাক্তন শিক্ষকদের তালিকা</h2>
                            </div>
                            </Link>
                        </div>
                        <div className="lg:w-[32%] py-3 lg:py-0">
                            <Link to={'/employee'}>
                            <div className=" flex gap-x-2 items-center w-full h-[80px] justify-center bg-goved-pp hover:bg-goved-aa text-white duration-300 ">
                                <FaLink className='text-[18px]'/>
                                <h2 className='font-medium text-[18px] font-bangla'>  কর্মচারী</h2>
                            </div>
                            </Link>
                        </div>
                        <div className="lg:w-[32%] py-3 lg:py-0">
                            <Link to={'/empty'}>
                            <div className=" flex gap-x-1 items-center w-full h-[80px] justify-center bg-goved-pp hover:bg-goved-aa text-white duration-300 ">
                                <FaLink className='text-[18px]'/>
                                <h2 className='font-medium text-[18px] text-center font-bangla'>  শুন্যপদ</h2>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[37%]">
                    <Sharee/>
                
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Collage