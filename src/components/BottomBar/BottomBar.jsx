
import "./BottomBar.scss"
// import { useState } from "react";
import { HiHome } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { IoHeartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";

const BottomBar = () => {

   

  return (
    <div>
        <div className='bottom-bar'>
            <div className='icons' id="icon1">
            <HiHome fontSize="2rem" color="#3f66fa" style={{cursor:"pointer"}}/>
            </div>
            <div className='icons' id="icon2">
            <SlCalender fontSize="2rem" style={{cursor:"pointer"}}/>
            </div>
            <div className='icons' id="icon3">
            <IoHeartOutline fontSize="2.2rem" style={{cursor:"pointer"}}/>
            </div>
            <div className='icons' id="icon4">
            <FaRegUser fontSize="2rem" style={{cursor:"pointer"}}/>
            </div>
        </div>      
    </div>
  )
}

export default BottomBar