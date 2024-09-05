import React from 'react'
import Container from '../Components/Container'
import { FaSearch } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <Container>
        <div className=""> 
            <h2 className=' font-semibold text-[24px] text-black'>যোগাযোগ</h2>
            <div className=" flex justify-between">
                <div className="w-[60%] py-4">
                    <div className="">
                        <h2 className=' font-normal text-[13px] text-black py-2'>রংপুর-বগুড়া মহাসড়কের পীরগঞ্জ উপজেলার বাস স্ট্যান্ড থেকে সোজা পশ্চিমে গেলে শাহ্ আব্দুর রউফ কলেজ নামে পরিচিতি।</h2>
                        <h4  className=' font-normal text-[13px] text-black py-1'>উপজেলা পরিষদ রোড, পীরগঞ্জ, রংপুর।</h4>
                        <h4  className=' font-normal text-[13px] text-black py-1'>ই-মেইল: sarcpir@yahoo.com</h4>
                        <h4  className=' font-normal text-[13px] text-black py-1'>মোবাইল: +8801717-013948</h4>
                        <div className="w-[60%]">
                            <div className=" py-[20px]">
                                <h2 className=' font-medium text-[18px] text-black'>Your Name (required)</h2>
                                <input type="text" className=' border-[1px] border-black w-full h-[40px] outline-none ' name="" id="" />
                            </div>
                            <div className=" py-3">
                                <h2 className=' font-medium text-[18px] text-black'>Your Email (required)</h2>
                                <input type="email" className=' border-[1px] border-black w-full h-[40px] outline-none ' name="" id="" />
                            </div>
                            <div className=" py-3">
                                <h2 className=' font-medium text-[18px] text-black'>Subject</h2>
                                <input type="text" className=' border-[1px] border-black w-full h-[40px] outline-none ' name="" id="" />
                            </div>
                            <div className=" py-3">
                                <h2 className=' font-medium text-[18px] text-black'>Subject</h2>
                                <input type="text" className=' border-[1px] border-black w-full h-[100px] outline-none ' name="" id="" />
                            </div>
                            <button className=' py-2 px-3 bg-slate-500 font-medium text-[18px] text-white'>Send</button>
                        </div>
                    </div>
                </div>
                <div className="w-[38%]">
                    <div className=" pt-[30px]">
                        <div className=" border-b-[1px] border-gray-400"></div>
                    
                        <div className=" py-[30px] text-center lg:text-start  ">
                            <input type="text" className=' lg:w-[290px] w-[250px] h-[50px] border-[1px] outline-none border-gray-400 ' name="" id="" />
                            <button className=' py-[8px] px-[26px] bg-black text-white lg:ml-3'><FaSearch/></button>
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

export default Contact
