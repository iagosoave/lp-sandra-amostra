import React from 'react';
import sandraPhoto from './sandra.jpeg';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Globe, CheckCircle, Target } from 'lucide-react';

const AboutSection = () => {
  const metrics = [
    {
      icon: Award,
      number: '+460',
      title: 'Prêmios conquistados',
      subtitle: '400+ nacionais, 60 internacionais'
    },
    {
      icon: Users,
      number: '42mil',
      title: 'Alunos impactados',
      subtitle: 'Gestão direta e consultiva'
    },
    {
      icon: TrendingUp,
      number: 'Top 10',
      title: 'ENEM São Paulo',
      subtitle: 'De 200ª posição ao topo'
    },
    {
      icon: Globe,
      number: '4 países',
      title: 'Referências globais',
      subtitle: 'Harvard, Singapura, Espanha, Finlândia'
    },
    {
      icon: CheckCircle,
      number: 'Cambridge',
      title: 'Certificações internacionais',
      subtitle: 'Programas de excelência'
    },
    {
      icon: Target,
      number: '10 passos',
      title: 'Método O 5º Desafio',
      subtitle: 'Framework executivo comprovado'
    }
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Título da seção */}
        <div className="text-center mb-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-[#033657] mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Quem lidera essa transformação
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-[#003399] font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Autoridade, experiência e resultados em larga escala
          </motion.p>
        </div>

        {/* Conteúdo principal - Image Left + Info Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-12">
          
          {/* Coluna da imagem - ESQUERDA (SÓ A FOTO) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src={sandraPhoto} 
                alt="Sandra Tonidandel" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#003399]"></div>
            </div>
          </motion.div>

          {/* Coluna de conteúdo - DIREITA */}
          <motion.div 
            className="flex flex-col justify-center space-y-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Info de Sandra EM CIMA DO TEXTO */}
            <div className="border-l-4 border-[#003399] pl-4 mb-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#033657] mb-1">
                Sandra Tonidandel
              </h3>
              <p className="text-[#003399] font-bold text-base md:text-lg mb-0.5">
                Doutora em Educação (USP)
              </p>
              <p className="text-slate-600 text-sm md:text-base">
                34 anos transformando escolas
              </p>
            </div>

            <div>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                <span className="font-bold text-[#033657]">Mestre e Doutora em Educação (USP)</span> com 34 anos de experiência. Liderança no Colégio Dante Alighieri e Fundação Bradesco (42 mil alunos).
              </p>
            </div>

            <div>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Especialista em integrar pedagógico e financeiro, com abordagem baseada em <span className="font-semibold text-[#033657]">Harvard, Singapura, Espanha e Finlândia</span>.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Seção de métricas */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#033657] mb-1">
              Resultados Mensuráveis
            </h3>
            <p className="text-base md:text-lg text-slate-600">
              Impacto comprovado em escala
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {metrics.map((metric, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                {/* Ícone e número */}
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-11 h-11 bg-[#003399]/10 group-hover:bg-[#003399] flex items-center justify-center transition-colors duration-300">
                    <metric.icon className="w-5 h-5 text-[#003399] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-[#003399]">
                    {metric.number}
                  </div>
                </div>

                {/* Conteúdo */}
                <h4 className="font-bold text-[#033657] text-base md:text-lg mb-1 leading-tight">
                  {metric.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {metric.subtitle}
                </p>

                {/* Linha de separação sutil */}
                <div className="mt-2 h-px bg-slate-200 group-hover:bg-[#003399] transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;