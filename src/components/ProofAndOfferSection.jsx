import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const SocialProofSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle item

  const testimonials = [
    {
      school: "Colégio Horizonte",
      location: "São Paulo, SP",
      image: "https://via.placeholder.com/400x500/1e3a8a/ffffff?text=Escola+1",
      quote: "Saímos de um déficit de 200 mil para um superávit de 500 mil em 18 meses.",
      author: "Maria Silva",
      role: "Diretora Pedagógica"
    },
    {
      school: "Instituto Educacional Futuro",
      location: "Campinas, SP",
      image: "https://via.placeholder.com/400x500/1e40af/ffffff?text=Escola+2",
      quote: "Nossa taxa de inadimplência caiu de 35% para 8% após implementar o método.",
      author: "João Santos",
      role: "Diretor Administrativo"
    },
    {
      school: "Escola Nova Geração",
      location: "Ribeirão Preto, SP",
      image: "https://via.placeholder.com/400x500/1e3a8a/ffffff?text=Escola+3",
      quote: "Hoje temos lista de espera e podemos escolher nossos alunos.",
      author: "Ana Costa",
      role: "Mantenedora"
    },
    {
      school: "Colégio Excelência",
      location: "Sorocaba, SP",
      image: "https://via.placeholder.com/400x500/1e40af/ffffff?text=Escola+4",
      quote: "Deixamos de ser reféns das mensalidades e criamos 3 novas fontes de receita.",
      author: "Pedro Oliveira",
      role: "Diretor Financeiro"
    },
    {
      school: "Centro Educacional Líder",
      location: "Santos, SP",
      image: "https://via.placeholder.com/400x500/1e3a8a/ffffff?text=Escola+5",
      quote: "A retenção de professores aumentou 70% após reestruturarmos a gestão.",
      author: "Carla Mendes",
      role: "Coordenadora Geral"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getItemPosition = (index) => {
    const diff = (index - currentIndex + testimonials.length) % testimonials.length;
    
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -testimonials.length + 1) return 'right';
    if (diff === testimonials.length - 1 || diff === -1) return 'left';
    return 'hidden';
  };

  const getItemStyle = (position) => {
    switch(position) {
      case 'center':
        return {
          scale: 1,
          x: '0%',
          opacity: 1,
          zIndex: 30,
          filter: 'brightness(1)'
        };
      case 'left':
        return {
          scale: 0.75,
          x: '-60%',
          opacity: 0.7,
          zIndex: 20,
          filter: 'brightness(0.7)'
        };
      case 'right':
        return {
          scale: 0.75,
          x: '60%',
          opacity: 0.7,
          zIndex: 20,
          filter: 'brightness(0.7)'
        };
      default:
        return {
          scale: 0.5,
          x: '0%',
          opacity: 0,
          zIndex: 10,
          filter: 'brightness(0.5)'
        };
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400/70 text-xs uppercase tracking-[0.4em] mb-6">
            Casos de Sucesso
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Deixamos de apagar incêndios e hoje temos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              gestão sólida e previsível
            </span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-40 bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
          >
            <FaChevronLeft className="text-white text-xl group-hover:text-cyan-400 transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-40 bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
          >
            <FaChevronRight className="text-white text-xl group-hover:text-cyan-400 transition-colors" />
          </button>

          {/* Carousel Items */}
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="sync">
              {testimonials.map((testimonial, index) => {
                const position = getItemPosition(index);
                const style = getItemStyle(position);
                
                if (position === 'hidden') return null;
                
                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    initial={style}
                    animate={style}
                    transition={{ 
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                    onClick={() => setCurrentIndex(index)}
                    style={{ cursor: position !== 'center' ? 'pointer' : 'default' }}
                  >
                    <div className={`relative ${position === 'center' ? 'w-[400px]' : 'w-[300px]'} bg-gradient-to-b from-slate-800/90 to-slate-900/90 rounded-3xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300`}>
                      {/* Image */}
                      <div className="h-[250px] overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.school}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-8">
                        {position === 'center' && (
                          <FaQuoteLeft className="text-cyan-400/30 text-3xl mb-4" />
                        )}
                        
                        <p className={`text-white/80 ${position === 'center' ? 'text-lg' : 'text-base'} leading-relaxed mb-6 italic`}>
                          "{testimonial.quote}"
                        </p>
                        
                        <div className="border-t border-slate-700/50 pt-6">
                          <h3 className="text-cyan-400 font-bold text-lg mb-1">
                            {testimonial.school}
                          </h3>
                          <p className="text-white/60 text-sm mb-3">
                            {testimonial.location}
                          </p>
                          <div>
                            <p className="text-white/90 font-semibold">
                              {testimonial.author}
                            </p>
                            <p className="text-white/60 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bottom accent */}
                      {position === 'center' && (
                        <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 h-2 bg-cyan-400' 
                  : 'w-2 h-2 bg-white/30 hover:bg-white/50'
              } rounded-full`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;