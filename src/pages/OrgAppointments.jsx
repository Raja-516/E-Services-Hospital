import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";

function OrgAppointments() {
  const [appointments, setAppointments] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("/organization/appointments", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => setAppointments(res.data))
      .catch(err => console.error("Error fetching org appointments:", err));
  }, [token]);

  return (
    <div>
      <h2>Organization Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        appointments.map((a) => (
          <div key={a._id} className="card">
            <p><b>Doctor:</b> {a.doctorId?.name}</p>
            <p><b>Patient:</b> {a.patientId?.name}</p>
            <p><b>Date:</b> {a.date}</p>
            <p><b>Time:</b> {a.time}</p>
            
          </div>
        ))
      )}
    </div>
  );
}

export default OrgAppointments;
