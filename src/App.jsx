import React from 'react';
import './App.css';
import SidebarChat from './Components/SideBarChat';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (<>
  
    <SidebarChat />
  </>
  );
}

export default App;
