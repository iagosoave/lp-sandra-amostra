import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-white flex items-center px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Logo e Copy */}
          <div className="space-y-8">
            {/* Logo Placeholder */}
            <div className="w-32 h-16 bg-[#033657] rounded flex items-center justify-center mb-12">
              <span className="text-white text-sm font-bold">LOGO</span>
            </div>

            {/* Main Copy */}
            <div className="space-y-6">
              <h1 className="text-5xl font-black text-[#033657] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Sua escola está pronta para enfrentar o <span className="text-[#033657]">5º Desafio</span>?
              </h1>

              <h2 className="text-2xl font-black text-[#033657]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Da crise acadêmica ao <span className="text-[#033657]">superávit estratégico</span>
              </h2>

              {/* CTA Button */}
              <button className="bg-[#033657] hover:bg-[#033657] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors flex items-center space-x-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span>QUERO CONHECER O MÉTODO</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Side - Empty for clean look */}
          <div></div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;