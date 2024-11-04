import React from 'react'
import Container from '../Components/Container'
import Sharee from '../Components/Sharee';

const Principal = () => {
  return (
    <div className='py-[20px]'>
      <Container>
        <div className=" lg:flex justify-between mx-3 lg:mx-0">
          <div className="lg:w-[60%]">
            <h2 className=' font-semibold text-[25px] text-black font-bangla'>অধ্যক্ষের কথা</h2>
          </div>
          <div className="lg:w-[38%]">
            <Sharee/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Principal
