import React, { useEffect, useState } from 'react'
import Container from './Container'
import Navlogo from '../assets/logo.png'
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link} from 'react-router-dom'
const Navbar = () => {
    let [bars, setbars] = useState(false)
    let [ActiveMenu , setActiveMenu] = useState(localStorage.getItem('ActiveMenu' | ''))
    

    useEffect(()=>{
        localStorage.setItem('ActiveMenu',ActiveMenu)
    },[ActiveMenu])
    return (
        <div className=' py-[30px] bg-white '>
            <Container className={`relative`}>
                <div className=" lg:flex justify-between lg:py-0 py-[50px]">
                    <div className=" flex gap-x-3">
                        <div className="lg:w-[10%] w-[30%]">
                            <Link to={'/'}>
                            <img src={Navlogo} alt="" />
                            </Link>
                        </div>
                        <div className="lg:w-[60%] w-[70%]">
                            <h2 className=' lg:text-[30px] text-[25px] text-black font-bold'>সরকারি শাহ্ আব্দুর রউফ কলেজ</h2>
                            <h5 className=' lg:text-[20px] text-[15px] text-gray-500'>পীরগঞ্জ, রংপুর</h5>
                        </div>
                    </div>
                    <div className="lg:w-[30%] pt-[15px] text-center lg:text-start">
                        <h3 className=' text-[18px] font-medium text-black'>Estd. 1970, EIIN: 127938</h3>
                        <h5>ই-মেইল: <span className=' text-blue-400'>sarcpir@yahoo.com </span></h5>

                    </div>
                </div>

                <div className={`lg:flex border-t-[1px] border-gray-400 lg:static absolute duration-300  ${bars== true ? ' top-[0px] left-0 backdrop-opacity-10 backdrop-invert bg-teal-400/30 w-full' : 'top-[-380px] left-0  w-full'}`}>
                    <div onClick={() => setActiveMenu('home')} className={`lg:w-[16%] lg:border-b-[6px] border-teal-500 text-center py-[10px] ${ActiveMenu === 'home' ? ' text-white bg-teal-500' :' bg-[#FFFFFF] text-black'}`}>
                      <Link to={'/'}><h2 className='text-[17px]  font-medium '>প্রথম পাতা</h2></Link>  
                    </div>
                    
                    <div onClick={() => setActiveMenu('about')} className={`lg:w-[16%] relative lg:border-b-[6px] border-green-600 text-center  py-[10px] group ${ActiveMenu === 'about' ? ' text-white bg-green-600' :' bg-[#FFFFFF] text-black'} `}>
                    <Link to={'/coll'}><h2 className='text-[17px] font-medium'>কলেজ সম্পর্কে</h2> 
                        <ul className='absolute top-[55px] left-0 w-[250px] text-start bg-green-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-20'>
                         <Link to={'/principal'} >  <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200 text-white'>অধ্যক্ষের কথা</li></Link>
                         <Link to={'/history'} >  <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200 text-white'>কলেজের ইতিহাস</li></Link>
                         <Link to={'/infras'}><li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200 text-white'>অবকাঠামো</li></Link> 
                         <Link to={'/facilities'}>  <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200 text-white'>সুবিধাসমূহ</li></Link> 
                         <Link to={'/teacher'}><li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200 text-white'>শিক্ষক</li></Link> 
                         <Link to={'/employee'}> <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200 text-white'>কর্মচারী</li></Link>
                          <Link to={'/empty'}>  <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200 text-white'>শুন্যপদ</li></Link>
                        </ul>
                        </Link>
                    </div>
                  
                    <div onClick={() => setActiveMenu('stude')} className={`lg:w-[16%] relative lg:border-b-[6px] lg:border-cyan-600 text-center py-[10px] group ${ ActiveMenu === "stude" ? ' text-white bg-cyan-600' :'bg-[#FFFFFF] text-black'}`}>
                        <Link to={'/student'}><h2 className='text-[17px]  font-medium '>শিক্ষার্থী</h2>
                        <ul className='absolute top-[55px] left-0 w-[250px] text-start bg-cyan-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-20'>
                          <Link to={'/notice'}> <li onClick={() =>setActiveMenu('noti')} className={`border-b-[1px] border-gray-400 py-[8px] pl-[10px]  ${ActiveMenu === 'noti' ? 'text-[13px]  font-medium bg-yellow-950 text-white  '  : 'text-[13px]  font-medium bg-cyan-600 text-white' }`}>নোটিশ বোর্ড</li></Link>
                          <Link to={'/class'}> <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>ক্লাস রুটিন</li></Link> 
                         <Link to={'/ExamRou'}> <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>পরীক্ষার রুটিন</li></Link> 
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>পরীক্ষার ফলাফল</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>একাডেমিক ক্যালেন্ডার</li>
                            <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200'>শিক্ষার্থীর তালিকা</li>
                        </ul>
                        </Link> 
                    </div>
                    <div onClick={() => setActiveMenu('Guar')} className={`lg:w-[16%] relative lg:border-b-[6px] lg:border-fuchsia-900 lg:text-center  py-[10px] group ${ActiveMenu ==='Guar' ? ' text-white bg-fuchsia-900' :'bg-[#FFFFFF] text-black'} `}>
                    <Link to={'/guardian'}><h2 className='text-[17px]  font-medium '>অভিভাবক</h2>
                        <ul className='absolute top-[55px] left-0 w-[250px] text-start bg-fuchsia-900 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-20'>
                           <Link to={'/garPanel'} ><li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-300 text-white'>অভিভাবক প্যানেল</li></Link>
                          <Link to={'/Addinfor'} > <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-300 text-white'>ভর্তি তথ্য</li></Link>
                          <Link to={'/Complaint'}><li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-300 text-white'>অভিযোগ</li></Link> 

                        </ul>
                        </Link> 
                    </div>
                    <div onClick={() => setActiveMenu('picture')} className={`lg:w-[16%] lg:border-b-[6px] border-orange-900 lg:text-center  py-[10px] ${ActiveMenu === 'picture' ? 'text-white bg-orange-900' : 'bg-[#FFFFFF] text-black'}`}>
                        <h2 className='text-[17px] font-medium '>ছবিঘর</h2>
                    </div>
                    <div onClick={() => setActiveMenu('cont')} className={`lg:w-[16%] lg:border-b-[6px] lg:border-orange-500 lg:text-center  py-[10px] ${ActiveMenu === 'cont' ? 'text-white bg-orange-600' : 'bg-[#FFFFFF] text-black'}`}>
                       <Link to={'/Contact'}><h2 className='text-[17px]  font-medium '>যোগাযোগ</h2></Link> 
                    </div>

                </div>
               
                    <div onClick={() => setbars(!bars)} className=" flex items-center gap-x-1 lg:hidden absolute top-0 right-0 py-2 px-3 bg-slate-500 rounded-[5px] text-white cursor-pointer">
                        <h2 className=' font-normal text-[17px] text-white'>Menu</h2>
                        {bars == true ? <RxCross1 /> : <FaBars />}
                    </div>
               
            </Container>
        </div>
    )
}

export default Navbar
