import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import logo from './logo.png';

const CTASection = () => {
  const requirements = [
    {
      title: "Vagas limitadas",
      subtitle: "Atendimento personalizado"
    },
    {
      title: "Processo seletivo",
      subtitle: "Não basta querer, precisa estar pronto"
    },
    {
      title: "Agenda restrita",
      subtitle: "Poucos horários disponíveis"
    }
  ];

  return (
    <section className="bg-[#1a2e49] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <motion.div 
            className="flex justify-center mb-8 sm:mb-10 md:mb-12"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={logo} alt="Logo" className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto" />
          </motion.div>

          {/* Requirements Cards - SEM ANIMAÇÃO E MINIMALISTA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16 md:mb-20 max-w-5xl mx-auto">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Border dourada */}
                <div className="absolute -inset-[2px] rounded-xl sm:rounded-2xl bg-[#c1a05d]/30" />
                
                {/* Card */}
                <div className="relative bg-[#335379] backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 h-full hover:bg-[#335379]/90 transition-all duration-300 overflow-hidden">
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-[#c1a05d] font-bold text-base sm:text-lg mb-2 sm:mb-3 tracking-wide">
                      {req.title}
                    </h3>
                    {/* Subtitle */}
                    <p className="text-[#ffffff]/90 text-sm sm:text-base leading-relaxed">
                      {req.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Message Section */}
          <motion.div
            className="max-w-4xl mx-auto text-center mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#ffffff] leading-snug sm:leading-tight mb-5 sm:mb-6 md:mb-8 px-3 sm:px-2">
              Se você sente que chegou a hora de liderar sua instituição rumo ao{' '}
              <span className="text-[#c1a05d]">
                superávit estratégico
              </span>, o próximo passo é aplicar para o 5º Desafio.
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#ffffff]/80 mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-3 sm:px-2">
              Clique abaixo e descubra como atravessar o <span className="text-[#c1a05d] font-semibold">5º Desafio</span>
            </p>

            {/* CTA Button - DOURADO E RESPONSIVO */}
            <motion.div className="flex justify-center px-4 sm:px-0">
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe49fG1imc09O3aIUgmQlqedma3wtn1JP4ZwZv50JNi36zCBg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-[#c1a05d] text-[#ffffff] font-bold py-3.5 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10 rounded-full text-sm sm:text-base md:text-lg flex items-center justify-center space-x-2 sm:space-x-3 shadow-2xl overflow-hidden group w-full sm:w-auto sm:max-w-md"
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
                <span className="relative z-10 font-bold tracking-wide whitespace-nowrap">APLICAR AGORA</span>
               
                {/* Seta com animação */}
                <motion.div
                  className="relative z-10 flex-shrink-0"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;