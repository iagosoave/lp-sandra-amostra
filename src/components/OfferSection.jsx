import React from 'react';
import { motion } from 'framer-motion';

const OfferSection = () => {
  return (
    <motion.section 
      className="py-16 px-8 bg-[#033657] text-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-poppins-bold mb-4">
          A Oferta
        </h2>
        <p className="text-lg md:text-xl font-poppins-bold leading-relaxed">
          Este é um programa de implementação estratégica em formato de mentoria exclusiva, com acompanhamento próximo e personalizado.
          As vagas são limitadas, justamente para garantir profundidade no processo e resultados reais.
        </p>
      </div>
    </motion.section>
  );
};

export default OfferSection;