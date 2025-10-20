import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";

function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  

  useEffect(() => {
  const token = localStorage.getItem("token");
  const patientId = localStorage.getItem("userId");

  if (!token) {
    console.error("No token found, redirect to login");
    return;
  }

  axios.get(`/appointments/patient/${patientId}`, {
    headers: {
      Authorization: `Bearer ${token}` // ✅ correct format
    }
  })
  .then((res) => setAppointments(res.data))
  .catch((err) => console.error("Error fetching appointments:", err));
}, []);


  return (
    <div className="dashboard">
      <h2>My Appointments</h2>
      {appointments.length === 0 && <p>No appointments yet.</p>}
      {appointments.map((app) => (
        <div key={app._id} className="appointment-card">
          <p><strong>Doctor:</strong> {app.doctorId.name}</p>
          <p><strong>Date:</strong> {app.date}</p>
          <p><strong>Time:</strong> {app.time}</p>
          <p><strong>Status:</strong> {app.status}</p>
          <p><strong>Prescription:</strong> {app.prescription || "Not yet available"}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;