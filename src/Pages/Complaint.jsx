import React from 'react'
import Container from '../Components/Container'
import { FaSearch } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import Sharee from '../Components/Sharee';


const Complaint = () => {
    return (
        <div className='py-[20px]'>
            <Container>
                <div className="">
                    <h2 className=' font-semibold text-[25px] text-black font-bangla mx-3 lg:mx-0'>অভিযোগ</h2>

                    <div className=" lg:flex justify-between mx-3 lg:mx-0">

                        <div className="lg:w-[59%]"></div>

                        <div className="lg:w-[39%]">
                            <Sharee/>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Complaint
