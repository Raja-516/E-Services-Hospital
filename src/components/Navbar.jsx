import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    window.location.href = "/";
  };

  return (
    <div className="container">
      <div className="imge">
        <img src='/image1.png' alt="logo" />
      </div>

      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        {!token &&<li><Link to="/services">Services</Link></li>}
        {!token &&<li><Link to="/doctors">Doctors</Link></li>}
        

        
        {!token && <li><Link to="/signup">Signup</Link></li>}

        {token && role === "patient" && <li><Link to="/book-appointment" className='butto'>Book Appointment</Link></li>}
        {token && role === "patient" && <li><Link to="/dashboard" className='butto'>Patient Dashboard</Link></li>}
        
        {token && role === "doctor" && <li><Link to="/doctor-dashboard" className='butto'>Doctor Dashboard</Link></li>}

      </ul>

      <div className="butt">
        {!token && <Link to='/login'><button className='butto'>Login</button></Link>}
        {!token ?<Link to="/login"><button className='butto'>Make Appointments</button></Link>: role === "patient" && <Link to="/book-appointment" ><button className='butto'>Make Appointments</button></Link>}
      </div>
        {token && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default Navbar;
