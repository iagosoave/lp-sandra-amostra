import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import rodrigoPhoto from './rodrigo.png';
import danielPhoto from './daniel.png';
import valdenicePhoto from './maria.png';

const SocialProofSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rodrigo Teixeira Conceição",
      role: "Diretor Executivo Educacional",
      school: "Palestrante e Consultor",
      image: rodrigoPhoto,
      quote: "A competência acadêmica e visão educacional de Sandra configuram-se como referências capazes de orientar e inspirar diretores em seu percurso de aprimoramento e liderança."
    },
    {
      name: "Daniel Perry",
      role: "Diretor Executivo",
      school: "Sistema Anglo de Ensino",
      image: danielPhoto,
      quote: "Sua competência acadêmica e visão educacional configuram-se como referências para orientar e inspirar diretores em seu percurso de aprimoramento e liderança. Ressalto, ainda, que esta produção apresentada neste e-book constitui valiosa contribuição para toda a comunidade educacional."
    },
    {
      name: "Maria Silva",
      role: "Diretora Institucional e CIO",
      image: valdenicePhoto,
      quote: "O trabalho da Sandra Tonidandel se destaca pela organização, clareza nos processos e foco constante em resultados. Sua condução técnica trouxe consistência para a gestão e um compromisso real com a qualidade do ambiente escolar."
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
    <section className="bg-[#1a2e49] py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#ffffff] leading-tight max-w-4xl mx-auto px-4">
            Gestores de excelência que{' '}
            <span className="text-[#c1a05d]">
              potencializaram seus resultados
            </span>
          </h2>
        </motion.div>

        {/* Carousel Container - DESKTOP */}
        <div className="hidden md:block relative h-[600px]">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-[#335379]/80 backdrop-blur-sm p-4 rounded-full hover:bg-[#335379] transition-all duration-300 group"
          >
            <ChevronLeft className="text-[#ffffff] w-6 h-6 group-hover:text-[#c1a05d] transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-[#335379]/80 backdrop-blur-sm p-4 rounded-full hover:bg-[#335379] transition-all duration-300 group"
          >
            <ChevronRight className="text-[#ffffff] w-6 h-6 group-hover:text-[#c1a05d] transition-colors" />
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
                    <div className={`relative ${position === 'center' ? 'w-[450px]' : 'w-[350px]'} bg-[#335379] rounded-3xl overflow-hidden border ${position === 'center' ? 'border-[#c1a05d]' : 'border-[#c1a05d]/30'} hover:border-[#c1a05d]/50 transition-all duration-300`}>
                      {/* Content */}
                      <div className="p-8 md:p-10">
                        {/* Photo - circular */}
                        <div className="flex justify-center mb-6">
                          <div className={`${position === 'center' ? 'w-32 h-32' : 'w-24 h-24'} rounded-full overflow-hidden border-4 border-[#c1a05d]/50`}>
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Quote icon */}
                        {position === 'center' && (
                          <div className="flex justify-center mb-4">
                            <Quote className="text-[#c1a05d]/30 w-10 h-10" />
                          </div>
                        )}
                        
                        {/* Testimonial */}
                        <p className={`text-[#ffffff]/90 ${position === 'center' ? 'text-lg' : 'text-base'} leading-relaxed mb-6 italic text-center`}>
                          "{testimonial.quote}"
                        </p>
                        
                        {/* Author info */}
                        <div className="text-center border-t border-[#c1a05d]/20 pt-6">
                          <h3 className="text-[#ffffff] font-bold text-xl mb-1">
                            {testimonial.name}
                          </h3>
                          <p className="text-[#c1a05d] text-sm font-semibold mb-1">
                            {testimonial.role}
                          </p>
                          <p className="text-[#ffffff]/60 text-sm">
                            {testimonial.school}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Container - MOBILE */}
        <div className="md:hidden">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="bg-[#335379] rounded-3xl overflow-hidden border border-[#c1a05d] mx-4">
                  <div className="p-6">
                    {/* Photo - circular */}
                    <div className="flex justify-center mb-6">
                      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#c1a05d]/50">
                        <img 
                          src={testimonials[currentIndex].image} 
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Quote icon */}
                    <div className="flex justify-center mb-4">
                      <Quote className="text-[#c1a05d]/30 w-8 h-8" />
                    </div>
                    
                    {/* Testimonial */}
                    <p className="text-[#ffffff]/90 text-base leading-relaxed mb-6 italic text-center">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    
                    {/* Author info */}
                    <div className="text-center border-t border-[#c1a05d]/20 pt-6">
                      <h3 className="text-[#ffffff] font-bold text-lg mb-1">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-[#c1a05d] text-sm font-semibold mb-1">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-[#ffffff]/60 text-sm">
                        {testimonials[currentIndex].school}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-40 bg-[#335379]/80 backdrop-blur-sm p-3 rounded-full hover:bg-[#335379] transition-all duration-300"
            >
              <ChevronLeft className="text-[#ffffff] w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-40 bg-[#335379]/80 backdrop-blur-sm p-3 rounded-full hover:bg-[#335379] transition-all duration-300"
            >
              <ChevronRight className="text-[#ffffff] w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 h-2 bg-[#c1a05d]' 
                  : 'w-2 h-2 bg-[#ffffff]/30 hover:bg-[#ffffff]/50'
              } rounded-full`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;