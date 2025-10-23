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
      text: "Esteira infinita de urgências: você fecha o dia exausta, prisioneira do operacional, com muito esforço e pouco avanço estratégico"
    }
  ];

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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-2">
            <span className="text-cyan-400 block mb-3">Sua liderança é estratégica!</span>
            <span className="text-white block">Ela não pode ser capturada por uma rotina de apagar incêndios.</span>
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {cards.map((card, index) => (
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
                  <card.icon className="text-cyan-400 text-2xl sm:text-3xl" />
                </div>
                
                {/* Text */}
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empathy Microcopy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-sm rounded-2xl border border-cyan-400/30 shadow-xl shadow-cyan-400/10">
            Se você sente que a rotina sequestra sua liderança estratégica, você não está só{' '}
            <span className="text-cyan-400 font-semibold">e isso muda com método, protocolos e acompanhamento.</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TeacherMentorshipSection;