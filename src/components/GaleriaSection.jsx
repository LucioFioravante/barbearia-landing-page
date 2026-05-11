import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const GaleriaSection = () => {
  const galeriaModules = import.meta.glob('../assets/imagem*.jpg', { eager: true });
  const videoModules = import.meta.glob('../assets/video*.mp4', { eager: true });
  const getOrderedAssets = (modules) => {
    return Object.keys(modules)
      .sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)[0]);
        const numB = parseInt(b.match(/\d+/)[0]);
        return numA - numB;
      })
      .map(key => modules[key].default);
  };
  const galeriaFotos = getOrderedAssets(galeriaModules);
  const videos = getOrderedAssets(videoModules);

  const generateAlt = (index) => {
  const base = [
    "corte degradê masculino em Curitiba",
    "barbearia premium em Curitiba",
    "corte masculino moderno em Curitiba",
    "barbeiro profissional em Curitiba",
    "corte fade em Curitiba",
    "barba e cabelo masculino em Curitiba"
  ];

  return `${base[index % base.length]} - Brooklyn Street Barber`;
};
  
  return (
    <section id="galeria" className="relative py-24 bg-zinc-900">
      {/* === EFEITO DEGRADÊ NA DIVISA === */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-zinc-950 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title="Galeria Brooklyn Street" 
          subtitle="Confere um pouco do nosso dia a dia, o ambiente e os cortes de respeito que saem da nossa barbearia."
        />

        {/* Grid estilo Masonry (Pinterest) */}
        <div className="mt-16 columns-3 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          
          {galeriaFotos.map((img, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.15 }}
              className="relative group overflow-hidden break-inside-avoid shadow-lg rounded-xl border border-zinc-800 bg-zinc-950"
            >
              <img 
                src={img} 
                alt={generateAlt(idx)}
                loading="lazy" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
          
          {videos.map((video, idx) => (
            <motion.div 
              key={`video-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
              className="relative group overflow-hidden break-inside-avoid shadow-lg rounded-xl border border-zinc-800 bg-zinc-950"
            >
              <video 
                src={video}
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-zinc-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaleriaSection;