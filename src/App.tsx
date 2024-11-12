import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou'; // Import the ThankYou page

function App() {
  return (
    <Router> {/* Wrap the app in Router */}
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Services />
        <WhyChooseUs />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<BookingForm />} /> {/* Main Booking Form route */}
          <Route path="/thank-you" element={<ThankYou />} /> {/* Thank You page route */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
