// ProgramSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Target, Users, Calendar, BarChart3, CheckCircle } from 'lucide-react';

//==================================================================
// CONFIGURAÇÃO DO CONTEÚDO
//==================================================================
const sectionContent = {
  title: "O que você recebe",
  subtitle: "Clareza, previsibilidade e método aplicados ao seu contexto.",
  
  deliverables: [
    {
      icon: FileText,
      title: "Diagnóstico executivo com prioridades claras"
    },
    {
      icon: Target,
      title: "Plano de ação integrado (pedagógico + financeiro)"
    },
    {
      icon: Users,
      title: "Protocolos por nível de gestão (operacional, tático e estratégico)"
    },
    {
      icon: Calendar,
      title: "Ritos de gestão com cadência (semanal, mensal, trimestral)"
    },
    {
      icon: BarChart3,
      title: "Indicadores auditáveis e revisão periódica"
    },
    {
      icon: CheckCircle,
      title: "Acompanhamento e ajustes com foco em resultado"
    }
  ]
};

//==================================================================
// COMPONENTE PRINCIPAL DA SEÇÃO
//==================================================================
const ProgramSection = () => {
  // Variantes para entrada dos cards
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  // Variantes para a borda
  const borderVariants = {
    initial: {
      opacity: 0.3,
      boxShadow: "0 0 0 rgba(193, 160, 93, 0)"
    },
    hover: {
      opacity: 0.6,
      boxShadow: "0 0 20px rgba(193, 160, 93, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#1a2e49] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-2">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.3, 
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-[#ffffff] block mb-2 sm:mb-3"
            >
              {sectionContent.title}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.5, 
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-[#c1a05d] block text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            >
              {sectionContent.subtitle}
            </motion.span>
          </h1>
        </motion.div>

        {/* Cards Grid - RESPONSIVO com animações */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {sectionContent.deliverables.map((deliverable, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { 
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1]
                }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { 
                  duration: 0.15,
                  ease: "easeInOut"
                }
              }}
              className="relative cursor-pointer"
            >
              {/* Border com glow sutil */}
              <motion.div 
                variants={borderVariants}
                initial="initial"
                whileHover="hover"
                className="absolute -inset-[2px] sm:-inset-[3px] rounded-xl sm:rounded-2xl bg-[#c1a05d]"
              />

              {/* Card com transição de sombra */}
              <motion.div 
                className="relative bg-[#335379] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 h-full"
                whileHover={{
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Icon - SEM animação no próprio ícone */}
                <motion.div 
                  className="mb-3 sm:mb-4 md:mb-6"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <deliverable.icon className="text-[#c1a05d] w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />
                </motion.div>
                
                {/* Text com transição suave de cor */}
                <motion.h3 
                  className="text-[#ffffff] text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-snug"
                  whileHover={{
                    color: "#e0c580",
                    transition: { duration: 0.3 }
                  }}
                >
                  {deliverable.title}
                </motion.h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button - Dourado e TOTALMENTE RESPONSIVO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.8, 
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="flex justify-center px-4 sm:px-0"
        >
          <motion.button
            className="relative bg-[#c1a05d] text-[#ffffff] font-bold py-3.5 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10 rounded-full text-sm sm:text-base md:text-lg flex items-center justify-center space-x-2 sm:space-x-3 shadow-2xl overflow-hidden group w-full sm:w-auto sm:max-w-lg"
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
            <span className="relative z-10 font-bold tracking-wide whitespace-nowrap">AGENDAR CONVERSA EXECUTIVA</span>
           
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
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};

export default ProgramSection;