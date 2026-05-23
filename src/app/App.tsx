import { Hero } from "./components/Hero";
import { EbooksSection } from "./components/EbooksSection";
import { Benefits } from "./components/Benefits";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <EbooksSection />
      <Benefits />
      <FinalCTA />
      <Footer />
    </div>
  );
}