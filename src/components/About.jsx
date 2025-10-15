import { FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

function About() {
  return (
    <footer className="about">
      <div className="footer-section">
        <h2>E-patient</h2>
        <p>Making healthcare more accessible and organized.</p>
      </div>

      <div className="footer-section">
        <h4>Social Media</h4>
        <div className="social-links">
          <p><FaInstagram /> Instagram</p>
          <p><FaWhatsapp /> WhatsApp</p>
          <p><FaLinkedin /> LinkedIn</p>
        </div>
      </div>

      <div className="footer-section">
        <h4>Departments</h4>
        <p>Cardiology</p>
        <p>Neurology</p>
        <p>General Surgery</p>
      </div>

      <div className="footer-section">
        <h4>Address</h4>
        <p>Drivers Colony, Pithapuram , 533450</p>
      </div>

      <div className="footer-section">
        <h4>Contact</h4>
        <p>📞 +91 9876543210</p>
        <p><FaEnvelope /> xxxxxx@gmail.com</p>
      </div>

      <hr />
      <p className="copyright">
        © 2025 E-patient. All rights reserved.
      </p>
    </footer>
  );
}

export default About;
