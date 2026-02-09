import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChartLine, FaMoneyBillWave, FaUserTie, FaSync, FaFire } from 'react-icons/fa';

const PainSection = () => {
  const cards = [
    { icon: FaUsers, text: "Dificuldade na captação e retenção de alunos" },
    { icon: FaUserTie, text: "Alunos e famílias cada vez mais exigentes e sensíveis" },
    { icon: FaMoneyBillWave, text: "Pressão financeira crescente e margens de lucro apertadas" },
    { icon: FaChartLine, text: "Desmotivação e alta rotatividade da equipe pedagógica" },
    { icon: FaSync, text: "Descompasso entre investimentos e resultados pedagógicos" },
    { icon: FaFire, text: '"Esteira infinita" de urgências e exaustão diária' }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1, 
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5 }
    })
  };

  return (
    <div className="min-h-screen bg-[#1a2e49] flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="max-w-6xl w-full">
        
        {/* Título */}
        <motion.div 
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 md:mb-9 lg:mb-10"
        >
          <h1 className="font-lato text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white px-2">
            A liderança escolar estratégica vai além de <span className="text-[#c1a05d]">apagar incêndios cotidianos.</span>
          </h1>
          <p className="font-lato text-[#ffffff] text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-3 lg:mt-4 px-2 font-semibold">
            A gestão escolar precisa resolver questões fundamentais de alta complexidade.
          </p>
        </motion.div>

        {/* Cards Grid - Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-9 lg:mb-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {/* Borda dourada */}
              <div className="absolute -inset-[1px] rounded-xl bg-[#c1a05d]/30 group-hover:bg-[#c1a05d] transition-colors duration-300" />
              
              {/* Card content */}
              <div className="relative bg-[#1a2e49] rounded-xl p-4 sm:p-5 h-full hover:shadow-2xl transition-all duration-300 flex flex-col items-start gap-2 sm:gap-3">
                <card.icon className="text-[#c1a05d] text-lg sm:text-xl md:text-xl lg:text-2xl flex-shrink-0" />
                <h3 className="text-white text-xs sm:text-sm md:text-sm lg:text-base font-semibold leading-snug">
                  {card.text}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Frase de Destaque Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="font-lato text-[#ffffff] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2 font-semibold">
            Existe uma dimensão que escapa à maioria dos gestores: a capacidade de identificar e atravessar o desafio estrutural que resolve essas questões e define o futuro de uma instituição.
          </p>
          <p className="font-lato text-[#c1a05d] text-base sm:text-lg md:text-xl lg:text-2xl font-bold mt-3 sm:mt-4 px-2">
            É aqui que entra o 5º Desafio.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PainSection;