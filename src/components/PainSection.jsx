import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChartLine, FaMoneyBillWave, FaUserTie, FaSync } from 'react-icons/fa';

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
      icon: FaSync,
      text: "Esteira infinitade urgências: você fecha o dia exausta, prisioneira do operacional, com muito esforço e pouco avanço estratégico."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-white/70 text-xs uppercase tracking-[0.4em] mb-6">
            Sobre o método
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-cyan-400 block mb-2">Sua liderança é estratégica!</span>
            <span className="text-white block">Ela não pode ser capturada por uma rotina de apagar incêndios.</span>
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative"
            >
              {/* Card */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 h-full hover:border-cyan-400/30 transition-colors duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <card.icon className="text-cyan-400 text-3xl" />
                </div>
                
                {/* Text */}
                <p className="text-white/90 text-base leading-relaxed">
                  {card.text}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Empathy Microcopy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto px-6 py-8 bg-slate-900/30 backdrop-blur-sm rounded-2xl border border-cyan-400/20">
            Se você sente que a rotina sequestra sua liderança estratégica, você não está só — 
            <span className="text-cyan-400 font-semibold"> e isso muda com método, protocolos e acompanhamento.</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TeacherMentorshipSection;