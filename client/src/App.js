
import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './pages/login'
import Register from './pages/register'
import ForgotPassword from "./pages/forgotPassword"
import Home from "./pages/Home"

import Navbar from "./pages/Navbar"

function App(){
  return <div>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Register/>}></Route>
      <Route path = "login" element = {<Login/>}></Route>
      <Route path = "forgot" element = {<ForgotPassword/>}></Route>
      <Route path = "register" element = {<Register/>}></Route>
      <Route path="home" element= {<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
}

export default App