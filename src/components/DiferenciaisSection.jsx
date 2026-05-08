import { motion } from 'framer-motion';
import { Car, Clock, HeartHandshake, CheckCircle2 } from 'lucide-react';
import ambienteImage from '../assets/cadeira-vintage.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const DiferenciaisSection = () => (
  <section id="diferenciais" className="relative py-24 bg-zinc-900 text-white overflow-hidden">
    
    {/* === DIVISOR SOFISTICADO (INÍCIO -> DIFERENCIAIS) === */}
    <div className="absolute top-0 left-0 w-full flex justify-center items-center">
      {/* Linha base suave cruzando a tela toda */}
      <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-50"></div>
      
      {/* Feixe de luz dourado concentrado no centro com efeito de brilho (glow) */}
      <div className="absolute w-1/2 md:w-1/3 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_15px_rgba(245,158,11,0.6)]"></div>
      
      {/* Detalhe premium: Losango dourado centralizado */}
      <div className="absolute w-2 h-2 rotate-45 bg-zinc-950 border border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)] z-10"></div>
    </div>

    {/* Transição suave de fundo (opcional, para mesclar o topo) */}
    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-zinc-950 to-transparent pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
      
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <img src={ambienteImage} 
             alt="Ambiente da Barbearia"
             loading="lazy" 
             className="w-full h-[500px] object-cover rounded-2xl shadow-2xl border border-zinc-800" />
        <div className="absolute top-1/2 -left-4 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full"></div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Por que escolher a <span className="text-amber-500">Brooklyn Street</span>?</h2>
        <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
          Muito mais que um corte de cabelo, entregamos uma experiência completa focada no seu bem-estar e respeito ao seu tempo. Conheça nossos pilares:
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: Car, title: "Estacionamento", desc: "Comodidade e segurança para seu veículo." },
            { icon: Clock, title: "Pontualidade", desc: "Respeitamos seu tempo. Atendimento na hora exata." },
            { icon: HeartHandshake, title: "Ambiente Acolhedor", desc: "Espaço organizado e acolhedor para todos (LGBTQ+ friendly)." },
            { icon: CheckCircle2, title: "Serviço Premium", desc: "Equipamentos novos, alta habilidade e preço justo." }
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-colors shadow-inner">
              <item.icon className="w-8 h-8 text-amber-500 mb-3" />
              <h3 className="text-lg font-bold mb-1 text-zinc-100">{item.title}</h3>
              <p className="text-zinc-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);

export default DiferenciaisSection;