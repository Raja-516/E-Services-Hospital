import React, { useState } from "react";
import axios from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

function OrgSignup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // POST to create organization: /api/organization/signup
      await axios.post("/organization/signup", form);
      alert("Organization created. Please login.");
      navigate("/org/login");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Create Organization</h2>
      <form onSubmit={handleSubmit}>
        <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Organization name" required />
        <input value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder="Email" type="email" required />
        <input value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} placeholder="Password" type="password" required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default OrgSignup;
