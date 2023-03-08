import React from 'react';
import './App.css';
import SideBar  from './components/sideBar';
import ChatRoom from './components/chatRoom';

function App() {
  return (
    <div className="App">
      <SideBar />
      <ChatRoom />
    </div>
  );
}

export default App;
