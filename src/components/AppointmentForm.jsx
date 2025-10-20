import React, { useState, useEffect } from "react";
import axios from "../api/axiosConfig";

function AppointmentForm() {
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    doctorId: "",
    date: "",
    time: "",
  });

  // Get JWT token and user ID from localStorage
  const token = localStorage.getItem("token");
  const patientId = localStorage.getItem("userId");

  // Fetch all doctors for dropdown
  useEffect(() => {
    axios
      .get("/auth/doctors", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setDoctors(res.data))
      .catch((err) => console.log("Error fetching doctors:", err));
  }, [token]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.doctorId || !formData.date || !formData.time) {
      alert("Please fill all fields!");
      return;
    }

    axios
      .post(
        "/appointments",
        { ...formData, patientId }, // sending patientId, doctorId, date, time
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        alert("Appointment booked successfully!");
        setFormData({ doctorId: "", date: "", time: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Booking failed. Please try again.");
      });
  };

  return (
    <div className="form-container">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>Select Doctor:</label>
        <select
          value={formData.doctorId}
          onChange={(e) =>
            setFormData({ ...formData, doctorId: e.target.value })
          }
          required
        >
          <option value="">-- Choose Doctor --</option>
          {doctors.map((doc) => (
            <option key={doc._id} value={doc._id}>
              {doc.name} (`${doc.specialization}  Nerologist `)
            </option>
          ))}
        </select>

        <label>Date:</label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />

        <label>Time:</label>
        <input
          type="time"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          required
        />

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default AppointmentForm;
