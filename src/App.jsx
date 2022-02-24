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
    <Container>
      <Row>
        <Col xs={12} className="text-center"><h1>Login Page</h1>
          <Button>
            <Link to="/home">enter</Link>
          </Button></Col>
      </Row>
    </Container>
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<HomePage />} />

      
      {/* <Route path="/*" element={"This page doesn't exist"} /> */}
    </Routes>
  </BrowserRouter>
  

  )
}

export default App;
