import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Isso dá resultado prático?",
      answer: "Sim. A mentoria define indicadores (retenção, NPS de famílias, engajamento da equipe, aproveitamento etc.) e cria ritos de acompanhamento. Você enxerga evolução no curto, médio e longo prazo."
    },
    {
      question: "É mais uma consultoria genérica?",
      answer: "Não. É uma mentoria especializada em alta gestão escolar, com experiência executiva em escolas e redes de grande porte, e formação internacional. O foco é método aplicado e resultados auditáveis."
    },
    {
      question: "Como conciliar com o calendário da escola?",
      answer: "Trabalhamos com cadência realista (semanal/mensal) e protocolos que se encaixam à rotina. O objetivo é liberar sua agenda do operacional, não adicionar peso."
    },
    {
      question: "E se a equipe resistir?",
      answer: "Protocolos claros, comunicação transparente e ritos de feedback reduzem fricções e aumentam adesão. Você não implementa sozinho."
    },
    {
      question: "Quanto tempo para perceber mudanças?",
      answer: "Há ganhos rápidos na organização da agenda e rituais. Resultados nos indicadores variam por contexto, mas a cadência e os protocolos evitam retrocessos."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#1a2e49] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#ffffff] mb-3 sm:mb-4 px-2">
            Perguntas <span className="text-[#c1a05d]">Frequentes</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#ffffff]/80 px-2">
            Tire suas dúvidas sobre o programa
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#335379] border border-[#c1a05d]/20 hover:border-[#c1a05d]/50 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between text-left hover:bg-[#335379]/80 transition-colors duration-300"
              >
                <span className="text-sm sm:text-base md:text-lg font-bold text-[#ffffff] pr-4 sm:pr-6 md:pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-[#c1a05d]" />
                  ) : (
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#c1a05d]" />
                  )}
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 pt-2">
                      <div className="w-full h-px bg-[#c1a05d] mb-3 sm:mb-4"></div>
                      <p className="text-[#ffffff]/90 leading-relaxed text-sm sm:text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-base sm:text-lg md:text-xl text-[#ffffff] mb-6 sm:mb-8 font-semibold px-2">
            Pronto para <span className="text-[#c1a05d]">avançar</span>?
          </p>
          
          <motion.button
            className="relative bg-[#c1a05d] text-[#ffffff] font-bold py-3.5 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10 rounded-full text-sm sm:text-base md:text-lg flex items-center justify-center space-x-2 sm:space-x-3 shadow-2xl overflow-hidden group w-full sm:w-auto sm:max-w-lg mx-auto"
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
            <span className="relative z-10 font-bold tracking-wide whitespace-nowrap">AGENDAR CONVERSA EXECUTIVA</span>
           
            {/* Seta com animação */}
            <motion.div
              className="relative z-10 flex-shrink-0"
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

      </div>
    </section>
  );
};

export default FAQSection;