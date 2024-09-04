import React from 'react'
import Container from './Container'
import Navlogo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className=' py-[30px] bg-white border-b-[2px] border-gray-400'>
            <Container>
                <div className=" flex justify-between">
                    <div className=" flex gap-x-3">
                        <div className="w-[10%]">
                            <img src={Navlogo} alt="" />
                        </div>
                        <div className="w-[60%]">
                            <h2 className=' text-[30px] text-black font-bold'>সরকারি শাহ্ আব্দুর রউফ কলেজ</h2>
                            <h5 className=' text-[20px] text-gray-500'>পীরগঞ্জ, রংপুর</h5>
                        </div>
                    </div>
                    <div className="w-[30%] pt-[15px]">
                        <h3 className=' text-[18px] font-medium text-black'>Estd. 1970, EIIN: 127938</h3>
                        <h5>ই-মেইল: <span className=' text-blue-400'>sarcpir@yahoo.com </span></h5>
                        
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar
