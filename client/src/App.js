
import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './pages/login'
import Register from './pages/register'

function App(){
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Register/>}></Route>
      <Route path = "login" element = {<Login/>}></Route>
      <Route path = "register" element = {<Register/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
}

export default App