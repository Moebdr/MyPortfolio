import { useState } from "react";
import Animate from "../animation/Animate";
import myPic from "../assets/myPic.png";
import Navbar from "../components/Navbar";
import {NavMenue}from'../components/Navbar'


export default function Hero(){
    return(
      <section className={` bg-[linear-gradient(to_right,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('./assets/cover1.jpg')] bg-cover  `} >
      <Navbar />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 justify-center items-center mt-13">
          <ImagePart />
          <IntroPart />
         </div>
      </div>
   </section>
    )
    }


function ImagePart(){
  const [isClick,setIsClick] =useState(false)
  const handleClick = ()=>{
    setIsClick(!isClick)
  }
    return(
<div className='max-w-xs mx-auto relative md:max-w-sm lg:max-w-full ' >
            <img src={myPic} className={`  object-cover transition-all duration-900 md:aspect-square  ${isClick ?'blur-xs':''}`} />
            <div className={`absolute  cursor-pointer z-3 w-full p-6  rounded-t-2xl bottom-0 ${isClick ? 'h-[90%] blur-none':''} transition-all duration-900 hover:bg-transparent flex justify-center items-center `} >
              <span className = "text-white absolute bottom-0 font-extrabold capitalize tracking-widest block ">  <span className={`inline-block ${isClick ?'hidden':''} text-3xl bg-gray-800 animate-bounce rounded-full`} onClick={(e)=>handleClick(e)}>{!isClick ?<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line></svg>:<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12,1.993C6.486,1.994,2,6.48,2,11.994c0,5.513,4.486,9.999,10,10c5.514,0,10-4.486,10-10S17.515,1.994,12,1.993z M12,19.994c-4.411-0.001-8-3.59-8-8c0-4.411,3.589-8,8-8.001c4.411,0.001,8,3.59,8,8.001S16.411,19.994,12,19.994z"></path><path d="M13 8L11 8 11 12 7.991 12 11.996 16.005 16 12 13 12z"></path></svg>}</span></span>
              <div className="transition-all duration-500">
                <h1 className = {`text-center  ${isClick ? 'block':'hidden'} font-bold text-white  uppercase text-2xl text-shadow-lg/30 `}><q className="max-w-[10ch]">the education is a lifelong journey, not just filling a mind, but lighting a fire of curiosity</q></h1>
              </div>
            </div>
          </div>
    )


}






function IntroPart(){
    return(
<Animate delay={1}>
 <div className="g-gray-900 md:scale-90  text-white gap-5 p-7 flex flex-col  shadow shadow-lg shadow-blue-900  justify-center items-center lg:items-start mx-auto px-10 bg-gray-900  ">
            <h1 className="text-lg md:text-2xl lg:text-4xl  font-bold uppercase">Hi , I`m Mohamed</h1>
            <p className="max-w-[50ch] text-lg md:text-xl  font-light capitalize text-blue-400">
              Design. Code. Improve. I create clean and functional interfaces
            </p>
            <section className="grid grid-cols-2  md:grid-cols-4  gap-3 font-semibold text-2xs md:text-xs lg:text-sm   mx-auto mt-3">
              {NavMenue.map(link =>(
                <button className="bg-white block text-gray-950  p-2 min-w-full  rounded-lg cursor-pointer hover:text-white hover:bg-blue-950 transition duration-300 " >
                <a href={'#'+link} className="p-2  inline-block justify-baseline text-left ">{link}</a>
              </button>
              ))}
            </section>
          </div>
       </Animate>
    )
}
