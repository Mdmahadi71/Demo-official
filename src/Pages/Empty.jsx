import React from 'react'
import Container from '../Components/Container'
import Sharee from '../Components/Sharee';

const Empty = () => {
    return (
        <div className='py-[20px]'>
            <Container>
                <div className=" lg:flex justify-between mx-3 lg:mx-0">
                    <div className="lg:w-[59%]">
                        <div className="">
                            <h2 className=' font-semibold text-[25px] text-black font-bangla'>শুন্যপদ</h2>
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

export default Empty