import React from 'react'
import Container from '../Components/Container'
import Sharee from '../Components/Sharee';

const ClassRoutine = () => {
    return (
        <div className='py-[20px]'>
            <Container>
                <div className=" lg:flex justify-between mx-3 lg:mx-0">
                    <div className="lg:w-[59%]">
                        <div className=" py-5">
                            <h2 className=' font-semibold text-[25px] text-black font-bangla'>ক্লাস রুটিন</h2>
                        </div>
                        <div class=" mx-auto my-8">
                            <table class="min-w-full bg-white">
                                <thead>
                                    <tr>
                                        <th class="py-2 px-4 border-b-2 border-gray-300 bg-goved-pp text-[14px] text-white text-left text-sm font-semibold font-bangla"> নাম</th>
                                        <th class="py-2 px-4 border-b-2 border-gray-300 bg-goved-pp  text-[14px] text-white text-left text-sm font-semibold font-bangla">প্রকাশের তারিখ</th>
                                        <th class="py-2 px-4 border-b-2 border-gray-300 bg-goved-pp   text-[14px] text-white text-left text-sm font-semibold font-bangla">ডাউনলোড</th>
                                    </tr>
                                </thead>
                                
                            </table>
                        </div>
                    </div>
                    <div className="lg:w-[39%]">
                        <Sharee/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ClassRoutine
