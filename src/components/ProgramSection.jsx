import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaStar, FaChartLine, FaUsersCog, FaBuilding } from 'react-icons/fa';

const ProgramSection = () => {
  const programGoals = [
    {
      icon: FaShieldAlt,
      title: "Da Crise à Consolidação",
      text: "Sair do modo crise e entrar no modo consolidação, construindo uma base sólida para o futuro da sua instituição."
    },
    {
      icon: FaStar,
      title: "Excelência Acadêmica",
      text: "Elevar a reputação acadêmica da sua escola a um nível de excelência reconhecido no mercado educacional."
    },
    {
      icon: FaChartLine,
      title: "Superávit Estratégico",
      text: "Conquistar resultados financeiros consistentes e sustentáveis, transformando a gestão financeira em um motor de crescimento."
    },
    {
      icon: FaUsersCog,
      title: "Liderança Fortalecida",
      text: "Fortalecer sua liderança com identidade e protocolos claros, capacitando sua equipe para os desafios de gestão."
    },
    {
      icon: FaBuilding,
      title: "Transformar sua Escola em Referência",
      text: "Posicionar sua escola como uma referência para alunos, famílias e para todo o mercado educacional."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 12
      }
    }
  };

  return (
    <section className="bg-gray-50 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 100% 0%, #033657, transparent), radial-gradient(circle at 0% 100%, #033657, transparent)',
      }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#033657] leading-tight mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            O Programa <span className="text-[#033657]">O 5º Desafio</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#033657] font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span className="text-[#033657]">Da Crise Acadêmica ao Superávit Estratégico</span> é um programa estruturado em 10 passos, pensado para instituições que desejam:
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {programGoals.map((goal, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-3xl p-8 shadow-lg border border-[#033657]/20 hover:shadow-[#033657]/60 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-[#033657]/10 text-[#033657] transition-colors duration-300">
                <goal.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#033657] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {goal.title}
              </h3>
              <p className="text-base text-[#033657] leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {goal.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramSection;