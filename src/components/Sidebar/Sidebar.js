import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import {Avatar, IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';


//import ChatIcon from '@material-ui/icons/Chat';
//import MoreVertIcon from '@material-ui/icons/MoreVert';
function Sidebar() {
  return (
    <div className="sidebar">
        <div className='sidebar-header'>
            <Avatar/>
            <div className='sidebar-header-right'>
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        <div className='sidebar-search'>
            <div className='sidebar-search-container'>
            <SearchOutlined/>
            <input placeholder="Search of start new chat" type='text'/>
            </div>
        </div>
        <div className='sidebar-chats'>
            <SidebarChat addNewChat/>
            <SidebarChat/>
        </div>
    </div>
  )
}

export default Sidebar