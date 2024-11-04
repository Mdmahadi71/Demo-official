import React from 'react'
import Container from '../Components/Container'
import Sharee from '../Components/Sharee';

const AddInformation = () => {
    return (
        <div className='py-[30px]'>
            <Container>
                <div className="">
                    <h2 className=' font-semibold text-[25px] text-black font-bangla mx-3 lg:mx-0'>ভর্তি তথ্য</h2>
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

export default AddInformation
