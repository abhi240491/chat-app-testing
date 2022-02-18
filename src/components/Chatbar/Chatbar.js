import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic"
import "./Chatbar.css";
function Chatbar() {
    const [inputMsg,setInputMsg] = useState('');
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const handleSubmitMessage=(e)=>{
      e.preventDefault();
      console.log("You Entered",inputMsg);
      setInputMsg('');
  };

  return (
    <div className="chatbar">
      <div className="chatbar-header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chatbar-header-info">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chatbar-header-right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chatbar-body">
        <p className={`chatbar-message ${true && "chatbar-reciever"}`}>
            <span className='chatbar-message-name'>Abhi</span>
                Hey Guys
            <span className='chatbar-timestamp'>3:52p.m</span>
        </p>
      </div>
      <div className='chatbar-send'>
          <InsertEmoticonIcon/>
          <form>
            <input type='text' placeholder='Type a message'
                onChange={(e)=>setInputMsg(e.target.value)}
                value={inputMsg}/>
            <button type='submit' onClick={handleSubmitMessage}>Send</button>
          </form>
          <MicIcon/>
      </div>
    </div>
  );
}

export default Chatbar;
