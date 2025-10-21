import React, { useState, useEffect } from "react";
import axios from "../api/axiosConfig";

function AppointmentForm() {
  const [orgs, setOrgs] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loadingDocs, setLoadingDocs] = useState(false);
  const [formData, setFormData] = useState({
    orgId: "",
    doctorId: "",
    date: "",
    time: "",
  });

  const token = localStorage.getItem("token");
  const patientId = localStorage.getItem("userId");

  // Fetch all organizations initially
  useEffect(() => {
    const fetchOrgs = async () => {
      try {
        const res = await axios.get("/organization", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrgs(res.data);
      } catch (err) {
        console.error("Error fetching organizations:", err);
      }
    };
    fetchOrgs();
  }, [token]);

  // Fetch doctors when organization changes
  useEffect(() => {
    const fetchDoctors = async () => {
      if (!formData.orgId) return;
      setLoadingDocs(true);
      try {
        const res = await axios.get(`/organization/${formData.orgId}/doctors`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDoctors(res.data);
      } catch (err) {
        console.error("Error fetching doctors:", err);
        setDoctors([]);
      } finally {
        setLoadingDocs(false);
      }
    };
    fetchDoctors();
  }, [formData.orgId, token]);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.orgId || !formData.doctorId || !formData.date || !formData.time) {
      alert("Please fill all fields!");
      return;
    }

    try {
      await axios.post(
        "/appointments",
        { ...formData, patientId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Appointment booked successfully!");
      setFormData({ orgId: "", doctorId: "", date: "", time: "" });
      setDoctors([]);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Booking failed. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Book Appointment</h2>

      <form onSubmit={handleSubmit}>
        {/* Organization Selection */}
        <label>Select Organization:</label>
        <select
          value={formData.orgId}
          onChange={(e) =>
            setFormData({ ...formData, orgId: e.target.value, doctorId: "" })
          }
          required
        >
          <option value="">-- Choose Organization --</option>
          {orgs.map((org) => (
            <option key={org._id} value={org._id}>
              {org.name}
            </option>
          ))}
        </select>

        {/* Doctor Selection */}
        <label>Select Doctor:</label>
        {loadingDocs ? (
          <p>Loading doctors...</p>
        ) : (
          <select
            value={formData.doctorId}
            onChange={(e) =>
              setFormData({ ...formData, doctorId: e.target.value })
            }
            required
            disabled={!formData.orgId}
          >
            <option value="">
              {formData.orgId ? "-- Choose Doctor --" : "Select an organization first"}
            </option>
            {doctors.map((doc) => (
              <option key={doc._id} value={doc._id}>
                {doc.name} {doc.specialization ? `(${doc.specialization})` : ""}
              </option>
            ))}
          </select>
        )}

        {/* Date */}
        <label>Date:</label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />

        {/* Time */}
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
