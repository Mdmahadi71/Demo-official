import React, { useEffect, useState } from 'react'
import Container from './Container'
import Navlogo from '../assets/logo.png'
import { FaBars ,FaHome  } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom'
import bangGovd from '../assets/bdGovd.png'



const Navbar = () => {
    let [bars, setbars] = useState(false)
    let [ActiveMenu, setActiveMenu] = useState(localStorage.getItem('ActiveMenu' || ''))
    let [emailbars ,setemailbars] = useState(false)


    useEffect(() => {
        localStorage.setItem('ActiveMenu', ActiveMenu)
    }, [ActiveMenu])

    return (
        <div className='  bg-white '>
            <Container className={`relative`}>

                <div className=" relative bg-[url('../src/assets/backgrount.png')] bg-cover bg-center bg-no-repeat py-[15px] lg:mt-0 mt-[30px]">
                    <div class="relative flex overflow-x-hidden">
                        <div class="py-[10px] animate-marquee whitespace-nowrap">
                            <span class="text-[18px] text-white mx-4 font-medium font-bangla ">জন্মাষ্টমী উপলক্ষ্যে কলেজ বন্ধরবিবার, আগস্ট 25, 2024 |</span>
                            <span class="text-[18px] text-white mx-4 font-medium font-bangla">উচ্চ মাধ্যমিক ১ম বর্ষের বৃত্তি সংক্রান্ত জরুরী বিজ্ঞপ্তি
                                রবিবার, আগস্ট 18, 2024 |</span>
                            <span class="text-[18px] text-white mx-4 font-medium font-bangla">উচ্চ মাধ্যমিক শ্রেনির ক্লাস শুরু
                                সোমবার, আগস্ট 12, 2024 |</span>
                        </div>
                    </div>
                    <div className="  py-2 px-4 inline-block bg-red-600 absolute top-[20px] left-0">
                        <h2 className=' text-[16px] text-white font-medium'>Letas News</h2>
                    </div>
                </div>



                <div className=" flex justify-between items-center py-[20px]  relative">
                    <div className="  top-0 left-0 w-[120px] h-[120px] justify-start hidden md:table-caption ">
                        <img src={bangGovd} className=' w-full  h-full' alt="" />
                    </div>

                    <div className=" w-full flex items-center justify-center text-center ">
                        <div className=" lg:w-[10%] w-[15%]">
                            <Link to={'/'}>
                              <img src={Navlogo} className=' w-full  h-full' alt="" />
                            </Link>
                        </div>
                        <div className=" ">
                            <h2 className=' lg:text-[30px] text-[25px] font-bangla text-black  text-center font-bold'>সরকারি শাহ্ আব্দুর রউফ কলেজ</h2>
                            <h5 className=' lg:text-[20px] font-bangla text-[16px]  text-center text-gray-900'>পীরগঞ্জ, রংপুর</h5>
                            <h4 className=' lg:text-[15px] font-bangla text-[12px]  text-center text-gray-500'>স্থাপিতঃ ১৯৭০ইং</h4>
                        </div>
                    </div>
                    <div onClick={()=>setemailbars(!emailbars)} className=" cursor-pointer">
                        
                        {emailbars == true ? <RxCross1 className=' text-[30px]'/> : <FaBars className=' text-[30px]'/> }
                    </div>

                    <div className={`w-[200px]  text-center p-[10px] rounded-[10px] absolute duration-200 ${emailbars==true ? ' top-[0] right-[30px] bg-gradient-to-r from-violet-500 to-fuchsia-500 ' : ' top-[-200px] right-[30px] opacity-0 '}`}>
                        <h3 className=' text-[18px] font-medium text-white'>EIIN: 127938</h3>
                        <h5 className=' font-bangla text-[16px] text-white font-medium'>ই-মেইল: <span className=' text-white'>sarcpir@yahoo.com </span></h5>
                        <button className=' py-2 px-4  bg-cyan-400 font-medium text-[16px] text-white '>Student Log In</button>
                    </div>

                   
                </div>

                <div className={`lg:flex border-t-[1px] border-gray-400 lg:static absolute duration-300 z-20  ${bars == true ? ' top-[-30px] left-0 backdrop-opacity-10 backdrop-invert bg-red-400/30 lg:w-full w-[60%]' : 'top-[-380px] left-0 lg:w-full  w-[60%]'}`}>
                    <div onClick={() => setActiveMenu('home')} className={`lg:w-[16%] lg:border-b-[6px] border-teal-500 lg:text-center py-[10px] ${ActiveMenu === 'home' ? ' text-white bg-teal-500' : ' lg:bg-[#FFFFFF] bg-[hotpink] lg:text-black text-white'}`}>
                        <Link to={'/'}><h2 className='text-[17px]  font-medium font-bangla items-center '> প্রথম পাতা</h2></Link>
                    </div>

                    <div onClick={() => setActiveMenu('about')} className={`lg:w-[16%] relative lg:border-b-[6px] border-green-600 lg:text-center  py-[10px] group ${ActiveMenu === 'about' ? ' text-white bg-green-600' : 'lg:bg-[#FFFFFF] bg-[hotpink] lg:text-black text-white'} `}>
                        <Link to={'/coll'}><h2 className='text-[17px] font-medium font-bangla'>কলেজ সম্পর্কে</h2>
                            <ul className='absolute top-[55px] left-0 w-[250px] text-start bg-green-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-20'>
                                <Link to={'/principal'} >  <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>অধ্যক্ষের কথা</li></Link>
                                <Link to={'/history'} >  <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>কলেজের ইতিহাস</li></Link>
                                <Link to={'/infras'}><li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>অবকাঠামো</li></Link>
                                <Link to={'/facilities'}>  <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>সুবিধাসমূহ</li></Link>
                                <Link to={'/teacher'}><li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>শিক্ষক</li></Link>
                                <Link to={'/employee'}> <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>কর্মচারী</li></Link>
                                <Link to={'/empty'}>  <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>শুন্যপদ</li></Link>
                            </ul>
                        </Link>
                    </div>

                    <div onClick={() => setActiveMenu('stude')} className={`lg:w-[16%] relative lg:border-b-[6px] lg:border-cyan-600 lg:text-center py-[10px] group ${ActiveMenu === "stude" ? ' text-white bg-cyan-600' : 'lg:bg-[#FFFFFF] bg-[hotpink] lg:text-black text-white'}`}>
                        <Link to={'/student'}><h2 className='text-[17px]  font-medium font-bangla '>শিক্ষার্থী</h2>
                            <ul className='absolute top-[55px] left-0 w-[250px] text-start bg-cyan-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-20'>
                                <Link to={'/notice'}> <li onClick={() => setActiveMenu('noti')} className={`border-b-[1px] border-gray-400 py-[8px] pl-[10px]  ${ActiveMenu === 'noti' ? 'text-[13px]  font-medium bg-yellow-950 text-white  font-bangla ' : 'text-[13px]  font-bangla font-medium bg-cyan-600 text-white'}`}>নোটিশ বোর্ড</li></Link>
                                <Link to={'/class'}> <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>ক্লাস রুটিন</li></Link>
                                <Link to={'/ExamRou'}> <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>পরীক্ষার রুটিন</li></Link>
                                <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>পরীক্ষার ফলাফল</li>
                                <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>একাডেমিক ক্যালেন্ডার</li>
                                <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>শিক্ষার্থীর তালিকা</li>
                            </ul>
                        </Link>
                    </div>
                    <div onClick={() => setActiveMenu('Guar')} className={`lg:w-[16%] relative lg:border-b-[6px] lg:border-fuchsia-900 lg:text-center  py-[10px] group ${ActiveMenu === 'Guar' ? ' text-white bg-fuchsia-900' : 'lg:bg-[#FFFFFF] bg-[hotpink] lg:text-black text-white'} `}>
                        <Link to={'/guardian'}><h2 className='text-[17px]  font-medium font-bangla'>অভিভাবক</h2>
                            <ul className='absolute top-[55px] left-0 w-[250px] text-start bg-fuchsia-900 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-20'>
                                <Link to={'/garPanel'} ><li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-300 text-white font-bangla'>অভিভাবক প্যানেল</li></Link>
                                <Link to={'/Addinfor'} > <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-300 text-white font-bangla'>ভর্তি তথ্য</li></Link>
                                <Link to={'/Complaint'}><li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-yellow-950 border-b-[1px] border-gray-400 duration-300 text-white font-bangla'>অভিযোগ</li></Link>

                            </ul>
                        </Link>
                    </div>
                    <div onClick={() => setActiveMenu('picture')} className={`lg:w-[16%] lg:border-b-[6px] border-orange-900 lg:text-center  py-[10px] ${ActiveMenu === 'picture' ? 'text-white bg-orange-900' : 'lg:bg-[#FFFFFF] bg-[hotpink] lg:text-black text-white'}`}>
                        <Link to={'/imagebox'}>  <h2 className='text-[17px] font-medium font-bangla'>  ছবিঘর</h2></Link>
                    </div>
                    <div onClick={() => setActiveMenu('cont')} className={`lg:w-[16%] lg:border-b-[6px] lg:border-orange-500 lg:text-center  py-[10px] ${ActiveMenu === 'cont' ? 'text-white bg-orange-600' : 'lg:bg-[#FFFFFF] bg-[hotpink] lg:text-black text-white'}`}>
                        <Link to={'/Contact'}><h2 className='text-[17px]  font-medium font-bangla'>যোগাযোগ</h2></Link>
                    </div>

                </div>

                <div onClick={() => setbars(!bars)} className=" flex items-center gap-x-1 lg:hidden absolute top-[-30px] right-0 py-2 px-3 bg-slate-500 rounded-[5px] text-white cursor-pointer">
                        <h2 className=' font-normal text-[17px] text-white'>Menu</h2>
                        {bars == true ? <RxCross1 /> : <FaBars />}
                    </div>
               
            </Container>
        </div>
    )
}

export default Navbar
