import { NavLink , Link } from "react-router-dom";

function Navbar() {
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
        <form className="d-flex">
        <input className="form-control me-sm-2" type="search" placeholder="Search"></input>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
        </div>
    </div>
</nav>
</>
  )
}

export default Navbar 