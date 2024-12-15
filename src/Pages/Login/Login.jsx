import React, { createContext, useContext, useLayoutEffect, useState } from 'react'
import './Login.css'
import { Link,useNavigate } from 'react-router-dom'
import LoggedInUserProvider from '../../context/LoggedInUserContext'
import { LoggedInUserContext } from '../../context/loggedInUserContext.js'
const Login = () => {

  const [email, setEmail] = useState('');
  const[ password, setPassword ] = useState('');
  const {setLoggedInUser}= useContext(LoggedInUserContext);
  const navigate = useNavigate();


  return (
    <>
      <div className="main">
        <h2>Login</h2>
        <form 
         method="post"
         onSubmit={(e)=>{
          e.preventDefault()
          const users = JSON.parse(localStorage.getItem("users")) || [];
          const user = users.find((user) => user.email == email && user.password == password )
          setEmail('');
          setPassword('');
          if(user){
            setLoggedInUser(user)
            navigate("/")
          }
         }}
         >
          <input
          onChange={(e)=>{
            setEmail(e.target.value)
          }
          }
          type="email" name="email" value={email} id="email" placeholder="Enter your email" />
          <input 
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          type="password" name="password" value={password} id="password" placeholder="Enter your password" />
          <button className="login-btn">Login</button>
        </form>
        <div className="sub">
          <p>New Employee?</p>
          <Link to="/signup"><button className="signup-btn">Sign Up</button></Link>
        </div>
      </div>


    </>
  )
}

export default Login