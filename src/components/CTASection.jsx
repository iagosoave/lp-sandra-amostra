import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#033657]/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#033657]/20 rounded-full blur-3xl opacity-30" />
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border-4 border-[#033657] rounded-full" />
          <div className="absolute bottom-20 right-20 w-60 h-60 border-4 border-[#033657]/80 rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-4 border-[#033657]/60 rounded-full" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo Placeholder */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-64 h-20 bg-[#033657]/10 rounded-lg flex items-center justify-center">
              <span className="text-[#033657]/60 font-medium">LOGO</span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div 
            className="inline-block bg-[#033657]/10 px-6 py-3 rounded-full mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-[#033657] font-medium">5º Desafio • Próximo Nível</span>
          </motion.div>

          {/* Main CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-xl text-[#033657] mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Clique abaixo e descubra como sua escola pode atravessar o 5º Desafio:
            </p>

            {/* CTA Button */}
            <motion.button
              className="bg-gradient-to-r from-[#033657] to-[#033657] text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Quero levar minha escola ao próximo nível
            </motion.button>
          </motion.div>

          {/* Additional trust elements */}
          <motion.div 
            className="mt-12 flex justify-center items-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="text-[#033657]/60 text-sm">Vagas limitadas</div>
            <div className="w-1 h-1 bg-[#033657]/40 rounded-full" />
            <div className="text-[#033657]/60 text-sm">Início imediato</div>
            <div className="w-1 h-1 bg-[#033657]/40 rounded-full" />
            <div className="text-[#033657]/60 text-sm">100% online</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;