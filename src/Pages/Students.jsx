import React from 'react'
import Container from '../Components/Container'
import { FaLink ,FaSearch } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Sharee from '../Components/Sharee';

const Students = () => {
  return (
    <div className='py-[20px]'>
        <Container>
        <div className=" lg:flex justify-between mx-3 lg:mx-0">
                <div className="lg:w-[60%]">
                    <h2 className=' font-semibold text-[24px] text-black font-bangla py-7'>শিক্ষার্থী</h2>
                    <div className=" lg:flex justify-between py-[22px] ">
                        
                        <div className="lg:w-[32%] py-3 lg:py-0 ">
                            <Link to={'/class'}>
                            <div className=" flex gap-x-1 items-center w-full h-[80px] justify-center bg-goved-pp hover:bg-goved-aa text-white duration-300  ">
                                <FaLink className='text-[18px]'/>
                                <h2 className=' font-medium text-[18px] font-bangla '>  ক্লাস রুটিন</h2>
                            </div>
                            </Link>
                        </div>

                        <div className="lg:w-[32%] py-3 lg:py-0 ">
                        <Link to={'/ExamRou'}>
                            <div className=" flex gap-x-1 items-center w-full h-[80px] justify-center bg-goved-pp hover:bg-goved-aa text-white duration-300 ">
                                <FaLink className='text-[18px]'/>
                                <h2 className=' font-medium text-[17px]  font-bangla'> পরীক্ষার রুটিন</h2>
                            </div>
                            </Link>
                        </div>

                        <div className="lg:w-[32%] py-3 lg:py-0  ">
                            <div className="flex gap-x-1 items-center w-full h-[80px] justify-center bg-goved-pp hover:bg-goved-aa text-white duration-300 ">
                                <FaLink className='text-[18px]'/>
                                <h2 className=' font-medium text-[18px]  font-bangla'> পরীক্ষার ফলাফল</h2>
                            </div>
                        </div>

                    </div>

                    <div className=" lg:py-[22px] lg:flex justify-between ">

                        <div className="lg:w-[32%] py-3 lg:py-0">
                       
                            <div className=" flex gap-x-2 items-center w-full h-[80px] justify-center bg-goved-pp hover:bg-goved-aa text-white duration-300 ">
                                <FaLink className='text-[18px]'/>
                                <h2 className='font-medium text-[18px] font-bangla'> একাডেমিক ক্যালেন্ডার</h2>
                            </div>
                        </div>


                        <div className="lg:w-[32%] py-3 lg:py-0">
                            <div className=" flex gap-x-2 items-center w-full h-[80px] justify-center bg-goved-pp hover:bg-goved-aa text-white duration-300 ">
                                <FaLink className='text-[18px]'/>
                                <h2 className='font-medium text-[18px] font-bangla'>  শিক্ষার্থীদের তালিকা</h2>
                            </div>
                        </div>


                        <div className="lg:w-[32%] py-3 lg:py-0">
                            <div className=" flex  items-center  w-full h-[80px] justify-center text-center bg-goved-pp hover:bg-goved-aa text-white duration-300 ">
                                <FaLink className='text-[18px]'/>
                                <h2 className='font-medium text-[18px] text-center font-bangla'>  কৃতি শিক্ষার্থীদের তালিকা</h2>
                            </div>
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

export default Students