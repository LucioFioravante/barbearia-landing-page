import { motion } from 'framer-motion';
import { CheckCircle2, CreditCard, CalendarDays, Scissors, Tag, Star } from 'lucide-react';
import SectionTitle from './SectionTitle';
import CustomCTA from './CustomCTA';

const PlanosSection = () => {
  return (
    <section id="planos" className="relative py-24 bg-zinc-950 overflow-hidden">

      {/* === EFEITO DEGRADÊ NA DIVISA (DIFERENCIAIS -> PLANOS) === */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-zinc-900 to-transparent pointer-events-none z-0"></div>

      {/* Efeito de luz de fundo central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      {/* Efeito de luz de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <SectionTitle 
          title="Clube de Assinatura" 
          subtitle="A PRIMEIRA BARBEARIA POR ASSINATURA DO TINGUI"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden"
        >
          {/* Brilho sutil no topo do card */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>

          <h3 className="text-2xl md:text-3xl font-bold text-zinc-50 mb-6 leading-tight">
            Seu visual sempre alinhado com muito mais <span className="text-amber-500">praticidade e economia.</span>
          </h3>
          
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-500 px-6 py-3 rounded-full text-lg md:text-xl font-bold mb-10 shadow-inner">
            <CreditCard className="w-6 h-6" />
            Planos a partir de R$ 75,90/mês
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left mb-10">
            {/* Bloco 1: Planos */}
            <div className="bg-zinc-950/60 p-6 rounded-2xl border border-zinc-800/50 hover:border-amber-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <Scissors className="w-6 h-6 text-amber-500" />
                <h4 className="text-xl font-bold text-zinc-100 uppercase tracking-wide text-sm">Planos Para:</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-zinc-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /> Cabelo
                </li>
                <li className="flex items-center gap-3 text-zinc-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /> Barba
                </li>
                <li className="flex items-center gap-3 text-zinc-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /> Cabelo & Barba
                </li>
              </ul>
            </div>

            {/* Bloco 2: Benefícios */}
            <div className="bg-zinc-950/60 p-6 rounded-2xl border border-zinc-800/50 hover:border-amber-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <Star className="w-6 h-6 text-amber-500 fill-amber-500/20" />
                <h4 className="text-xl font-bold text-zinc-100 uppercase tracking-wide text-sm">Benefícios Exclusivos:</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-zinc-300">
                  <Tag className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> 
                  <span>10% OFF em <strong className="text-zinc-100">serviços extras</strong></span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <Tag className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> 
                  <span>10% OFF em <strong className="text-zinc-100">produtos</strong> da barbearia</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <Tag className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" /> 
                  <span>Descontos em <strong className="text-zinc-100">empresas parceiras</strong></span>
                </li>
              </ul>
            </div>
          </div>

          {/* Regras / Info Adicional */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-zinc-400 text-sm mb-10 bg-zinc-950/40 py-5 px-6 rounded-xl border border-zinc-800/40">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-amber-500" />
              <span>Válidos de <strong>Segunda à Quinta-feira</strong></span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-zinc-700 rounded-full"></div>
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-amber-500" />
              <span>Cobrança <strong>automática no cartão</strong></span>
            </div>
          </div>

          <h4 className="text-xl font-bold text-zinc-50 mb-3">MAIS QUE UM CORTE, UMA EXPERIÊNCIA!</h4>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto text-lg">
            Economize todos os meses, mantenha o visual sempre alinhado e aproveite vantagens exclusivas para assinantes.
          </p>

          <CustomCTA className="w-full md:w-auto px-12 py-4">
            Quero Ser Assinante
          </CustomCTA>

        </motion.div>
      </div>
    </section>
  );
};

export default PlanosSection;