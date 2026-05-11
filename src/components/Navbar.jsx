import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';
import logo from '../assets/logo.png';
import CustomCTA from './CustomCTA';

const agendamentoLink = "https://sites.appbarber.com.br/BarbeariaBrooklynStreet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", id: "home" },
    { name: "Diferenciais", id: "diferenciais" },
    { name: "Assinatura", id: "planos" },
    { name: "Galeria", id: "galeria" },
    { name: "Localização", id: "contato" },
  ];

  // Função Senior para controlar o scroll perfeitamente
  const handleScroll = (e, targetId) => {
    e.preventDefault(); 
    setIsOpen(false); 

    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = 80; 
      const elementPosition = targetElement.getBoundingClientRect().top;
      const targetPosition = elementPosition + window.scrollY - headerOffset;

      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      
      const duration = 800; 
      let start = null;

      const easeOutExpo = (t, b, c, d) => {
        return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
      };

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        
        const run = easeOutExpo(timeElapsed, startPosition, distance, duration);
        
        window.scrollTo(0, run);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          window.scrollTo(0, targetPosition);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-950/95 backdrop-blur-sm z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* === LOGO E NOME AQUI === */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={(e) => handleScroll(e, 'home')}
        >
          <img 
            src={logo} 
            alt="Logo Brooklyn Street" 
            className="h-12 w-auto object-contain rounded-full transition-transform duration-300 group-hover:scale-105" 
          />
          <span className="font-bold text-xl md:text-2xl text-zinc-50 tracking-tight">
            Brooklyn <span className="text-amber-500">Street</span>
          </span>
        </div>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-8 font-medium text-zinc-300">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={(e) => handleScroll(e, link.id)}
              className="hover:text-amber-500 transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <a 
            href={agendamentoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold py-2.5 px-6 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <CalendarCheck className="w-5 h-5" />
            Agendar
          </a>
        </div>

        {/* Botão Hambúrguer Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-amber-500 p-2 focus:outline-none"
        >
          <div className="space-y-1.5">
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-8 h-0.5 bg-amber-500"
            ></motion.span>
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-8 h-0.5 bg-amber-500"
            ></motion.span>
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-8 h-0.5 bg-amber-500"
            ></motion.span>
          </div>
        </button>
      </div>

      {/* Menu Dropdown Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={(e) => handleScroll(e, link.id)}
                  className="text-left text-zinc-300 text-xl font-medium hover:text-amber-500 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <CustomCTA className="w-full">
                <CalendarCheck className="w-5 h-5" />
                Agendar Agora
              </CustomCTA>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;