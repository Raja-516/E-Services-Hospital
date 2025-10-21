import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAppointments = async () => {
    try {
      // GET /api/organization/appointments
      const res = await axios.get("/organization/appointments");
      setAppointments(res.data || []);
    } catch (err) {
      console.error("Error fetching org appointments:", err);
      alert(err.response?.data?.error || "Failed to fetch appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <p>Loading appointments...</p>;
  if (!appointments.length) return <p>No appointments yet.</p>;

  return (
    <div className="appointments">
      {appointments.map((a) => (
        <div key={a._id} className="appointment-card">
          <p><strong>Doctor:</strong> {a.doctorId?.name} ({a.doctorId?.specialization})</p>
          <p><strong>Patient:</strong> {a.patientId?.name} ({a.patientId?.email})</p>
          <p><strong>Date:</strong> {a.date} <strong>Time:</strong> {a.time}</p>
          <p><strong>Status:</strong> {a.status}</p>
          <p><strong>Prescription:</strong> {a.prescription || "—"}</p>
        </div>
      ))}
    </div>
  );
}

export default AppointmentList;
