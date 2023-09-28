import React from "react";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'

function App(){
  return <div>
    <BrowserRouter>
    <Routes>
      <Route exact path = "/" element = {<Register/>}></Route>
      <Route path = "login" element = {<Login/>}></Route>
      <Route path = "home" element = {<Home/>}></Route>
      <Route path = "register" element = {<Register/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
}

export default App