import React from 'react'
import Container from '../Components/Container'
import { FaLink, FaSearch } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Sharee from '../Components/Sharee';

const Teacher = () => {
    return (
        <div className='py-[20px]'>
            <Container>
                <div className=" lg:flex justify-between mx-3 lg:mx-0">
                    <div className="lg:w-[59%]">
                        <div className=" lg:flex gap-x-3 py-3">
                            
                            <div className="lg:w-[32%] py-3 lg:py-0  ">
                                <Link to={'/Pteacher'}>
                                <div className="flex gap-x-1 items-center w-full h-[80px] justify-center bg-goved-ss text-center
                                 hover:bg-goved-aa text-white duration-300 ">
                                    <FaLink className='text-[18px]' />
                                    <h2 className=' font-medium text-[18px] font-bangla '> বর্তমান শিক্ষকদের তালিকা</h2>
                                </div>
                                </Link>
                            </div>

                            <div className="lg:w-[32%] py-3 lg:py-0  ">
                            <Link to={'/pastteacher'}>
                                <div className="flex gap-x-1 items-center w-full h-[80px] justify-center bg-goved-ss text-center hover:bg-goved-aa text-white duration-300 ">
                                    <FaLink className='text-[18px]' />
                                    <h2 className=' font-medium text-[18px]  font-bangla'>প্রাক্তন শিক্ষকদের তালিকা</h2>
                                </div>
                            </Link>
                            </div>

                        </div>
                    </div>


                    <div className="lg:w-[39%]">
                        <Sharee/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Teacher
