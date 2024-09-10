import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <div className='bg-stone-800 py-[40px]'>
      <Container>
        <div className=" lg:flex justify-between">
            <div className="lg:w-[18%]">
                <div className=" py-[30px] text-center lg:text-start">
                    <h3 className=' text-[20px] text-white font-semibold font-bangla'>সরকারি শাহ্ আব্দুর রউফ কলেজ</h3>
                    <p className=' font-medium text-white text-[15px] font-bangla'>পীরগঞ্জ, রংপুর</p>
                </div>
                <div className=" w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20514.279503420355!2d89.2898861493001!3d25.43002572100525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcdbceb2c86da9%3A0xfe20f5dc599f7327!2sGovt.%20Shah%20Abdur%20Rouf%20College!5e0!3m2!1sen!2sbd!4v1725991595970!5m2!1sen!2sbd" width="250px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="lg:w-[18%]">
                <div className="">
                    <h2 className=' font-semibold text-[18px] text-white border-b-[1px] border-gray-300  font-bangla'>শিক্ষক</h2>
                    <ul className=' py-[20px] lg:py-0'> 
                        <li className=' font-light text-gray-400 text-[14px] py-2 font-bangla'> <Link to={'/Pteacher'}>বর্তমান শিক্ষকদের তালিকা </Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] py-2 font-bangla'><Link to={'/empty'}> শুন্যপদের তালিকা </Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] py-2 font-bangla'><Link to={'/pastteacher'}> প্রাক্তন শিক্ষকদের তালিকা </Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] py-2 font-bangla'>৩য় ও ৪র্থ শ্রেণির কর্মচারী</li>
                    </ul>
                </div>
            </div>
            <div className="lg:w-[18%]">
                <div className="">
                    <h2 className=' font-semibold text-[18px] text-white border-b-[1px] border-gray-300  font-bangla'>শিক্ষার্থী</h2>
                    <ul className=' py-[20px] lg:py-0'>
                        <li className=' font-light text-gray-400 text-[14px] py-2 font-bangla'>শিক্ষার্থীদের তালিকা</li>
                        <li className=' font-light text-gray-400 text-[14px] py-2 font-bangla'><Link to={'/notice'}>নোটিশবোর্ড </Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] py-2 font-bangla'><Link to={'/class'}>ক্লাস রুটিন </Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] py-2 font-bangla'> <Link to={'/ExamRou'}>পরীক্ষার রুটিন </Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] py-2 font-bangla'>পরীক্ষার ফলাফল</li>
                    </ul>
                </div>
            </div>
            <div className="lg:w-[18%]">
                <div className="">
                    <h2 className=' font-semibold text-[18px] text-white border-b-[1px] border-gray-300  font-bangla'>অভিভাবক</h2>
                    <ul className=' py-[20px] lg:py-0'>
                        <li className=' font-light text-gray-400 text-[14px] py-2 font-bangla'> <Link to={'/garPanel'}>অভিভাবক প্যানেল</Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] py-2 font-bangla'><Link to={'/Addinfor'}>ভর্তি তথ্য</Link> </li>
                        <li className=' font-light text-gray-400 text-[14px] py-2 font-bangla'> <Link to={'/Complaint'}>অভিযোগ</Link> </li>
                    </ul>
                </div>
            </div>
            <div className="lg:w-[18%]">
                <div className=" py-[30px]">
                    <h2 className=' text-[20px] text-white font-semibold font-bangla'>যোগাযোগের তথ‍্য</h2>
                    <p className=' font-medium text-white text-[12px] font-bangla'>উপজেলা পরিষদ রোড, পীরগঞ্জ, রংপুর।</p>
                    <p className=' font-medium text-white text-[12px] font-bangla'>ই-মেইল: sarcpir@yahoo.com</p>
                    <p className=' font-medium text-white text-[12px] font-bangla'>মোবাইল: +8801717-013948</p>
                </div>
            </div>
        </div>
      </Container>
      <ScrollToTop color='#38bdf8' top='300' smooth />
    </div>
  )
}

export default Footer
