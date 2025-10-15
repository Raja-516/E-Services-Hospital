import React, { useState } from "react";
import axios from "../api/axiosConfig";

function Signup() {
  const [data, setData] = useState({ name: "", email: "", password: "", role: "patient" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/signup", data);
      alert("Signup successful!");
      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" required onChange={(e) => setData({ ...data, name: e.target.value })} />
        <input placeholder="Email" type="email" required onChange={(e) => setData({ ...data, email: e.target.value })} />
        <input placeholder="Password" type="password" required onChange={(e) => setData({ ...data, password: e.target.value })} />
        <select onChange={(e) => setData({ ...data, role: e.target.value })}>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
