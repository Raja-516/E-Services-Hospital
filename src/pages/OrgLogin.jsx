import React, { useState } from "react";
import axios from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

function OrgLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // POST to organization login (backend route: /api/organization/login)
      const res = await axios.post("/organization/login", form);
      const { token, organization } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", organization._id || organization.id);
      localStorage.setItem("role", "organization");

      alert("Organization login successful");
      navigate("/org/dashboard");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Organization Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Org email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default OrgLogin;
