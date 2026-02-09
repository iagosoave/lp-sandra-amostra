import React from 'react';
import sandraPhoto from './sandra.jpg';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Globe, School, CheckCircle, ArrowRight } from 'lucide-react';

const ES = () => <img src="https://flagcdn.com/w80/es.png" alt="Espanha" className="w-full h-full object-cover" />;
const FI = () => <img src="https://flagcdn.com/w80/fi.png" alt="Finlândia" className="w-full h-full object-cover" />;
const US = () => <img src="https://flagcdn.com/w80/us.png" alt="EUA" className="w-full h-full object-cover" />;
const SG = () => <img src="https://flagcdn.com/w80/sg.png" alt="Singapura" className="w-full h-full object-cover" />;

const AboutSection = () => {
  const timeline = [
    { year: '2015', code: 'ES', country: 'Espanha', Flag: ES },
    { year: '2017', code: 'FI', country: 'Finlândia', Flag: FI },
    { year: '2019', code: 'US', country: 'EUA', Flag: US },
    { year: '2021', code: 'SG', country: 'Singapura', Flag: SG },
    { year: '2023', code: 'US', country: 'EUA', Flag: US },
  ];

  return (
    <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titulo */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2e49] mb-2">
            Quem lidera essa <span className="text-[#c1a05d]">transformação</span>
          </h2>
        </div>

        {/* Layout Bio — foto + texto alinhados pelo topo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-12 md:mb-16 items-start">
          
          {/* Foto */}
          <motion.div 
            className="lg:col-span-4 flex flex-col items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-2xl">
              <img src={sandraPhoto} alt="Sandra Tonidandel" className="w-full h-auto object-cover" />
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#c1a05d]"></div>
            </div>
          </motion.div>

          {/* Texto + Timeline à direita */}
          <motion.div 
            className="lg:col-span-8 flex flex-col justify-start text-[#335379]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Nome e subtítulo — sem margem extra em cima */}
            <div className="border-l-4 border-[#c1a05d] pl-3 sm:pl-4 md:pl-6 mb-3 sm:mb-4">
              <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-[#1a2e49] leading-tight">Sandra Tonidandel</h3>
              <p className="font-lato text-sm sm:text-base md:text-lg font-semibold text-[#335379] mt-1">Referência nacional em gestão educacional</p>
            </div>

            {/* Bio text */}
            <div className="space-y-3 sm:space-y-4 font-lato text-xs sm:text-sm md:text-base leading-relaxed text-[#335379] mb-4 sm:mb-5">
              <p>
                Com <strong className="text-[#1a2e49]">34 anos dedicados à transformação de instituições de ensino</strong>, sua trajetória inclui a <strong className="text-[#1a2e49]">Direção Pedagógica do Colégio Dante Alighieri</strong> — uma das escolas mais respeitadas do Brasil — e, posteriormente, a <strong className="text-[#1a2e49]">Direção Corporativa Educacional da Fundação Bradesco</strong>, onde liderou 40 escolas e impactou 42 mil alunos.
              </p>
              <p>
                Mestre e Doutora em Educação pela USP, Sandra aperfeiçoou seu método de consultoria em programas de formação de alta gestão em centros de excelência como <strong className="text-[#1a2e49]">Harvard, Stanford, Singapura, Espanha e Finlândia</strong>.
              </p>
              <div className="bg-gradient-to-r from-[#1a2e49]/5 to-[#c1a05d]/5 p-3 sm:p-4 rounded-lg border-l-4 border-[#c1a05d]">
                <p className="font-semibold text-[#1a2e49]">
                  Atualmente, lidera a mentoria executiva <strong className="text-[#c1a05d]">O 5º Desafio</strong>, um programa exclusivo para diretores e mantenedores que buscam elevar suas instituições a um patamar de excelência com método, protocolos e resultados mensuráveis.
                </p>
              </div>
            </div>

            {/* Timeline Internacional — agora à direita, dentro do bloco de texto */}
            <div className="w-full">
              <div className="bg-gradient-to-r from-[#1a2e49]/5 via-[#c1a05d]/10 to-[#1a2e49]/5 rounded-lg p-3 sm:p-4 border border-[#c1a05d]/20">
                <p className="font-lato text-[10px] sm:text-xs text-[#1a2e49] font-bold mb-3 sm:mb-4 text-center uppercase tracking-wide">
                  Formação Internacional em Centros de Excelência
                </p>
                
                <div className="flex justify-between items-center mb-2 px-2 sm:px-4 md:px-8">
                  {timeline.map((t, i) => (
                    <span key={i} className="font-lato text-[10px] sm:text-xs font-bold text-[#1a2e49]">{t.year}</span>
                  ))}
                </div>
                
                <div className="relative h-1 bg-gradient-to-r from-[#c1a05d]/30 via-[#c1a05d]/50 to-[#c1a05d]/30 rounded-full mx-2 sm:mx-4 md:mx-8 mb-2">
                  <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-0.5 bg-[#c1a05d]" />
                  <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-0">
                    {timeline.map((_, i) => (
                      <div key={i} className="relative w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#c1a05d] border-2 border-white shadow-lg" />
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-2 sm:mt-3 px-2 sm:px-4 md:px-8">
                  {timeline.map((t, i) => {
                    const FlagComponent = t.Flag;
                    return (
                      <div key={i} className="flex flex-col items-center group">
                        <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full overflow-hidden mb-1 sm:mb-1.5 shadow-lg border-2 border-white">
                          <FlagComponent />
                        </div>
                        <span className="font-lato text-[8px] sm:text-[9px] md:text-[10px] font-semibold text-[#335379] text-center leading-tight">
                          {t.country}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Resultados Mensuráveis */}
        <div className="bg-gradient-to-br from-[#1a2e49]/5 to-[#c1a05d]/5 rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-lg border border-[#c1a05d]/20 mb-10 sm:mb-12 md:mb-16">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-[#1a2e49] mb-2 sm:mb-3 px-2">
              Resultados Mensuráveis — <span className="text-[#c1a05d]">Impacto Comprovado em Escala</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            <MetricCard icon={Users} title="+42.000 alunos impactados" subtitle="Gestão direta e consultiva" />
            <MetricCard icon={School} title="40 escolas lideradas" subtitle="Simultaneamente (Fundação Bradesco)" />
            <MetricCard icon={Award} title="+400 prêmios" subtitle="Nacionais e internacionais (Colégio Dante)" />
            <MetricCard icon={TrendingUp} title="Top 10 no ENEM SP" subtitle="Da posição 2000 ao topo" />
            <MetricCard icon={Globe} title="5 programas internacionais" subtitle="Centros de Excelência" />
            <MetricCard icon={CheckCircle} title="92% de aprovação" subtitle="Universidades internacionais" />
          </div>

          {/* Botão CTA — máximo responsivo mobile */}
          <div className="mt-6 sm:mt-10 md:mt-12 flex justify-center px-4">
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe49fG1imc09O3aIUgmQlqedma3wtn1JP4ZwZv50JNi36zCBg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-[#c1a05d] text-white font-lato font-bold 
                py-3 px-8 sm:py-3.5 sm:px-10 md:py-4 md:px-12
                text-[11px] sm:text-xs md:text-sm
                flex items-center justify-center gap-2 sm:gap-3 
                shadow-2xl overflow-hidden group 
                active:scale-[0.97] sm:active:scale-100
                touch-manipulation"
              style={{ borderRadius: '9999px' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.div
                className="absolute -inset-2 bg-[#c1a05d] blur-2xl opacity-50"
                style={{ borderRadius: '9999px' }}
                animate={{ opacity: [0.5, 0.7, 0.5], scale: [1, 1.08, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#c1a05d] via-[#d4b36d] to-[#c1a05d] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderRadius: '9999px' }} />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
                initial={{ x: '-150%' }}
                animate={{ x: '250%' }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
              />
              <span className="relative z-10 tracking-wider uppercase text-center whitespace-nowrap">
                Quero resultados como estes
              </span>
              <motion.div
                className="relative z-10 flex-shrink-0"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.div>
            </motion.a>
          </div>
        </div>

        {/* Perfil dos Gestores */}
        <div className="border-t border-[#c1a05d]/20 pt-6 sm:pt-8 md:pt-10">
           <h4 className="font-lato text-lg sm:text-xl md:text-2xl font-bold text-[#1a2e49] mb-4 sm:mb-5 md:mb-6 text-center">
             Perfil dos Gestores Atendidos
           </h4>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
             {[
               'Aumentar captação e retenção de alunos', 
               'Melhorar reputação acadêmica institucional', 
               'Otimizar margens e rentabilidade sustentável', 
               'Reduzir turnover e fortalecer cultura'
             ].map((item, i) => (
               <motion.div 
                 key={i} 
                 className="flex items-start space-x-2"
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
               >
                 <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#c1a05d] flex-shrink-0 mt-0.5" />
                 <span className="font-lato text-xs sm:text-sm md:text-base text-[#335379]">{item}</span>
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

const MetricCard = ({ icon: Icon, title, subtitle }) => (
  <motion.div 
    className="relative flex items-center gap-3 sm:gap-3 md:gap-4 p-3.5 sm:p-4 bg-white rounded-xl shadow-sm border border-[#c1a05d]/20 hover:shadow-md transition-all"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -2 }}
  >
    <div className="relative bg-gradient-to-br from-[#1a2e49] to-[#335379] p-2.5 sm:p-3 rounded-full flex-shrink-0 shadow-md">
      <Icon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
    </div>
    <div className="min-w-0 flex-1">
      <h4 className="font-lato font-bold text-sm sm:text-sm md:text-base text-[#1a2e49] leading-tight">{title}</h4>
      <p className="font-lato text-xs sm:text-xs md:text-sm text-[#335379] leading-tight mt-0.5">{subtitle}</p>
    </div>
  </motion.div>
);

export default AboutSection;