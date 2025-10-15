import { IoIosArrowRoundForward } from "react-icons/io";

function Testimonals() {
  return (
    <div className="testimonals-section">
      <div className="side">
        <h3>TESTIMONIALS</h3>
        <h1>
          What Our Patients Say <IoIosArrowRoundForward />
        </h1>
      </div>

      <div className="testimonals-grid">
        {/* Testimonial 1 */}
        <div className="testimonal-card">
          <div className="user-row">
            <img src="patient1.png" alt="John Doe" />
            <div>
              <h3>John Doe</h3>
              <p className="address">New York, USA</p>
            </div>
          </div>
          <p className="feedback">
            "E-Patient has transformed the way I manage my health. The app is
            user-friendly and makes booking appointments a breeze!"
          </p>
          <p className="rating">★★★★★</p>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonal-card">
          <div className="user-row">
            <img src="patient2.png" alt="Sarah Lee" />
            <div>
              <h3>Sarah Lee</h3>
              <p className="address">London, UK</p>
            </div>
          </div>
          <p className="feedback">
            "The doctors are highly professional and the support team is always
            ready to help. I feel confident about my health care."
          </p>
          <p className="rating">★★★★☆</p>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonal-card">
          <div className="user-row">
            <img src="patient3.png" alt="Rajesh Kumar" />
            <div>
              <h3>Rajesh Kumar</h3>
              <p className="address">Delhi, India</p>
            </div>
          </div>
          <p className="feedback">
            "Great experience! Booking appointments has never been easier. I
            highly recommend it to everyone."
          </p>
          <p className="rating">★★★★★</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonals;
