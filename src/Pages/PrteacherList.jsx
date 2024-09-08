import React, { useState } from 'react'
import Container from '../Components/Container'

const PrteacherList = () => {
    let [show ,setshow] = useState(false)

    
  return (
    <div className=' py-[20px]'>
      <Container>
        <div className=" py-[20px]">
            <h3 className=' font-semibold text-[25px] text-black'>বর্তমান শিক্ষকদের তালিকা</h3>
        </div>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300">
            <thead class="bg-teal-400 text-white">
                <tr>
                    <th class="py-2 px-4 border-b">ছবি</th>
                    <th class="py-2 px-4 border-b">শিক্ষকের নাম</th>
                    <th class="py-2 px-4 border-b">পদবী</th>
                    <th class="py-2 px-4 border-b hidden md:table-cell">মোবাইল নম্বর</th>
                    <th class="py-2 px-4 border-b hidden md:table-cell">শিক্ষাগত যোগ্যতা</th>
                    <th class="py-2 px-4 border-b hidden md:table-cell">যোগদানের তারিখ</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-gray-50">
                    <td class="py-6 px-4 border-b text-center">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px]">মো. সাগর মন্ডল</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400">প্রভাষক, উদ্ভিদ বিদ্যা</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">০১৭১৮৫৪৩৩৩১</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px]">মোছা. ফারহানা খাতুন</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400">প্রভাষক, ইতিহাস</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">০১৭৩২০২৮০১৬</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-gray-50">
                    <td class="py-6 px-4 border-b text-center">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px]">ববিতা রানী</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400">প্রভাষক, ব্যবস্থাপনা</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">০১৭৫১০৬০০২৯</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px]">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px]">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px]">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px]">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px]">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px]">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px]">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px]">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px]">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">N/A</td>
                </tr>
                <tr class="bg-white">
                    <td class="py-6 px-4 border-b text-center">N/A</td>
                    <td class="py-6 px-4 border-b font-semibold text-black text-[15px]">মোছা. আফরোজা আক্তার</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                    <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">N/A</td>
                </tr>
               
                
            </tbody>
            {show == true ?
             <tbody >
             <tr class="bg-white">
                     <td class="py-6 px-4 border-b text-center">N/A</td>
                     <td class="py-6 px-4 border-b font-semibold text-black text-[15px]">মোছা. আফরোজা আক্তার</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">N/A</td>
                 </tr>
                 <tr class="bg-white">
                     <td class="py-6 px-4 border-b text-center">N/A</td>
                     <td class="py-6 px-4 border-b font-semibold text-black text-[15px]">মোছা. আফরোজা আক্তার</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">N/A</td>
                 </tr>
                 <tr class="bg-white">
                     <td class="py-6 px-4 border-b text-center">N/A</td>
                     <td class="py-6 px-4 border-b font-semibold text-black text-[15px]">মোছা. আফরোজা আক্তার</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">N/A</td>
                 </tr>
                 <tr class="bg-white">
                     <td class="py-6 px-4 border-b text-center">N/A</td>
                     <td class="py-6 px-4 border-b font-semibold text-black text-[15px]">মোছা. আফরোজা আক্তার</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">N/A</td>
                 </tr>
                 <tr class="bg-white">
                     <td class="py-6 px-4 border-b text-center">N/A</td>
                     <td class="py-6 px-4 border-b font-semibold text-black text-[15px]">মোছা. আফরোজা আক্তার</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">N/A</td>
                 </tr>
                 <tr class="bg-white">
                     <td class="py-6 px-4 border-b text-center">N/A</td>
                     <td class="py-6 px-4 border-b font-semibold text-black text-[15px]">মোছা. আফরোজা আক্তার</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400">প্রভাষক, সমাজ বিজ্ঞান</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">০১৭২৩৩৩১৪১২</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">স্নাতকোত্তর</td>
                     <td class="py-6 px-4 border-b font-medium text-[12px] text-gray-400 hidden md:table-cell">N/A</td>
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
