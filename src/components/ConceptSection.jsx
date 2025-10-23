// AdvancedConceptSection.jsx

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLightbulb } from 'react-icons/fa';

//==================================================================
// COMPONENTE DE CARD
//==================================================================
const FeatureCard = ({ icon: Icon, title, children, variants }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-slate-800/60 p-8 md:p-10 rounded-2xl flex flex-col h-full shadow-lg border border-slate-700 relative overflow-hidden"
    >
      <div className="text-cyan-400 text-3xl mb-5">
        <Icon />
      </div>
      <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
        {title}
      </h3>
      <p className="text-lg text-gray-300 leading-relaxed flex-grow">
        {children}
      </p>
      <div className="mt-8 pt-4">
        <div className="w-1/3 h-1 bg-cyan-400 rounded-full"></div>
      </div>
    </motion.div>
  );
};

//==================================================================
// CONFIGURAÇÃO DO CONTEÚDO
//==================================================================
const sectionContent = {
  mainTitle: "O Desafio que Muda o Jogo",
  mainParagraph: (
    <>
      As instituições de ensino enfrentam quatro grandes desafios conhecidos: <span className="font-bold text-gray-100">Cultura escolar enfraquecida, Direção pouco Estratégica, Instabilidade Financeira e Liderança Fragmentada</span>.
    </>
  ),
  cards: [
    {
      icon: FaLightbulb,
      title: 'O Ponto de Virada',
      description: (
        <>
          Mas existe um <span className="font-bold text-gray-100">5º Desafio</span>, que quase ninguém encara — e é justamente ele que separa as escolas que apenas sobrevivem daquelas que se consolidam como referência.
        </>
      ),
    },
  ],
};

//==================================================================
// VARIANTES DE ANIMAÇÃO
//==================================================================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 80, damping: 10, delay: 0.2 },
  },
};

//==================================================================
// COMPONENTE PRINCIPAL
//==================================================================
const AdvancedConceptSection = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Animação de entrada sutil (fade-in e um leve "zoom")
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.3], [0.95, 1]);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0D1A2E] pt-16 md:pt-20 pb-16 md:pb-20 relative overflow-hidden font['Poppins',_sans-serif]"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Coluna da Esquerda */}
          <div className="lg:pr-12 -mt-8 md:-mt-12 lg:-mt-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              
              {/* DESIGN MINIMALISTA MODERNO - METADE PREENCHIDO, METADE CONTORNO */}
              <motion.span
                style={{
                  opacity,
                  scale,
                }}
                className="
                  relative block text-[12rem] md:text-[18rem] 
                  font-black leading-none tracking-tighter
                  
                  /* A base é o contorno azul (stroke) */
                  text-transparent [-webkit-text-stroke:2px_#3b82f6] /* Azul: blue-500 */
                "
              >
                5º
                
                {/* A parte de cima é o preenchimento sólido, criado com um span e pseudo-elemento */}
                <span
                  className="
                    absolute top-0 left-0 w-full h-1/2 overflow-hidden
                    
                    /* O texto dentro deste span será sólido e perfeitamente alinhado */
                    before:content-['5º'] before:absolute before:inset-0
                    before:text-blue-500
                  "
                ></span>
              </motion.span>
              
              <motion.h2 variants={titleVariants} className="mt-6 text-4xl md:text-5xl font-extrabold text-white leading-tight">
                {sectionContent.mainTitle}
              </motion.h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-6 text-xl text-gray-300 leading-relaxed max-w-lg"
            >
              {sectionContent.mainParagraph}
            </motion.p>
          </div>

          {/* Coluna da Direita */}
          <motion.div
            className="space-y-8 mt-8 lg:mt-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {sectionContent.cards.map((card, index) => (
              <FeatureCard key={index} icon={card.icon} title={card.title} variants={itemVariants}>
                {card.description}
              </FeatureCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedConceptSection;