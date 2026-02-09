import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

// Import das imagens
import bannerDesktop from './banner.jpeg';
import bannerMobile from './mobile.jpeg';
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

  // Mobile Version Component - OTIMIZADO
  const MobileVersion = () => (
    <div className="relative min-h-screen bg-[#1a2e49]">
      {/* Background Image Container */}
      <div className="relative w-full">
        <img 
          src={bannerMobile}
          alt="Banner" 
          className="w-full h-auto object-contain"
        />
        
        {/* Gradient overlay para transição suave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-[#1a2e49] to-transparent"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 px-4 sm:px-6 py-6 sm:py-8 bg-[#1a2e49]">
        <motion.div 
          className="w-full max-w-sm mx-auto space-y-3 sm:space-y-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          
          {/* Logo */}
          <motion.div 
            className="flex justify-center mb-2 sm:mb-3"
            variants={fadeInUp}
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="h-16 sm:h-20 w-auto"
            />
          </motion.div>
          
          {/* Título e Texto */}
          <div className="space-y-2 sm:space-y-3 text-center">
            <motion.h1 
              className="font-playfair text-xl sm:text-2xl font-bold leading-tight text-[#ffffff] px-2"
              variants={fadeInUp}
            >
              O 5º Desafio: Gestão Estratégica para Escolas de <span className="text-[#c1a05d]">Excelência</span>
            </motion.h1>
            
            <motion.h2 
              className="font-lato text-[#ffffff] text-xs sm:text-sm leading-relaxed font-semibold px-2"
              variants={fadeInUp}
            >
              O framework executivo com protocolos comprovados que guia diretores e mantenedores da gestão reativa ao <span className="text-[#c1a05d]">superávit estratégico</span>
            </motion.h2>
            
            <motion.p 
              className="font-lato text-[#ffffff]/90 text-xs leading-relaxed px-2 pt-1"
              variants={fadeInUp}
            >
              Mentoria executiva exclusiva para líderes educacionais que desejam elevar resultados acadêmicos, reputação institucional e margens financeiras — sem viver no modo "apaga incêndios".
            </motion.p>
          </div>
          
          {/* CTA Button */}
          <motion.div
            variants={fadeInUp}
            className="mt-3 sm:mt-4 px-2"
          >
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe49fG1imc09O3aIUgmQlqedma3wtn1JP4ZwZv50JNi36zCBg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="relative font-lato bg-[#c1a05d] text-[#ffffff] font-bold px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm w-full shadow-xl flex items-center justify-center space-x-2 overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Glow pulsante */}
              <motion.div 
                className="absolute -inset-1 bg-[#c1a05d] rounded-full blur-xl opacity-60"
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#c1a05d] via-[#d4b36d] to-[#c1a05d] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shine effect */}
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
              <span className="relative z-10 font-bold">AGENDAR CONVERSA ESTRATÉGICA</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 4, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </motion.a>
          </motion.div>
          
          {/* Elemento de Escassez */}
          <motion.div
            variants={fadeInUp}
            className="pt-2 px-2"
          >
            <div className="relative bg-gradient-to-r from-[#c1a05d]/10 via-[#c1a05d]/20 to-[#c1a05d]/10 border border-[#c1a05d]/30 rounded-lg px-3 py-2.5 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-2">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Clock className="w-3.5 h-3.5 text-[#c1a05d] flex-shrink-0" />
                </motion.div>
                <div className="font-lato text-[10px] sm:text-xs text-[#ffffff] text-center leading-tight">
                  <span className="font-bold text-[#c1a05d]">Vagas limitadas:</span> apenas <span className="font-bold text-[#c1a05d]">8 gestores</span> por ciclo
                  <span className="block sm:inline sm:before:content-['_|_'] sm:before:mx-1 sm:before:text-[#c1a05d]/50 mt-0.5 sm:mt-0">
                    Processo seletivo obrigatório
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </div>
  );

  // Desktop Version Component
  const DesktopVersion = () => (
    <div className="relative w-full bg-[#1a2e49]">
      {/* Container do Banner - TELA INTEIRA */}
      <div className="relative w-full h-screen">
        <img 
          src={bannerDesktop}
          alt="Banner" 
          className="w-full h-full object-cover"
        />
        
        {/* Content Overlay - posicionado sobre a imagem */}
        <div className="absolute inset-0 flex flex-col justify-center py-6 px-8 md:px-12 lg:px-16">
          
          {/* Logo e Conteúdo */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.div 
              className="max-w-2xl space-y-3"
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
                  className="h-24 md:h-28 w-auto"
                />
              </motion.div>
              
              {/* Título Principal */}
              <motion.h1 
                className="font-playfair text-3xl md:text-4xl font-bold leading-tight text-[#ffffff]"
                variants={fadeInUp}
              >
                O 5º Desafio: Gestão Estratégica para Escolas de <span className="text-[#c1a05d]">Excelência</span>
              </motion.h1>
              
              {/* Subtítulo */}
              <motion.h2 
                className="font-lato text-base md:text-lg font-semibold text-[#ffffff] leading-relaxed"
                variants={fadeInUp}
              >
                O framework executivo com protocolos comprovados que guia diretores e mantenedores da gestão reativa ao <span className="text-[#c1a05d]">superávit estratégico</span>
              </motion.h2>
              
              {/* Parágrafo Ponte */}
              <motion.p 
                className="font-lato text-sm md:text-base text-[#ffffff]/90 leading-relaxed pt-1"
                variants={fadeInUp}
              >
                Mentoria executiva exclusiva para líderes educacionais que desejam elevar resultados acadêmicos, reputação institucional e margens financeiras — sem viver no modo "apaga incêndios".
              </motion.p>
              
              {/* CTA Button */}
              <motion.div 
                className="pt-3"
                variants={fadeInUp}
              >
                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe49fG1imc09O3aIUgmQlqedma3wtn1JP4ZwZv50JNi36zCBg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex font-lato bg-[#c1a05d] text-[#ffffff] font-bold py-4 px-8 rounded-full text-base items-center space-x-3 shadow-2xl overflow-hidden group"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {/* Glow pulsante externo */}
                  <motion.div 
                    className="absolute -inset-2 bg-[#c1a05d] rounded-full blur-2xl opacity-50"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c1a05d] via-[#d4b36d] to-[#c1a05d] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shine effect */}
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
                  <span className="relative z-10 font-bold tracking-wide">AGENDAR CONVERSA ESTRATÉGICA</span>
                  
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
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.a>
              </motion.div>
              
              {/* Elemento de Escassez */}
              <motion.div
                variants={fadeInUp}
                className="pt-2"
              >
                <div className="inline-flex relative bg-gradient-to-r from-[#c1a05d]/10 via-[#c1a05d]/20 to-[#c1a05d]/10 border border-[#c1a05d]/30 rounded-lg px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center space-x-2.5">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.15, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Clock className="w-4 h-4 text-[#c1a05d] flex-shrink-0" />
                    </motion.div>
                    <span className="font-lato text-sm text-[#ffffff]">
                      <span className="font-bold text-[#c1a05d]">Vagas limitadas:</span> apenas <span className="font-bold text-[#c1a05d]">8 gestores</span> por ciclo <span className="text-[#c1a05d]/50 mx-1.5">|</span> Processo seletivo obrigatório
                    </span>
                  </div>
                </div>
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