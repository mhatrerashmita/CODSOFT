
// export default Login
import React, { useState } from "react";
import { toast } from 'react-toastify';
import axios from "axios";
import { useNavigate ,Link} from "react-router-dom";
import LogoImage from '../JobBoard.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
import "./login.css"
function Login() {
  const history = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = (password) => password.length >= 6;

  const submit = async (e) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!isPasswordValid(password)) {
      toast.error("Please enter a valid password (at least 6 characters)");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/", {
        username, email, password
      });

      console.log("Server Response:", response.data);

      if (response.status === 200) {
        if (response.data === "notexist") {
          toast.error("Don't Have Account");
        } else if (response.data === "exist") {
          history("/", { state: { id: email } });
          toast.success("Login Successfully")
        } else {
          toast.error("Unexpected response from the server");
        }
      } else {
        toast.error("Unexpected response from the server");
      }
    } catch (error) {
      console.error("An error occurred during signup:", error);

      if (error.response) {
        console.error("Server responded with status:", error.response.status);
        toast.error("Error creating account.");
      } else if (error.request) {
        console.error("No response received from the server");
        toast.error("No response received from the server. Please try again later.");
      } else {
        console.error("Error setting up the request:", error.message);
        toast.error("Error setting up the request. Please try again later.");
      }
    }
  };
  return (
    <div className="login">
      <div className="container mt-5">
        <img src="train.jpg" alt="" srcSet="" />
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card" style={{borderRadius: "5px", width: "550px",backgroundColor:'transparent' }}>
              <div className="card-header" style={{ backgroundColor: "transparent" }}>
                <h2 style={{  height: '50px', borderRadius: "4px", marginTop: "0", color: "black" ,textAlign:"center"}}>Login</h2>
                <img src={LogoImage} alt="Logo" className="logo" width="150" height="120" style={{ marginLeft: "190px" }} />
              </div>
              <div className="card-body1">
                <form action="POST">
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label"><FontAwesomeIcon icon={faUser} /> Username:</label>
                    <input type="text" onChange={(e) => { setUsername(e.target.value) }} placeholder="Enter username"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label"> <FontAwesomeIcon icon={faEnvelope} /> Email:</label>
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label"><FontAwesomeIcon icon={faLock} /> Password:</label>
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary" onClick={submit} style={{width:"400px",backgroundColor:"#ccc9",color:"black"}} >Login</button>
                  </div>

                  <Link to="/signup">Signup Page</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights" style={{ marginTop: "12px", textAlign: "center",color:"white" }}>
          <span>&copy; <strong>2023 JobBoard.com </strong> All rights reserved.</span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;

