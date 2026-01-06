import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store"; // correct path

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import DoctorsSection from "../components/sections/DoctorsSection";
import AppointmentsSection from "../components/sections/AppointmentsSection";
import ContactSection from "../components/sections/ContactSection";
import LandingAnimation from "../components/landing/LandingAnimation";

import LoginForm from "../features/auth/LoginForm";
import RegisterForm from "../features/auth/RegisterForm";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import PatientList from "../features/patients/PatientList";
import AppointmentList from "../features/appointments/AppointmentList";

const AppRoutes = () => {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    // Show landing animation for 3 seconds then fade out
    const timer = setTimeout(() => {
      const landing = document.getElementById("landing-animation");
      if (landing) {
        landing.style.transition = "opacity 0.8s";
        landing.style.opacity = 0;

        setTimeout(() => setShowLanding(false), 800); // remove after fade
      } else {
        setShowLanding(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      <Router>
        {showLanding && <LandingAnimation id="landing-animation" />}

        {!showLanding && (
          <>
            <Navbar />
            <Routes>
              {/* Landing Page */}
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <AboutSection />
                    <ServicesSection />
                    <DoctorsSection />
                    <AppointmentsSection />
                    <ContactSection />
                  </>
                }
              />

              {/* Auth */}
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />

              {/* Protected Routes */}
              <Route
                path="/patients"
                element={
                  <ProtectedRoute>
                    <PatientList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/appointments"
                element={
                  <ProtectedRoute>
                    <AppointmentList />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </>
        )}
      </Router>
    </Provider>
  );
};

export default AppRoutes;
