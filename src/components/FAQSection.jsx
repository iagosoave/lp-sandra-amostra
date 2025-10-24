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
    <section className="bg-[#0D1A2E] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-300">
            Tire suas dúvidas sobre o programa
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/60 border border-slate-700 rounded-2xl overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-800/80 transition-colors duration-300"
              >
                <span className="text-lg font-bold text-white pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-cyan-400" />
                  ) : (
                    <Plus className="w-6 h-6 text-cyan-400" />
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
                    <div className="px-8 pb-6 pt-2">
                      <div className="w-full h-px bg-slate-700 mb-4"></div>
                      <p className="text-gray-300 leading-relaxed text-lg">
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
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xl text-white mb-8 font-semibold">
            Pronto para avançar?
          </p>
          
          <motion.button
            className="relative bg-[#003399] text-white font-bold py-5 px-10 rounded-full text-lg flex items-center space-x-3 shadow-2xl overflow-hidden group mx-auto"
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
            <span className="relative z-10 font-bold tracking-wide">AGENDAR CONVERSA EXECUTIVA</span>
           
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

      </div>
    </section>
  );
};

export default FAQSection;