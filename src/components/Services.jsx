import { IoIosArrowRoundForward } from "react-icons/io";

function Services() {
  return (
    <div className="service">
      <div className="side">
        <h3>SERVICES</h3>
        <h1>Departments we have                 <IoIosArrowRoundForward /></h1>
      </div>

      {/* Heart */}
      <div className="card">
        <div className="head-row">
          <img src="#" className="conn" alt="heart" />
          <h3>Heart Care</h3>
        </div>
        <p className="pp">
          Comprehensive cardiology services including diagnosis, treatment, and 
          preventive care for heart health.
        </p>
        <div className="l"><IoIosArrowRoundForward /></div>
      </div>

      {/* Neurons */}
      <div className="card">
        <div className="head-row">
          <img src="#" className="conn" alt="neurons" />
          <h3>Neurology</h3>
        </div>
        <p className="pp">
          Specialized care for brain, spine, and nervous system disorders with 
          advanced diagnostic facilities.
        </p>
        <div className="l"><IoIosArrowRoundForward /></div>
      </div>

      {/* General Surgeon */}
      <div className="card">
        <div className="head-row">
          <img src="#" className="conn" alt="surgeon" />
          <h3>General Surgery</h3>
        </div>
        <p className="pp">
          Safe and effective surgical procedures with modern techniques for a 
          wide range of health conditions.
        </p>
        <div className="l"><IoIosArrowRoundForward /></div>
      </div>

      {/* ENT */}
      <div className="card">
        <div className="head-row">
          <img src="#" className="conn" alt="ent" />
          <h3>ENT</h3>
        </div>
        <p className="pp">
          Expert treatment for ear, nose, and throat conditions to improve 
          breathing, hearing, and overall comfort.
        </p>
        <div className="l"><IoIosArrowRoundForward /></div>
      </div>

      {/* Medicines */}
      <div className="card">
        <div className="head-row">
          <img src="#" className="conn" alt="medicines" />
          <h3>Medicines</h3>
        </div>
        <p className="pp">
          Wide range of prescribed and over-the-counter medicines delivered 
          quickly for your convenience.
        </p>
        <div className="l"><IoIosArrowRoundForward /></div>
      </div>

      {/* Dental */}
      <div className="card">
        <div className="head-row">
          <img src="#" className="conn" alt="dental" />
          <h3>Dental Care</h3>
        </div>
        <p className="pp">
          Complete oral health solutions including cleaning, fillings, braces, 
          and cosmetic dentistry.
        </p>
        <div className="l"><IoIosArrowRoundForward /></div>
      </div>

      {/* Skin */}
      <div className="card">
        <div className="head-row">
          <img src="#" className="conn" alt="skin" />
          <h3>Skin Care</h3>
        </div>
        <p className="pp">
          Advanced dermatology treatments for skin conditions, allergies, and 
          cosmetic enhancements.
        </p>
        <div className="l"><IoIosArrowRoundForward /></div>
      </div>

      {/* Eye */}
      <div className="card">
        <div className="head-row">
          <img src="#" className="conn" alt="eye" />
          <h3>Eye Care</h3>
        </div>
        <p className="pp">
          Complete eye check-ups, vision correction, and surgical treatments 
          with state-of-the-art technology.
        </p>
        <div className="l"><IoIosArrowRoundForward /></div>
      </div>
    </div>
  );
}

export default Services;
