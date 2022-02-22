import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import "./Chatbar.css";
import db from "../../firebase";
import firebase from "firebase/compat/app";
import { useStateValue } from "../../Reducer/StateProvider";

function Chatbar() {
  const [inputMsg, setInputMsg] = useState("");
  const [seed, setSeed] = useState("");
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const { roomId } = useParams();
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    if (roomId) {
      db.collection("room")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
      db.collection("room")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  //better import the icons from sidebar rather than using separate seeding.
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const handleSubmitMessage = (e) => {
    e.preventDefault();
    db.collection("room").doc(roomId).collection("messages").add({
      message: inputMsg,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInputMsg("");
  };

  return (
    <div className="chatbar">
      <div className="chatbar-header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chatbar-header-info">
          <h3>{roomName}</h3>
          <p>Last seen {" "}
          {new Date(messages[messages.length-1]?.timestamp?.toDate()).toUTCString()}</p>
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
        {messages.map((message) => (
          <p className={`chatbar-message ${ message.name===user.displayName && "chatbar-reciever"}`}>
            <span className="chatbar-message-name">{message.name}</span>
            {message.message}
            <span className="chatbar-timestamp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>
      <div className="chatbar-send">
        <InsertEmoticonIcon />
        <form>
          <input
            type="text"
            placeholder="Type a message"
            onChange={(e) => setInputMsg(e.target.value)}
            value={inputMsg}
          />
          <button type="submit" onClick={handleSubmitMessage}>
            Send
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chatbar;
