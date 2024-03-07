import React, { useContext } from 'react'
import'./style.css'
import { IoCameraOutline } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import Messages from './Messages';
import Input from'./Input'
import { ChatContext } from '../context/chatContext';

const Chat = () => {

const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
        <IoCameraOutline />
        <IoMdPersonAdd />
        <IoIosMore /> 
        </div> 
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat
