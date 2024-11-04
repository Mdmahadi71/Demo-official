import React from 'react'
import Container from '../Components/Container'
import { FaSearch } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import Sharee from '../Components/Sharee';

const GuradialPanel = () => {
    return (
        <div className='py-[20px]'>
            <Container>
                <div className="">
                    <h2 className=' font-semibold text-[25px] text-black font-bangla mx-3 lg:mx-0'>অভিভাবক প্যানেল</h2>
                    <div className=" lg:flex justify-between mx-3 lg:mx-0">
                        <div className="lg:w-[59%]">
                            <div class=" mx-auto my-8">

                                <table class=" bg-white border border-gray-300">
                                    <thead>
                                        <tr>
                                            <th class="py-2 lg:px-4 px-2 border-b-2 border-gray-300 bg-goved-pp text-left text-white text-[16px] font-semibold font-bangla">ছবি</th>
                                            <th class="py-2 lg:px-4 px-2  border-b-2 border-gray-300 bg-goved-pp  text-left text-white text-[16px]  font-semibold font-bangla">সদস‍্যের নাম</th>
                                            <th class="py-2 lg:px-4 px-2  border-b-2 border-gray-300 bg-goved-pp  text-left text-white text-[16px] font-semibold font-bangla">পদবী</th>
                                            <th class="py-2 lg:px-4 px-2  border-b-2 border-gray-300 bg-goved-pp  text-left text-white text-[16px]  font-semibold font-bangla">শুরুর তারিখ</th>
                                            <th class="py-2 lg:px-4 px-2  border-b-2 border-gray-300 bg-goved-pp  text-left text-white text-[16px]  font-semibold hidden md:table-cell font-bangla">মেয়াদউত্তীর্ণের তারিখ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="py-2 lg:px-4 border-b border-gray-200">

                                            </td>
                                            <td class="py-2 px-4 border-b border-gray-200 text-[14px] text-gray-400 font-bangla">মো. রাশেদুন্নবী</td>
                                            <td class="py-2 px-4 border-b border-gray-200 text-[14px] text-gray-400 font-bangla">গ্রন্থকারিক</td>
                                            <td class="py-2 px-4 border-b border-gray-200">-</td>
                                            <td class="py-2 px-4 border-b border-gray-200 hidden md:table-cell">-</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-4 border-b border-gray-200">

                                            </td>
                                            <td class="py-2 px-4 border-b border-gray-200 text-[14px] text-gray-400 font-bangla">মো. সেলিম মিয়া</td>
                                            <td class="py-2 px-4 border-b border-gray-200 text-[14px] text-gray-400 font-bangla">অফিস সহায়ক</td>
                                            <td class="py-2 px-4 border-b border-gray-200">-</td>
                                            <td class="py-2 px-4 border-b border-gray-200 hidden md:table-cell">-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="lg:w-[39%]">
                           <Sharee/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default GuradialPanel
