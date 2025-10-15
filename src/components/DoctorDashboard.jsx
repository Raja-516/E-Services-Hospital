import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";

function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [prescriptionInputs, setPrescriptionInputs] = useState({});
  const token = localStorage.getItem("token");
  const doctorId = localStorage.getItem("userId"); // logged-in doctor

  // Fetch all appointments for this doctor
  useEffect(() => {
    axios
      .get(`/appointments/doctor/${doctorId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setAppointments(res.data))
      .catch((err) => console.log("Error fetching appointments:", err));
  }, [doctorId, token]);

  // Update prescription for an appointment
  const updatePrescription = (id) => {
    const prescription = prescriptionInputs[id];
    if (!prescription) {
      alert("Please write a prescription first.");
      return;
    }

    axios
      .put(
        `/appointments/${id}/prescription`,
        { prescription },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        alert("Prescription updated!");
        // Update appointment list locally
        setAppointments((prev) =>
          prev.map((app) => (app._id === id ? res.data : app))
        );
        setPrescriptionInputs((prev) => ({ ...prev, [id]: "" }));
      })
      .catch((err) => console.log("Error updating prescription:", err));
  };

  return (
    <div className="dashboard">
      <h2>Doctor Dashboard</h2>
      {appointments.length === 0 ? (
        <p>No appointments yet.</p>
      ) : (
        <div className="appointments-list">
          {appointments.map((app) => (
            <div key={app._id} className="appointment-card">
              <p><strong>Patient:</strong> {app.patientId.name}</p>
              <p><strong>Email:</strong> {app.patientId.email}</p>
              <p><strong>Date:</strong> {app.date}</p>
              <p><strong>Time:</strong> {app.time}</p>
              <p><strong>Status:</strong> {app.status || "Pending"}</p>

              <input
                type="text"
                placeholder="Write prescription"
                value={prescriptionInputs[app._id] || ""}
                onChange={(e) =>
                  setPrescriptionInputs({
                    ...prescriptionInputs,
                    [app._id]: e.target.value,
                  })
                }
              />
              <button onClick={() => updatePrescription(app._id)}>
                Save Prescription
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DoctorDashboard;
