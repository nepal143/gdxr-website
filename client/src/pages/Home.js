import React from 'react'
import { useState } from "react";
export default function Home() {
  
  const [quote, setQuote] =  useState("");
  //Sending signup data to backend
    async function userQuote(event){
      event.preventDefault()
      const response = await fetch("http://localhost:4000/api/quote",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          quote
        })
      })
    
      const data = await response.json()
      console.log(data)
    }
  return (
    <div>
      <div className="text_data_container">
        <div className="quote">I am A MERN developer 
        <form onSubmit={userQuote}>
          <input // input for user name 
            value={quote}
            type="text"
            className="name"
            placeholder="Name"
            onChange={(e) => setQuote(e.target.value)}
          />

          <input className="submit" type="submit" value="SIGN UP"  />
        </form>
        </div>
        <div className="profile_card">
            <div className="profilephoto"></div>
            <div className="personname">YOGESH NAHERA</div>
            <div className="line"></div>
            <div className="profession">student</div>
            <div className="institute">Army Institute Of Technology </div>
        </div>
        <div className="aboutMe">
            <h2>ABOUT ME </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente magni delectus veniam? Corrupti eaque voluptatum vitae dicta nam, repellat saepe enim debitis dolorum ab quibusdam minus, distinctio deleniti optio totam atque ipsum laboriosam odio. Quos explicabo at magni laborum tempore officiis ea, nesciunt facere nam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ipsam, vero, impedit recusandae at illo dolorum eaque inventore similique, assumenda dolorem adipisci ipsum pariatur dolor blanditiis ducimus consequuntur? Suscipit, expedita. Lorem ?</p>
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
