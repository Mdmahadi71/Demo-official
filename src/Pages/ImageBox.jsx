import React, { useState } from 'react'
import Container from '../Components/Container'
import Sharee from '../Components/Sharee';




const ImageBox = () => {
    
    return (
        <div className='py-[20px]'>
            <Container>
                <div className=" py-3">
                    <h3 className=' font-semibold text-[25px] text-black font-bangla mx-3 lg:mx-0'>ছবিঘর</h3>
                </div>
                <div className=" lg:flex justify-between mx-3 lg:mx-0">
                    <div className="lg:w-[59%]">
                        


                        <div className=" py-2 px-4 bg-goved-ss  inline-block my-4 rounded-[7px] text-white hover:bg-goved-aa duration-300 ">
                            <button className=' text-[16px] font-medium'>Next Image</button>
                        </div>
                    </div>

                    <div className="lg:w-[39%]">
                      <Sharee/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ImageBox
