import React, { useState } from "react";
import axios from "../api/axiosConfig";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user._id);
      localStorage.setItem("role", res.data.user.role);
      alert("Login successful!");
      if (res.data.user.role === "doctor") window.location.href = "/doctor-dashboard";
      else window.location.href = "/";
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" type="email" required onChange={(e) => setData({ ...data, email: e.target.value })} />
        <input placeholder="Password" type="password" required onChange={(e) => setData({ ...data, password: e.target.value })} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
