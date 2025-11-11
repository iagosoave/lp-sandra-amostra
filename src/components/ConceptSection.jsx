// AdvancedConceptSection.jsx

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import logo5 from './logo_5.png';

//==================================================================
// CONFIGURAÇÃO DO CONTEÚDO
//==================================================================
const sectionContent = {
  mainParagraph: (
    <>
      As instituições de ensino enfrentam quatro grandes desafios conhecidos: <span className="font-bold text-[#c1a05d]">Cultura escolar enfraquecida, Direção pouco Estratégica, Instabilidade Financeira e Liderança Fragmentada</span>.
    </>
  ),
  highlight: (
    <>
      Mas existe um <span className="font-bold text-[#c1a05d]">5º Desafio</span>, que quase ninguém encara — e é justamente ele que separa as escolas que apenas sobrevivem daquelas que se consolidam como referência.
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
      className="bg-[#1a2e49] py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
          
          {/* Coluna da Esquerda */}
          <div className="lg:pr-8 xl:pr-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              
              {/* LOGO 5º DESAFIO - TOTALMENTE RESPONSIVO */}
              <motion.div
                style={{
                  opacity,
                  scale,
                }}
                className="mb-6 sm:mb-8 flex justify-center lg:justify-start"
              >
                <img 
                  src={logo5} 
                  alt="5º Desafio" 
                  className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[350px] lg:max-w-[28rem] xl:max-w-[36rem] h-auto"
                />
              </motion.div>
              
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-[#ffffff] leading-relaxed max-w-lg text-center lg:text-left mx-auto lg:mx-0"
            >
              {sectionContent.mainParagraph}
            </motion.p>
          </div>

          {/* Coluna da Direita */}
          <motion.div
            className="space-y-6 sm:space-y-8 mt-4 sm:mt-6 lg:mt-0 flex flex-col justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Destaque do 5º Desafio - SEM GRADIENTE, SÓ BORDA DOURADA */}
            <div className="relative">
              {/* Border dourada simples */}
              <div className="absolute -inset-[2px] sm:-inset-[3px] rounded-xl sm:rounded-2xl bg-[#c1a05d]">
              </div>
              
              <div className="relative bg-[#335379] p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-lg">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-[#ffffff] mb-3 sm:mb-4">
                  O Ponto de Virada
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-[#ffffff] leading-relaxed mb-3 sm:mb-4 md:mb-6">
                  {sectionContent.highlight}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-[#c1a05d] font-semibold leading-relaxed">
                  {sectionContent.subtitle}
                </p>
              </div>
            </div>

            {/* Botão CTA - DOURADO E TOTALMENTE RESPONSIVO */}
            <motion.div className="flex justify-center lg:justify-start px-4 sm:px-0">
              <motion.button
                className="relative bg-[#c1a05d] text-[#ffffff] font-bold py-3.5 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10 rounded-full text-sm sm:text-base md:text-lg flex items-center justify-center space-x-2 sm:space-x-3 shadow-2xl overflow-hidden group w-full sm:w-auto sm:max-w-md"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Glow pulsante externo */}
                <motion.div
                  className="absolute -inset-2 bg-[#c1a05d] rounded-full blur-2xl opacity-50"
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#c1a05d] via-[#d4b36d] to-[#c1a05d] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               
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
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
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