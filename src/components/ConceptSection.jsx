import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

//==================================================================
// COMPONENTE PRINCIPAL
//==================================================================
const AdvancedConceptSection = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const numberOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const numberRotate = useTransform(scrollYProgress, [0.1, 0.4], [-15, 0]);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0D1A2E] py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,211,238,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Layout Assimétrico */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-16 lg:gap-24">
          
          {/* Lado Esquerdo - Conteúdo Textual */}
          <div className="lg:w-3/5 space-y-12">
            
            {/* Título Principal */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
                O Desafio que{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Muda o Jogo
                </span>
              </h2>
            </motion.div>

            {/* Parágrafo Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                As instituições de ensino enfrentam quatro grandes desafios conhecidos:
              </p>
              
              {/* Lista dos 4 desafios - formato inline */}
              <div className="flex flex-wrap gap-3">
                {[
                  'Cultura escolar enfraquecida',
                  'Direção pouco Estratégica', 
                  'Instabilidade Financeira',
                  'Liderança Fragmentada'
                ].map((challenge, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full text-white/90 text-sm md:text-base"
                  >
                    {challenge}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Card do 5º Desafio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mt-16"
            >
              {/* Badge "O Ponto de Virada" */}
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                  O Ponto de Virada
                </span>
              </div>

              {/* Box com borda lateral */}
              <div className="border-l-4 border-cyan-400 pl-6 md:pl-8 py-2">
                <p className="text-xl md:text-2xl text-white leading-relaxed">
                  Mas existe um{' '}
                  <span className="font-bold text-cyan-400">5º Desafio</span>, que quase ninguém encara — e é justamente ele que separa as escolas que apenas sobrevivem daquelas que se consolidam como referência.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Lado Direito - Número 5º Artístico */}
          <div className="lg:w-2/5 flex items-center justify-center lg:justify-end">
            <motion.div
              style={{ 
                opacity: numberOpacity,
                rotate: numberRotate 
              }}
              className="relative"
            >
              {/* Círculo de fundo */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.1, 0.15, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-cyan-400/10 rounded-full blur-3xl scale-150"
              />

              {/* Número 5º */}
              <div className="relative">
                <span 
                  className="text-[14rem] md:text-[18rem] lg:text-[22rem] font-black leading-none tracking-tighter"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '3px transparent',
                    background: 'linear-gradient(180deg, rgba(34,211,238,0.4) 0%, rgba(59,130,246,0.1) 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                  }}
                >
                  5º
                </span>

                {/* Sobreposição com fill parcial */}
                <span 
                  className="absolute inset-0 text-[14rem] md:text-[18rem] lg:text-[22rem] font-black leading-none tracking-tighter overflow-hidden"
                  style={{
                    background: 'linear-gradient(180deg, #22d3ee 0%, #3b82f6 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0 40%)',
                  }}
                >
                  5º
                </span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AdvancedConceptSection;