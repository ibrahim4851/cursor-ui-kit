import { Settings, FileText, Box, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

// Random Clean İllüstrasyon - Floating shapes
const RandomCleanIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Floating rectangles */}
    <div className="absolute w-24 h-14 rounded-xl bg-white/[0.08] border border-white/[0.12] backdrop-blur-sm animate-float-slow" style={{ top: '20%', left: '25%' }} />
    <div className="absolute w-20 h-12 rounded-xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm animate-float-medium" style={{ top: '35%', left: '45%' }} />
    <div className="absolute w-16 h-10 rounded-lg bg-white/[0.05] border border-white/[0.08] animate-float-fast" style={{ top: '55%', left: '30%' }} />
    
    {/* Floating circles with colors */}
    <div className="absolute w-8 h-8 rounded-full bg-purple-500/30 blur-sm animate-float-medium" style={{ top: '25%', right: '30%' }} />
    <div className="absolute w-10 h-10 rounded-full bg-pink-500/25 blur-sm animate-float-slow" style={{ bottom: '30%', left: '35%' }} />
    <div className="absolute w-6 h-6 rounded-full bg-teal-500/30 blur-sm animate-float-fast" style={{ bottom: '25%', right: '35%' }} />
    <div className="absolute w-5 h-5 rounded-full bg-amber-500/25 blur-sm animate-float-medium" style={{ top: '45%', left: '25%' }} />
    
    {/* Subtle glow behind */}
    <div className="absolute w-32 h-32 rounded-full bg-purple-500/10 blur-3xl" />
  </div>
);

// Screenshots İllüstrasyon - Stacked glass screens
const ScreenshotsIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Back screen */}
    <div 
      className="absolute w-40 h-28 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-400/20 backdrop-blur-sm"
      style={{ transform: 'rotate(-8deg) translateX(-15px) translateY(-10px)' }}
    >
      <div className="absolute top-3 left-3 right-3 h-2 rounded-full bg-white/10" />
      <div className="absolute top-7 left-3 w-16 h-1.5 rounded-full bg-white/8" />
    </div>
    
    {/* Middle screen */}
    <div 
      className="absolute w-44 h-32 rounded-2xl bg-gradient-to-br from-blue-400/25 to-cyan-500/15 border border-blue-300/25 backdrop-blur-md"
      style={{ transform: 'rotate(-3deg) translateX(5px)' }}
    >
      <div className="absolute top-4 left-4 right-4 h-2.5 rounded-full bg-white/15" />
      <div className="absolute top-9 left-4 w-20 h-2 rounded-full bg-white/10" />
      <div className="absolute top-13 left-4 w-14 h-2 rounded-full bg-white/8" />
      {/* Glow spot */}
      <div className="absolute bottom-4 left-6 w-12 h-12 rounded-full bg-cyan-400/20 blur-xl" />
    </div>
    
    {/* Front screen */}
    <div 
      className="absolute w-48 h-36 rounded-2xl bg-gradient-to-br from-blue-300/30 to-sky-400/20 border border-blue-200/30 backdrop-blur-lg shadow-2xl"
      style={{ transform: 'rotate(4deg) translateX(20px) translateY(15px)' }}
    >
      <div className="absolute top-4 left-4 right-4 h-3 rounded-full bg-white/20" />
      <div className="absolute top-10 left-4 w-24 h-2 rounded-full bg-white/15" />
      <div className="absolute top-14 left-4 w-16 h-2 rounded-full bg-white/10" />
      <div className="absolute top-18 left-4 w-20 h-2 rounded-full bg-white/8" />
    </div>
    
    {/* Ambient glow */}
    <div className="absolute w-40 h-40 rounded-full bg-blue-500/15 blur-3xl -z-10" />
  </div>
);

