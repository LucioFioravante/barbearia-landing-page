import { MapPin, Clock, Phone } from 'lucide-react';
import fachadaImage from '../assets/fachada-neon.jpg';

const Footer = () => (
  <footer id="contato" className="bg-zinc-900 border-t border-zinc-800 pt-20 pb-8">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 mb-16">
        
        {/* Info */}
        <div className="flex flex-col gap-8">
          <img 
            src={fachadaImage} 
            alt="Fachada Brooklyn Street" 
            loading="lazy" 
            className="w-full max-w-[400px] h-48 object-cover rounded-2xl shadow-lg border border-zinc-800" 
          />
          
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-zinc-100 text-lg">Endereço</h4>
                <p className="text-zinc-400">Av. Mal. Mascarenhas de Moraes, 1000 - Atuba, Curitiba - PR, 82620-300 | Anexo ao Posto RodOil.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-zinc-100 text-lg">Horário</h4>
                <p className="text-zinc-400">Segunda à Sexta: 10:00 ao 12:00 | 14:00 às 20:00<br/>Sábado: 09:00 ao 12:00 | 13:30 às 17:00</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-zinc-100 text-lg">Contato</h4>
                <p className="text-zinc-400">(41) 3779-9927</p>
              </div>
            </li>
          </ul>
        </div>
        

        {/* Seção do Mapa */}
<div className="w-full h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative group">
  <iframe
    src="https://www.google.com/maps?q=Av.+Mal.+Mascarenhas+de+Moraes,+1000+-+Atuba,+Curitiba+-+PR&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }} /* Removi o filtro dark mode daqui */
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Localização Barbearia Brooklyn Street"
  ></iframe>
  
  {/* Botão Flutuante sobre o mapa */}
  <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
    <a 
      href="https://maps.app.goo.gl/KGXTqxq9tuXpcqk47"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-zinc-950 text-zinc-50 border border-zinc-800 py-3 rounded-lg font-bold hover:bg-amber-500 hover:text-zinc-950 transition-colors shadow-2xl"
    >
      <MapPin className="w-5 h-5" />
      Abrir no Google Maps / GPS
    </a>
  </div>
</div>
        
      </div>
      
      <div className="border-t border-zinc-800 pt-8 flex flex-col items-center">
        <p className="text-zinc-500 text-sm text-center">
          &copy; {new Date().getFullYear()} Barbearia Brooklyn Street • Curitiba - PR <br/>
          <span className="text-amber-500 uppercase tracking-widest text-xs mt-2 block font-bold">O SEU ESTILO EM BOAS MÃOS</span>
        </p>
        
        {/* --- ASSINATURA DO DESENVOLVEDOR --- */}
        <div className="mt-8 pt-4 w-full max-w-xs border-t border-zinc-800/50">
          <p className="text-zinc-600 text-xs flex items-center justify-center gap-1">
            Desenvolvido por 
            <a 
              href="https://instagram.com/lucio.fioravante" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-500/70 hover:text-amber-500 transition-colors font-medium flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Lucio Fioravante
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;