import React, { useState } from "react";
import axios from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

function DoctorForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    specialization: "",
    timings: [{ day: "Monday", from: "", to: "" }],
  });

  const navigate = useNavigate();

  const handleTimingChange = (index, field, value) => {
    const updatedTimings = [...data.timings];
    updatedTimings[index][field] = value;
    setData({ ...data, timings: updatedTimings });
  };

  const addTimingRow = () => {
    setData({
      ...data,
      timings: [...data.timings, { day: "Monday", from: "", to: "" }],
    });
  };

  const removeTimingRow = (index) => {
    const updatedTimings = data.timings.filter((_, i) => i !== index);
    setData({ ...data, timings: updatedTimings });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const token = localStorage.getItem("token"); // ✅ get token

  try {
    const res = await axios.post(
      "/organization/doctors",
      { ...data, timings: data.timings },
      { headers: { Authorization: `Bearer ${token}` } } // ✅ add token here
    );

    alert("Doctor created successfully!");
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
        <input
          placeholder="Name"
          required
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          placeholder="Email"
          type="email"
          required
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          placeholder="Password"
          type="password"
          required
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <input
          placeholder="Specialization"
          value={data.specialization}
          onChange={(e) =>
            setData({ ...data, specialization: e.target.value })
          }
        />

        <h3>Doctor Timings</h3>
        {data.timings.map((t, index) => (
          <div key={index} className="timing-row">
            <select
              value={t.day}
              onChange={(e) =>
                handleTimingChange(index, "day", e.target.value)
              }
            >
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <input
              type="time"
              value={t.from}
              onChange={(e) =>
                handleTimingChange(index, "from", e.target.value)
              }
            />
            <input
              type="time"
              value={t.to}
              onChange={(e) =>
                handleTimingChange(index, "to", e.target.value)
              }
            />
            {data.timings.length > 1 && (
              <button
                type="button"
                onClick={() => removeTimingRow(index)}
                className="remove-btn"
              >
                ❌
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={addTimingRow}>
          ➕ Add Another Day
        </button>

        <button type="submit">Create Doctor</button>
      </form>
    </div>
  );
}

export default DoctorForm;
