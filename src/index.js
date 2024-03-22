import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Front from './Pages/RegisterPage/Front';
import LoginPage from './Pages/LoginPage/LoginPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import Weather from './Components/Weather';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
        <Route path='/Weather' element={<Weather/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/SignUp' element={<Front/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
);
