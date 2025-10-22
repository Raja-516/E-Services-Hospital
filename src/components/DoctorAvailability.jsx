import React, { useState } from "react";
import axios from "../api/axiosConfig";

const DoctorAvailability = () => {
  const [days, setDays] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [newSlot, setNewSlot] = useState("");
  const doctorId = localStorage.getItem("userId");

  const handleDayToggle = (day) => {
    setDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const addTimeSlot = () => {
    if (newSlot.trim()) {
      setTimeSlots([...timeSlots, newSlot]);
      setNewSlot("");
    }
  };

  const updateAvailability = async () => {
    try {
      const res = await axios.put(
  `/users/${doctorId}/availability`,
  { days, timeSlots },
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }
);}
catch (err) {
      console.error("Error updating availability:", err);
      alert("Failed to update availability");
    }
  };

  return (
    <div className="availability-form">
      <h2>Set Availability</h2>

      <div className="days">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <label key={day}>
            <input
              type="checkbox"
              checked={days.includes(day)}
              onChange={() => handleDayToggle(day)}
            />
            {day}
          </label>
        ))}
      </div>

      <div className="time-slots">
        <input
          type="text"
          placeholder="09:00-12:00"
          value={newSlot}
          onChange={(e) => setNewSlot(e.target.value)}
        />
        <button type="button" onClick={addTimeSlot}>
          ➕ Add Slot
        </button>

        <ul>
          {timeSlots.map((slot, i) => (
            <li key={i}>{slot}</li>
          ))}
        </ul>
      </div>

      <button type="button" onClick={updateAvailability}>
        Save Availability
      </button>
    </div>
  );
};

export default DoctorAvailability;
