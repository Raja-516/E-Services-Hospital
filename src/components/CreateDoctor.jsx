// src/components/CreateDoctor.jsx
import React, { useState } from "react";
import axios from "../api/axiosConfig";

function CreateDoctor() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", specialization: "" });
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/organization/doctors", formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Doctor added successfully!");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Error creating doctor");
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Doctor</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" required onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input placeholder="Email" type="email" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input placeholder="Password" type="password" required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <input placeholder="Specialization" required onChange={(e) => setFormData({ ...formData, specialization: e.target.value })} />
        <button type="submit">Add Doctor</button>
      </form>
    </div>
  );
}

export default CreateDoctor;
