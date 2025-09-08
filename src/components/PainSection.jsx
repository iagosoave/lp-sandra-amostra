import React, { useRef } from 'react';
import { motion, useAnimate, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FaUsers, FaChartLine, FaDollarSign, FaUserTimes, FaBullseye } from 'react-icons/fa';

// --- Componente de Card Individual ---
const PainPointCard = ({ point, index }) => {
  const [scope, animate] = useAnimate();
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    animate([
      ['.corner-top-left', { top: 16, left: 16 }, { duration: 0.2, at: 0 }],
      ['.corner-top-right', { top: 16, right: 16 }, { duration: 0.2, at: 0 }],
      ['.corner-bottom-left', { bottom: 16, left: 16 }, { duration: 0.2, at: 0 }],
      ['.corner-bottom-right', { bottom: 16, right: 16 }, { duration: 0.2, at: 0 }],
      ['.scanner-line', { top: '100%', transition: { duration: 0.4, ease: 'circOut' } }, { at: 0.1 }],
      ['.icon-ring', { scale: 1, opacity: 1 }, { duration: 0.3, at: 0.15 }],
      ['.icon-svg', { scale: 1.1 }, { type: 'spring', stiffness: 300, damping: 15, at: 0.2 }],
      ['.scanner-line', { opacity: 0 }, { duration: 0.1, at: 0.5 }],
    ]);
  };

  const handleMouseLeave = () => {
    animate([
      ['.corner-top-left', { top: -8, left: -8 }, { duration: 0.2 }],
      ['.corner-top-right', { top: -8, right: -8 }, { duration: 0.2, at: '<' }],
      ['.corner-bottom-left', { bottom: -8, left: -8 }, { duration: 0.2, at: '<' }],
      ['.corner-bottom-right', { bottom: -8, right: -8 }, { duration: 0.2, at: '<' }],
      ['.icon-svg', { scale: 1 }, { type: 'spring', stiffness: 200, damping: 20 }],
      ['.icon-ring', { scale: 0, opacity: 0 }, { duration: 0.2, at: '<' }],
      ['.scanner-line', { top: '-100%', opacity: 1 }, { duration: 0 }],
    ]);
  };
  
  return (
    <motion.div
      ref={scope}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 + index * 0.08 }}
      viewport={{ once: true, amount: 0.6 }}
      className="relative h-full min-h-[280px] p-6 bg-slate-50 border border-slate-200/80 rounded-xl transition-shadow duration-300 hover:shadow-[0_20px_40px_-10px_rgba(3,54,87,0.2)]"
    >
      {/* --- Elementos da Animação --- */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
          {/* Colchetes nos Cantos */}
          <div className="corner corner-top-left" />
          <div className="corner corner-top-right" />
          <div className="corner corner-bottom-left" />
          <div className="corner corner-bottom-right" />
          {/* Linha de Scanner */}
          <div className="scanner-line absolute -top-full left-0 w-full h-1 bg-gradient-to-b from-[#033657] to-transparent" />
      </div>
      
      {/* --- Conteúdo --- */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="relative w-16 h-16">
          <div className="icon-ring absolute inset-0 scale-0 opacity-0 rounded-full border-2 border-[#033657]/50" />
          <div className="icon-ring absolute inset-0 scale-0 opacity-0 rounded-full border border-[#033657]/50 animate-ping" style={{animationDuration: '1.5s'}}/>
          <point.icon className="icon-svg w-16 h-16 text-[#033657]" />
        </div>
        <p className="text-lg font-light text-[#033657]/90 leading-relaxed mt-4">
          {point.text}
        </p>
      </div>
    </motion.div>
  );
};


// --- Componente Principal ---
const PainSection = () => {
  const painPoints = [
    { icon: FaUsers, text: "Alunos e famílias cada vez mais exigentes." },
    { icon: FaChartLine, text: "Resultados pedagógicos que não acompanham o investimento." },
    { icon: FaDollarSign, text: "Pressão financeira crescente e margens apertadas." },
    { icon: FaUserTimes, text: "Professores sobrecarregados e desmotivados." },
    { icon: FaBullseye, text: "Uma liderança estratégica que muitas vezes se sente sozinha." }
  ];
  
  // Efeito de Parallax no fundo
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });
  const backgroundX = useTransform(springX, [-500, 500], ["-5%", "5%"]);
  const backgroundY = useTransform(springY, [-500, 500], ["-5%", "5%"]);

  const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      x.set(e.clientX - rect.width / 2);
      y.set(e.clientY - rect.height / 2);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full bg-white text-[#033657] py-28 md:py-40 overflow-hidden"
    >
      {/* Fundo de "Blueprint" com Parallax */}
      <motion.div 
        style={{ x: backgroundX, y: backgroundY }}
        className="absolute inset-[-10%] z-0 h-[120%] w-[120%]"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.5" fill="#033657" fillOpacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="max-w-4xl text-center mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 30, mass: 1.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight"
          >
            Sua liderança é uma ciência, não uma luta contra 
            <span className="relative inline-block ml-4">
              <motion.span 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ type: 'spring', stiffness: 100, damping: 30, delay: 0.3 }}
                 viewport={{ once: true }}
                 className="relative"
              >
                incêndios.
                <motion.div 
                  className="absolute bottom-[-10px] left-0 w-full h-1 bg-[#033657]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.01, -0.05, 0.95], delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.span>
            </span>
          </motion.h2>
          <motion.p
            className="mt-8 text-lg md:text-xl text-[#033657]/70 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            Integre pedagógico e financeiro com precisão. Transforme dados em inspiração e construa um modelo de gestão sustentável e estratégico.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {painPoints.map((point, index) => (
            <PainPointCard key={index} point={point} index={index} />
          ))}
        </div>
      </div>

      {/* Estilos CSS para os elementos da animação */}
      <style jsx>{`
        .corner {
          position: absolute;
          width: 12px;
          height: 12px;
          border-style: solid;
          border-color: #033657;
          opacity: 0.6;
          transition: all 0.2s ease-out;
        }
        .corner-top-left { top: -8px; left: -8px; border-width: 2px 0 0 2px; }
        .corner-top-right { top: -8px; right: -8px; border-width: 2px 2px 0 0; }
        .corner-bottom-left { bottom: -8px; left: -8px; border-width: 0 0 2px 2px; }
        .corner-bottom-right { bottom: -8px; right: -8px; border-width: 0 2px 2px 0; }
      `}</style>
    </section>
  );
};

export default PainSection;