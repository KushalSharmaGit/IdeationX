import { useState } from 'react'
import './App.css'
import LandingPage from './LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './AboutPage'
import ServicesPage from './ServicesPage'
import ContactPage from './ContactPage'
import NotFoundPage from './NotFoundPage';

function App() {
  return (
  <Router>
    <Routes>
    <Route index element={<LandingPage />} />
    <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>

  )
}

export default App
