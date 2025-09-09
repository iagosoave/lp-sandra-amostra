import React, { useState } from 'react';
import { motion } from 'framer-motion';
import pecasForm from './peças_form.png'; // ✅ importação correta do arquivo local


// --- Icon Components (replaces react-icons) ---

const IconSchool = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-.07.002z" />
    </svg>
);

const IconUserGraduate = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);

const IconTrendingUp = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-.625m3.75.625V18" />
    </svg>
);

const IconArrowRight = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);


// --- Main Component ---

const SelectionSection = () => {
  const [formData, setFormData] = useState({
    institution: '',
    name: '',
    email: '',
    whatsapp: '',
    students: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Formulário enviado:', formData);
  };

  // Usando um link de placeholder para a imagem para resolver o erro de importação.

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24 px-4 overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Pré-título e Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Processo seletivo
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Chamada para Seleção
          </h2>
        </motion.div>

        {/* Copy principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-20"
        >
          <p className="text-white text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            O 5º Desafio não é para todas as instituições. É para escolas privadas
            que já têm estrutura, mas precisam alinhar estratégia, identidade e resultados.
          </p>
        </motion.div>

        {/* Container para imagem e formulário */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Imagem à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-2 lg:order-1 flex items-center justify-center"
          >
           <img src={pecasForm} alt="Peças do formulário do 5º Desafio" className="max-w-full h-auto" />
          </motion.div>

          {/* Formulário à direita */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-cyan-500/20 shadow-2xl">

              {/* Header do formulário simplificado */}
              <div className="mb-8">
                <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                  Preencha o formulário de aplicação e descubra se sua
                  escola está pronta para o 5º Desafio.
                </h3>
              </div>

              {/* Formulário */}
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    placeholder="Nome da Instituição"
                    className="w-full px-5 py-4 bg-slate-800/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  />
                  <IconSchool className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-500/50 w-6 h-6" />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu Nome Completo"
                    className="w-full px-5 py-4 bg-slate-800/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  />
                  <IconUserGraduate className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-500/50 w-6 h-6" />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E-mail Institucional"
                    className="w-full px-5 py-4 bg-slate-800/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="WhatsApp"
                    className="w-full px-5 py-4 bg-slate-800/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  />
                </div>

                <div className="relative">
                  <select
                    name="students"
                    value={formData.students}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-slate-800/50 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-slate-800">Número de Alunos</option>
                    <option value="100-500" className="bg-slate-800">100 - 500 alunos</option>
                    <option value="500-1000" className="bg-slate-800">500 - 1.000 alunos</option>
                    <option value="1000-2000" className="bg-slate-800">1.000 - 2.000 alunos</option>
                    <option value="2000+" className="bg-slate-800">Mais de 2.000 alunos</option>
                  </select>
                  <IconTrendingUp className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-500/50 pointer-events-none w-6 h-6" />
                </div>

                {/* Checkbox de concordância */}
             

                {/* CTA Button */}
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  onClick={handleSubmit}
  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 px-6 rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-xl shadow-cyan-500/25 relative overflow-hidden"
>
  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
  <span className="text-lg relative z-10">Aplicar minha escola agora</span>
  <IconArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
</motion.button>
              </div>

              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SelectionSection;

