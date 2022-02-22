import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import Chatbar from './components/Chatbar/Chatbar';
import {useStateValue} from './Reducer/StateProvider';

function App() {
  const [{user},dispatch] = useStateValue();

  return (
    <div className="app">
      {!user? (<Login/>):(<div className="app-body">
        <BrowserRouter>
        <Sidebar/>
          <Routes>
          <Route path = "/rooms/:roomId" element={
                          <Chatbar/>}/>
          <Route path="/" element={<h1>HomeScreen</h1>}/>

          </Routes>        
        </BrowserRouter>
      </div>

      )}
      
    </div>
  );
}

export default App;
