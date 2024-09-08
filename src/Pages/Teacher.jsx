import React from 'react'
import Container from '../Components/Container'
import { FaLink, FaSearch } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

const Teacher = () => {
    return (
        <div>
            <Container>
                <div className=" lg:flex justify-between">
                    <div className="lg:w-[59%]">
                        <div className=" lg:flex gap-x-3 py-3">
                            <div className="lg:w-[32%] py-3 lg:py-0  ">
                                <div className="flex gap-x-1 items-center w-full h-[80px] justify-center bg-red-600 text-center hover:bg-neutral-800 text-white duration-300 ">
                                    <FaLink className='text-[18px]' />
                                    <h2 className=' font-medium text-[18px] '> বর্তমান শিক্ষকদের তালিকা</h2>
                                </div>
                            </div>
                            <div className="lg:w-[32%] py-3 lg:py-0  ">
                                <div className="flex gap-x-1 items-center w-full h-[80px] justify-center bg-red-600 text-center hover:bg-neutral-800 text-white duration-300 ">
                                    <FaLink className='text-[18px]' />
                                    <h2 className=' font-medium text-[18px] '>প্রাক্তন শিক্ষকদের তালিকা</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[39%]">
                        <div className=" pt-[30px]">
                            <div className=" border-b-[1px] border-gray-400"></div>

                            <div className=" py-[30px] text-center lg:text-start  ">
                                <input type="text" className=' lg:w-[290px] w-[250px] h-[50px] border-[1px] outline-none border-gray-400 ' name="" id="" />
                                <button className=' py-[8px] px-[26px] bg-black text-white lg:ml-3'><FaSearch /></button>
                            </div>
                            <div className=" border-b-[1px] border-gray-400 mt-[20px]"></div>
                            <div className="">
                                <div className=" border-b-[1px] border-gray-400 my-[30px]"></div>
                            </div>
                            <div className=" w-[100px] mx-auto  ">
                                <div className=" border-[1px] border-gray-400  w-[70px]  text-center rounded-[5px]">
                                    <h2 className=' font-medium text-[16px] text-black  py-2'>5555k</h2>
                                    <div className=" bg-sky-400 h-[30px]  flex justify-center items-center rounded-b-[5px]">
                                        <AiOutlineLike className='text-white' />
                                        <h2 className='font-medium text-[16px] text-white'>Like</h2>
                                    </div>
                                </div>

                                <div className=" bg-sky-500 h-[40px] w-[70px] text-center my-[20px] leading-[40px] rounded-[5px]"><h2 className=' font-medium text-[16px] text-white'>Share</h2></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Teacher
