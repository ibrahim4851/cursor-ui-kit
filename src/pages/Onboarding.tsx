import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Page 1: Benzer fotoğraflar, ekran görüntüleri temizleniyor
const OnboardingPage1 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 animate-fade-in">
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-72 h-80">
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl" />
          
          {/* Benzer fotoğraflar grubu - solda */}
          <div className="absolute left-0 top-8 flex flex-col gap-1">
            <div className="photo-card w-16 h-20 rounded-lg bg-gradient-to-br from-blue-400/30 to-blue-600/30 border border-white/20 animate-similar-1 flex items-center justify-center overflow-hidden">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400/60 to-yellow-500/60" />
            </div>
            <div className="photo-card w-16 h-20 rounded-lg bg-gradient-to-br from-blue-400/30 to-blue-600/30 border border-white/20 animate-similar-2 flex items-center justify-center overflow-hidden">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400/60 to-yellow-500/60" />
            </div>
            <div className="photo-card w-16 h-20 rounded-lg bg-gradient-to-br from-blue-400/30 to-blue-600/30 border border-white/20 animate-similar-3 flex items-center justify-center overflow-hidden">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400/60 to-yellow-500/60" />
            </div>
            {/* Temizleniyor efekti */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-8 h-8 rounded-full bg-green-500/40 animate-clean-pulse flex items-center justify-center">
                <span className="text-white text-lg">✓</span>
              </div>
            </div>
          </div>
          
          {/* Ekran görüntüsü - ortada */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4">
            <div className="w-20 h-28 rounded-xl bg-gradient-to-br from-gray-700/50 to-gray-900/50 border border-white/20 animate-screenshot-fade overflow-hidden">
              {/* Status bar */}
              <div className="h-3 bg-white/10 flex items-center px-1 gap-0.5">
                <div className="w-1 h-1 rounded-full bg-white/40" />
                <div className="w-1 h-1 rounded-full bg-white/40" />
                <div className="w-1 h-1 rounded-full bg-white/40" />
              </div>
              {/* Content */}
              <div className="p-1.5 space-y-1">
                <div className="h-1.5 bg-white/20 rounded" />
                <div className="h-1.5 bg-white/15 rounded w-3/4" />
                <div className="h-6 bg-white/10 rounded mt-2" />
                <div className="h-1.5 bg-white/15 rounded w-1/2" />
              </div>
              {/* Siliniyor X işareti */}
              <div className="absolute inset-0 flex items-center justify-center bg-red-500/20 animate-screenshot-x">
                <span className="text-2xl text-red-400">✕</span>
              </div>
            </div>
          </div>
          
          {/* Gereksiz/bulanık fotoğraflar - sağda */}
          <div className="absolute right-0 top-12">
            <div className="w-18 h-24 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 animate-blur-fade overflow-hidden backdrop-blur-sm">
              {/* Bulanık içerik */}
              <div className="w-full h-full bg-gradient-to-br from-gray-500/30 to-gray-700/30 blur-[2px] flex items-center justify-center">
                <div className="w-8 h-8 rounded bg-white/20" />
              </div>
              {/* Çöp kutusu ikonu */}
              <div className="absolute inset-0 flex items-center justify-center animate-trash-appear">
                <div className="w-8 h-8 rounded-full bg-red-500/30 flex items-center justify-center">
                  <span className="text-white/80">🗑</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Temizlenmiş galeri - altta */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 animate-organized-appear">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400/30 to-emerald-500/30 border border-green-500/30 flex items-center justify-center">
              <div className="w-6 h-6 rounded bg-white/30" />
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400/30 to-cyan-500/30 border border-blue-500/30 flex items-center justify-center">
              <div className="w-6 h-6 rounded bg-white/30" />
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400/30 to-pink-500/30 border border-purple-500/30 flex items-center justify-center">
              <div className="w-6 h-6 rounded bg-white/30" />
            </div>
          </div>
          
          {/* Sparkles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="absolute -top-8 -left-8 w-2 h-2 bg-yellow-400 rounded-full animate-sparkle-1" />
            <div className="absolute -top-4 right-0 w-1.5 h-1.5 bg-purple-400 rounded-full animate-sparkle-2" />
            <div className="absolute bottom-0 -left-4 w-1 h-1 bg-pink-400 rounded-full animate-sparkle-3" />
          </div>
        </div>
      </div>
      
      <div className="text-center mb-32">
        <h1 className="text-[32px] font-bold text-white/90 mb-4 leading-tight">
          Temiz bir galeriye<br />bir adım.
        </h1>
        <p className="text-[17px] text-white/60 leading-relaxed max-w-sm mx-auto">
          Benzer fotoğrafları, ekran görüntülerini ve<br />
          gereksiz dosyaları hızlıca temizleyin.<br />
          Galeriniz artık daha düzenli olacak.
        </p>
      </div>
      
      <style>{`
        @keyframes similar-1 {
          0%, 100% { transform: translateX(0) scale(1); opacity: 1; }
          50% { transform: translateX(10px) scale(0.95); opacity: 0.7; }
          75% { transform: translateX(20px) scale(0.9); opacity: 0.3; }
        }
        @keyframes similar-2 {
          0%, 100% { transform: translateX(0) scale(1); opacity: 1; }
          50% { transform: translateX(10px) scale(0.95); opacity: 0.7; }
          75% { transform: translateX(15px) scale(0.9); opacity: 0.4; }
        }
        @keyframes similar-3 {
          0%, 100% { transform: translateX(0) scale(1); opacity: 1; }
          50% { transform: translateX(5px) scale(0.98); opacity: 0.8; }
        }
        @keyframes clean-pulse {
          0%, 100% { transform: scale(0); opacity: 0; }
          50%, 70% { transform: scale(1); opacity: 1; }
        }
        @keyframes screenshot-fade {
          0%, 60% { opacity: 1; transform: scale(1); }
          80% { opacity: 0.3; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes screenshot-x {
          0%, 50% { opacity: 0; }
          60%, 80% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes blur-fade {
          0%, 100% { opacity: 1; filter: blur(0px); }
          50% { opacity: 0.5; filter: blur(4px); }
        }
        @keyframes trash-appear {
          0%, 40% { opacity: 0; transform: scale(0.5); }
          50%, 70% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.5); }
        }
        @keyframes organized-appear {
          0%, 70% { opacity: 0; transform: translateY(20px) translateX(-50%); }
          100% { opacity: 1; transform: translateY(0) translateX(-50%); }
        }
        @keyframes sparkle-1 {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes sparkle-2 {
          0%, 100% { opacity: 0; transform: scale(0); }
          30%, 70% { opacity: 1; transform: scale(1); }
        }
        @keyframes sparkle-3 {
          0%, 100% { opacity: 0; transform: scale(0); }
          40%, 80% { opacity: 1; transform: scale(1); }
        }
        .animate-similar-1 { animation: similar-1 4s ease-in-out infinite; }
        .animate-similar-2 { animation: similar-2 4s ease-in-out infinite 0.2s; }
        .animate-similar-3 { animation: similar-3 4s ease-in-out infinite 0.4s; }
        .animate-clean-pulse { animation: clean-pulse 4s ease-in-out infinite; }
        .animate-screenshot-fade { animation: screenshot-fade 4s ease-in-out infinite; }
        .animate-screenshot-x { animation: screenshot-x 4s ease-in-out infinite; }
        .animate-blur-fade { animation: blur-fade 3s ease-in-out infinite; }
        .animate-trash-appear { animation: trash-appear 3s ease-in-out infinite; }
        .animate-organized-appear { animation: organized-appear 4s ease-in-out infinite; }
        .animate-sparkle-1 { animation: sparkle-1 2s ease-in-out infinite; }
        .animate-sparkle-2 { animation: sparkle-2 2s ease-in-out infinite 0.3s; }
        .animate-sparkle-3 { animation: sparkle-3 2s ease-in-out infinite 0.6s; }
      `}</style>
    </div>
  );
};

// Page 2: Sağa kaydır tut, sola kaydır sil
const OnboardingPage2 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 animate-fade-in">
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-80 h-80">
          {/* Sol taraf - Sil (Kırmızı) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500/30 to-red-600/20 border border-red-500/40 flex items-center justify-center animate-left-pulse">
              <span className="text-3xl text-red-400">✕</span>
            </div>
            <p className="text-red-400/80 text-sm mt-2 text-center font-medium">Sil</p>
          </div>
          
          {/* Sağ taraf - Tut (Yeşil) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/30 to-green-600/20 border border-green-500/40 flex items-center justify-center animate-right-pulse">
              <span className="text-3xl text-green-400">✓</span>
            </div>
            <p className="text-green-400/80 text-sm mt-2 text-center font-medium">Tut</p>
          </div>
          
          {/* Ana fotoğraf kartı - kaydırılıyor */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative animate-swipe-demo">
              {/* Kart gölgesi */}
              <div className="absolute inset-0 bg-black/20 blur-xl rounded-3xl translate-y-4" />
              
              {/* Ana kart */}
              <div className="relative w-48 h-64 rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 overflow-hidden shadow-2xl">
                {/* Fotoğraf içeriği */}
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-purple-400/40 to-pink-500/40 overflow-hidden">
                  {/* Manzara görseli */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-600/40 to-transparent" />
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-yellow-400/60" />
                  <div className="absolute bottom-4 left-4 right-4 h-8 bg-green-500/30 rounded-lg" />
                </div>
                
                {/* Swipe yön okları */}
                <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center animate-arrow-left">
                    <span className="text-red-400">←</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center animate-arrow-right">
                    <span className="text-green-400">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Parmak swipe göstergesi */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-finger-swipe">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
              <span className="text-xl">👆</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-32">
        <h1 className="text-[32px] font-bold text-white/90 mb-4 leading-tight">
          Sağa kaydır → Tut.<br />
          Sola kaydır → Sil.
        </h1>
        <p className="text-[17px] text-white/60 leading-relaxed max-w-sm mx-auto">
          Basit hareketlerle fotoğraflarınızı<br />
          anında organize edin.
        </p>
      </div>
      
      <style>{`
        @keyframes swipe-demo {
          0%, 20% { transform: translateX(0) rotate(0deg); }
          30%, 40% { transform: translateX(60px) rotate(8deg); }
          50%, 60% { transform: translateX(0) rotate(0deg); }
          70%, 80% { transform: translateX(-60px) rotate(-8deg); }
          90%, 100% { transform: translateX(0) rotate(0deg); }
        }
        @keyframes left-pulse {
          0%, 50%, 100% { transform: scale(1); opacity: 0.5; }
          70%, 80% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes right-pulse {
          0%, 20%, 100% { transform: scale(1); opacity: 0.5; }
          30%, 40% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes arrow-left {
          0%, 50%, 100% { opacity: 0.3; transform: translateX(0); }
          70%, 80% { opacity: 1; transform: translateX(-4px); }
        }
        @keyframes arrow-right {
          0%, 20%, 100% { opacity: 0.3; transform: translateX(0); }
          30%, 40% { opacity: 1; transform: translateX(4px); }
        }
        @keyframes finger-swipe {
          0%, 20% { transform: translateX(-50%); }
          30%, 40% { transform: translateX(calc(-50% + 40px)); }
          50%, 60% { transform: translateX(-50%); }
          70%, 80% { transform: translateX(calc(-50% - 40px)); }
          90%, 100% { transform: translateX(-50%); }
        }
        .animate-swipe-demo { animation: swipe-demo 5s ease-in-out infinite; }
        .animate-left-pulse { animation: left-pulse 5s ease-in-out infinite; }
        .animate-right-pulse { animation: right-pulse 5s ease-in-out infinite; }
        .animate-arrow-left { animation: arrow-left 5s ease-in-out infinite; }
        .animate-arrow-right { animation: arrow-right 5s ease-in-out infinite; }
        .animate-finger-swipe { animation: finger-swipe 5s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

// Page 3: Kontrol sende - toplu seçim ve işlem
const OnboardingPage3 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 animate-fade-in">
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-72 h-80">
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl" />
          
          {/* Fotoğraf grid'i */}
          <div className="relative grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => {
              const isSelected = [0, 2, 4, 6, 8].includes(i);
              const delay = i * 0.15;
              
              return (
                <div
                  key={i}
                  className="relative w-20 h-20 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 overflow-hidden"
                  style={{ 
                    animation: `photo-appear 0.5s ease-out ${delay}s both`,
                  }}
                >
                  {/* Fotoğraf içeriği */}
                  <div className={`absolute inset-1 rounded-lg ${
                    i % 3 === 0 ? 'bg-gradient-to-br from-blue-400/40 to-cyan-500/40' :
                    i % 3 === 1 ? 'bg-gradient-to-br from-purple-400/40 to-pink-500/40' :
                    'bg-gradient-to-br from-orange-400/40 to-yellow-500/40'
                  }`}>
                    <div className="w-4 h-4 rounded-full bg-white/30 absolute top-1 left-1" />
                  </div>
                  
                  {/* Seçim animasyonu */}
                  {isSelected && (
                    <div 
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ animation: `select-check 3s ease-in-out ${1 + delay}s infinite` }}
                    >
                      <div className="w-8 h-8 rounded-full bg-green-500/80 flex items-center justify-center shadow-lg shadow-green-500/30">
                        <span className="text-white text-lg font-bold">✓</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Seçim highlight */}
                  {isSelected && (
                    <div 
                      className="absolute inset-0 border-2 border-green-400/60 rounded-xl"
                      style={{ animation: `border-glow 3s ease-in-out ${1 + delay}s infinite` }}
                    />
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Toplu işlem butonu */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 animate-batch-button">
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-green-500/80 to-emerald-500/80 backdrop-blur-sm border border-green-400/40 shadow-lg shadow-green-500/20">
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">5 Fotoğraf Seçildi</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dokunma göstergesi */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-tap-indicator">
            <div className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-white/30" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-32">
        <h1 className="text-[32px] font-bold text-white/90 mb-4 leading-tight">
          Kontrol tamamen<br />sende.
        </h1>
        <p className="text-[17px] text-white/60 leading-relaxed max-w-sm mx-auto">
          Hangi fotoğrafların kalacağına sen karar ver.<br />
          Toplu işlemlerle zamandan tasarruf et.
        </p>
      </div>
      
      <style>{`
        @keyframes photo-appear {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes select-check {
          0%, 30% { opacity: 0; transform: scale(0); }
          40%, 90% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0); }
        }
        @keyframes border-glow {
          0%, 30% { opacity: 0; }
          40%, 90% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes batch-button {
          0%, 50% { opacity: 0; transform: translateY(20px) translateX(-50%); }
          60%, 95% { opacity: 1; transform: translateY(0) translateX(-50%); }
          100% { opacity: 0; transform: translateY(20px) translateX(-50%); }
        }
        @keyframes tap-indicator {
          0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          10%, 30% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          35% { opacity: 0; transform: translate(-50%, -50%) scale(1.2); }
          40%, 60% { opacity: 0; transform: translate(30%, -80%) scale(0.5); }
          65%, 85% { opacity: 1; transform: translate(30%, -80%) scale(1); }
          90% { opacity: 0; transform: translate(30%, -80%) scale(1.2); }
        }
        .animate-batch-button { animation: batch-button 4s ease-in-out infinite; }
        .animate-tap-indicator { animation: tap-indicator 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [OnboardingPage1, OnboardingPage2, OnboardingPage3];
  const CurrentPageComponent = pages[currentPage];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      navigate("/");
    }
  };

  const isLastPage = currentPage === pages.length - 1;

  return (
    <div className="min-h-screen bg-[#0A0A0F] overflow-hidden">
      <div className="h-screen flex flex-col">
        <CurrentPageComponent />
        
        <div className="fixed bottom-0 left-0 right-0 px-8 pb-12 flex items-center justify-between">
          <div className="flex gap-2">
            {pages.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? "w-8 bg-gradient-to-r from-purple-500 to-pink-500"
                    : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={handleNext}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-[17px] flex items-center gap-2 hover:scale-105 transition-transform duration-200 shadow-lg shadow-purple-500/30"
          >
            {isLastPage ? "Başla" : "Devam"}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
