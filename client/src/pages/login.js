import "./signin.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//Sending login data to backend
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
    if(data.user!=="false"){
      window.location.href = "/home"
    }
    else{
      alert("Invalid e-mail or password")
    }

  }

  return (
    <>
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
    {/* login part start here  */}
      <div className="register">

        {/* Login heading  here  */}
        <h1 className="login">LOGIN</h1>  

        {/* form starts here  */}
        <form onSubmit={loginUser}>

          <input // input for email
            value={email}
            type="email"
            className="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input // input for password 
            value={password}
            type="password"
            className="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input className="submit" type="submit" value="SIGN UP"  />
        </form>
        {/* form ends here  */}

      </div>
<<<<<<< Updated upstream
      {/* signin part ends here  */}
=======
      {/* login part ends here  */}
>>>>>>> Stashed changes


    </>
  );
}

export default App;
