import "./App.css";
import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

//Sending signup data to backend
//   async function loginUser(event){
//     event.preventDefault()
//     const response = await fetch("http://localhost:4000/api/forgot",{
//       method:"POST",
//       headers:{
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         email,
//         password
//       })
//     })
//     const data = await response.json()
//     console.log(data)
//     if(data.user!=="false"){
//       localStorage.setItem("token",data.user)
//       window.location.href = "/home"
//     }
//     else{
//       alert("Invalid e-mail or password")
//     }
//   }
  async function sendCode(event){
    event.preventDefault()
    const response = await fetch("http://localhost:4000/api/sendCode",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email
        })
    })
    const data = await response.json()
    if(data.status == "ok"){
        alert("Code sent")
    }
    else{
        alert("User doesn't exist")
    }
  }

  async function verifyCode(event){
    event.preventDefault()
    const response = await fetch("http://localhost:4000/api/sendCode",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            code
        })
    })
    const data = await response.json()
    if(data.status == "ok"){
        alert("Code sent")
    }
    else{
        alert("User doesn't exist")
    }
  }

  return (
    <>
    <div className="container">

    {/* registration part start here  */}
      <div className="register">

        {/* Login heading  here  */}
        <h1 className="login">Create Reset Code</h1>  

        {/* form starts here  */}
        <form onSubmit={sendCode}>

          <input // input for email
            value={email}
            type="email"
            className="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          

          <input className="submit" type="submit" value="Send Code"  />
        </form>
        {/* form ends here  */}
        <form onSubmit={verifyCode}>
        <h1 className="login">Verify Reset Code</h1>
        <input // input for password 
            value={code}
            type="password"
            className="password"
            placeholder="Password"
            onChange={(e) => setCode(e.target.value)}
          />
          <input className="submit" type = "submit" value ="Verify"></input>
        </form>

      </div>
      {/* registration part ends here  */}


    </div>
    </>
  );
}

export default ForgotPassword;
