import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaGlobe, FaCogs, FaCheckCircle } from 'react-icons/fa';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }
    }
  };

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image Placeholder */}
          <motion.div
            className="flex justify-center lg:justify-start"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative w-full max-w-sm h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#033657]/10">
              <div className="absolute inset-0 bg-[#033657]/10 flex items-center justify-center">
                <span className="text-[#033657] text-xl font-semibold">Placeholder da Foto</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold text-[#033657] mb-4 leading-tight" 
              variants={textVariants} 
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Quem é <span className="text-[#033657]">Sandra Tonidandel</span>
            </motion.h2>

            <motion.p 
              className="text-lg md:text-xl text-[#033657] leading-relaxed mb-8" 
              variants={textVariants}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Educadora, pesquisadora e estrategista em gestão acadêmica. Ao longo de sua jornada, ajudou escolas a superar crises profundas e a conquistar resultados que pareciam impossíveis.
            </motion.p>

            <motion.div className="space-y-6" variants={containerVariants}>
              
              <motion.div className="flex items-start" variants={textVariants}>
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[#033657]/10 text-[#033657] mr-4">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <p className="text-lg text-[#033657] leading-relaxed font-medium">
                  Trabalhou com instituições privadas de <span className="font-bold">alto padrão</span>.
                </p>
              </motion.div>

              <motion.div className="flex items-start" variants={textVariants}>
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[#033657]/10 text-[#033657] mr-4">
                  <FaGlobe className="w-6 h-6" />
                </div>
                <p className="text-lg text-[#033657] leading-relaxed font-medium">
                  Trouxe <span className="font-bold">referências internacionais</span>.
                </p>
              </motion.div>

              <motion.div className="flex items-start" variants={textVariants}>
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[#033657]/10 text-[#033657] mr-4">
                  <FaCogs className="w-6 h-6" />
                </div>
                <p className="text-lg text-[#033657] leading-relaxed font-medium">
                  E desenvolveu um modelo exclusivo de <span className="font-bold text-[#033657]">10 passos</span> para levar sua escola da crise ao superávit estratégico.
                </p>
              </motion.div>

              <motion.div className="flex items-start" variants={textVariants}>
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[#033657]/10 text-[#033657] mr-4">
                  <FaCheckCircle className="w-6 h-6" />
                </div>
                <p className="text-lg text-[#033657] leading-relaxed font-medium">
                  Não é teoria, é prática validada, é <span className="font-bold">estratégia comprovada</span>.
                </p>
              </motion.div>

            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;