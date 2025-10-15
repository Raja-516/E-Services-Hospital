import { IoIosArrowRoundForward } from "react-icons/io";

function Doctors() {
  return (
    <div className="doctor-section">
      <div className="side">
        <h3>DOCTORS</h3>
        <h1>Meet our special Doctors                 <IoIosArrowRoundForward /></h1>
      </div>

      <div className="doctors-grid">
        {/* Doctor 1 */}
        <div className="card">
          <img src="doctor1.png" alt="Dr. Anil Sharma" className="photo"/>
          <h3>Dr. Anil Sharma</h3>
          <p>Cardiologist with 15+ years of experience in heart care and surgery.</p>
        </div>

        {/* Doctor 2 */}
        <div className="card">
          <img src="doctor2.png" alt="Dr. Meera Kapoor"  className="photo"/>
          <h3>Dr. Meera Kapoor</h3>
          <p>Dermatologist specializing in skin treatments and cosmetic care.</p>
        </div>

        {/* Doctor 3 */}
        <div className="card">
          <img src="doctor3.png" alt="Dr. Rajesh Iyer" className="photo"/>
          <h3>Dr. Rajesh Iyer</h3>
          <p>Neurologist providing advanced treatments for brain and nerve disorders.</p>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
