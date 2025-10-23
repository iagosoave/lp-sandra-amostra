import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

// Import das imagens
import bannerDesktop from './banner.png';
import bannerMobile from './banner-mobile.png';
import logo from './logo.png';

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
      <div className="relative w-full">
        <img 
          src={bannerMobile || bannerDesktop}
          alt="Banner" 
          className="w-full h-auto object-contain"
        />
        
        {/* Gradient overlay para transição suave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 px-6 py-8 bg-white">
        <div className="w-full max-w-sm mx-auto space-y-4">
          
          {/* Logo - MAIS REDUZIDO */}
          <div className="flex justify-center mb-2">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-16 w-auto"
            />
          </div>
          
          {/* Título e Texto */}
          <div className="space-y-4 text-center">
            <h1 className="font-playfair text-3xl font-bold leading-tight text-[#003399]">
              Liderança escolar de alta performance, com método e previsibilidade
            </h1>
            
            <p className="font-lato text-[#003399] text-sm leading-relaxed font-semibold">
              Mentoria executiva para diretores e mantenedores que desejam transformar resultados acadêmicos, reputação e margens — sem viver no modo "apaga-incêndios".
            </p>
          </div>
          
          {/* CTA Button */}
          <button className="relative font-lato bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-6 py-4 rounded-full text-base transition-all duration-300 w-full shadow-lg flex items-center justify-center space-x-2 overflow-hidden group mt-6">
            <div className="absolute inset-0 bg-cyan-400 opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <span className="relative z-10">QUERO CONHECER O MÉTODO</span>
            <ArrowRight className="w-5 h-5 relative z-10" />
          </button>
        </div>
      </div>
    </div>
  );

  // Desktop Version Component
  const DesktopVersion = () => (
    <div className="relative w-full bg-white">
      {/* Container do Banner - mostra a imagem completa */}
      <div className="relative w-full">
        <img 
          src={bannerDesktop}
          alt="Banner" 
          className="w-full h-auto object-contain block"
        />
        
        {/* Content Overlay - posicionado sobre a imagem */}
        <div className="absolute inset-0 flex flex-col justify-between py-6 px-8 md:px-12 lg:px-16">
          
          {/* Logo e Conteúdo juntos */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="max-w-xl space-y-3">
              
              {/* Logo - MAIS REDUZIDO */}
              <div className="mb-2">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="h-20 md:h-24 w-auto"
                />
              </div>
              
              <h1 className="font-playfair text-3xl md:text-4xl font-bold leading-tight text-[#003399]">
                Liderança escolar de alta performance, com método e previsibilidade
              </h1>
              
              <h2 className="font-lato text-lg md:text-xl font-semibold text-[#003399] leading-relaxed">
                Mentoria executiva para diretores e mantenedores que desejam transformar resultados acadêmicos, reputação e margens — sem viver no modo "apaga-incêndios".
              </h2>
              
              {/* CTA Button with glow effect */}
              <div className="pt-4">
                <button className="relative font-lato bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-4 px-8 rounded-full text-base transition-all duration-300 flex items-center space-x-2 shadow-2xl overflow-hidden group">
                  {/* Outer glow */}
                  <div className="absolute -inset-2 bg-cyan-400/50 rounded-full blur-2xl group-hover:bg-cyan-300/60 transition-all duration-300"></div>
                  
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  
                  {/* Button content */}
                  <span className="relative z-10 font-bold">QUERO CONHECER O MÉTODO</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
            </div>
          </div>
          
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