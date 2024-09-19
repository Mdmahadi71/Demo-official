import React, { useEffect, useState } from 'react'
import Container from './Container'
import { IoIosArrowUp } from "react-icons/io";

const ScrollToptobootom = () => {
    let [topTobottom ,settopTobottom] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                settopTobottom(true)
            }else{
                settopTobottom(false)
            }
        })
    },[])

    let scrollUp=(()=>{
        window.scrollTo({
            top:'0',
            behavior:'smooth'
        })
    })
  return (
    <div>
      <Container>
        {topTobottom && 
          <button className=' w-[50px] h-[50px] bottom-[50px] right-[50px] fixed text-[50px]  bg-sky-500' onClick={scrollUp}><IoIosArrowUp/></button>
        }
        
      </Container>
    </div>
  )
}

export default ScrollToptobootom
