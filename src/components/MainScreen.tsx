import { Settings, FileText, Box, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

// Random Clean İllüstrasyon - Shuffling cards/photos
const RandomCleanIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    {/* Shuffling photo cards */}
    
    {/* Card 1 - Photo with landscape */}
    <div 
      className="absolute w-20 h-24 rounded-xl bg-gradient-to-br from-emerald-500/40 to-teal-600/30 border border-white/10 shadow-xl animate-shuffle-1"
      style={{ transformOrigin: 'center bottom' }}
    >
      <div className="absolute inset-1 rounded-lg bg-gradient-to-br from-emerald-400/20 to-transparent" />
      <div className="absolute bottom-2 left-2 right-2 h-4 rounded bg-white/10" />
    </div>
    
    {/* Card 2 - Screenshot style */}
    <div 
      className="absolute w-20 h-24 rounded-xl bg-gradient-to-br from-blue-500/40 to-indigo-600/30 border border-white/10 shadow-xl animate-shuffle-2"
      style={{ transformOrigin: 'center bottom' }}
    >
      <div className="absolute top-2 left-2 right-2 h-2 rounded-full bg-white/15" />
      <div className="absolute top-5 left-2 w-10 h-1.5 rounded-full bg-white/10" />
      <div className="absolute top-8 left-2 w-8 h-1.5 rounded-full bg-white/8" />
    </div>
    
    {/* Card 3 - Video thumbnail */}
    <div 
      className="absolute w-20 h-24 rounded-xl bg-gradient-to-br from-purple-500/40 to-pink-600/30 border border-white/10 shadow-xl animate-shuffle-3"
      style={{ transformOrigin: 'center bottom' }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <div className="w-0 h-0 border-l-[8px] border-l-white/60 border-y-[5px] border-y-transparent ml-1" />
        </div>
      </div>
    </div>
    
    {/* Card 4 - Document */}
    <div 
      className="absolute w-20 h-24 rounded-xl bg-gradient-to-br from-amber-500/40 to-orange-600/30 border border-white/10 shadow-xl animate-shuffle-4"
      style={{ transformOrigin: 'center bottom' }}
    >
      <div className="absolute top-3 left-3 right-3 space-y-1.5">
        <div className="h-1.5 rounded-full bg-white/15" />
        <div className="h-1.5 rounded-full bg-white/12 w-3/4" />
        <div className="h-1.5 rounded-full bg-white/10 w-1/2" />
      </div>
    </div>
    
    {/* Shuffle icon in center */}
    <div className="absolute w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center z-10 animate-pulse-slow">
      <svg className="w-6 h-6 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    
    {/* Ambient glow */}
    <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-purple-500/15 to-pink-500/10 blur-3xl -z-10" />
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

// Smart Clean İllüstrasyon - Photos with magic effects
const SmartCleanIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute w-32 h-32 rounded-full bg-purple-500/25 blur-3xl" style={{ top: '10%', left: '15%' }} />
    <div className="absolute w-28 h-28 rounded-full bg-pink-500/20 blur-2xl" style={{ bottom: '15%', right: '20%' }} />
    
    {/* Photo 1 - Getting magic effect (left) */}
    <div 
      className="absolute w-16 h-20 rounded-xl overflow-hidden animate-photo-magic-1"
      style={{ left: '15%', top: '25%' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-rose-400/40 to-pink-500/30 border border-white/15" />
      <div className="absolute inset-1 rounded-lg bg-gradient-to-br from-white/10 to-transparent" />
      {/* Magic glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/40 to-fuchsia-400/20 animate-magic-glow" />
      {/* Sparkle on photo */}
      <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full animate-sparkle-1 shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
    </div>
    
    {/* Photo 2 - Center, larger with prominent magic */}
    <div 
      className="absolute w-20 h-24 rounded-xl overflow-hidden z-10 animate-photo-magic-2"
      style={{ left: '35%', top: '30%' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-400/50 to-purple-600/40 border border-purple-300/20" />
      <div className="absolute inset-1 rounded-lg bg-gradient-to-br from-white/15 to-transparent" />
      {/* Check mark - approved */}
      <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-emerald-500/80 flex items-center justify-center animate-check-appear">
        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {/* Magic particles */}
      <div className="absolute top-0 left-2 w-1.5 h-1.5 bg-fuchsia-300 rounded-full animate-particle-up-1" />
      <div className="absolute top-2 right-3 w-1 h-1 bg-purple-200 rounded-full animate-particle-up-2" />
    </div>
    
    {/* Photo 3 - Right side, being evaluated */}
    <div 
      className="absolute w-14 h-18 rounded-xl overflow-hidden animate-photo-magic-3"
      style={{ right: '18%', top: '35%' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/35 to-indigo-500/25 border border-white/10" />
      <div className="absolute inset-1 rounded-lg bg-gradient-to-br from-white/8 to-transparent" />
      {/* X mark - to delete */}
      <div className="absolute bottom-1.5 right-1.5 w-4 h-4 rounded-full bg-red-500/70 flex items-center justify-center animate-x-appear">
        <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
    
    {/* Magic wand - smaller, positioned to touch photos */}
    <div 
      className="absolute w-2.5 h-24 rounded-full bg-gradient-to-b from-purple-300 via-fuchsia-400 to-pink-500 shadow-lg animate-wand-move z-20"
      style={{ right: '30%', top: '15%', transformOrigin: 'bottom center' }}
    >
      {/* Wand tip with glow */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.9),0_0_30px_rgba(217,70,239,0.6)]" />
    </div>
    
    {/* Floating sparkles around */}
    <svg className="absolute w-4 h-4 text-white animate-sparkle-1 z-20" style={{ top: '20%', left: '45%' }} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L13.5 9L24 12L13.5 15L12 24L10.5 15L0 12L10.5 9L12 0Z" />
    </svg>
    <div className="absolute w-2 h-2 bg-fuchsia-300 rounded-full animate-sparkle-2 shadow-[0_0_10px_rgba(217,70,239,0.8)]" style={{ top: '25%', right: '25%' }} />
    <div className="absolute w-1.5 h-1.5 bg-purple-200 rounded-full animate-sparkle-3 shadow-[0_0_8px_rgba(168,85,247,0.7)]" style={{ bottom: '30%', left: '30%' }} />
    <svg className="absolute w-3 h-3 text-pink-200 animate-sparkle-2 z-20" style={{ top: '45%', left: '25%' }} viewBox="0 0 24 24" fill="currentColor">
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
        
        @keyframes shuffle-1 {
          0%, 100% { transform: rotate(-15deg) translateX(-30px) translateY(5px); z-index: 1; }
          25% { transform: rotate(-5deg) translateX(-10px) translateY(-20px); z-index: 4; }
          50% { transform: rotate(10deg) translateX(25px) translateY(0px); z-index: 2; }
          75% { transform: rotate(-8deg) translateX(-5px) translateY(10px); z-index: 3; }
        }
        
        @keyframes shuffle-2 {
          0%, 100% { transform: rotate(10deg) translateX(25px) translateY(-5px); z-index: 2; }
          25% { transform: rotate(-12deg) translateX(-25px) translateY(5px); z-index: 1; }
          50% { transform: rotate(-5deg) translateX(-15px) translateY(-15px); z-index: 4; }
          75% { transform: rotate(15deg) translateX(30px) translateY(0px); z-index: 2; }
        }
        
        @keyframes shuffle-3 {
          0%, 100% { transform: rotate(-5deg) translateX(-10px) translateY(-20px); z-index: 4; }
          25% { transform: rotate(12deg) translateX(20px) translateY(5px); z-index: 2; }
          50% { transform: rotate(-15deg) translateX(-25px) translateY(10px); z-index: 1; }
          75% { transform: rotate(5deg) translateX(10px) translateY(-10px); z-index: 3; }
        }
        
        @keyframes shuffle-4 {
          0%, 100% { transform: rotate(8deg) translateX(15px) translateY(10px); z-index: 3; }
          25% { transform: rotate(-10deg) translateX(-20px) translateY(-10px); z-index: 3; }
          50% { transform: rotate(5deg) translateX(5px) translateY(15px); z-index: 3; }
          75% { transform: rotate(-15deg) translateX(-30px) translateY(-5px); z-index: 1; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
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
        
        @keyframes wand-move {
          0%, 100% { transform: rotate(-30deg) translateY(0); }
          25% { transform: rotate(-35deg) translateY(-5px); }
          50% { transform: rotate(-25deg) translateY(3px); }
          75% { transform: rotate(-32deg) translateY(-2px); }
        }
        
        @keyframes photo-magic-1 {
          0%, 100% { transform: scale(1) rotate(-5deg); opacity: 0.9; }
          50% { transform: scale(1.05) rotate(-3deg); opacity: 1; }
        }
        
        @keyframes photo-magic-2 {
          0%, 100% { transform: scale(1) rotate(3deg); }
          50% { transform: scale(1.08) rotate(5deg); }
        }
        
        @keyframes photo-magic-3 {
          0%, 100% { transform: scale(1) rotate(5deg); opacity: 0.85; }
          50% { transform: scale(1.03) rotate(7deg); opacity: 1; }
        }
        
        @keyframes magic-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        
        @keyframes check-appear {
          0%, 30% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes x-appear {
          0%, 50% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes particle-up-1 {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-20px) scale(0); opacity: 0; }
        }
        
        @keyframes particle-up-2 {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-15px) scale(0); opacity: 0; }
        }
        
        .animate-shuffle-1 { animation: shuffle-1 4s ease-in-out infinite; }
        .animate-shuffle-2 { animation: shuffle-2 4s ease-in-out infinite 0.5s; }
        .animate-shuffle-3 { animation: shuffle-3 4s ease-in-out infinite 1s; }
        .animate-shuffle-4 { animation: shuffle-4 4s ease-in-out infinite 1.5s; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-sparkle-1 { animation: sparkle-1 2s ease-in-out infinite; }
        .animate-sparkle-2 { animation: sparkle-2 2.5s ease-in-out infinite 0.3s; }
        .animate-sparkle-3 { animation: sparkle-3 1.8s ease-in-out infinite 0.6s; }
        .animate-wand-glow { animation: wand-glow 2s ease-in-out infinite; }
        .animate-wand-move { animation: wand-move 3s ease-in-out infinite, wand-glow 2s ease-in-out infinite; }
        .animate-photo-magic-1 { animation: photo-magic-1 3s ease-in-out infinite; }
        .animate-photo-magic-2 { animation: photo-magic-2 3s ease-in-out infinite 0.5s; }
        .animate-photo-magic-3 { animation: photo-magic-3 3s ease-in-out infinite 1s; }
        .animate-magic-glow { animation: magic-glow 2s ease-in-out infinite; }
        .animate-check-appear { animation: check-appear 3s ease-in-out infinite; }
        .animate-x-appear { animation: x-appear 3s ease-in-out infinite; }
        .animate-particle-up-1 { animation: particle-up-1 2s ease-out infinite; }
        .animate-particle-up-2 { animation: particle-up-2 2s ease-out infinite 0.3s; }
      `}</style>
    </div>
  );
};

export default MainScreen;
