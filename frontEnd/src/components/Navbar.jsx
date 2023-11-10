import React from 'react';
import { NavLink , Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock } from '@fortawesome/free-solid-svg-icons'; 
// eslint-disable-next-line no-unused-expressions
<script src="https://kit.fontawesome.com/4e855cac99.js" crossorigin="anonymous"></script>
function Navbar() {
  return (
    <>
 <nav className=" navbar navbar-expand-lg navbar-dark navcolor custom-navbar" >
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">CyberEye</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/">Home
            <span className="visually-hidden">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        </ul>
        
        <ul className="navbar-nav ms-auto">  
        <li className="nav-item">
         
          <NavLink className="nav-link" to="/login">  <span> <FontAwesomeIcon icon={faUserLock}/></span> Login</NavLink>
        </li>
        </ul>

        </div>
    </div>
</nav>
</>
  )
}

export default Navbar 