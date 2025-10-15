import React from "react";
import { Link } from "react-router-dom";
import Services from "./Services";
import Doctors from "./Doctors";
import Testimonals from "./Testimonals";
import About from "./About";



function Home() {
  return (
    <>
    <div className='app'>
      <div className="main">
        <div className='text'>
          <h4 className='health'>Health comes first</h4>
          <h1>Protect and take care of your Health by E-Patient</h1>
          <p>
            Your digital healthcare companion. Manage patient history, appointments,
            health suggestions, insurances and medical records with ease.
          </p>
          <Link to="/signup">
        <button>Get Started</button>
      </Link>
        </div>
        <div className='doctor'>
          <img src='/image1.png' className='imgg' alt="doctor" />
        </div>
      </div>

      <div className="cards">
        <div className="small">
          <div className="head-row">
            <img src="/consultant.png" className="conn" alt="consultant" />
            <h2>Find Doctor's</h2>
          </div>
          <p className='pp'>Get most affordable doctor at your doorsteps.</p>
          <div className="l"></div>
        </div>

        <div className="small">
          <div className="head-row">
            <img src="/appointments.png" className="conn" alt="consultant" />
            <h2>Make Appointments</h2>
          </div>
          <p className='pp'>Make easy appointments in hospital for your convenience.</p>
          <div className="l"></div>
        </div>

        <div className="small">
          <div className="head-row">
            <img src="/healthy.png" className="conn" alt="consultant" />
            <h2>Healthy Habits</h2>
          </div>
          <p className='pp'>Know the good habits for your life.</p>
          <div className="l"></div>
        </div>
      </div>
<Services />
<Doctors />
<div className="making"> <p>make easier way for your appointments ,it may take less than 5 minutes of time for your health</p> <span ><Link to="/book-appointment"><button className='decc'>Make Apointment</button></Link></span> </div>
      <Testimonals />
    </div>

    
    <About />
    </>
  );
}

export default Home;
