import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chatbar from './components/Chatbar/Chatbar';
function App() {
  return (
    <div className="app">
      <div className="app-body">
      {/*Navbar*/}
      {/*Body*/}
        {/*SideBar*/}
        <Sidebar/>
        {/*ChatBar*/}
        <Chatbar/>
        </div>
    </div>
  );
}

export default App;
