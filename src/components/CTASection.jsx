import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, X, CheckCircle, UserCircle, Briefcase, Building2, TrendingUp } from 'lucide-react';
import logo from './logo.png';

const CTASection = () => {
  const notForYou = [
    "Busca soluções rápidas e superficiais para problemas estruturais.",
    "Não está disposto a implementar mudanças estratégicas na cultura organizacional.",
    "Prefere consultorias genéricas que oferecem receitas prontas sem personalização.",
    "Não tem autoridade de decisão para implementar protocolos de alta gestão."
  ];

  const idealForYou = [
    "Você lidera uma escola particular, rede de ensino ou é mantenedor/investidor educacional.",
    "Você busca diferenciação e deseja posicionar sua instituição como referência regional ou nacional.",
    "Você valoriza método e previsibilidade — não quer mais viver apagando incêndios.",
    "Você está pronto para investir em um processo de transformação estrutural com acompanhamento executivo."
  ];

  return (
    <section className="bg-[#1a2e49] py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Logo */}
        <motion.div 
          className="flex justify-center mb-8 sm:mb-10 md:mb-12"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} alt="Logo" className="h-20 sm:h-24 md:h-28 w-auto" />
        </motion.div>

        {/* Título Principal */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-lato text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight px-4">
            Não é para todos — é para quem está pronto para <span className="text-[#c1a05d]">transformar a gestão</span>
          </h2>
        </motion.div>

        {/* Blocos de Qualificação - Lado a Lado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16 max-w-6xl mx-auto">
          
          {/* Bloco: NÃO é para você */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-red-500/30 to-red-600/30" />
            <div className="relative bg-[#335379] rounded-2xl p-6 md:p-8 h-full">
              <div className="flex items-center space-x-3 mb-5">
                <div className="bg-red-500/20 p-2 rounded-full">
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="font-lato text-xl md:text-2xl font-bold text-white">
                  Não é para você se:
                </h3>
              </div>
              
              <ul className="space-y-3">
                {notForYou.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="font-lato text-sm md:text-base text-white/90 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Bloco: É ideal para você */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-[#c1a05d]/30 to-[#c1a05d]/50" />
            <div className="relative bg-[#335379] rounded-2xl p-6 md:p-8 h-full">
              <div className="flex items-center space-x-3 mb-5">
                <div className="bg-[#c1a05d]/20 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-[#c1a05d]" />
                </div>
                <h3 className="font-lato text-xl md:text-2xl font-bold text-white">
                  É ideal para você se:
                </h3>
              </div>
              
              <ul className="space-y-3">
                {idealForYou.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#c1a05d] flex-shrink-0 mt-0.5" />
                    <span className="font-lato text-sm md:text-base text-white/90 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Perfil Ideal - Design Minimalista Refinado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-16"
        >
          <div className="text-center mb-8 md:mb-10">
            <h3 className="font-lato text-2xl md:text-3xl lg:text-4xl font-bold text-[#c1a05d] mb-8 md:mb-10">
              Perfil Ideal
            </h3>
            
            {/* Grid de Profissões com Ícones */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12 max-w-4xl mx-auto">
              
              {/* Diretores */}
              <motion.div 
                className="flex flex-col items-center space-y-4"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-[#335379] p-5 rounded-2xl border-2 border-[#c1a05d]/20 hover:border-[#c1a05d]/40 transition-all">
                  <UserCircle className="w-10 h-10 md:w-12 md:h-12 text-[#c1a05d]" strokeWidth={1.5} />
                </div>
                <span className="font-lato text-sm md:text-base font-semibold text-white">Diretores</span>
              </motion.div>
              
              {/* Diretores Corporativos */}
              <motion.div 
                className="flex flex-col items-center space-y-4"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-[#335379] p-5 rounded-2xl border-2 border-[#c1a05d]/20 hover:border-[#c1a05d]/40 transition-all">
                  <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-[#c1a05d]" strokeWidth={1.5} />
                </div>
                <span className="font-lato text-sm md:text-base font-semibold text-white text-center leading-tight">
                  Diretores<br />Corporativos
                </span>
              </motion.div>
              
              {/* Mantenedores */}
              <motion.div 
                className="flex flex-col items-center space-y-4"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-[#335379] p-5 rounded-2xl border-2 border-[#c1a05d]/20 hover:border-[#c1a05d]/40 transition-all">
                  <Building2 className="w-10 h-10 md:w-12 md:h-12 text-[#c1a05d]" strokeWidth={1.5} />
                </div>
                <span className="font-lato text-sm md:text-base font-semibold text-white">Mantenedores</span>
              </motion.div>
              
              {/* Investidores */}
              <motion.div 
                className="flex flex-col items-center space-y-4"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-[#335379] p-5 rounded-2xl border-2 border-[#c1a05d]/20 hover:border-[#c1a05d]/40 transition-all">
                  <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-[#c1a05d]" strokeWidth={1.5} />
                </div>
                <span className="font-lato text-sm md:text-base font-semibold text-white">Investidores</span>
              </motion.div>
            </div>
            
            {/* Texto Descritivo */}
            <p className="font-lato text-sm md:text-base lg:text-lg text-[#ffffff] leading-relaxed max-w-3xl mx-auto px-4 font-semibold">
              Profissionais de instituições de ensino que buscam elevar{' '}
              <span className="text-[#c1a05d]">resultados acadêmicos, reputação e rentabilidade</span>{' '}
              de forma sustentável.
            </p>
          </div>
        </motion.div>

        {/* Main Message Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="font-playfair text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#ffffff] leading-snug sm:leading-tight mb-5 sm:mb-6 md:mb-8 px-3 sm:px-2">
            Se você sente que chegou a hora de liderar sua instituição rumo ao{' '}
            <span className="text-[#c1a05d]">
              superávit estratégico
            </span>, o próximo passo é aplicar para o 5º Desafio.
          </h2>
          
          <p className="font-lato text-sm sm:text-base md:text-lg text-[#ffffff]/90 mb-6 sm:mb-8 md:mb-10 px-3 sm:px-2 font-semibold">
            Clique abaixo e descubra como atravessar o <span className="text-[#c1a05d]">5º Desafio</span>
          </p>

          {/* CTA Button Padronizado */}
          <motion.div className="flex justify-center">
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe49fG1imc09O3aIUgmQlqedma3wtn1JP4ZwZv50JNi36zCBg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-[#c1a05d] text-[#ffffff] font-lato font-bold py-4 px-8 rounded-full text-sm sm:text-base flex items-center justify-center gap-3 shadow-2xl overflow-hidden group w-full sm:w-auto max-w-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.div
                className="absolute -inset-2 bg-[#c1a05d] rounded-full blur-2xl opacity-50"
                animate={{ opacity: [0.5, 0.7, 0.5], scale: [1, 1.08, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#c1a05d] via-[#d4b36d] to-[#c1a05d] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
                initial={{ x: '-150%' }}
                animate={{ x: '250%' }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
              />
              <span className="relative z-10 tracking-wide uppercase text-center">Aplicar agora</span>
              <motion.div
                className="relative z-10 flex-shrink-0"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;