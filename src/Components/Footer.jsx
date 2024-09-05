import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <div className='bg-stone-800 py-[40px]'>
      <Container>
        <div className=" lg:flex justify-between">
            <div className="lg:w-[18%]">
                <div className=" py-[30px] text-center lg:text-start">
                    <h3 className=' text-[20px] text-white font-semibold'>সরকারি শাহ্ আব্দুর রউফ কলেজ</h3>
                    <p className=' font-medium text-white text-[15px]'>পীরগঞ্জ, রংপুর</p>
                </div>
            </div>
            <div className="lg:w-[18%]">
                <div className="">
                    <h2 className=' font-semibold text-[18px] text-white border-b-[1px] border-gray-300 '>শিক্ষক</h2>
                    <ul className=' py-[20px] lg:py-0'> 
                        <li className=' font-light text-gray-400 text-[14px] py-2'>বর্তমান শিক্ষকদের তালিকা</li>
                        <li className=' font-light text-gray-400 text-[14px] py-2'>শুন্যপদের তালিকা</li>
                        <li className=' font-light text-gray-400 text-[14px] py-2'>প্রাক্তন শিক্ষকদের তালিকা</li>
                        <li className=' font-light text-gray-400 text-[14px] py-2'>৩য় ও ৪র্থ শ্রেণির কর্মচারী</li>
                    </ul>
                </div>
            </div>
            <div className="lg:w-[18%]">
                <div className="">
                    <h2 className=' font-semibold text-[18px] text-white border-b-[1px] border-gray-300 '>শিক্ষার্থী</h2>
                    <ul className=' py-[20px] lg:py-0'>
                        <li className=' font-light text-gray-400 text-[14px] py-2'>শিক্ষার্থীদের তালিকা</li>
                        <li className=' font-light text-gray-400 text-[14px] py-2'>নোটিশবোর্ড</li>
                        <li className=' font-light text-gray-400 text-[14px] py-2'>ক্লাস রুটিন</li>
                        <li className=' font-light text-gray-400 text-[14px] py-2'>পরীক্ষার রুটিন</li>
                        <li className=' font-light text-gray-400 text-[14px] py-2'>পরীক্ষার ফলাফল</li>
                    </ul>
                </div>
            </div>
            <div className="lg:w-[18%]">
                <div className="">
                    <h2 className=' font-semibold text-[18px] text-white border-b-[1px] border-gray-300 '>অভিভাবক</h2>
                    <ul className=' py-[20px] lg:py-0'>
                        <li className=' font-light text-gray-400 text-[14px] py-2'>অভিভাবক প্যানেল</li>
                        <li className=' font-light text-gray-400 text-[14px] py-2'>ভর্তি তথ্য</li>
                        <li className=' font-light text-gray-400 text-[14px] py-2'>অভিযোগ</li>
                    </ul>
                </div>
            </div>
            <div className="lg:w-[18%]">
                <div className=" py-[30px]">
                    <h2 className=' text-[20px] text-white font-semibold'>যোগাযোগের তথ‍্য</h2>
                    <p className=' font-medium text-white text-[12px]'>উপজেলা পরিষদ রোড, পীরগঞ্জ, রংপুর।</p>
                    <p className=' font-medium text-white text-[12px]'>ই-মেইল: sarcpir@yahoo.com</p>
                    <p className=' font-medium text-white text-[12px]'>মোবাইল: +8801717-013948</p>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
