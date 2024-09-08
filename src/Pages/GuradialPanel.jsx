import React from 'react'
import Container from '../Components/Container'
import { FaSearch } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

const GuradialPanel = () => {
    return (
        <div>
            <Container>
                <div className="">
                    <h2 className=' font-semibold text-[25px] text-black'>অভিভাবক প্যানেল</h2>
                    <div className=" lg:flex justify-between">
                        <div className="lg:w-[59%]">
                            <div class=" mx-auto my-8">
                            
                                <table class=" bg-white border border-gray-300">
                                    <thead>
                                        <tr>
                                            <th class="py-2 lg:px-4 px-2 border-b-2 border-gray-300 bg-emerald-500 text-left text-white text-[13px] font-semibold">ছবি</th>
                                            <th class="py-2 lg:px-4 px-2  border-b-2 border-gray-300 bg-emerald-500 text-left text-white text-[13px]  font-semibold">সদস‍্যের নাম</th>
                                            <th class="py-2 lg:px-4 px-2  border-b-2 border-gray-300 bg-emerald-500 text-left text-white text-[13px] font-semibold">পদবী</th>
                                            <th class="py-2 lg:px-4 px-2  border-b-2 border-gray-300 bg-emerald-500 text-left text-white text-[13px]  font-semibold">শুরুর তারিখ</th>
                                            <th class="py-2 lg:px-4 px-2  border-b-2 border-gray-300 bg-emerald-500 text-left text-white text-[13px]  font-semibold hidden md:table-cell ">মেয়াদউত্তীর্ণের তারিখ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="py-2 lg:px-4 border-b border-gray-200">

                                            </td>
                                            <td class="py-2 px-4 border-b border-gray-200 text-[12px] text-gray-400">মো. রাশেদুন্নবী</td>
                                            <td class="py-2 px-4 border-b border-gray-200 text-[12px] text-gray-400">গ্রন্থকারিক</td>
                                            <td class="py-2 px-4 border-b border-gray-200">-</td>
                                            <td class="py-2 px-4 border-b border-gray-200 hidden md:table-cell">-</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b border-gray-200">
                                               
                                            </td>
                                            <td class="py-2 px-4 border-b border-gray-200 text-[12px] text-gray-400">মো. সেলিম মিয়া</td>
                                            <td class="py-2 px-4 border-b border-gray-200 text-[12px] text-gray-400">অফিস সহায়ক</td>
                                            <td class="py-2 px-4 border-b border-gray-200">-</td>
                                            <td class="py-2 px-4 border-b border-gray-200 hidden md:table-cell">-</td>
                                        </tr>
                                    </tbody>
                                </table>
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
                </div>
            </Container>
        </div>
    )
}

export default GuradialPanel
