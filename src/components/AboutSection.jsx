import React from 'react';
import sandraPhoto from './sandra.jpeg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaTrophy, FaUsers, FaChartLine, FaGlobe, FaCertificate, FaClipboardCheck } from 'react-icons/fa';

const AboutSection = () => {
  const sectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const metrics = [
    {
      icon: FaTrophy,
      number: '+460',
      title: 'Prêmios conquistados',
      subtitle: '400+ nacionais, 60 internacionais em uma década',
      detail: 'Reputação, engajamento e visibilidade científica'
    },
    {
      icon: FaUsers,
      number: '42mil',
      title: 'Alunos impactados',
      subtitle: 'Gestão direta e consultiva de redes',
      detail: 'Escala, governança e padronização de ritos'
    },
    {
      icon: FaChartLine,
      number: 'Top 10',
      title: 'ENEM São Paulo',
      subtitle: 'De 200ª posição ao topo',
      detail: 'Impacto acadêmico consistente'
    },
    {
      icon: FaGlobe,
      number: '4 países',
      title: 'Referências globais',
      subtitle: 'Harvard, Singapura, Espanha, Finlândia',
      detail: 'Credenciais e padrões globais'
    },
    {
      icon: FaCertificate,
      number: 'Cambridge',
      title: 'Certificações',
      subtitle: 'Programas internacionais',
      detail: 'Credenciais e padrões globais'
    },
    {
      icon: FaClipboardCheck,
      number: 'Rubricas',
      title: 'Avaliação processual',
      subtitle: 'Ganhos mensuráveis em aprendizagem',
      detail: 'Método e indicadores pedagógicos'
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-white py-24 md:py-32 overflow-hidden">
      
      {/* Minimal decorative accent */}
      <div className="absolute top-0 left-0 w-2 h-32 bg-[#003399]"></div>
      <div className="absolute bottom-0 right-0 w-2 h-32 bg-[#003399]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section intro */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#003399] font-semibold tracking-wider uppercase text-sm border-b-2 border-[#003399] pb-1">
              Quem lidera essa transformação
            </span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#033657] leading-tight mb-8 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Autoridade, experiência e<br />
            <span className="text-[#003399]">resultados em larga escala</span>
          </motion.h2>

          <motion.p 
            className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Gestora, pesquisadora e estrategista acadêmica que ajudou escolas 
            a superar crises profundas e conquistar resultados que pareciam impossíveis.
          </motion.p>
        </motion.div>

        {/* Main content - Image and credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 mb-32 items-start">
          
          {/* Photo column */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="sticky top-24">
              {/* Main image */}
              <motion.div 
                className="relative aspect-[3/4] overflow-hidden mb-8"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={sandraPhoto} 
                  alt="Sandra Tonidandel" 
                  className="w-full h-full object-cover"
                />
                {/* Simple border accent */}
                <div className="absolute inset-0 border-4 border-[#003399] pointer-events-none"></div>
              </motion.div>

              {/* Info below image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="text-3xl font-bold text-[#033657] mb-2">
                  Sandra Tonidandel
                </h3>
                <p className="text-[#003399] font-semibold text-xl mb-1">
                  Doutora em Educação (USP)
                </p>
                <p className="text-slate-600 text-lg">
                  34 anos de experiência
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content column - COM SCROLL NO CARD */}
          <div className="lg:col-span-3">
            <motion.div
              className="bg-gradient-to-br from-[#003399]/5 to-blue-50/50 rounded-3xl p-8 md:p-10 border-2 border-[#003399]/10 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#003399] scrollbar-track-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6">
                
                <div>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <span className="font-bold text-[#033657]">Mestre e Doutora em Educação (USP)</span>, 34 anos de experiência. Liderança em escola de referência <span className="font-semibold text-[#033657]">(Dante Alighieri)</span> e rede nacional <span className="font-semibold text-[#033657]">(Fundação Bradesco, 42 mil alunos)</span>. Especialista em integrar pedagógico e financeiro, formar lideranças e implementar sistemas replicáveis.
                  </p>
                </div>

                <div>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Ao longo da jornada, em sua consultoria e mentoria, ajudou escolas a superar crises profundas e conquistar resultados que pareciam impossíveis.
                  </p>
                </div>

                <div>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Abordagem referenciada em práticas internacionais de excelência: <span className="font-semibold text-[#033657]">Harvard, Singapura, Espanha, Finlândia</span> — vivências presenciais adaptadas à realidade brasileira.
                  </p>
                </div>

                <div className="bg-[#003399] p-6 rounded-xl">
                  <p className="text-white text-lg font-bold">
                    Não é teoria: é prática validada, estratégia comprovada.
                  </p>
                </div>

                <div className="pt-4">
                  <div className="mb-4">
                    <span className="bg-[#003399] text-white px-4 py-2 text-xs font-semibold uppercase tracking-wide rounded">
                      Método Exclusivo
                    </span>
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-bold text-[#033657] mb-3">
                    O 5º Desafio
                  </h4>
                  <p className="text-slate-700 text-lg leading-relaxed mb-3">
                    Framework de <span className="font-bold text-[#033657]">10 passos</span> que leva escolas ao superávit estratégico — integrando gestão acadêmica, financeira e liderança.
                  </p>
                  <p className="text-[#003399] font-bold text-lg">
                    Roteiro executivo comprovado
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
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#033657] mb-4">
              Provas e Métricas
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl">
              Foco executivo com legendas curtas e impacto mensurável
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                whileHover={{ y: -8 }}
                className="group bg-slate-50 p-8 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#003399] flex items-center justify-center">
                    <metric.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Number */}
                <div className="text-5xl font-bold text-[#003399] mb-3">
                  {metric.number}
                </div>

                {/* Title */}
                <h4 className="font-bold text-[#033657] text-xl mb-2">
                  {metric.title}
                </h4>

                {/* Subtitle */}
                <p className="text-slate-600 mb-4 font-medium">
                  {metric.subtitle}
                </p>

                {/* Detail */}
                <p className="text-sm text-slate-500 italic">
                  {metric.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;