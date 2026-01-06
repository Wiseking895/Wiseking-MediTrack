# MediTrack-One Frontend

This is the **frontend** of MediTrack-One, a modern healthcare management system.  
It is built with **React 18, Tailwind CSS, Redux Toolkit**, and **Vite**.  
The frontend handles **landing animation, hero section, patient and appointment management, and responsive UI**.

---

## 🏗 Project Structure

src/
├── assets/
│ ├── images/ # Logo, hero-placeholder, doctors, nurses
│ └── videos/ # hero.mp4, footer-bg.mp4
├── components/
│ ├── common/ # Button, Input, SearchBox
│ ├── layout/ # Navbar, Footer
│ ├── sections/ # Hero, About, Services, Doctors, Appointments, Contact
│ └── landing/ # LandingAnimation
├── features/
│ ├── auth/ # LoginForm, RegisterForm, AuthProvider, ProtectedRoute
│ ├── patients/ # PatientList, PatientDetail, PatientForm
│ ├── visits/ # VisitList, VisitForm, VisitDetail
│ ├── appointments/ # AppointmentList, AppointmentForm, AppointmentCalendar
│ ├── reports/ # ReportList, ReportDetail, ReportForm
│ └── auditLogs/ # AuditLogList, AuditLogDetail
├── hooks/ # useAuth, useRole, useFetch, useScroll
├── services/ # authService, patientService, appointmentService, reportService
├── store/ # Redux store & slices
├── routes/ # AppRoutes.jsx
├── utils/ # themeColors, animationHelpers
├── App.jsx
└── main.jsx

---

## ⚡ Features

- **Landing animation** (3s fade before main page)  
- **Hero section with background video**  
- **Footer with background video**  
- **Responsive sections**: About, Services, Doctors, Appointments, Contact  
- **Reusable components**: Button, Input, SearchBox  
- **State management** using **Redux Toolkit**  
- **Routing** using **React Router v6**  
- **Hooks**: `useAuth`, `useRole`, `useFetch`, `useScroll`  

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd frontend
npm install

🎨 Technologies Used

React 18

Tailwind CSS

Redux Toolkit

React Router v6

Vite

JavaScript (ES6+)

📝 License

MIT License © 2026 MediTrack

