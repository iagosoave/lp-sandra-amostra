import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUserTie, FaLock, FaHandshake, FaArrowRight, FaStar, FaGraduationCap, FaAward } from 'react-icons/fa';

const ProofAndOfferSection = () => {
  const mainVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      {/* Enhanced decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#033657]/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#033657]/20 rounded-full blur-3xl opacity-40" />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={floatAnimation}
        >
          <div className="w-[600px] h-[600px] border border-[#033657]/10 rounded-full" />
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Side: Proof and Validation */}
          <motion.div
            variants={mainVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="h-full"
          >
            <motion.div 
              className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 h-full border border-[#033657]/10 relative overflow-hidden group"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {/* Animated corner accent */}
              <motion.div 
                className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#033657] to-[#033657] opacity-10 rounded-br-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                {/* Icon header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#033657] to-[#033657] rounded-2xl flex items-center justify-center shadow-lg">
                    <FaAward className="w-7 h-7 text-white" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#033657] to-transparent" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-[#033657] mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Prova e Validação
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg text-[#033657] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Cada etapa do programa foi desenhada a partir de estudos, benchmarking internacional e vivência prática com escolas que passaram por momentos críticos e saíram fortalecidas.
                  </p>
                  
                  <p className="text-lg text-[#033657] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Não se trata apenas de teoria acadêmica, mas de um{' '}
                    <span className="relative inline-block">
                      <span className="relative z-10 font-bold text-[#033657] px-2">caminho comprovado</span>
                      <span className="absolute bottom-0 left-0 w-full h-3 bg-[#033657]/20 opacity-50 transform -rotate-1"></span>
                    </span>{' '}
                    que já inspirou e transformou instituições de ensino.
                  </p>
                </div>

                {/* Visual trust elements */}
                <div className="mt-10 flex items-center justify-center gap-6">
                  <motion.div 
                    className="w-16 h-16 bg-[#033657]/10 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaCheckCircle className="w-8 h-8 text-[#033657]" />
                  </motion.div>
                  <motion.div 
                    className="w-16 h-16 bg-[#033657]/10 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <FaStar className="w-8 h-8 text-[#033657]" />
                  </motion.div>
                  <motion.div 
                    className="w-16 h-16 bg-[#033657]/10 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <FaGraduationCap className="w-8 h-8 text-[#033657]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: The Offer */}
          <motion.div
            variants={mainVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="h-full"
          >
            <motion.div 
              className="bg-gradient-to-br from-[#033657] to-[#033657] text-white rounded-3xl shadow-2xl p-10 md:p-12 h-full relative overflow-hidden"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              {/* Animated patterns */}
              <div className="absolute inset-0 opacity-10">
                <motion.div 
                  className="absolute -top-10 -right-10 w-40 h-40 border-8 border-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute -bottom-10 -left-10 w-60 h-60 border-8 border-white rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
              </div>
              
              <div className="relative z-10">
                {/* Premium indicator */}
                <motion.div 
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full mb-8"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-sm font-bold uppercase tracking-wider">Programa Exclusivo</span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  A Oferta
                </h2>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <p className="text-lg text-white leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Este é um programa de implementação estratégica em formato de{' '}
                    <span className="font-bold bg-white/20 px-3 py-1 rounded-lg border border-white/30 inline-block my-1">
                      mentoria exclusiva
                    </span>
                    , com acompanhamento próximo e personalizado. As vagas são limitadas, 
                    justamente para garantir profundidade no processo e resultados reais.
                  </p>
                </div>

                {/* Visual elements */}
                <div className="mt-10 flex items-center justify-center gap-4">
                  <motion.div 
                    className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <FaUserTie className="w-7 h-7 text-white" />
                  </motion.div>
                  <motion.div 
                    className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ delay: 0.1 }}
                  >
                    <FaHandshake className="w-7 h-7 text-white" />
                  </motion.div>
                  <motion.div 
                    className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ delay: 0.2 }}
                  >
                    <FaLock className="w-7 h-7 text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default ProofAndOfferSection;