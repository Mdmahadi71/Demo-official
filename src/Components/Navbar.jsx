import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Navlogo from '../assets/logo.png'
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import { RiArrowUpSLine ,RiArrowDownSLine } from "react-icons/ri";



const Navbar = () => {
    let [bars, setbars] = useState(false)
    let [ActiveMenu, setActiveMenu] = useState(localStorage.getItem('ActiveMenu' || ''))
    let [Collages ,setCollages] = useState(false)
    let [Studentss , setStudentss] = useState(false)
    let [GuarDian , setGuarDian] = useState(false)

    useEffect(() => {
        localStorage.setItem('ActiveMenu', ActiveMenu)
    }, [ActiveMenu])

   

    return (
        <div className={`bg-white overflow-x-clip lg:h-auto  ${bars == true ? 'min-h-screen lg:min-h-min  ' : ' min-h-auto '}`} >
            <Container className={`relative`}>
                <div className={` lg:py-[10px] py-[30px]  relative origin-bottom  duration-300 ${bars == true ? ' transform translate-x-[200px] sm:translate-x-[330px] lg:translate-x-0 ' : ''}`}>
                    <div className=" w-[100px] h-[100px]  lg:mx-0 mx-auto  absolute lg:top-0 lg:left-0 lg:translate-x-[0] left-[50%] translate-x-[-50%]   ">
                        <Link to={'/'}>
                            <img src={Navlogo} className=' w-full  h-full' alt="" />
                        </Link>
                    </div>
                    <div className=" pl-[130px] lg:w-[50%] lg:mx-auto hidden lg:table-cell ">
                        <h2 className=' lg:text-[28px] text-[25px] font-bangla text-black  font-bold'>সরকারি শাহ্ আব্দুর রউফ কলেজ</h2>
                        <h5 className=' lg:text-[20px] font-bangla text-[16px] text-gray-900 '>পীরগঞ্জ, রংপুর</h5>
                    </div>
                    <div className={` absolute lg:top-[40px] lg:bg-white bg-goved-as py-3 top-[130px] items-center lg:right-[0] lg:w-auto  w-full mx-auto h-[50px]
                          flex justify-center text-center gap-x-4 duration-300 ${bars == true ? 'transform translate-x-[57px]  lg:translate-x-0' : ''}`}>
                        <div className=" cursor-pointer">
                            <button className=' font-medium font-open text-[16px] text-white  py-2 px-3 rounded-[5px] bg-goved-ss  hover:bg-goved-aa duration-300  '>Notice</button>
                        </div>
                        <div className="">
                            <button className=' font-medium font-open text-[16px] text-white  bg-goved-aa hover:bg-goved-ss  duration-300  py-2 px-3 rounded-[5px]'>Student Protal</button>
                        </div>
                    </div>
                </div>

                <div className={`lg:flex justify-around  lg:mt-[10px] lg:p-[-2px] border-t-[1px] lg:bg-white border-gray-400 lg:static absolute
                 duration-300 z-20 lg:min-h-0 min-h-screen  
                     ${bars == true ? ' top-[0px] left-[0] lg:left-0 bg-goved-aa lg:bg-white lg:w-full w-[75%] border-r-[5px] border-r-goved-aa lg:border-r-white '
                        : 'top-[0px] transform translate-x-[-560px] lg:translate-x-0 lg:w-full lg:right-0  w-[50%]'}`}>

                    <div onClick={() => setbars(!bars)} className="lg:w-[16%] relative">
                        <Link to={'/'}>
                            <div onClick={() => setActiveMenu('home')} className={`lg:text-center lg:mt-0 mt-2 py-[10px] ${ActiveMenu === 'home'
                                ? 'text-white lg:bg-white lg:text-black bg-gvd-hx lg:border-b-[3px] lg:border-gvd-r'
                                : 'lg:bg-[#FFFFFF] lg:text-black text-white'}`}>
                                <h2 className="text-[17px] font-medium font-bangla items-center top-[0] ml-[20px] lg:ml-0 flex justify-between lg:justify-center "> প্রথম পাতা <BsArrowRight className=' lg:hidden' /> </h2>
                            </div>
                        </Link>
                        <div className="lg:block  hidden absolute right-0 top-[0] h-[65%] w-[1px] bg-gvd-r"></div>
                    </div>

                    <div className="lg:w-[16%] relative">

                        <div onClick={() => setActiveMenu('about')} className={` relative  w:border-b-[2px] border-blue-500  lg:text-center  py-[10px] group
                         ${ActiveMenu === 'about' ? ' text-white bg-goved-pp  lg:bg-white lg:text-black lg:border-b-[3px]  lg:border-goved-ss' : 'lg:bg-[#FFFFFF]  lg:text-black text-white'}  `}>
                            <div className=" flex justify-between lg:justify-center items-center">
                                <Link to={'./coll'}><h2 onClick={() => setbars(!bars)} className='text-[17px] font-medium font-bangla ml-[20px] lg:ml-0 lg:justify-center flex justify-between items-center '>কলেজ সম্পর্কে </h2></Link>
                                <i className=' lg:hidden cursor-pointer' onClick={() => setCollages(!Collages)} >
                                    {Collages == true ? <RiArrowDownSLine className=' text-[25px]' /> : <RiArrowUpSLine className=' text-[25px]' />}
                                </i>
                            </div>
                            <ul onClick={() => setCollages(!Collages)} className={`absolute top-[55px] left-0 w-[250px] text-start bg-goved-aa  lg:opacity-0 lg:invisible
                                 lg:group-hover:opacity-100 lg:group-hover:visible transition-opacity duration-300 z-20   ${Collages == true ? 'top-[-500px] left-0 z-40  ' : 'top-[20px] left-0  '}`}>

                                <Link to={'/principal'} ><li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-goved-pp border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>অধ্যক্ষের কথা</li></Link>
                                <Link to={'/history'} ><li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-goved-pp border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>কলেজের ইতিহাস</li></Link>
                                <Link to={'/infras'}><li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-goved-pp border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>অবকাঠামো</li></Link>
                                <Link to={'/facilities'}>  <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-goved-pp border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>সুবিধাসমূহ</li></Link>
                                <Link to={'/teacher'}><li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-goved-pp border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>শিক্ষক</li></Link>
                                <Link to={'/employee'}> <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-goved-pp border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>কর্মচারী</li></Link>
                                <Link to={'/empty'}>  <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-goved-pp border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>শুন্যপদ</li></Link>
                            </ul>
                        </div>

                        <div className="lg:block  hidden absolute right-0 top-[0] h-[65%] w-[1px] bg-goved-ss"></div>
                    </div>

                    <div className={`lg:w-[16%] relative  ${Collages == true ? '' : 'transform translate-y-[260px] sm:translate-y-[75%] lg:translate-y-0'}`}>

                        <div onClick={() => setActiveMenu('stude')} className={`relative   w:border-b-[2px] border-blue-500  lg:text-center py-[10px] group ${ActiveMenu === "stude" ? ' text-white lg:bg-white lg:text-black bg-goved-pp  lg:border-b-[3px] lg:border-gvd-r' : 'lg:bg-[#FFFFFF]  lg:text-black text-white'}`}>

                            <div className=" flex justify-between lg:justify-center items-center">
                                <Link to={'/student'}> <h2 onClick={() => setbars(!bars)} className='text-[17px]  font-medium font-bangla ml-[20px] lg:ml-0 '>শিক্ষার্থী</h2></Link>
                                <i onClick={() => setStudentss(!Studentss)} className=' lg:hidden cursor-pointer'>
                                    {Studentss == true ? <RiArrowDownSLine className=' text-[25px]' /> : <RiArrowUpSLine className=' text-[25px]' />}
                                </i>
                            </div>


                            <ul className={`absolute top-[55px] left-0 w-[250px] text-start bg-goved-aa lg:opacity-0 lg:invisible 
                                    lg:group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-20 ${Studentss == true ? 'top-[-950px] left-0 z-40 ' : 'top-[20px] left-0 h-[230px] '}`}>


                                <Link to={'/notice'}> <li className={`py-[8px] text-[13px] pl-[10px] font-medium hover:bg-goved-pp border-b-[1px] border-gray-400 duration-200 text-white font-bangla `}>নোটিশ বোর্ড</li></Link>
                                <Link to={'/class'}> <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-goved-pp border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>ক্লাস রুটিন</li></Link>
                                <Link to={'/ExamRou'}> <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-goved-pp border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>পরীক্ষার রুটিন</li></Link>
                                <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-goved-pp border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>পরীক্ষার ফলাফল</li>
                                <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-goved-pp border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>একাডেমিক ক্যালেন্ডার</li>
                                <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-goved-pp border-b-[1px] border-gray-400 duration-200 text-white font-bangla'>শিক্ষার্থীর তালিকা</li>
                            </ul>
                        </div>

                        <div className="lg:block  hidden absolute right-0 top-[0] h-[65%] w-[1px] bg-goved-ss"></div>
                    </div>

                    <div className={`lg:w-[16%] relative ${Collages == true ? '' : 'transform translate-y-[270px] sm:translate-y-[75%] lg:translate-y-0'} ${Studentss == true ? '' : 'transform translate-y-[240px] sm:translate-y-[75%] lg:translate-y-0'}`}>

                        <div onClick={() => setActiveMenu('Guar')} className={` relative   w:border-b-[2px] border-blue-500  lg:text-center 
                                 py-[10px] group ${ActiveMenu === 'Guar' ? ' text-white lg:bg-white lg:text-black bg-goved-pp   lg:border-b-[3px]  lg:border-gvd-r' : 'lg:bg-[#FFFFFF]  lg:text-black text-white'} `}>


                            <div className="flex justify-between lg:justify-center items-center">
                                <Link to={'/guardian'}> <h2 onClick={() => setbars(!bars)} className='text-[17px]  font-medium font-bangla ml-[20px] lg:ml-0'>অভিভাবক</h2></Link>
                                <i onClick={() => setGuarDian(!GuarDian)} className=' lg:hidden cursor-pointer'>
                                    {GuarDian == true ? <RiArrowDownSLine className=' text-[25px]' /> : <RiArrowUpSLine className=' text-[25px]'/>}
                                </i>
                            </div>
                            <ul className={`absolute top-[55px] left-0 w-[250px] text-start bg-goved-aa lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible transition-opacity duration-300 z-20 ${GuarDian == true ? 'top-[-600px] left-0 z-40  ' : 'top-[20px] left-0 h-[110px] '}`}>
                                <Link to={'/garPanel'} ><li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-goved-pp border-b-[1px] border-gray-400 duration-300 text-white font-bangla'>অভিভাবক প্যানেল</li></Link>
                                <Link to={'/Addinfor'} > <li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-goved-pp border-b-[1px] border-gray-400 duration-300 text-white font-bangla'>ভর্তি তথ্য</li></Link>
                                <Link to={'/Complaint'}><li className='py-[8px] text-[13px] pl-[10px] font-medium hover:bg-goved-pp border-b-[1px] border-gray-400 duration-300 text-white font-bangla'>অভিযোগ</li></Link>
                            </ul>
                        </div>

                        <div className="lg:block  hidden absolute right-0 top-[0] h-[65%] w-[1px] bg-goved-ss"></div>
                    </div>

                    <div onClick={() => setbars(!bars)} className={`lg:w-[16%] relative ${Collages == true ? '' : 'transform translate-y-[280px] sm:translate-y-[75%] lg:translate-y-0'}
                     ${Studentss == true ? '' : 'transform translate-y-[240px] sm:translate-y-[75%] lg:translate-y-0'} ${GuarDian == true ? '' : 'transform translate-y-[120px] sm:translate-y-[75%] lg:translate-y-0'}`}>
                        <Link to={'/imagebox'}>
                            <div onClick={() => setActiveMenu('picture')} className={` w:border-b-[2px]  border-blue-500 lg:text-center  py-[10px] ${ActiveMenu === 'picture' ? 'text-white lg:bg-white lg:text-black bg-gvd-hx lg:border-b-[3px]  lg:border-gvd-r' : 'lg:bg-[#FFFFFF]  lg:text-black text-white'}`}>
                                <h2 className='text-[17px] font-medium font-bangla ml-[20px] lg:ml-0'>  ছবিঘর</h2>
                            </div>
                        </Link>
                        <div className="lg:block  hidden absolute right-0 top-[0] h-[65%] w-[1px] bg-gvd-r"></div>
                    </div>

                    <div onClick={() => setbars(!bars)} className={`lg:w-[16%] relative ${Collages == true ? '' : 'transform translate-y-[290px] sm:translate-y-[75%] lg:translate-y-0'} 
                    ${Studentss == true ? '' : 'transform translate-y-[240px] sm:translate-y-[75%] lg:translate-y-0'}  ${GuarDian == true ? '' : 'transform translate-y-[120px] sm:translate-y-[75%] lg:translate-y-0'} `}>
                        <Link to={'/Contact'}>
                            <div onClick={() => setActiveMenu('cont')} className={` w:border-b-[2px] border-blue-500 lg:text-center  py-[10px] ${ActiveMenu === 'cont' ? 'text-white lg:bg-white lg:text-black bg-gvd-hx lg:border-b-[3px]  lg:border-gvd-r' : 'lg:bg-[#FFFFFF]  lg:text-black text-white'}`}>
                                <h2 className='text-[17px]  font-medium font-bangla ml-[20px] lg:ml-0'>যোগাযোগ</h2>
                            </div>
                        </Link>
                        <div className="lg:block  hidden absolute right-0 top-[0] h-[65%] w-[1px] bg-gvd-r"></div>
                    </div>

                </div>


                <div onClick={() => setbars(!bars)} className={` lg:hidden absolute top-[20px] left-0 text-[27px] rounded-[5px] p-[20px] text-black cursor-pointer duration-300 z-10 ${bars == true ? 'left-[70%] lg:left-0' : ' left-[0]'}`}>
                    {bars == true ? <RxCross1 /> : <FaBars />}
                </div>

                <section className='home-section'>
                    <div className={`relative bg-goved-aa lg:mt-0 mt-[120px] lg:hidden origin-bottom duration-300 ${!bars ? '' : 'transform translate-x-[250px] sm:translate-x-[75%] lg:translate-x-0'}`}>
                        <div class="relative flex overflow-x-hidden">
                            <div class="py-[12px] animate-marquee whitespace-nowrap">
                                <span class="text-[18px] text-white mx-4 font-medium font-bangla ">***  জন্মাষ্টমী উপলক্ষ্যে কলেজ বন্ধরবিবার, আগস্ট 25, 2024  *** |</span>
                                <span class="text-[18px] text-white mx-4 font-medium font-bangla">***  উচ্চ মাধ্যমিক ১ম বর্ষের বৃত্তি সংক্রান্ত জরুরী বিজ্ঞপ্তি
                                    রবিবার, আগস্ট 18, 2024 *** |</span>
                                <span class="text-[18px] text-white mx-4 font-medium font-bangla">***  উচ্চ মাধ্যমিক শ্রেনির ক্লাস শুরু
                                    সোমবার, আগস্ট 12, 2024  *** |</span>
                            </div>
                        </div>
                        <div className="  py-[16px] px-4 inline-block bg-goved-ss absolute top-[0px] left-0">
                            <h2 className=' text-[15px] text-white font-medium'>Letas News</h2>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default Navbar
