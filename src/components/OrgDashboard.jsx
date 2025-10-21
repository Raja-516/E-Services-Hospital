import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import { Link } from "react-router-dom";

function OrgDashboard() {
  const [doctors, setDoctors] = useState([]);
  const [appointmentsCount, setAppointmentsCount] = useState(null);
  const [loading, setLoading] = useState(true);
  
  
  
useEffect(() => {
  const fetchDoctors = async () => {
  try {
    const res = await axios.get("/organization/doctors", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    // ✅ backend sends { doctors: [...], count: N }
    setDoctors(res.data.doctors || []);
  } catch (err) {
    console.error("Error fetching doctors:", err);
    setDoctors([]);
  }
};


  fetchDoctors();
}, []);

  const fetchAppointmentsCount = async () => {
    try {
      // Endpoint returns array count or numeric
      const res = await axios.get("/organization/appointments", {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});
setAppointmentsCount(Array.isArray(res.data) ? res.data.length : 0);

    } catch (err) {
      console.error("Error fetching appointments:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    
    fetchAppointmentsCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  

  


  return (
    <div className="org-dashboard">
      <h2>Organization Dashboard</h2>

      <div className="stats">
        <div className="stat-card">
          <h3>Doctors</h3>
          <p>{doctors.length}</p>
          <Link to="/org/create-doctor">Add Doctor</Link>
        </div>

        <div className="stat-card">
          <h3>Appointments</h3>
          <p>{loading ? "Loading..." : appointmentsCount}</p>
          <Link to="/org/appointments">View Appointments</Link>
        </div>
      </div>
     
  
 

  
    
      <section>
        <h3>Doctors</h3>
        {doctors.length === 0 ? <p>No doctors yet.</p> : (
          <ul>
            {doctors.map(d => (
              <li key={d._id}>{d.name} — {d.specialization} — {d.email}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default OrgDashboard;
