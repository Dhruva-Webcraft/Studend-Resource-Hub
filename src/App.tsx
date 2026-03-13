import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StudyResources from './components/StudyResources';
import Tools from './components/Tools';
import GPACalculator from './components/GPACalculator';
import TimetablePlanner from './components/TimetablePlanner';
import RequestForm from './components/RequestForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StudyResources />
      <Tools />
      <GPACalculator />
      <TimetablePlanner />
      <RequestForm />
      <Footer />
    </div>
  );
}

export default App;
