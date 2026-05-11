import { Analytics } from "@vercel/analytics/react"

// Importacao das secoes do site
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import DiferenciaisSection from './components/DiferenciaisSection';
import AvaliacoesSection from './components/AvaliacoesSection';
import GaleriaSection from './components/GaleriaSection';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import PlanosSection from "./components/PlanosSection.jsx";

export default function BarbeariaLandingPage() {
  return (
    <div className="bg-zinc-950 min-h-screen selection:bg-amber-500 selection:text-zinc-950">
      <Navbar />
      <HeroSection />
      <DiferenciaisSection />
      <PlanosSection />
      <AvaliacoesSection />
      <GaleriaSection />
      <Footer />
      <FloatingButton />
      <Analytics/>
    </div>
  );
}