import React, { useState } from 'react'
import Container from '../Components/Container'

const PrteacherList = () => {
    let [show ,setshow] = useState(false)

    
  return (
    <div className=' py-[20px]'>
      <Container>
        <div className=" py-[20px]">
            <h3 className=' font-semibold text-[25px] text-black font-bangla mx-3 lg:mx-0'>বর্তমান শিক্ষকদের তালিকা</h3>
        </div>
      <div class="overflow-x-auto mx-3 lg:mx-0">
        <table class="min-w-full bg-white border border-gray-300">
            <thead class="bg-teal-400 text-white">
                <tr>
                    <th class="py-2 px-4 border-b font-bangla">ছবি</th>
                    <th class="py-2 px-4 border-b font-bangla">শিক্ষকের নাম</th>
                    <th class="py-2 px-4 border-b font-bangla">পদবী</th>
                    <th class="py-2 px-4 border-b font-bangla hidden md:table-cell">মোবাইল নম্বর</th>
                    <th class="py-2 px-4 border-b font-bangla hidden md:table-cell">শিক্ষাগত যোগ্যতা</th>
                    <th class="py-2 px-4 border-b font-bangla hidden md:table-cell">যোগদানের তারিখ</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-gray-50">
                    <td class="py-6 px-4 border-b text-center">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px] font-bangla">মো. সাগর মন্ডল</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla">প্রভাষক, উদ্ভিদ বিদ্যা</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 hidden md:table-cell font-bangla">০১৭১৮৫৪৩৩৩১</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 hidden md:table-cell font-bangla">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 hidden md:table-cell font-bangla">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center font-bangla">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px] font-bangla">মোছা. ফারহানা খাতুন</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla">প্রভাষক, ইতিহাস</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 hidden md:table-cell font-bangla">০১৭৩২০২৮০১৬</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 hidden md:table-cell font-bangla">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 hidden md:table-cell font-bangla">N/A</td>
                </tr>
                <tr class="bg-gray-50">
                    <td class="py-6 px-4 border-b text-center  font-bangla">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px] font-bangla">ববিতা রানী</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla">প্রভাষক, ব্যবস্থাপনা</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 hidden md:table-cell font-bangla">০১৭৫১০৬০০২৯</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 hidden md:table-cell font-bangla">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 hidden md:table-cell font-bangla">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center font-bangla">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px] font-bangla">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center font-bangla">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px] font-bangla">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center font-bangla">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px] font-bangla">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center font-bangla">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black font-bangla text-[15px]">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] font-bangla text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] font-bangla text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] font-bangla text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] font-bangla text-gray-400 hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center font-bangla">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black font-bangla text-[15px]">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] font-bangla text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] font-bangla text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] font-bangla text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] font-bangla text-gray-400 hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center font-bangla">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black font-bangla text-[15px]">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] font-bangla text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] font-bangla text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] font-bangla text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] font-bangla text-gray-400 hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center font-bangla">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black font-bangla text-[15px]">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] font-bangla text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] font-bangla text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] font-bangla text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] font-bangla text-gray-400 hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-centerfont-bangla">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px]font-bangla">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400font-bangla">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400font-bangla  font-bangla hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400font-bangla hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400font-bangla hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-centerfont-bangla">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px]font-bangla">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400font-bangla">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400font-bangla hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400font-bangla hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400font-bangla hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center font-bangla">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px] font-bangla">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">N/A</td>
                </tr>
               
                
            </tbody>
            {show == true ?
             <tbody >
             <tr class="bg-white">
                     <td class="py-6 px-4 border-b text-center font-bangla">N/A</td>
                     <td class="py-6 px-4 border-b font-semibold text-black text-[15px] font-bangla">মোছা. আফরোজা আক্তার</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla">প্রভাষক, সমাজ বিজ্ঞান</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">স্নাতকোত্তর</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">N/A</td>
                 </tr>
                 <tr class="bg-white">
                     <td class="py-6 px-4 border-b text-center font-bangla">N/A</td>
                     <td class="py-6 px-4 border-b font-semibold text-black text-[15px] font-bangla">মোছা. আফরোজা আক্তার</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla">প্রভাষক, সমাজ বিজ্ঞান</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">স্নাতকোত্তর</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">N/A</td>
                 </tr>
                 <tr class="bg-white">
                     <td class="py-6 px-4 border-b text-center font-bangla">N/A</td>
                     <td class="py-6 px-4 border-b font-semibold text-black text-[15px] font-bangla">মোছা. আফরোজা আক্তার</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla">প্রভাষক, সমাজ বিজ্ঞান</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">স্নাতকোত্তর</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">N/A</td>
                 </tr>
                 <tr class="bg-white">
                     <td class="py-6 px-4 border-b text-center font-bangla">N/A</td>
                     <td class="py-6 px-4 border-b font-semibold text-black text-[15px] font-bangla">মোছা. আফরোজা আক্তার</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla">প্রভাষক, সমাজ বিজ্ঞান</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">স্নাতকোত্তর</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">N/A</td>
                 </tr>
                 <tr class="bg-white">
                     <td class="py-6 px-4 border-b text-center font-bangla">N/A</td>
                     <td class="py-6 px-4 border-b font-semibold text-black text-[15px] font-bangla">মোছা. আফরোজা আক্তার</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla">প্রভাষক, সমাজ বিজ্ঞান</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">স্নাতকোত্তর</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">N/A</td>
                 </tr>
                 <tr class="bg-white">
                     <td class="py-6 px-4 border-b text-center font-bangla">N/A</td>
                     <td class="py-6 px-4 border-b font-semibold text-black text-[15px] font-bangla">মোছা. আফরোজা আক্তার</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla">প্রভাষক, সমাজ বিজ্ঞান</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">স্নাতকোত্তর</td>
                     <td class="py-6 px-4 border-b font-medium text-[15px] text-gray-400 font-bangla hidden md:table-cell">N/A</td>
                 </tr>
             </tbody>
            :
            ''
            }
           
        </table>
        <div onClick={()=>setshow(!show)} className="py-[20px] ">
            {show==true 
            ?
            <button className='border-[1px] border-black py-2 px-4'>Prew Page</button>
            :
            <button className='border-[1px] border-black py-2 px-4'> Next Page</button>
            }
        </div>
    </div>
      </Container>
    </div>
  )
}

export default PrteacherList
