import React from "react";
import OrgDashboard from "../components/OrgDashboard";
import DoctorForm from "../components/DoctorForm";
import AppointmentList from "../components/AppointmentList";
import { Routes, Route } from "react-router-dom";

function OrgDashboardPage() {
  return (
    <div className="org-page">
      <Routes>
        <Route path="/" element={<OrgDashboard />} />
        <Route path="/create-doctor" element={<DoctorForm />} />
        <Route path="/appointments" element={<AppointmentList />} />
      </Routes>
    </div>
  );
}

export default OrgDashboardPage;
