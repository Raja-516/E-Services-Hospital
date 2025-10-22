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
        <img src="/image1.png" alt="logo" />
      </div>

      <ul className="nav">
        <li><Link to="/">Home</Link></li>

        {/* Public (visible to all) */}
        {!token && <li><Link to="/services">Services</Link></li>}
        {!token && <li><Link to="/doctors">Doctors</Link></li>}

        {/* Signup options */}
        {!token && (
          <>
            <li><Link to="/signup">Patient Signup</Link></li>
            <li><Link to="/org/signup">Org Signup</Link></li>
          </>
        )}

        {/* Patient Section */}
        {token && role === "patient" && (
          <>
            <li><Link to="/book-appointment" className="butto">Book Appointment</Link></li>
            <li><Link to="/dashboard" className="butto">Patient Dashboard</Link></li>
          </>
        )}

        {/* Doctor Section */}
        {token && role === "doctor" && (
          <>
          <li><Link to="/doctor-dashboard" className="butto">Doctor Dashboard</Link></li>
          <li><Link to="/org/doctors/time" className="butto">Doctor slot</Link></li>
          </>
        )}

        {/* Organization Section */}
        {token && role === "organization" && (
          <>
            <li><Link to="/org/dashboard" className="butto">Org Dashboard</Link></li>
            <li><Link to="/org/create-doctor" className="butto">Add Doctor</Link></li>
            <li><Link to="/org/appointments" className="butto">Org Appointments</Link></li>
          </>
        )}
      </ul>

      <div className="butt">
        {!token && (
          <>
            <Link to="/login"><button className="butto">Patient Login</button></Link>
            <Link to="/org/login"><button className="butto">Org Login</button></Link>
          </>
        )}

        {/* “Make Appointment” button logic */}
        {!token ? (
          <Link to="/login"><button className="butto">Make Appointment</button></Link>
        ) : (
          role === "patient" && <Link to="/book-appointment"><button className="butto">Make Appointment</button></Link>
        )}
      </div>

      {token && (
        <button onClick={handleLogout} className="butto logout">
          Logout
        </button>
      )}
    </div>
  );
}

export default Navbar;
