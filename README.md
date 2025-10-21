🩺 Hospital Management System — Frontend

This is the frontend of the Hospital Management System built using React.js.
It provides a responsive and dynamic interface for patients, doctors, and organizations to interact with the backend services.

🧠 Overview

The frontend provides:

Patient registration and login

Doctor registration (via organizations)

Booking and managing appointments

Viewing doctors under organizations

Organization dashboard with doctors and appointments

Token-based authentication handling and role-based rendering

🚀 Key Functionalities
Functionality	Description
🏢 Organization Dashboard	View total doctors, appointments, add new doctors.
👨‍⚕️ Doctor Listing	Shows doctors under specific organizations.
🧑‍🤝‍🧑 Patient Dashboard	Book appointments, view booked appointments.
📅 Dynamic Appointment Form	Shows available organizations → doctors dynamically.
🔐 Authentication	JWT-based login and signup for patients, doctors, and orgs.
🌐 Routing	Client-side routing using react-router-dom.
⚡ Reusable Components	Navbar, forms, and cards used across dashboards.
🧩 Features Summary

✅ Role-based navigation (Patient/Doctor/Organization)

✅ Secure token storage in localStorage

✅ Dynamically fetched data from backend APIs

✅ Clean, modular component structure

✅ Easy to extend (add chat, reports, or doctor schedules)

🧱 Folder Structure
frontend/
│
├── 📂 public/
│   └── index.html                # Main HTML template
│
├── 📂 src/
│   ├── 📂 api/
│   │   └── axiosConfig.js        # Axios base configuration for backend calls
│   │
│   ├── 📂 components/
│   │   ├── Navbar.jsx            # Top navigation bar
│   │   ├── AppointmentForm.jsx   # Form for booking appointments
│   │   ├── OrgDashboard.jsx      # Organization dashboard
│   │   ├── PatientDashboard.jsx  # Patient dashboard
│   │   ├── DoctorDashboard.jsx   # Doctor dashboard
│   │   └── CreateDoctor.jsx      # Form to add a doctor (Org only)
│   │
│   ├── 📂 pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   │
│   ├── App.js                     # Main React app & routes
│   ├── index.js                   # Entry point
│   └── styles.css                 # Global CSS
│
├── package.json
└── README.md


📦 Dependencies

Package         	Use
react	            UI library
react-dom	        DOM rendering
react-router-dom	Routing and navigation
axios	            HTTP client to call backend APIs
react-scripts	    React development scripts


💡 Future Enhancements

Admin features for approving doctors

Add real-time notifications for appointments

Improve styling with TailwindCSS or Material-UI

Add calendar view for doctors and patients

Add search/filter for doctors by specialization or org

Integrate chat or teleconsultation features



✨ Author

Raja Akula
Full Stack Development |  Frontend Developer | Hospital Management System