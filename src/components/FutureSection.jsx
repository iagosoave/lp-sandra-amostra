import React from 'react';
import { motion } from 'framer-motion';
import { FaExchangeAlt, FaHandHoldingHeart } from 'react-icons/fa';

const FutureSection = () => {
  const transformations = [
    { from: "Crise", to: "Consolidação" },
    { from: "Incerteza", to: "Estratégia" },
    { from: "Resultados isolados", to: "Superávit sustentável" },
  ];

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #033657 35px, #033657 36px)`,
          }} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-[#033657] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              O Futuro da Sua Escola
            </h2>
            <div className="h-1 bg-[#033657] rounded-full" />
          </div>
        </motion.div>

        {/* Main message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-xl md:text-2xl text-[#033657] leading-relaxed text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
            O futuro da sua escola não será definido apenas pelo número de matrículas ou pela força do marketing.
          </p>
          <p className="text-xl md:text-2xl text-[#033657] leading-relaxed text-center mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Ele será definido pela{' '}
            <span className="text-[#033657] font-bold relative">
              capacidade de enfrentar o 5º Desafio
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-[#033657] -z-10 opacity-20" />
            </span>:
          </p>
        </motion.div>

        {/* Transformation visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-[#E0E7FF] to-white rounded-3xl p-8 md:p-12 border border-[#033657]/10">
            <div className="grid md:grid-cols-3 gap-8">
              {transformations.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-center">
                    {/* From state */}
                    <div className="bg-white rounded-2xl p-4 shadow-md border border-[#033657]/20 mb-4">
                      <p className="text-[#033657] font-medium">{item.from}</p>
                    </div>
                    
                    {/* Arrow icon */}
                    <div className="flex justify-center mb-4">
                      <motion.div
                        className="w-10 h-10 bg-[#033657] rounded-full flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FaExchangeAlt className="text-white w-5 h-5 rotate-90" />
                      </motion.div>
                    </div>
                    
                    {/* To state */}
                    <div className="bg-[#033657] text-white rounded-2xl p-4 shadow-lg">
                      <p className="font-bold">{item.to}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Result text */}
            <div className="text-center mt-10 pt-8 border-t border-[#033657]/20">
              <p className="text-lg text-[#033657]">
                Transformando tudo em um{' '}
                <span className="text-[#033657] font-bold text-xl">superávit acadêmico e sustentável</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Decision CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-block relative">
            {/* Decorative dots */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#033657]/20 rounded-full opacity-50" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#033657]/10 rounded-full opacity-50" />
            
            <motion.div
              className="relative bg-[#033657] text-white rounded-3xl px-12 py-8 shadow-2xl"
              whileHover={{ y: -4, boxShadow: "0 30px 60px rgba(3, 54, 87, 0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <FaHandHoldingHeart className="text-3xl text-white/80" />
              </div>
              <p className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                A decisão está em suas mãos.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureSection;