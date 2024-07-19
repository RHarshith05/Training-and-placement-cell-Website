import React, { useState } from "react";
import {  Route, Routes } from "react-router-dom";
import Companyhome from "../Screens/Companyhome";
import Nav from "../Screens/Nav";
import Sidebar from "../Screens/Sidebar";
import Toolshome from "../Screens/Toolshome";
import Dashboard from "../Screens/Dashboard";

function Home() {
  const [companydt,setcompanydt]=useState({})
  return (
    <>
      <div>
        <Nav></Nav>
      </div>
      <Sidebar></Sidebar>
      

      <div>
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/Companyhome" element={<Companyhome setcompanydt={setcompanydt}/>}></Route>
          <Route exact path="/tools" element={<Toolshome companydt={companydt}/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default Home;
