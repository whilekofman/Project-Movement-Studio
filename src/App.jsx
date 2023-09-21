// import './App.css'
import "./style.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import NewsLetterLandingPage from './components/NewsLetterLandingPage'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="newsletter" element={<NewsLetterLandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App
