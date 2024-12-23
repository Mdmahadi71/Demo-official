import React from 'react'
import {FaSearch } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
const Sharee = () => {
  return (
      <div>
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
                      <div className=" bg-goved-pp h-[30px]  flex justify-center items-center rounded-b-[5px]">
                          <AiOutlineLike className='text-white' />
                          <h2 className='font-medium text-[16px] text-white'>Like</h2>
                      </div>
                  </div>

                  <div className=" bg-goved-pp h-[40px] w-[70px] text-center my-[20px] leading-[40px] rounded-[5px]"><h2 className=' font-medium text-[16px] text-white'>Share</h2></div>
              </div>
          </div>
      </div>
  )
}

export default Sharee
