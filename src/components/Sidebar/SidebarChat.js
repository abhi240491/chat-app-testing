import React,{useState, useEffect} from 'react';
import './SidebarChat.css';
import {Avatar} from '@material-ui/core';

function SidebarChat({addNewChat}) {
    const [seed,  setSeed]=useState("")
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[]);
    const handleCreateChat = () =>{
        const roomName= prompt("Please enter a name");
        if(roomName){
            //do some clever db stuff;
        }
    }

  return !addNewChat?(
    <div className='sidebar-chat'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className='sidebar-chat-info'>
            <h2>Room Name</h2>
            <p>Last message...</p>
        </div>
    </div>
  ):(
      <div className='sidebar-chat'
            onClick={handleCreateChat}
        >
          <h2>Add new chat</h2>
      </div>
  )
}

export default SidebarChat