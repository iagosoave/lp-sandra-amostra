// AdvancedConceptSection.jsx

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
  highlight: (
    <>
      Mas existe um <span className="font-bold text-gray-100">5º Desafio</span>, que quase ninguém encara — e é justamente ele que separa as escolas que apenas sobrevivem daquelas que se consolidam como referência.
    </>
  ),
  subtitle: "O 5º Desafio não é para todos. É para quem já lidera uma estrutura e deseja alavancar.",
};

//==================================================================
// VARIANTES DE ANIMAÇÃO
//==================================================================
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
      className="bg-[#0D1A2E] pt-16 md:pt-20 pb-16 md:pb-20 relative overflow-hidden"
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
            className="space-y-8 mt-8 lg:mt-0 flex flex-col justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Destaque do 5º Desafio */}
            <div className="bg-slate-800/60 p-8 md:p-10 rounded-2xl shadow-lg border border-slate-700">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                O Ponto de Virada
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {sectionContent.highlight}
              </p>
              <p className="text-lg text-cyan-400 font-semibold leading-relaxed">
                {sectionContent.subtitle}
              </p>
            </div>

            {/* Botão CTA */}
            <motion.div className="flex justify-start">
              <motion.button
                className="relative bg-[#003399] text-white font-bold py-5 px-10 rounded-full text-lg flex items-center space-x-3 shadow-2xl overflow-hidden group"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Glow pulsante externo */}
                <motion.div
                  className="absolute -inset-2 bg-[#003399] rounded-full blur-2xl opacity-50"
                  animate={{
                    opacity: [0.5, 0.7, 0.5],
                    scale: [1, 1.08, 1]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
               
                {/* Background gradient animado no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#003399] via-[#0055CC] to-[#003399] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               
                {/* Shine effect melhorado e contínuo */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
                  initial={{ x: '-150%' }}
                  animate={{ x: '250%' }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "easeInOut"
                  }}
                />
               
                {/* Button content */}
                <span className="relative z-10 font-bold tracking-wide">APLICAR AGORA</span>
               
                {/* Seta com animação */}
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedConceptSection;