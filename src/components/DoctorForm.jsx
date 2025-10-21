import React, { useState } from "react";
import axios from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

function DoctorForm() {
  const [data, setData] = useState({ name: "", email: "", password: "", specialization: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // POST /api/organization/doctors  (protected route; axios interceptor adds token)
      // eslint-disable-next-line no-unused-vars
      const res = await axios.post("/organization/doctors", data);
      alert("Doctor created");
      // after create, navigate to org dashboard or refresh
      navigate("/org/dashboard");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Failed to create doctor");
    }
  };

  return (
    <div className="form-container">
      <h2>Add Doctor</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" required value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} />
        <input placeholder="Email" type="email" required value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} />
        <input placeholder="Password" type="password" required value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} />
        <input placeholder="Specialization" value={data.specialization} onChange={(e)=>setData({...data,specialization:e.target.value})} />
        <button type="submit">Create Doctor</button>
      </form>
    </div>
  );
}

export default DoctorForm;
