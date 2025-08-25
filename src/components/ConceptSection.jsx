import React from 'react';
import { motion } from 'framer-motion';

const ConceptSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 12
      }
    }
  };

  const numberVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
        delay: 0.5,
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
        delay: 0.7,
      }
    }
  };

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 100% 0%, #033657, transparent), radial-gradient(circle at 0% 100%, #033657, transparent)',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - The Grand Number & Main Text */}
          <div className="lg:pr-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-8"
            >
              <motion.span 
                className="block text-[#033657] text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter"
                variants={numberVariants}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                5º
              </motion.span>
              <motion.h2 
                className="mt-6 text-4xl md:text-5xl font-extrabold text-[#033657] leading-tight"
                variants={titleVariants}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                O Desafio que Muda o Jogo
              </motion.h2>
            </motion.div>

            <motion.p
              className="mt-6 text-xl text-[#033657] leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              As instituições de ensino enfrentam quatro grandes desafios conhecidos: <span className="font-bold">pedagógico, financeiro, reputação e liderança</span>.
            </motion.p>
          </div>

          {/* Right Side - The Explanations */}
          <motion.div
            className="space-y-8 mt-12 lg:mt-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="p-8 md:p-10 rounded-3xl border border-[#033657]/20 shadow-md bg-white">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#033657] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                O Ponto de Virada
              </h3>
              <p className="text-lg text-[#033657] leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Mas existe um <span className="font-bold">5º Desafio</span>, que quase ninguém encara — e é justamente ele que separa as escolas que apenas sobrevivem daquelas que se consolidam como referência.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 md:p-10 rounded-3xl border border-[#033657]/20 shadow-md bg-white">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#033657] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                A Chave para o Sucesso Sustentável
              </h3>
              <p className="text-lg text-[#033657] leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                O <span className="font-bold">5º Desafio</span> é a capacidade de atravessar crises e construir um modelo de gestão acadêmica e estratégica que leve sua escola a <span className="font-bold">resultados consistentes e sustentáveis</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;