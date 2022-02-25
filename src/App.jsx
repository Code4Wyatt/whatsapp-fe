import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage.jsx'
import PageNotFound from './pages/PageNotFound'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute.jsx';
import Register from './Components/Register'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
