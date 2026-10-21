import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {

  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  function handleuser(evt) {
    setUser(evt.target.value);
  }

  function handlepass(evt) {
    setPass(evt.target.value);
  }

  function handleemail(evt) {
    setEmail(evt.target.value);
  }

  function handlephone(evt) {
    setPhone(evt.target.value);
  }

  function handleaddress(evt) {
    setAddress(evt.target.value);
  }

  function check() {
    var logindetails = axios.post("https://login-page-342y.onrender.com/login", {
      username: user,
      password: pass,
      email: email,
      phone: phone,
      address: address         
    });

    if (
      user.trim() === "" ||
      pass.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      address.trim() === ""
    ) {
      alert("Please fill all the fields!");
      return;
    }

    logindetails.then(function (data) {
      if (data.data === true) {
        navigate('/success');
      }
      else {
        navigate('/fail');
      }
    })
  }

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">🔐</div>

        <h1 className="login-title">Welcome Back!</h1>

        <p className="login-subtitle">
          Sign in to continue to your account
        </p>

        <div className="login-form">

          <div className="login-field">
            <label>Username</label>
            <input onChange={handleuser} name="username" placeholder="Enter your name" required
            />
          </div>

          <div className="login-field">
            <label>Password</label>
            <input onChange={handlepass} name="password" type="password" placeholder="Enter your password" required
            />
          </div>

          <div className="login-field">
            <label>Email Address</label>
            <input onChange={handleemail} name="email" type="email" placeholder="Enter your email" required
            />
          </div>

          <div className="login-field">
            <label>Phone Number</label>
            <input onChange={handlephone} name="phone" type="tel" placeholder="Enter your phone number" required
            />
          </div>

          <div className="login-field">
            <label>Address</label>
            <input onChange={handleaddress} name="address" placeholder="Enter your address" required
            />
          </div>

          <button className="login-button" type='submit' onClick={check}>
            Login <span>→</span>
          </button>

        </div>

        <p className="login-footer">
          🔒 Your account, your privacy
        </p>

      </div>
    </div>
  )
}

export default App
