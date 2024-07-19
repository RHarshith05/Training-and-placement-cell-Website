import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signuphome from './components/Signuphome';
import Signupcord from './components/Signupcord';
import SignupStudent from './components/Signupstudent';

import Home from './components/Home';
import Companyhome from './Screens/Companyhome';
import Toolshome from './Screens/Toolshome';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signuphome />}></Route>
      <Route path='/signup' element={<Signupcord/>}></Route>
      <Route path='/signupst' element={<SignupStudent/>}></Route>
      <Route path='/home' element={<Home/>}>
      <Route exact path="Companyhome" element={<Companyhome/>}></Route>
          <Route exact path="tools" element={<Toolshome />}></Route>
      </Route>

      
        
      
    </Routes>
  </BrowserRouter>


  );
}

export default App;
