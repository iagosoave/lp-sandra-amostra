import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import logo5 from './logo_5.png';

const ConceptSection = () => {
  const sectionRef = useRef(null);
  
  const challenges = [
    "Cultura escolar enfraquecida",
    "Direção pouco estratégica",
    "Instabilidade financeira",
    "Liderança fragmentada"
  ];

  const benefits = [
    "Integra diagnóstico pedagógico e financeiro em um plano de ação unificado.",
    "Fornece protocolos específicos por nível de gestão (operacional, tático, estratégico).",
    "Estabelece ritos de gestão com cadência para previsibilidade de resultados.",
    "Desenvolve indicadores auditáveis que conectam ação a impacto mensurável."
  ];

  return (
    <section ref={sectionRef} className="bg-[#1a2e49] py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* 1. Logo e Título no Topo */}
        <div className="flex flex-col items-center justify-center mb-10 md:mb-12 text-center">
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src={logo5} 
            alt="5º Desafio" 
            className="w-40 sm:w-48 md:w-56 h-auto mb-4 md:mb-6"
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-white"
          >
            Por Que o <span className="text-[#c1a05d]">5º Desafio</span> Muda Tudo
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Coluna da Esquerda - O Problema */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white space-y-5"
          >
            <p className="font-lato text-base md:text-lg font-semibold">
              A maioria das consultorias educacionais aborda os desafios mais óbvios:
            </p>
            
            <ul className="space-y-3">
              {challenges.map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-white/90">
                  <span className="text-[#c1a05d] font-bold text-lg flex-shrink-0">{i + 1}.</span>
                  <span className="font-lato text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-l-4 border-[#c1a05d] pl-4 py-2 my-4">
              <p className="font-lato font-bold text-base md:text-lg text-white">
                Esses quatro pilares são fundamentais — mas insuficientes.
              </p>
            </div>

            <p className="font-lato text-base md:text-lg leading-relaxed font-semibold text-white">
              Existe um <span className="text-[#c1a05d]">5º Desafio</span>, estrutural e silencioso, que ninguém enfrenta:
            </p>

            <p className="font-lato text-sm md:text-base leading-relaxed text-white/90">
              A incapacidade de integrar gestão pedagógica de excelência com sustentabilidade financeira estratégica, criando um sistema de liderança previsível, replicável e escalável.
            </p>
            
            <p className="font-lato font-bold text-base md:text-lg text-white pt-2">
              Este é o desafio que separa escolas que sobrevivem de escolas que se consolidam como referência.
            </p>
          </motion.div>

          {/* Coluna da Direita - A Solução (Box) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Box com Borda Dourada */}
            <div className="absolute -inset-[2px] rounded-2xl bg-[#c1a05d]" />
            <div className="relative bg-[#335379] p-5 md:p-7 rounded-2xl shadow-xl">
              <h3 className="font-lato text-lg md:text-xl font-bold text-white mb-5">
                O método O 5º Desafio é o único framework executivo no Brasil que:
              </h3>
              
              <ul className="space-y-3 mb-6">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#c1a05d] flex-shrink-0 mt-0.5" />
                    <span className="font-lato text-white/90 text-sm md:text-base leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#1a2e49]/60 p-4 rounded-lg mb-5 border border-[#c1a05d]/30">
                <p className="font-lato text-[#c1a05d] font-bold text-sm md:text-base text-center leading-relaxed">
                  Resultado: Você deixa de reagir a crises e passa a liderar com método, autoridade e resultados comprovados.
                </p>
              </div>

              {/* CTA — fino, pill-shape, responsivo */}
              <div className="flex justify-center">
                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe49fG1imc09O3aIUgmQlqedma3wtn1JP4ZwZv50JNi36zCBg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-[#c1a05d] text-white font-lato font-bold 
                    py-3 px-8 sm:py-3.5 sm:px-10 md:py-4 md:px-12
                    text-[11px] sm:text-xs md:text-sm
                    flex items-center justify-center gap-2 sm:gap-3
                    shadow-2xl overflow-hidden group
                    touch-manipulation
                    active:scale-[0.97]"
                  style={{ borderRadius: '9999px' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    initial={{ x: '-150%' }}
                    animate={{ x: '250%' }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
                  />
                  <span className="relative z-10 tracking-wider uppercase whitespace-nowrap">
                    Aplicar para o processo seletivo
                  </span>
                  <motion.div
                    className="relative z-10 flex-shrink-0"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </motion.div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;