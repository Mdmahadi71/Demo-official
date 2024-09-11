import React, { useState } from 'react'
import Container from '../Components/Container'
import { FaSearch } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import Imgebox1 from '../assets/Imb1.jpg'
import Imgebox2 from '../assets/Imb2.jpg'
import Imgebox3 from '../assets/Imb3.jpg'
import Imgebox4 from '../assets/Imb4.jpg'
import Imgebox5 from '../assets/Imb5.jpg'
import Imgebox6 from '../assets/Imb6.jpg'
import Imgebox7 from '../assets/Imb7.jpg'
import Imgebox11 from '../assets/Imb11.jpg'
import Imgebox9 from '../assets/Imb9.jpg'
import Imgebox10 from '../assets/Imb10.jpg'
import Imgebox12 from '../assets/Imb12.jpg'
import Imgebox13 from '../assets/Imb13.jpg'
import Imgebox14 from '../assets/Imb14.jpg'
import Imgebox15 from '../assets/Imb15.jpg'
import Imgebox16 from '../assets/Imb16.jpg'
import Imgebox17 from '../assets/Imb17.jpg'
import Imgebox18 from '../assets/Imb18.jpg'
import Imgebox19 from '../assets/Imb19.jpg'
import Imgebox20 from '../assets/Imb20.jpg'



const ImageBox = () => {
    let [imgnext , setimgnext] = useState(false)
    return (
        <div>
            <Container>
                <div className=" py-3">
                    <h3 className=' font-semibold text-[25px] text-black font-bangla'>ছবিঘর</h3>
                </div>
                <div className=" lg:flex justify-between">
                    <div className="lg:w-[59%]">
                        <div className=" flex justify-between py-2">
                            <div className="w-[24%]">
                                <img src={Imgebox1} alt="" />
                            </div>
                            <div className="w-[24%]">
                                <img src={Imgebox2} alt="" />
                            </div>
                            <div className="w-[24%]">
                                <img src={Imgebox3} alt="" />
                            </div>
                            <div className="w-[24%]">
                                <img src={Imgebox4} alt="" />
                            </div>
                        </div>
                        <div className=" flex justify-between py-2">
                            <div className="w-[24%]">
                                <img src={Imgebox5} alt="" />
                            </div>
                            <div className="w-[24%]">
                                <img src={Imgebox6} alt="" />
                            </div>
                            <div className="w-[24%]">
                                <img src={Imgebox7} alt="" />
                            </div>
                            <div className="w-[24%]">
                                <img src={Imgebox2} alt="" />
                            </div>
                        </div>
                        <div className=" flex justify-between py-2">
                            <div className="w-[24%]">
                                <img src={Imgebox9} alt="" />
                            </div>
                            <div className="w-[24%]">
                                <img src={Imgebox10} alt="" />
                            </div>
                            <div className="w-[24%]">
                                <img src={Imgebox3} alt="" />
                            </div>
                            <div className="w-[24%]">
                                <img src={Imgebox4} alt="" />
                            </div>
                        </div>


                        <div className=" py-2 px-4 bg-purple-500  inline-block my-4 rounded-[7px] text-white hover:bg-emerald-500 duration-300 ">
                            <button className=' text-[16px] font-medium'>Next Image</button>
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

export default ImageBox
