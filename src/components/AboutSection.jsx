import React from 'react';
import sandraPhoto from './sandra.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaTrophy, FaUsers, FaChartLine, FaGlobe } from 'react-icons/fa';

const AboutSection = () => {
  const sectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const metrics = [
    {
      icon: FaTrophy,
      number: '+460',
      label: 'Prêmios conquistados',
      detail: '400+ nacionais, 60 internacionais'
    },
    {
      icon: FaUsers,
      number: '42mil',
      label: 'Alunos impactados',
      detail: 'Gestão direta e consultiva'
    },
    {
      icon: FaChartLine,
      number: 'Top 10',
      label: 'ENEM São Paulo',
      detail: 'De 200ª posição ao topo'
    },
    {
      icon: FaGlobe,
      number: '4 países',
      label: 'Referências globais',
      detail: 'Harvard, Singapura, Espanha, Finlândia'
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-white py-32 md:py-40 overflow-hidden">
      
      {/* Animated background line */}
      <motion.div 
        className="absolute left-0 top-0 w-1 bg-gradient-to-b from-transparent via-cyan-400 to-transparent h-full"
        style={{ opacity }}
      />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section intro */}
        <motion.div 
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-block mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-cyan-600 font-medium tracking-wider uppercase text-sm">
              Quem lidera essa transformação
            </span>
            <div className="h-px bg-gradient-to-r from-cyan-400 to-transparent w-32 mt-2" />
          </motion.div>

          <motion.h2 
            className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-[#033657] leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Autoridade, experiência<br />
            e <span className="text-cyan-600">resultados</span><br />
            em larga escala
          </motion.h2>

          <motion.p 
            className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Gestora, pesquisadora e estrategista acadêmica que ajudou escolas 
            a superar crises profundas e conquistar resultados que pareciam impossíveis.
          </motion.p>
        </motion.div>

        {/* Main content split */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 lg:gap-32 mb-40">
          
          {/* Photo column */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="sticky top-32">
              <motion.div 
                className="relative aspect-[3/4] rounded-none overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img 
                  src={sandraPhoto} 
                  alt="Sandra Tonidandel" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 border-2 border-[#033657] opacity-0 hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="font-playfair text-3xl font-bold text-[#033657] mb-2">
                  Sandra Tonidandel
                </h3>
                <p className="text-cyan-600 font-medium text-lg">
                  Doutora em Educação (USP)
                </p>
                <p className="text-slate-600 mt-1">
                  34 anos de experiência
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content column */}
          <div className="lg:col-span-3 space-y-16">
            
            {/* Credentials block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-[#033657] mb-8 font-playfair">
                Formação e Experiência
              </h3>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed border-l-2 border-slate-200 pl-8">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className="font-semibold text-[#033657]">Mestre e Doutora em Educação pela USP.</span> Especialista em integrar pedagógico e financeiro, formar lideranças e implementar sistemas replicáveis.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Liderança em instituições de referência como <span className="font-semibold text-[#033657]">Dante Alighieri</span> e <span className="font-semibold text-[#033657]">Fundação Bradesco</span> (42 mil alunos).
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Abordagem referenciada em práticas internacionais de excelência: <span className="font-semibold text-[#033657]">Harvard, Singapura, Espanha e Finlândia</span> — vivências presenciais adaptadas à realidade brasileira.
                </motion.p>
              </div>
            </motion.div>

            {/* Method highlight */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative overflow-hidden bg-[#033657] p-12 group">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-[#033657]"
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <div className="relative z-10">
                  <h4 className="font-playfair text-3xl font-bold text-white mb-6">
                    O 5º Desafio
                  </h4>
                  <p className="text-cyan-50 text-lg leading-relaxed mb-6">
                    Método exclusivo de <span className="font-bold text-white">10 passos</span> que leva escolas ao superávit estratégico — integrando gestão acadêmica, financeira e liderança.
                  </p>
                  <div className="h-px bg-white/20 mb-6" />
                  <p className="text-white font-semibold text-lg">
                    Não é teoria: é prática validada, estratégia comprovada.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Metrics section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-playfair text-4xl md:text-5xl font-bold text-[#033657] mb-4">
              Resultados Comprovados
            </h3>
            <div className="w-24 h-1 bg-cyan-400 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {metrics.map((metric, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ y: -12 }}
                className="group"
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Icon */}
                  <div className="mb-8 relative">
                    <div className="w-16 h-16 mx-auto relative">
                      <motion.div 
                        className="absolute inset-0 bg-cyan-100 rounded-full"
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <metric.icon className="w-7 h-7 text-cyan-600 relative z-10" />
                      </div>
                    </div>
                  </div>

                  {/* Number */}
                  <div className="text-5xl font-bold text-[#033657] mb-3 font-playfair">
                    {metric.number}
                  </div>

                  {/* Label */}
                  <h4 className="font-semibold text-[#033657] text-xl mb-3">
                    {metric.label}
                  </h4>

                  {/* Detail */}
                  <p className="text-slate-600 leading-relaxed">
                    {metric.detail}
                  </p>

                  {/* Hover line */}
                  <motion.div 
                    className="h-1 bg-cyan-400 mt-6"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;