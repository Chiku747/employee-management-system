import React from 'react'
import './Navbar.css'
import { useContext } from 'react'
import { LoggedInUserContext } from '../../context/loggedInUserContext.js'
const Navbar = () => {

const {loggedInUser} = useContext(LoggedInUserContext);



  return (
    <>
    <div >
    <nav className="navigation-bar">
        <div>
            <p>Hello</p>
            <p className="username">{loggedInUser ? loggedInUser.name : "username"} 👋</p>
        </div>
        <div>
        <button className="logout-btn">Logout</button>
        </div>
    </nav>
    </div>
    </>
  )
}

export default Navbar