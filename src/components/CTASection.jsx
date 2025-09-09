import React from 'react';
import { motion } from 'framer-motion';

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
          {/* Logo Placeholder */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-72 h-24 bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl flex items-center justify-center shadow-sm border border-slate-200">
              <span className="text-slate-400 font-medium text-lg">LOGO</span>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div 
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
           
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
                  
                  {/* Corner accent */}
                </div>

                {/* Bottom accent bar - enhanced */}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#033657] to-blue-600">
                superávit estratégico
              </span>, o próximo passo é aplicar sua escola ao 5º Desafio.
            </h2>
            
            <p className="text-xl text-slate-600 mb-12">
              Clique abaixo e descubra como sua escola pode atravessar o 5º Desafio:
            </p>

            {/* CTA Button with IMPROVED animations */}
            <motion.div className="relative inline-block">
              {/* Breathing glow effect */}
              <motion.div
                className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-md opacity-0"
                animate={{
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 0.5
                }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  animate={{
                    x: ["-200%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              <motion.button
                className="relative bg-gradient-to-r from-[#033657] to-[#033657] text-white px-12 py-6 rounded-full font-bold text-lg shadow-2xl transform transition-all duration-500"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -10px rgba(3, 54, 87, 0.5)",
                  background: "linear-gradient(to right, #044a78, #033657)"
                }}
                whileTap={{ scale: 0.98 }}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Aplicar agora
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Bottom trust elements - REMOVED */}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;