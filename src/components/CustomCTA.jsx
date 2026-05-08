const agendamentoLink = "https://sites.appbarber.com.br/BarbeariaBrooklynStreet";

const CustomCTA = ({ children, className = "", href = agendamentoLink }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 text-zinc-950 font-bold rounded-lg hover:bg-amber-400 transition-all duration-300 text-lg shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:-translate-y-1 ${className}`}
  >
    {children}
  </a>
);

export default CustomCTA;