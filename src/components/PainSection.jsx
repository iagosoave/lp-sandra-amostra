import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChartLine, FaMoneyBillWave, FaUserTie, FaUserShield } from 'react-icons/fa';

const TeacherMentorshipSection = () => {
  const cards = [
    {
      icon: FaUsers,
      text: "Alunos e famílias cada vez mais exigentes."
    },
    {
      icon: FaChartLine,
      text: "Resultados pedagógicos que não acompanham o investimento."
    },
    {
      icon: FaMoneyBillWave,
      text: "Pressão financeira crescente e margens apertadas."
    },
    {
      icon: FaUserTie,
      text: "Professores sobrecarregados e desmotivados."
    },
    {
      icon: FaUserShield,
      text: "Uma liderança estratégica que muitas vezes se sente sozinha."
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
            <span className="text-cyan-400 block mb-2">Sua liderança é uma ciência,</span>
            <span className="text-white block">não uma luta contra incêndio.</span>
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </div>
  );
};

export default TeacherMentorshipSection;