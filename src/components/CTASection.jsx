import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import logo from './logo.png';

const CTASection = () => {
  const requirements = [
    {
      title: "Vagas limitadas",
      subtitle: "Atendimento personalizado"
    },
    {
      title: "Processo seletivo",
      subtitle: "Não basta querer, precisa estar pronto"
    },
    {
      title: "Agenda restrita",
      subtitle: "Poucos horários disponíveis"
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={logo} alt="Logo" className="h-24 w-auto" />
          </motion.div>

          {/* Requirements Cards - DARK BLUE THEME */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
                
                {/* Card - DARK BLUE BACKGROUND */}
                <div className="relative bg-gradient-to-b from-blue-950/95 to-blue-900/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-800/50 h-full hover:border-cyan-400/30 transition-all duration-300 overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-3xl" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-cyan-400 font-bold text-lg mb-3 tracking-wide">
                      {req.title}
                    </h3>
                    {/* Subtitle */}
                    <p className="text-white/80 text-base leading-relaxed">
                      {req.subtitle}
                    </p>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-8 right-8 h-1 overflow-hidden rounded-full">
                  <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-shimmer" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <style jsx>{`
            @keyframes shimmer {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
            .animate-shimmer {
              animation: shimmer 3s linear infinite;
            }
          `}</style>

          {/* Main Message Section */}
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
              Se você sente que chegou a hora de liderar sua instituição rumo ao{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003399] to-blue-600">
                superávit estratégico
              </span>, o próximo passo é aplicar para o 5º Desafio.
            </h2>
            
            <p className="text-xl text-slate-600 mb-12">
              Clique abaixo e descubra como atravessar o 5º Desafio
            </p>

            {/* CTA Button */}
            <motion.div className="flex justify-center">
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
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;