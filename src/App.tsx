import { Hero } from './components/Hero';
import { IntegrationDiagram } from './components/IntegrationDiagram';
import { FeatureGrid } from './components/FeatureGrid';
import { DeveloperAPI } from './components/DeveloperAPI';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2B2220] overflow-x-hidden relative">
      {/* Film grain texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* Sunset gradient stripes - top */}
      <div className="fixed top-0 left-0 right-0 h-3 z-40 flex">
        <div className="flex-1 bg-[#FFC857]" />
        <div className="flex-1 bg-[#E97F25]" />
        <div className="flex-1 bg-[#C83E36]" />
      </div>
      
      <div className="relative">
        <Hero />
        <IntegrationDiagram />
        <FeatureGrid />
        <DeveloperAPI />
        <Footer />
      </div>
    </div>
  );
}