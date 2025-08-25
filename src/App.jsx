import React from 'react';
import HeroSection from './components/HeroSection';
import PainSection from './components/PainSection';
import ConceptSection from './components/ConceptSection';
import AboutSection from './components/AboutSection';
import ProgramSection from './components/ProgramSection';
import ProofAndOfferSection from './components/ProofAndOfferSection';
import CTASection from './components/CTASection';
 import FutureSection from './components/FutureSection';
// import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
       <PainSection />
       <ConceptSection />
       <AboutSection />
      <ProgramSection />
       <ProofAndOfferSection />
      <CTASection />
       <FutureSection />     
    </div>
  );
};

export default App;