// ProgramSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Target, Users, Calendar, BarChart3, CheckCircle } from 'lucide-react';

//==================================================================
// CONFIGURAÇÃO DO CONTEÚDO
//==================================================================
const sectionContent = {
  title: "O que você recebe",
  subtitle: "Clareza, previsibilidade e método — aplicados ao seu contexto.",
  
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <style>
        {`
          @keyframes border-spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          
          .animate-border-spin {
            animation: border-spin 4s linear infinite;
          }
        `}
      </style>
      
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight px-2">
            {sectionContent.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-cyan-300 font-semibold px-2">
            {sectionContent.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {sectionContent.deliverables.map((deliverable, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative"
            >
              {/* Animated border */}
              <div className="absolute -inset-[3px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 animate-border-spin" 
                     style={{
                       background: 'conic-gradient(from 0deg, transparent 0deg 240deg, #22d3ee 240deg 300deg, #3b82f6 300deg 360deg)',
                     }}
                />
              </div>

              {/* Card */}
              <div className="relative bg-slate-900 rounded-2xl p-6 sm:p-8 h-full">
                {/* Icon */}
                <div className="mb-4 sm:mb-6">
                  <deliverable.icon className="text-cyan-400 text-3xl sm:text-4xl w-12 h-12" />
                </div>
                
                {/* Text */}
                <h3 className="text-white/90 text-base sm:text-xl font-bold leading-snug">
                  {deliverable.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.button
            className="relative bg-[#003399] text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-full text-base sm:text-lg flex items-center space-x-3 shadow-2xl overflow-hidden group"
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
            <span className="relative z-10 font-bold tracking-wide">AGENDAR CONVERSA EXECUTIVA</span>
           
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

      </div>
    </div>
  );
};

export default ProgramSection;