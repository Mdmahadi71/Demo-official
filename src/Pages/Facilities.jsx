import React from 'react'
import Container from '../Components/Container'
import { FaSearch } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import Sharee from '../Components/Sharee';

const Facilities = () => {
  return (
    <div className=' py-[40px]'>
      <Container>
        <div className=" lg:flex justify-between mx-3 lg:mx-0">
          <div className="lg:w-[59%]">
          <h2 className=' font-semibold text-[25px] text-black font-bangla'>সুবিধাসমূহ</h2>
          </div>
          <div className="lg:w-[39%]">
            <Sharee/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Facilities
