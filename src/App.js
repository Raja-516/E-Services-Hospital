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
import OrgLogin from "./pages/OrgLogin";
import OrgSignup from "./pages/OrgSignup";
import OrgDashboardPage from "./pages/OrgDashboardPage";
import OrgDashboard from "./components/OrgDashboard";
import OrgAppointments from "./pages/OrgAppointments";
import CreateDoctor from "./components/CreateDoctor";
import Services from "./components/Services";
import Doctors from "./components/Doctors";

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
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/org/dashboard" element={<OrgDashboard />} />
        <Route path="/org/create-doctor" element={<CreateDoctor />}/>
        <Route path="/org/login" element={<OrgLogin />} />
  <Route path="/org/signup" element={<OrgSignup />} />
  <Route path="/org/dashboard/*" element={<OrgDashboardPage />} />
  <Route path="/org/appointments" element={<OrgAppointments />} />
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
