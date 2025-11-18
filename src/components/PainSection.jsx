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
    <div className="min-h-screen bg-[#1a2e49] flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl w-full">
        {/* Header - Otimizado para mobile */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight px-2">
            <span className="text-[#c1a05d] block mb-2 sm:mb-3">Sua liderança é estratégica!</span>
            <span className="text-[#ffffff] block mb-4 sm:mb-5 md:mb-6 leading-relaxed">
              Além dos incêndios cotidianos, ela é fundamental na resolução de questões de alta complexidade, tais como:
            </span>
          </h1>
        </div>

        {/* Cards Grid - Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 sm:mb-10 md:mb-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Border estática */}
              <div className="absolute -inset-[2px] rounded-xl sm:rounded-2xl bg-[#c1a05d]/30">
              </div>

              {/* Card */}
              <div className="relative bg-[#1a2e49] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 h-full">
                {/* Icon - Responsivo */}
                <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  <card.icon className="text-[#c1a05d] text-2xl sm:text-3xl md:text-4xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                </div>
                
                {/* Text - Responsivo */}
                <h3 className="text-[#ffffff] text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-snug">
                  {card.text}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Empathy Microcopy - Responsivo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[#ffffff] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto px-4 sm:px-5 md:px-6 py-5 sm:py-6 md:py-7 lg:py-8 bg-gradient-to-br from-[#1a2e49]/60 to-[#335379]/40 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#c1a05d]/30 shadow-xl shadow-[#c1a05d]/10">
            Se você sente que a rotina sequestra sua liderança estratégica, você não está só{' '}
            <span className="text-[#c1a05d] font-semibold">e isso muda com método, protocolos e acompanhamento.</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TeacherMentorshipSection;