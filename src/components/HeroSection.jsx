import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

// Import das imagens
import bannerDesktop from './banner.png';
import bannerMobile from './banner-mobile.png'; // Você precisará adicionar uma imagem mobile

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile Version Component
  const MobileVersion = () => (
    <div className="relative min-h-screen bg-white text-black">
      {/* Background Image Container */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={bannerMobile || bannerDesktop} // Usa desktop se não tiver mobile
          alt="Banner" 
          className="w-full h-full object-cover"
        />
        
        {/* Gradient overlay para transição suave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 px-6 py-8 bg-white">
        <div className="w-full max-w-sm mx-auto space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="w-32 h-16 bg-[#033657] rounded flex items-center justify-center shadow-lg">
              <span className="text-white text-sm font-bold font-lato">LOGO</span>
            </div>
          </div>
          
          {/* Título e Texto */}
          <div className="space-y-4 text-center">
            <h1 className="font-playfair text-3xl font-bold leading-tight">
              Sua escola está pronta para enfrentar o <span className="text-[#033657]">5º Desafio</span>?
            </h1>
            
            <p className="font-lato text-gray-700 text-sm leading-relaxed font-semibold">
              Da crise acadêmica ao <span className="text-[#033657]">superávit estratégico</span>
            </p>
          </div>
          
          {/* CTA Button */}
          <button className="font-lato bg-[#033657] hover:bg-[#022845] text-white font-bold px-6 py-4 rounded-full text-base transition-all duration-300 w-full shadow-lg flex items-center justify-center space-x-2">
            <span>QUERO CONHECER O MÉTODO</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  // Desktop Version Component
  const DesktopVersion = () => (
    <div 
      className="min-h-screen flex items-center px-8 md:px-12 lg:px-16"
      style={{
        backgroundImage: `url(${bannerDesktop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Logo e Copy */}
          <div className="space-y-8 py-12">
            {/* Logo Placeholder */}
            <div className="w-32 h-16 bg-[#033657] rounded flex items-center justify-center mb-12 shadow-lg">
              <span className="text-white text-sm font-bold font-lato">LOGO</span>
            </div>
            
            {/* Main Copy */}
            <div className="space-y-6">
              <h1 className="font-playfair text-4xl md:text-5xl font-black text-black leading-tight drop-shadow-lg">
                Sua escola está pronta para enfrentar o <span className="text-[#033657]">5º Desafio</span>?
              </h1>
              
              <h2 className="font-lato text-xl md:text-2xl font-bold text-black drop-shadow-lg">
                Da crise acadêmica ao <span className="text-[#033657]">superávit estratégico</span>
              </h2>
              
              {/* CTA Button */}
              <button className="font-lato bg-[#033657] hover:bg-[#022845] text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg mt-8">
                <span>QUERO CONHECER O MÉTODO</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Right Side - Empty for clean look */}
          <div></div>
          
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isMobile ? <MobileVersion /> : <DesktopVersion />}
    </>
  );
};

export default HeroSection;