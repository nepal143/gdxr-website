import React from 'react'

export default function home() {
  return (
    <div>
      <div className="text_data_container">
        <div className="quote">I am A MEARN developer </div>
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

      <div className="googlemaps"></div>
    </div>
  )
}
