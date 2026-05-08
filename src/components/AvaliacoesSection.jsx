import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const AvaliacoesSection = () => {
  const avaliacaoModules = import.meta.glob('../assets/avaliacao*.png', { eager: true });
  const getOrderedAssets = (modules) => {
    return Object.keys(modules)
      .sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)[0]);
        const numB = parseInt(b.match(/\d+/)[0]);
        return numA - numB;
      })
      .map(key => modules[key].default);
  };
  const printsAvaliacoes = getOrderedAssets(avaliacaoModules);
  
  return (
    <section id="avaliacoes" className="relative py-24 bg-zinc-950">
      
      {/* === MANTEMOS O DIVISOR SOFISTICADO (DIFERENCIAIS -> AVALIAÇÕES) === */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-zinc-900 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title="O que nossos clientes dizem" 
          subtitle="Prova real da qualidade Brooklyn Street direto do Google."
        />
        
        {/* Nova Grid ajustada para os prints */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 items-start">
          {printsAvaliacoes.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-zinc-900 rounded-2xl border border-zinc-800 shadow-xl overflow-hidden hover:border-amber-500/50 hover:-translate-y-2 transition-all duration-300"
            >
              <img 
                src={img} 
                alt={`Avaliação Google ${idx + 1}`}
                loading="lazy" 
                className="w-full h-auto object-contain block p-2"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvaliacoesSection;