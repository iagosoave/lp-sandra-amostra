// ProgramSection.jsx (Versão com design avançado em arquivo único)

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaShieldAlt, FaStar, FaChartLine, FaUsersCog, FaBuilding } from 'react-icons/fa';

//==================================================================
// 1. COMPONENTE DE CARD REUTILIZÁVEL
//==================================================================
// O mesmo componente de card que usamos antes, pronto para receber os novos dados.
const FeatureCard = ({ icon: Icon, title, children, variants }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-slate-800/60 p-8 rounded-2xl flex flex-col h-full shadow-lg border border-slate-700"
    >
      <div className="text-cyan-400 text-3xl mb-5">
        <Icon />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">
        {title}
      </h3>
      <p className="text-base text-gray-300 leading-relaxed flex-grow">
        {children}
      </p>
      <div className="mt-6 pt-4">
        <div className="w-1/3 h-1 bg-cyan-400 rounded-full"></div>
      </div>
    </motion.div>
  );
};

//==================================================================
// 2. CONFIGURAÇÃO DO CONTEÚDO (Usando seus dados)
//==================================================================
// Centralizamos todo o conteúdo da sua seção aqui.
const sectionContent = {
  mainTitle: (
    <>
      O Programa <span className="text-cyan-400">O 5º Desafio</span>
    </>
  ),
  subtitle: 'Da Crise Acadêmica ao Superávit Estratégico é um programa estruturado em 10 passos, pensado para instituições que desejam:',
  goals: [
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
  ],
};

//==================================================================
// 3. VARIANTES DE ANIMAÇÃO
//==================================================================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 12 },
  },
};

//==================================================================
// 4. COMPONENTE PRINCIPAL DA SEÇÃO
//==================================================================
const ProgramSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Animação de entrada para o título baseada no scroll
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [30, 0]);

  return (
    <section ref={sectionRef} className="bg-[#0D1A2E] py-24 md:py-32 relative overflow-hidden font-['Poppins',_sans-serif]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          className="text-center mb-16 md:mb-20"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            {sectionContent.mainTitle}
          </h2>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300">
            {sectionContent.subtitle}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {sectionContent.goals.map((goal, index) => (
            <FeatureCard
              key={index}
              variants={cardVariants}
              icon={goal.icon}
              title={goal.title}
            >
              {goal.text}
            </FeatureCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramSection;