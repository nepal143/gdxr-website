import './home.css'
import React,{useEffect} from 'react'
import jwtDecode from 'jwt-decode'
import {useNavigate} from 'react-router-dom'

const Home = ()=>{
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token)
        if (token) {
          const user = jwtDecode(token);
          console.log(user);
          if (!user) {
            localStorage.removeItem("token");
            navigate("/login");
          }
        }
      }, []);
      return(
        <div>Hello</div>
      )
}
export default Home