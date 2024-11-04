import React from 'react'
import Container from '../Components/Container'

const PastTeacher = () => {
    return (
        <div className=' py-[40px]'>
            <Container>
                <h3 className=' font-semibold lg:text-[25px] text-[20px] text-black py-[20px] font-bangla mx-3 lg:mx-0'>প্রাক্তন শিক্ষকদের তালিকা</h3>
                <div class="overflow-x-auto mx-3 lg:mx-0">
                    <table class="min-w-full bg-white border border-gray-300">
                        <thead class="bg-goved-pp text-white">
                            <tr>
                                <th class="py-4 px-4 border-b w-24 font-bangla">ছবি</th>
                                <th class="py-4 px-4 border-b font-bangla">শিক্ষকের নাম</th>
                                <th class="py-4 px-4 border-b font-bangla ">পদবী</th>
                                <th class="py-4 px-4 border-b font-bangla hidden md:table-cell">মোবাইল নম্বর</th>
                                <th class="py-4 px-4 border-b font-bangla hidden lg:table-cell">শিক্ষাগত যোগ্যতা</th>
                                <th class="py-4 px-4 border-b font-bangla hidden lg:table-cell">যোগদানের তারিখ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-gray-50">
                                <td class="py-6 px-4 border-b text-center font-bangla">N/A</td>
                                <td class="py-6 px-4 border-b font-bangla">মো. আতিকুল ইসলাম</td>
                                <td class="py-6 px-4 border-b font-bangla  font-medium text-[12px] text-gray-400 text-center">প্রভাষক, ইতিহাস</td>
                                <td class="py-6 px-4 border-b font-bangla hidden md:table-cell font-medium text-[12px] text-center text-gray-400">০১৭১৭৩৭৪৭৫১</td>
                                <td class="py-6 px-4 border-b font-bangla hidden lg:table-cell font-medium text-[12px] text-gray-400">স্নাতকোত্তর</td>
                                <td class="py-6 px-4 border-b font-bangla hidden lg:table-cell font-medium text-center text-[12px] text-gray-400">N/A</td>
                            </tr>
                            <tr class="bg-white">
                                <td class="py-2 px-4 border-b font-bangla text-center">N/A</td>
                                <td class="py-2 px-4 border-b font-bangla">মো. রাশেদুন্নবী</td>
                                <td class="py-2 px-4 border-b font-bangla  font-medium text-[12px] text-center text-gray-400">অধ্যক্ষ</td>
                                <td class="py-2 px-4 border-b font-bangla font-medium text-[12px] text-gray-400 hidden md:table-cell text-center">X</td>
                                <td class="py-2 px-4 border-b font-bangla font-medium text-[12px] text-gray-400 hidden lg:table-cell">স্নাতকোত্তর-২য়/৮৫ খ্রি.</td>
                                <td class="py-2 px-4 border-b font-bangla font-medium text-[13px] text-gray-400 hidden lg:table-cell text-center">
                                    <h2>প্রভাষক হিসাবে</h2>
                                    <h3>১৪/০৯/১৯৯২ খ্রি.</h3>
                                    <h3>অধ্যক্ষ হিসাবে</h3>
                                    <h3>১৫/০২/২০০৫ খ্রি.</h3>
                                </td>
                            </tr>
                            <tr class="bg-gray-50">
                                <td class="py-2 px-4 border-b font-bangla text-center">N/A</td>
                                <td class="py-2 px-4 border-b font-bangla">মো. শহিদুল ইসলাম</td>
                                <td class="py-2 px-4 border-b font-bangla  font-medium text-[12px] text-gray-400 text-center">উপাধ্যক্ষ</td>
                                <td class="py-2 px-4 border-b font-bangla font-medium text-[12px] text-gray-400 hidden md:table-cell text-center">X</td>
                                <td class="py-2 px-4 border-b font-bangla font-medium text-[12px] text-gray-400 hidden lg:table-cell">স্নাতকোত্তর-২য়/৮৫ খ্রি</td>
                                <td class="py-2 px-4 border-b font-bangla font-medium text-[13px] text-gray-400 hidden lg:table-cell text-center">
                                    <h3>প্রভাষক হিসেবে</h3>
                                    <h4>১০/১২/১৯৯০ খ্রি.</h4>
                                    <h4>উপাধ্যক্ষ হিসেবে</h4>
                                    <h4>০৩/০১/২০০৮ খ্রি.</h4>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    )
}

export default PastTeacher
