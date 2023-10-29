import "./App.css";
import { useState } from "react";

function App() {
  const [newPass, setnewPass] = useState("");
  const [confirmPass, sertconfirmPass] = useState("");

//Sending signup data to backend
  async function loginUser(event){
    event.preventDefault()
    const response = await fetch("http://localhost:4000/api/login",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const data = await response.json()
    console.log(data)
    if(data.user!=="false"){
      localStorage.setItem("token",data.user)
      window.location.href = "/home"
    }
    else{
      alert("Invalid e-mail or password")
    }
  }

  return (
    <>
    <div className="container">

    {/* registration part start here  */}
      <div className="register">

        {/* Login heading  here  */}
        <h1 className="login">Change Password</h1>  

        {/* form starts here  */}
        <form onSubmit={changePassword}>

          <input // input for email
            value={newPass}
            type="password"
            className="password"
            placeholder="New Password"
            onChange={(e) => setnewPass(e.target.value)}
          />

          <input // input for password 
            value={confirmPass}
            type="password"
            className="password"
            placeholder="Confirm Password"
            onChange={(e) => setconfirmPass(e.target.value)}
          />

          <input className="submit" type="submit" value="Update"  />
        </form>
        {/* form ends here  */}

      </div>
      {/* registration part ends here  */}


    </div>
    </>
  );
}

export default App;
