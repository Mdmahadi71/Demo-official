import React, { useRef } from 'react'
import Container from './Container'
import { IoIosArrowUp ,IoIosArrowDown } from "react-icons/io";

const HomeNotice = () => {
  let scrollRefm = useRef(null);
  let scrollRefone = useRef(null);
  let scrollReftwo = useRef(null);
  let scrollRefthree = useRef(null);

  
 

  const handleScroll = (ref, direction) => {
    const scrollAmount = 100;
    if (direction === 'up') {
      ref.current.scrollBy({
        top: -scrollAmount,
        behavior: 'smooth',
      });
    } else {
      ref.current.scrollBy({
        top: scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <div className=' py-[50px]'>
      <Container>
        <div className=" lg:flex justify-between gap-x-2 mx-4 lg:mx-0">

          <div className="lg:w-[30%] my-[15px] lg:my-0  h-[500px] bg-gvd-sec relative">

            <div className="py-[20px] bg-gvd-sect">
              <h2 className="font-bangla font-bold text-[22px] text-white text-center">
                প্রশাসনিক বিজ্ঞপ্তি
              </h2>
            </div>


            <div className="px-3 h-[350px] overflow-hidden" ref={scrollRefone}>
              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:scale-[1.3] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>


              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:scale-[1.3] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>

              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:scale-[1.3] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>

              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:scale-[1.3] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>

              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:scale-[1.3] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>

            </div>


            <div className=" flex justify-end gap-x-2 bg-gvd-sect py-2 absolute bottom-0 right-0 w-full">
              <button className="bg-black text-white px-4 py-2" onClick={() => handleScroll(scrollRefone, 'up')}>
                <IoIosArrowUp className=' text-[25px]' />
              </button>
              <button className="bg-black text-white px-4 py-2" onClick={() => handleScroll(scrollRefone, 'down')}>
                <IoIosArrowDown className=' text-[25px]' />
              </button>
            </div>

          </div>
          <div className="lg:w-[30%] my-[15px] lg:my-0  h-[500px] bg-gvd-sec relative">

            <div className="py-[20px] bg-gvd-sect">
              <h2 className="font-bangla font-bold text-[22px] text-white text-center">
              একাডেমিক বিজ্ঞপ্তি
              </h2>
            </div>


            <div className="px-3 h-[350px] overflow-hidden" ref={scrollReftwo}>
              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:scale-[1.3] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>


              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:scale-[1.3] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>

              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:scale-[1.3] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>

              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:scale-[1.3] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>

              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:scale-[1.3] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>

            </div>


            <div className=" flex justify-end gap-x-2 bg-gvd-sect py-2 absolute bottom-0 right-0 w-full">
              <button className="bg-black text-white px-4 py-2" onClick={() => handleScroll(scrollReftwo, 'up')}>
                <IoIosArrowUp className=' text-[25px]' />
              </button>
              <button className="bg-black text-white px-4 py-2" onClick={() => handleScroll(scrollReftwo, 'down')}>
                <IoIosArrowDown className=' text-[25px]' />
              </button>
            </div>

          </div>

          <div className="lg:w-[30%] my-[15px] lg:my-0  h-[500px] bg-gvd-sec relative">

            <div className="py-[20px] bg-gvd-sect">
              <h2 className="font-bangla font-bold text-[22px] text-white text-center">
              পরীক্ষা/ফলাফল বিজ্ঞপ্তি
              </h2>
            </div>


            <div className="px-3 h-[350px] overflow-hidden" ref={scrollRefthree}>
              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:scale-[1.3] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>


              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:scale-[1.3] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>

              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:scale-[1.3] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>

              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:scale-[1.3] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>

              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:scale-[1.3] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>

            </div>


            <div className=" flex justify-end gap-x-2 bg-gvd-sect py-2 absolute bottom-0 right-0 w-full">
              <button className="bg-black text-white px-4 py-2"  onClick={() => handleScroll(scrollRefthree, 'up')}>
                <IoIosArrowUp className=' text-[25px]' />
              </button>
              <button className="bg-black text-white px-4 py-2"  onClick={() => handleScroll(scrollRefthree, 'down')}>
                <IoIosArrowDown className=' text-[25px]' />
              </button>
            </div>

          </div>

          <div className="lg:w-[30%] my-[15px] lg:my-0  h-[500px] bg-gvd-sec relative">

            <div className="py-[20px] bg-gvd-sect">
              <h2 className="font-bangla font-bold text-[22px] text-white text-center">
              সব নোটিশ
              </h2>
            </div>


            <div className="px-3 h-[350px] overflow-hidden" ref={scrollRefm}>
              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:scale-[1.3] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>


              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:scale-[1.3] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>

              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:scale-[1.3] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>

              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:scale-[1.3] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>

              <section className="border-b-[2px] border-black">
                <div>
                  <h3 className="border-[1px] border-black py-2 px-2 text-center text-[16px] font-open text-black font-normal my-3">01.10.2024</h3>
                  <h6 className="text-[18px] text-white font-open font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, qui.</h6>
                  <div className="flex justify-end my-4">
                    <h4 className="font-open font-semibold text-black text-[18px] hover:text-[20px] duration-300">Read more...</h4>
                  </div>
                </div>
              </section>

            </div>


            <div className=" flex justify-end gap-x-2 bg-gvd-sect py-2 absolute bottom-0 right-0 w-full">
              <button className="bg-black text-white px-4 py-2" onClick={() => handleScroll(scrollRefm, 'up')}>
                <IoIosArrowUp className=' text-[25px]' />
              </button>
              <button className="bg-black text-white px-4 py-2" onClick={() => handleScroll(scrollRefm, 'down')}>
                <IoIosArrowDown className=' text-[25px]' />
              </button>
            </div>

          </div>
           
        </div>
      </Container>
    </div>
  )
}

export default HomeNotice
