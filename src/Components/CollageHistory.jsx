import React from 'react'
import Container from './Container'
import opodukkho from '../assets/Rayhan-Alam.jpg'

const CollageHistory = () => {
    return (
        <div>
            <Container>
                <div className=" lg:flex justify-between mx-4 lg:mx-0">
                    <div className="lg:w-[73%]">

                            <div className=" ">
                                <div className=" ">
                                    <h2 className=' font-bangla font-bold text-[22px] text-black my-2'>সরকারি শাহ্ আব্দুর রউফ কলেজে স্বাগতম</h2>
                                    <h2 className=' font-bangla font-semibold text-[18px] text-[#312525]'>রংপুর জেলার পীরগঞ্জ উপজেলার একটি প্রাচীন জনপদ,এই জনপদ,এই জনপদ শাহ ইসমাইল গাজী (রা:) এবং মধ্যযুগীয় অধ্যায়তিক ও সাধক কবি কাজী হেয়াৎ মামুদের জন্মভুমি।
                                        জনপদের বসবাসকারী অধিকাংশ মানুষ দরিদ্র সীমায় বসবাস করে। সেহেতু তাদের ছেলে মেয়েদের শিক্ষাদানের উদ্দেশ্যে বিশিষ্ট রাজনীতিবিদ জনাব কাজী আব্দুল হালিমের নেতৃত্বে সুধীজনের
                                        প্রচেষ্টায় শাহ্‌ আব্দুর রউফ কলেজ স্থাপিত হয়। বর্তমান প্রতিষ্ঠানটি এই উপজেলার বৃহৎ শিক্ষা প্রতিষ্ঠান হিসাবে শিক্ষা কার্যক্রম পরিচালনা করে আসছে। শাহ্‌ আব্দুর রউফ কলেজ ১৯৭০ খ্রি.
                                        সালে স্থাপিত হয়ে সুনামের সাথে অদ্যবধি শিক্ষা কার্যক্রম পরিচালনার করে আসেছে। বর্তমান অত্র প্রতিষ্ঠানে উচ্চ মাধ্যমিক পর্যায়ে বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষায় শাখা, ডিগ্রী পর্যায়ে বি.এ, বিএসএস, বিএসসি সম্মান কোর্স বাংলা ইসলামের ইতিহাস ও সংস্কৃতি,
                                        রাষ্ট্রবিজ্ঞান, ভূগোল ও পরিবেশ এবং উদ্ভিদবিদ্যা বিষয় চালু রযেছে। বর্তমান অত্র শিক্ষার প্রতিষ্ঠানের প্রায় ২৫০০ জন ছাত্র-ছাত্রী অধ্যয়নরত।</h2>
                                </div>
                            </div>
                       


                    </div>
                    <div className="lg:w-[20%]">
                        <div className="">
                           <div className=" py-3 px-3 bg-gvd-b text-center my-2">
                             <h2 className=' font-bangla font-semibold text-[20px] text-white'>সম্মানিত প্রভাষক</h2>
                           </div>
                            <div className=" border-[10px] border-gray-400">
                                <img src={opodukkho} className=' w-full mx-auto' alt="" />
                            </div>
                            <h4 className=' font-bangla font-semibold text-[19px] text-black text-center my-2'>ই.এম.এম. রায়হান আলম</h4>
                            <h6 className=' font-bangla font-normal text-[16px] text-black text-center'>প্রভাষক, সরকারি শাহ্ আব্দুর রউফ কলেজ</h6>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CollageHistory
