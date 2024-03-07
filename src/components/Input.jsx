import React from 'react'
import'./style.css'
import { IoSendOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { PiPaperclipHorizontalLight } from "react-icons/pi";

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Message'/>
      <div className="send">
      <PiPaperclipHorizontalLight />
        <img src="" alt="" />
        <input type="file" style={{display:"none"}} id='file' />
        <label htmlFor="file"><CiImageOn className='imageIcon'  />
        </label>
        <button><IoSendOutline /></button>
      </div>
    </div>
  )
}

export default Input
