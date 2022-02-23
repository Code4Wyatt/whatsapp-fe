import { Container, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './App.css';

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
      <Route path="/home" element={<HomePage />} />
      {/* <Route path="/*" element={"This page doesn't exist"} /> */}
    </Routes>
  </BrowserRouter>

)
}

export default App;
