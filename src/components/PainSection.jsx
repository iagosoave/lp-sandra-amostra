import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChartLine, FaMoneyBillWave, FaUserTie, FaSync, FaFire } from 'react-icons/fa';

const TeacherMentorshipSection = () => {
  const cards = [
    {
      icon: FaUsers,
      text: "Dificuldade na captação e retenção de alunos"
    },
    {
      icon: FaUserTie,
      text: "Alunos e famílias cada vez mais exigentes e sensíveis"
    },
    {
      icon: FaMoneyBillWave,
      text: "Pressão financeira crescente e margens de lucro cada vez mais apertadas"
    },
    {
      icon: FaChartLine,
      text: "Desmotivação e alta rotatividade da equipe pedagógica"
    },
    {
      icon: FaSync,
      text: "Descompasso entre investimentos e resultados pedagógicos"
    },
    {
      icon: FaFire,
      text: '"Esteira infinita" de urgências: o dia termina com a sensação de exaustão'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a2e49] flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-2">
            <span className="text-[#c1a05d] block mb-3">Sua liderança é estratégica!</span>
            <span className="text-[#ffffff] block mb-6">Além dos incêndios cotidianos, ela é fundamental na resolução de questões de alta complexidade, tais como:</span>
          </h1>
        </div>

        {/* Cards Grid - SEM ANIMAÇÃO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Border estática */}
              <div className="absolute -inset-[2px] rounded-2xl bg-[#c1a05d]/30">
              </div>

              {/* Card */}
              <div className="relative bg-[#1a2e49] rounded-2xl p-6 sm:p-8 h-full">
                {/* Icon - MESMO TAMANHO DO PROGRAMSECTION */}
                <div className="mb-4 sm:mb-6">
                  <card.icon className="text-[#c1a05d] text-3xl sm:text-4xl w-12 h-12" />
                </div>
                
                {/* Text - IGUAL AO PROGRAMSECTION */}
                <h3 className="text-[#ffffff] text-base sm:text-xl font-bold leading-snug">
                  {card.text}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Empathy Microcopy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[#ffffff] text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 bg-gradient-to-br from-[#1a2e49]/60 to-[#335379]/40 backdrop-blur-sm rounded-2xl border border-[#c1a05d]/30 shadow-xl shadow-[#c1a05d]/10">
            Se você sente que a rotina sequestra sua liderança estratégica, você não está só{' '}
            <span className="text-[#c1a05d] font-semibold">e isso muda com método, protocolos e acompanhamento.</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TeacherMentorshipSection;