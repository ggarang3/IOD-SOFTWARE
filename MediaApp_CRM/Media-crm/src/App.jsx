import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavBar'; 
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Services from './components/services';  
import Login from './components/login';
import StaffDashboard from './components/StaffDashboard';
import About from './pages/about';
import Contact from './pages/contact';


function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/staff-dashboard" element={<StaffDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

