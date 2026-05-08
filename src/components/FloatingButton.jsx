import { motion } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';

const agendamentoLink = "https://sites.appbarber.com.br/BarbeariaBrooklynStreet";

const FloatingButton = () => (
  <motion.a
    href={agendamentoLink}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-amber-500 text-zinc-950 rounded-full shadow-2xl group"
  >
    {/* Pulso Customizado */}
    <motion.span 
      animate={{ 
        scale: [1, 1.8], 
        opacity: [0.5, 0] 
      }}
      transition={{
        duration: 2.0,      
        repeat: Infinity,   
        repeatDelay: 1,     
        ease: "easeOut"
      }}
      className="absolute inset-0 rounded-full bg-amber-500"
    />
    <CalendarCheck className="w-8 h-8 relative z-10" />
  </motion.a>
);

export default FloatingButton;
