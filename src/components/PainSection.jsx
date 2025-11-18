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

  // Variantes para entrada dos cards com mais sofisticação
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
        ease: [0.22, 1, 0.36, 1] // Easing suave e premium
      }
    })
  };

  // Variantes para a borda com glow sutil
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
    <div className="min-h-screen bg-[#1a2e49] flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-12 md:py-16 lg:py-20">
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
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight px-2">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.3, 
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-[#c1a05d] block mb-2 sm:mb-3"
            >
              Sua liderança é estratégica!
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.5, 
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-[#ffffff] block mb-4 sm:mb-5 md:mb-6 leading-relaxed"
            >
              Além dos incêndios cotidianos, ela é fundamental na resolução de questões de alta complexidade, tais como:
            </motion.span>
          </h1>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 sm:mb-10 md:mb-12">
          {cards.map((card, index) => (
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
                className="absolute -inset-[2px] rounded-xl sm:rounded-2xl bg-[#c1a05d]"
              />

              {/* Card com transição de sombra */}
              <motion.div 
                className="relative bg-[#1a2e49] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 h-full"
                whileHover={{
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Icon - SEM animação no próprio ícone */}
                <motion.div 
                  className="mb-3 sm:mb-4 md:mb-5 lg:mb-6"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <card.icon className="text-[#c1a05d] text-2xl sm:text-3xl md:text-4xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                </motion.div>
                
                {/* Text com transição suave de cor */}
                <motion.h3 
                  className="text-[#ffffff] text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-snug"
                  whileHover={{
                    color: "#e0c580",
                    transition: { duration: 0.3 }
                  }}
                >
                  {card.text}
                </motion.h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Empathy Microcopy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.8, 
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }}
          whileHover={{
            scale: 1.01,
            boxShadow: "0 15px 40px rgba(193, 160, 93, 0.15)",
            transition: { duration: 0.3 }
          }}
          className="text-center"
        >
          <p className="text-[#ffffff] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto px-4 sm:px-5 md:px-6 py-5 sm:py-6 md:py-7 lg:py-8 bg-gradient-to-br from-[#1a2e49]/60 to-[#335379]/40 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[#c1a05d]/30 shadow-xl shadow-[#c1a05d]/10 transition-all duration-300">
            Se você sente que a rotina sequestra sua liderança estratégica, você não está só{' '}
            <span className="text-[#c1a05d] font-semibold">e isso muda com método, protocolos e acompanhamento.</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TeacherMentorshipSection;