// Smart Clean İllüstrasyon - Magic wand with sparkles
const SmartCleanIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Glow effects */}
    <div className="absolute w-24 h-24 rounded-full bg-purple-500/30 blur-3xl" style={{ top: '15%', left: '20%' }} />
    <div className="absolute w-20 h-20 rounded-full bg-pink-500/25 blur-2xl" style={{ bottom: '20%', right: '25%' }} />
    
    {/* Magic wand */}
    <div 
      className="absolute w-4 h-36 rounded-full bg-gradient-to-b from-purple-400 via-fuchsia-400 to-pink-400 shadow-lg animate-wand-glow"
      style={{ transform: 'rotate(-35deg)', transformOrigin: 'center' }}
    >
      {/* Wand tip */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
      {/* Wand base */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-pink-300 to-fuchsia-400 opacity-50 blur-sm" />
    </div>
    
    {/* Sparkles */}
    <div className="absolute w-2 h-2 bg-white rounded-full animate-sparkle-1 shadow-[0_0_10px_rgba(255,255,255,0.8)]" style={{ top: '20%', left: '40%' }} />
    <div className="absolute w-1.5 h-1.5 bg-white rounded-full animate-sparkle-2 shadow-[0_0_8px_rgba(255,255,255,0.7)]" style={{ top: '30%', right: '35%' }} />
    <div className="absolute w-2.5 h-2.5 bg-white rounded-full animate-sparkle-3 shadow-[0_0_12px_rgba(255,255,255,0.9)]" style={{ top: '15%', right: '40%' }} />
    
    {/* Star sparkle */}
    <svg className="absolute w-5 h-5 text-white animate-sparkle-1" style={{ top: '18%', left: '48%' }} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L13.5 9L24 12L13.5 15L12 24L10.5 15L0 12L10.5 9L12 0Z" />
    </svg>
  </div>
);

// Daha Fazla Mod İllüstrasyon - Folder/document stack
const MoreModesIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Back folder */}
    <div 
      className="absolute w-36 h-24 rounded-xl bg-white/[0.04] border border-white/[0.08]"
      style={{ transform: 'translateY(-20px)' }}
    >
      {/* Folder tab */}
      <div className="absolute -top-3 left-4 w-14 h-4 rounded-t-lg bg-white/[0.06] border-t border-l border-r border-white/[0.1]" />
    </div>
    
    {/* Middle document */}
    <div 
      className="absolute w-40 h-28 rounded-xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm"
      style={{ transform: 'translateY(-5px)' }}
    >
      {/* Document lines */}
      <div className="absolute top-5 left-4 right-4 h-2 rounded-full bg-white/[0.08]" />
      <div className="absolute top-9 left-4 w-20 h-1.5 rounded-full bg-white/[0.06]" />
      <div className="absolute top-13 left-4 w-24 h-1.5 rounded-full bg-white/[0.05]" />
    </div>
    
    {/* Front folder */}
    <div 
      className="absolute w-44 h-32 rounded-xl bg-white/[0.08] border border-white/[0.12] backdrop-blur-md"
      style={{ transform: 'translateY(15px)' }}
    >
      {/* Folder tab */}
      <div className="absolute -top-4 left-5 w-16 h-5 rounded-t-lg bg-white/[0.1] border-t border-l border-r border-white/[0.15]" />
      {/* Inner lines */}
      <div className="absolute top-6 left-5 right-5 h-2.5 rounded-full bg-white/[0.1]" />
      <div className="absolute top-11 left-5 w-16 h-2 rounded-full bg-white/[0.08]" />
      <div className="absolute top-15 left-5 w-24 h-2 rounded-full bg-white/[0.06]" />
    </div>
    
    {/* Subtle glow */}
    <div className="absolute w-32 h-32 rounded-full bg-emerald-500/10 blur-3xl -z-10" />
  </div>
);

interface CardData {
  id: string;
  title: string;
  description: string;
  illustration: React.ReactNode;
  route: string;
  buttonText: string;
}

const cards: CardData[] = [
  {
    id: 'random',
    title: 'Random Clean',
    description: 'Kütüphanenden karışık seçilen içeriklerle hızlı bir temizlik oturumu.',
    illustration: <RandomCleanIllustration />,
    route: '/smart-clean',
    buttonText: 'Temizle'
  },
  {
    id: 'screenshots',
    title: 'Ekran Görüntüleri',
    description: 'Eski screenshot\'ları, makbuzları ve tek seferlik görselleri dakikalar içinde temizle.',
    illustration: <ScreenshotsIllustration />,
    route: '/smart-clean',
    buttonText: 'Temizle'
  },
  {
    id: 'smart',
    title: 'Smart Clean',
    description: 'AI destekli akıllı temizlik — en iyi sil/koru kararların için hızlı bir akış.',
    illustration: <SmartCleanIllustration />,
    route: '/smart-clean',
    buttonText: 'Temizle'
  },
  {
    id: 'more',
    title: 'Daha Fazla Mod',
    description: 'Gelişmiş araçlar — odaklı bir temizliğe direkt geç.',
    illustration: <MoreModesIllustration />,
    route: '/smart-clean',
    buttonText: 'Modlara göz at'
  }
];

const MainScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const cardWidth = containerRef.current.offsetWidth * 0.85;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(newIndex, cards.length - 1));
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] pb-safe relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[50%] bg-purple-600/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[50%] h-[40%] bg-pink-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 pt-safe h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500" />
            <span className="text-lg font-bold text-white">Cleaner</span>
          </div>
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl">
              <div className="w-5 h-4 flex items-end justify-center gap-0.5">
                <div className="w-1 h-2 bg-white/40 rounded-full" />
                <div className="w-1 h-3 bg-white/40 rounded-full" />
                <div className="w-1 h-4 bg-white/40 rounded-full" />
              </div>
            </div>
            <Link to="/settings">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl">
                <Settings className="w-[18px] h-[18px] text-white/60" />
              </div>
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <div className="flex-1 flex flex-col">
          <div 
            ref={containerRef}
            onScroll={handleScroll}
            className="flex-1 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-5 gap-4 py-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {cards.map((card, index) => (
              <div 
                key={card.id}
                className="flex-shrink-0 w-[85%] snap-center"
              >
                <div className="h-full rounded-[32px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl p-6 flex flex-col">
                  {/* Title */}
                  <h2 className="text-[28px] font-bold text-white mb-6">{card.title}</h2>
                  
                  {/* Illustration Container */}
                  <div className="flex-1 relative rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden mb-6">
                    {card.illustration}
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/60 text-base leading-relaxed mb-6">{card.description}</p>
                  
                  {/* Additional content for "More Modes" */}
                  {card.id === 'more' && (
                    <div className="mb-6 rounded-2xl bg-white/[0.04] border border-white/[0.06] p-4">
                      <p className="text-white/80 font-medium mb-3">Gelişmiş</p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center">
                            <FileText className="w-5 h-5 text-white/60" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white/90 text-sm font-medium">Belgeler</p>
                            <p className="text-white/40 text-xs">PDF ve belge benzeri fotoğr...</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/30" />
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center">
                            <Box className="w-5 h-5 text-white/60" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white/90 text-sm font-medium">Objeler</p>
                            <p className="text-white/40 text-xs">İçeriğe göre filtrele</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/30" />
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-white/60" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white/90 text-sm font-medium">Random Clean</p>
                            <p className="text-white/40 text-xs">Hızlı karışık oturum</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/30" />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Button */}
                  <button 
                    onClick={() => navigate(card.route)}
                    className="w-full py-4 rounded-2xl bg-white text-black font-semibold text-base hover:bg-white/90 transition-colors"
                  >
                    {card.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Page Indicator */}
          <div className="flex justify-center gap-2 pb-8">
            {cards.map((_, index) => (
              <div 
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-2deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        
        @keyframes sparkle-1 {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes sparkle-2 {
          0%, 100% { opacity: 0; transform: scale(0.3); }
          33% { opacity: 1; transform: scale(1); }
          66% { opacity: 0.5; transform: scale(0.8); }
        }
        
        @keyframes sparkle-3 {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        
        @keyframes wand-glow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.5)); }
          50% { filter: drop-shadow(0 0 20px rgba(217, 70, 239, 0.7)); }
        }
        
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 3s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 2s ease-in-out infinite; }
        .animate-sparkle-1 { animation: sparkle-1 2s ease-in-out infinite; }
        .animate-sparkle-2 { animation: sparkle-2 2.5s ease-in-out infinite 0.3s; }
        .animate-sparkle-3 { animation: sparkle-3 1.8s ease-in-out infinite 0.6s; }
        .animate-wand-glow { animation: wand-glow 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default MainScreen;
