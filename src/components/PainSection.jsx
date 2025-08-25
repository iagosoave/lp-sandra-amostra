import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChartLine, FaDollarSign, FaUserTimes, FaBullseye } from 'react-icons/fa';

const PainSection = () => {
  const painPoints = [
    {
      icon: FaUsers,
      text: "Alunos e famílias cada vez mais exigentes"
    },
    {
      icon: FaChartLine,
      text: "Resultados pedagógicos que não acompanham o investimento"
    },
    {
      icon: FaDollarSign,
      text: "Pressão financeira crescente"
    },
    {
      icon: FaUserTimes,
      text: "Professores desmotivados"
    },
    {
      icon: FaBullseye,
      text: "Uma liderança que muitas vezes se sente sozinha"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gray-100">
      {/* Background radial gradient */}
      <div className="absolute inset-0 z-0 opacity-40" style={{
        backgroundImage: 'radial-gradient(circle at 100% 0%, #033657, transparent), radial-gradient(circle at 0% 100%, #033657, transparent)',
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#033657] leading-tight max-w-4xl mx-auto mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Se você é líder escolar, sabe como é viver entre
            <span className="text-[#033657] relative ml-2">
              incêndios
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[#033657] rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </span>
            :
          </h2>
        </motion.div>

        {/* Pain Points Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group bg-white rounded-3xl p-8 border border-[#033657]/20 shadow-md transition-all duration-300"
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(3, 54, 87, 0.2)" 
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 z-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                boxShadow: "0 0 40px rgba(3, 54, 87, 0.4)",
              }}></div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-[#033657]/10 text-[#033657] transition-colors duration-300 group-hover:bg-[#033657] group-hover:text-white">
                  <point.icon className="w-8 h-8" />
                </div>
                
                {/* Text */}
                <p className="text-[#033657] font-semibold text-lg leading-relaxed group-hover:text-[#033657] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {point.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Content */}
        <div className="max-w-5xl mx-auto space-y-12 text-center">
          {/* First Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl text-[#033657] font-medium leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Você tenta organizar processos, busca inspiração em outras escolas, mas no fundo sente que falta um{' '}
              <span className="font-bold text-[#033657] relative">
                norte estratégico
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-[#033657]/20 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                />
              </span>.
            </p>
          </motion.div>

          {/* Main Highlight Box */}
          <motion.div
            className="p-8 md:p-12 border-4 border-[#033657]/20 rounded-3xl shadow-xl bg-white hover:border-[#033657] transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-extrabold text-[#033657] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Não basta ter um bom pedagógico ou equilíbrio financeiro.
            </motion.h3>
            <motion.p
              className="text-xl md:text-2xl text-[#033657] font-semibold leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              O verdadeiro desafio é integrar tudo em um modelo que seja
              <span className="text-[#033657] font-bold ml-2">sustentável, consolidado e inspirador</span>.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;