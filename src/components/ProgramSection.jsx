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
    <section className="bg-[#0D1A2E] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Título e subtítulo */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {sectionContent.title}
          </h2>
          <p className="text-xl md:text-2xl text-cyan-300 font-semibold">
            {sectionContent.subtitle}
          </p>
        </div>

        {/* Grid de entregáveis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sectionContent.deliverables.map((deliverable, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="bg-slate-800/60 p-8 rounded-2xl shadow-lg border border-slate-700"
            >
              <div className="text-cyan-400 mb-5">
                <deliverable.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-white leading-snug">
                {deliverable.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <motion.button
            className="relative bg-[#003399] text-white font-bold py-5 px-10 rounded-full text-lg flex items-center space-x-3 shadow-2xl overflow-hidden group"
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
        </div>

      </div>
    </section>
  );
};

export default ProgramSection;