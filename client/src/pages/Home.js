import React from 'react'
import { useState,useEffect } from "react";
import jwtDecode from 'jwt-decode'
import {useNavigate} from 'react-router-dom'

function Home() {

  const [quote, setQuote] =  useState("");
  const [name, setName] =  useState("");
  const [email, setEmail] =useState("")

  //Sending signup data to backend

    async function setHome(){
      const response = await fetch("http://localhost:4000/api/quote",{
        method:"GET",
        headers:{
          "x-access-token":localStorage.getItem("token")
        }
      })
      const data = await response.json()
      setQuote(data.quote)
      setName(data.name)
      setEmail(data.email)
    }
    async function userQuote(event){
      event.preventDefault()
      const quoteResponse = await fetch("http://localhost:4000/api/quote",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          quote
        })
      })
      const data = await quoteResponse.json()
      setQuote(data.quote)
      console.log(data.quote)
    }

    const navigate = useNavigate()
  useEffect(() => {
      const token = localStorage.getItem("token");
      // console.log(token)
      if (token) {
        const user = jwtDecode(token);
        
        setHome()
        // console.log(user);
        if (!user) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      }
      else{
        navigate("/login")
      }
    }, []);


  return (
    <div>
      <div className="text_data_container">
        <div className="quote">I am A MERN developer 
        <form onSubmit={userQuote}>
          <input // input for user name 
            value={quote}
            type="text"
            className="name"
            placeholder="Quote"
            onChange={(e) => setQuote(e.target.value)}
          />

          <input className="submit" type="submit" value="Save Quote"  />
        </form>
        </div>
        <div className="profile_card">
            <div className="profilephoto"></div>
            <div className="personname">{name}</div>
            <div className="line"></div>
            <div className="profession">student</div>
            <div className="institute">Army Institute Of Technology </div>
        </div>
        <div className="aboutMe">
            <h2>My Quote </h2>
            <p>{quote}</p>
        </div>
      </div>

      <div className="image_and_videos">
        <div className="Image_Videos">
          <h2>Images</h2>
          <h2>Videos</h2>
        </div>
        <div className="underline">
          <hr />
        </div>
        <div className="image_container">
          <img className='img' src="1.png" alt="" />

          <img className='img' src="1.png" alt="" />

          <img className='img' src="1.png" alt="" />

            {/* <img className='img' src="1.png" alt="" />

            <img className='img' src="1.png" alt="" /> */}

          
        </div>
      </div>

      <div className="googlemaps">
        <img src="map.png" alt="" className="map" />

        <div className="location">#My Location</div>

      </div>

      <div className="contactus">
        <h2>CONTACT US</h2>
        <div className="inputs">
            <div className="left_input">
              <input type="email" className="email" placeholder='Enter Your Email' />
              <input type="email" className="email" placeholder='Enter Your Email' />

            </div>
            <div className="left_input">
              <input type="email" className="email" placeholder='Enter Your Email' />
              <input type="email" className="email" placeholder='Enter Your Email' />

            </div>
            </div>
      </div>
    </div>
  )
}
export default Home