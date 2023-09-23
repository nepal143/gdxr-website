import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>

    {/* registration part start here  */}
      <div className="register">

        {/* Login heading  here  */}
        <h1 className="login">LOGIN</h1>  

        {/* form starts here  */}
        <form>
          <input // input for user name 
            value={name}
            type="text"
            className="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

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
      {/* registration part ends here  */}


    </>
  );
}

export default App;
