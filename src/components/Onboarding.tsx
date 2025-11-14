import { useState } from "react";
import { ChevronRight, FileText, Image, Images, Check, X } from "lucide-react";

const OnboardingPage1 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 animate-fade-in">
      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-glow-purple blur-3xl animate-glow-pulse" />
          <div className="relative flex gap-8 items-center justify-center animate-float">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10">
              <FileText className="w-8 h-8 text-white/90" />
            </div>
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10">
              <Image className="w-8 h-8 text-white/90" />
            </div>
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10">
              <Images className="w-8 h-8 text-white/90" />
            </div>
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
    </div>
  );
};

const OnboardingPage2 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 animate-fade-in">
      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-glow-red blur-3xl animate-glow-pulse" />
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-glow-green blur-3xl animate-glow-pulse" />
          
          <div className="relative w-64 h-80 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl animate-tilt overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
            <div className="absolute inset-4 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
          </div>
          
          <div className="absolute -left-16 top-1/2 -translate-y-1/2">
            <div className="w-12 h-12 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/40 flex items-center justify-center">
              <X className="w-6 h-6 text-red-400" />
            </div>
          </div>
          
          <div className="absolute -right-16 top-1/2 -translate-y-1/2">
            <div className="w-12 h-12 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/40 flex items-center justify-center">
              <Check className="w-6 h-6 text-green-400" />
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
    </div>
  );
};

const OnboardingPage3 = () => {
  const gridItems = [
    { hasCheck: true, isCheck: true },
    { hasCheck: false, isCheck: false },
    { hasCheck: true, isCheck: false },
    { hasCheck: false, isCheck: false },
    { hasCheck: true, isCheck: true },
    { hasCheck: false, isCheck: false },
    { hasCheck: true, isCheck: false },
    { hasCheck: false, isCheck: false },
    { hasCheck: true, isCheck: true },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 animate-fade-in">
      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-glow-purple blur-3xl animate-glow-pulse" />
          <div className="relative grid grid-cols-3 gap-3 animate-breathe">
            {gridItems.map((item, index) => (
              <div
                key={index}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
                {item.hasCheck && (
                  <div className={`relative z-10 w-8 h-8 rounded-full ${item.isCheck ? 'bg-green-500/20 border-green-500/40' : 'bg-red-500/20 border-red-500/40'} border flex items-center justify-center`}>
                    {item.isCheck ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <X className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                )}
              </div>
            ))}
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
    </div>
  );
};

const Onboarding = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [OnboardingPage1, OnboardingPage2, OnboardingPage3];
  const CurrentPageComponent = pages[currentPage];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
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
                    ? "w-8 bg-gradient-primary"
                    : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={handleNext}
            className="px-8 py-4 rounded-full bg-gradient-primary text-white font-semibold text-[17px] flex items-center gap-2 hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            {isLastPage ? "Get Started" : "Continue"}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
