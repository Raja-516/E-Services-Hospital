import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import DoctorDashboard from "./components/DoctorDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AppointmentForm from "./components/AppointmentForm";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor-dashboard"
          element={
            <ProtectedRoute>
              <DoctorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
  path="/book-appointment"
  element={
    <ProtectedRoute>
      <AppointmentForm />
    </ProtectedRoute>
  }
/>
      </Routes>
    </div>
  );
}

export default App;
