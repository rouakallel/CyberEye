
import { NavLink , Link } from "react-router-dom";
// eslint-disable-next-line no-unused-expressions
<script src="https://kit.fontawesome.com/4e855cac99.js" crossorigin="anonymous"></script>
function Navbar() {
  return (
    <>
 <nav className=" navbar navbar-expand-lg navbar-light bg-white navbar-toggled-show  scrolled fixed-top "  data-sticky="top">
    <div className="container">
        <Link className="navbar-brand" to="/">
        <img className="logo" src="../img/logocybereye3.png" alt="LogoCyberEye"></img>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="true" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon custom-toggler"></span>
        </button>
        <div className="navbar-collapse justify-content-center collapse show" id="navbarColor01">
        <div className='py-2 py-lg-0'>
        <ul className="navbar-nav me-auto">
      
        <li className="nav-item ">
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

        </div>
        </div>
    </div>
</nav>
<div className="border-bottom"></div>
</>
  )
}

export default Navbar 