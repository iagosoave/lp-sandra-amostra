import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  // Variantes de animação
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Mobile Version Component
  const MobileVersion = () => (
    <div className="relative min-h-screen bg-white text-black">
      {/* Background Image Container - SEM ANIMAÇÃO */}
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
        <motion.div 
          className="w-full max-w-sm mx-auto space-y-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          
          {/* Logo */}
          <motion.div 
            className="flex justify-center mb-2"
            variants={fadeInUp}
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="h-16 w-auto"
            />
          </motion.div>
          
          {/* Título e Texto */}
          <div className="space-y-4 text-center">
            <motion.h1 
              className="font-playfair text-3xl font-bold leading-tight text-[#003399]"
              variants={fadeInUp}
            >
              Liderança escolar de alta performance, com método e previsibilidade
            </motion.h1>
            
            <motion.p 
              className="font-lato text-[#003399] text-sm leading-relaxed font-semibold"
              variants={fadeInUp}
            >
              Mentoria executiva para diretores e mantenedores que desejam transformar resultados acadêmicos, reputação e margens sem viver no modo "apaga incêndios".
            </motion.p>
          </div>
          
          {/* CTA Button - AJUSTADO PARA MOBILE */}
          <motion.div
            variants={fadeInUp}
            className="mt-6"
          >
            <motion.button 
              className="relative font-lato bg-[#003399] text-white font-bold px-6 py-3.5 rounded-full text-sm w-full shadow-xl flex items-center justify-center space-x-2 overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Glow pulsante */}
              <motion.div 
                className="absolute -inset-1 bg-[#003399] rounded-full blur-xl opacity-60"
                animate={{ 
                  opacity: [0.6, 0.8, 0.6],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Background gradient hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#003399] via-[#0044BB] to-[#003399] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shine effect melhorado */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut"
                }}
              />
              
              {/* Button content */}
              <span className="relative z-10 font-bold">QUERO CONHECER O MÉTODO</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 4, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );

  // Desktop Version Component
  const DesktopVersion = () => (
    <div className="relative w-full bg-white">
      {/* Container do Banner - SEM ANIMAÇÃO */}
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
            <motion.div 
              className="max-w-xl space-y-3"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              
              {/* Logo */}
              <motion.div 
                className="mb-2"
                variants={fadeInUp}
              >
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="h-20 md:h-24 w-auto"
                />
              </motion.div>
              
              <motion.h1 
                className="font-playfair text-3xl md:text-4xl font-bold leading-tight text-[#003399]"
                variants={fadeInUp}
              >
                Liderança escolar de alta performance, com método e previsibilidade
              </motion.h1>
              
              <motion.h2 
                className="font-lato text-lg md:text-xl font-semibold text-[#003399] leading-relaxed"
                variants={fadeInUp}
              >
                Mentoria executiva para diretores e mantenedores que desejam transformar resultados acadêmicos, reputação e margens sem viver no modo "apaga incêndios".
              </motion.h2>
              
              {/* CTA Button - MELHORADO */}
              <motion.div 
                className="pt-4"
                variants={fadeInUp}
              >
                <motion.button 
                  className="relative font-lato bg-[#003399] text-white font-bold py-5 px-10 rounded-full text-lg flex items-center space-x-3 shadow-2xl overflow-hidden group"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {/* Glow pulsante externo */}
                  <motion.div 
                    className="absolute -inset-2 bg-[#003399] rounded-full blur-2xl opacity-50"
                    animate={{ 
                      opacity: [0.5, 0.7, 0.5],
                      scale: [1, 1.08, 1]
                    }}
                    transition={{ 
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Background gradient animado no hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#003399] via-[#0055CC] to-[#003399] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shine effect melhorado e contínuo */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
                    initial={{ x: '-150%' }}
                    animate={{ x: '250%' }}
                    transition={{ 
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Button content */}
                  <span className="relative z-10 font-bold tracking-wide">QUERO CONHECER O MÉTODO</span>
                  
                  {/* Seta com animação */}
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </motion.button>
              </motion.div>
              
            </motion.div>
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