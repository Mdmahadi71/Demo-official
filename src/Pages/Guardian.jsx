import React from 'react'
import { FaLink } from "react-icons/fa";
import Container from '../Components/Container'
import { Link } from 'react-router-dom';
import Sharee from '../Components/Sharee';

const Guardian = () => {
  return (
    <div className='py-[20px]'>
        <Container>
        <div className=" lg:flex justify-between mx-3 lg:mx-0">
                <div className="lg:w-[60%]">
                    <h2 className=' font-semibold text-[24px] text-black font-bangla py-5'>অভিভাবক</h2>
                    <div className=" lg:flex justify-between py-[22px] ">
                        <div className="lg:w-[32%] py-3 lg:py-0 ">
                            <Link to={'/garPanel'}>
                            <div className=" flex gap-x-1 items-center w-full h-[80px] justify-center bg-goved-ss hover:bg-goved-aa text-white duration-300  ">
                                <FaLink className='text-[18px]'/>
                                <h2 className=' font-medium text-[18px]  font-bangla'> অভিভাবক প্যানেল</h2>
                            </div>
                            </Link>
                        </div>
                        <div className="lg:w-[32%] py-3 lg:py-0 ">
                        <Link to={'/Addinfor'}>
                            <div className=" flex gap-x-1 items-center w-full h-[80px] justify-center bg-goved-ss hover:bg-goved-aa text-white duration-300 ">
                                <FaLink className='text-[18px]'/>
                                <h2 className=' font-medium text-[17px] font-bangla '> ভর্তি তথ্য</h2>
                            </div>
                            </Link>
                        </div>
                        <div className="lg:w-[32%] py-3 lg:py-0  ">
                        <Link to={'/Complaint'}>
                            <div className="flex gap-x-1 items-center w-full h-[80px] justify-center bg-goved-ss hover:bg-goved-aa text-white duration-300 ">
                                <FaLink className='text-[18px]'/>
                                <h2 className=' font-medium text-[18px]  font-bangla'>  অভিযোগ</h2>
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

export default Guardian