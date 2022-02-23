import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
