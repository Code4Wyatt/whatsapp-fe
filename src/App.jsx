import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage.jsx'

import './App.css';
import SidebarChat from './Components/SideBarChat';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Login from './Components/Login';
import { Profile } from './Components/Profile.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/account" element={<HomePage />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
