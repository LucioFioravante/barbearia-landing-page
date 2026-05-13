import { motion } from 'framer-motion';
import { Star, CalendarCheck } from 'lucide-react';
import heroImage from '../assets/barbeiro-1.jpg';
import CustomCTA from './CustomCTA';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const HeroSection = () => (
  <section id="home" className="relative pt-32 pb-20 bg-zinc-950 overflow-hidden min-h-screen flex items-center">
    {/* Brilho de fundo */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-900/10 blur-[120px] rounded-full"></div>
    
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10 w-full">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="md:col-span-7 lg:col-span-6"
      >
        <div className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800/50 w-fit py-1.5 px-4 rounded-full mb-6 backdrop-blur-sm">
          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span className="text-sm font-semibold text-zinc-300">4,8 estrelas no Google (97 avaliações)</span>
        </div>
        
        <h1 className="font-sans text-5xl md:text-6xl font-extrabold text-zinc-50 leading-[1.1] tracking-tight">
          Barbearia Premium em Curitiba | Brooklyn  <span className="text-amber-500">Street </span>
        </h1>
        <p className="text-zinc-400 text-xl mt-6 max-w-xl font-light">
          Serviço de primeira qualidade em Curitiba. Profissionais habilidosos, ambiente organizado e a pontualidade que o seu dia a dia exige.
        </p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10"
        >
          <CustomCTA>
            <CalendarCheck className="w-6 h-6" />
            Reservar horário
          </CustomCTA>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:col-span-5 lg:col-span-6"
      >
        <div className="relative aspect-[3/4] md:aspect-[4/5] w-full max-w-md mx-auto border border-zinc-800 rounded-2xl p-2 bg-zinc-900/50">
        
          <img 
            src={heroImage} 
            alt="barbeiro realizando corte degradê em barbearia premium em Curitiba"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="w-full h-full block object-cover rounded-xl" 
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;