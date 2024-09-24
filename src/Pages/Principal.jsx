import React from 'react'
import Container from '../Components/Container'
import { FaSearch } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

const Principal = () => {
  return (
    <div className='py-[20px]'>
      <Container>
        <div className=" lg:flex justify-between">
          <div className="lg:w-[60%]">
            <h2 className=' font-semibold text-[25px] text-black font-bangla'>অধ্যক্ষের কথা</h2>
          </div>
          <div className="lg:w-[38%]">
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

export default Principal
