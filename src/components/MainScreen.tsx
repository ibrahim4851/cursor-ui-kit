import { Settings, FileText, Image, Box, Video, Sparkles, Wand2, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const MainScreen = () => {
  return (
    <div className="min-h-screen bg-[#050507] pb-safe relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[50%] bg-purple-600/20 rounded-full blur-[150px] animate-breathe" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[50%] h-[40%] bg-pink-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 pt-safe">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500" />
            <span className="text-lg font-bold text-white">Cleaner</span>
          </div>
          <Link to="/settings">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl">
              <Settings className="w-[18px] h-[18px] text-white/60" />
            </div>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="px-5 mt-4 mb-6">
          <p className="text-white/40 text-sm font-medium mb-1">Merhaba 👋</p>
          <h1 className="text-[28px] font-bold text-white leading-tight">
            Telefonunu temizlemeye<br />hazır mısın?
          </h1>
        </div>

        {/* Bento Grid */}
        <div className="px-5 grid grid-cols-2 gap-3">
          {/* Smart Clean - Full width featured */}
          <Link to="/smart-clean" className="col-span-2 group">
            <div className="relative h-[140px] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500" />
              <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay bg-gradient-to-br from-white/10 to-transparent" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl translate-x-8 translate-y-8" />
              
              <div className="relative h-full p-5 flex flex-col justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Wand2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Smart Clean</h3>
                    <p className="text-white/70 text-sm">AI ile akıllı temizlik</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Documents */}
          <Link to="/smart-clean" className="group">
            <div className="relative h-[160px] rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.08] overflow-hidden backdrop-blur-xl p-4 flex flex-col justify-between">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400/80 to-orange-500/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-[15px]">Belgeler</h3>
                <p className="text-white/40 text-xs mt-0.5">PDF & Dökümanlar</p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-amber-500/20 rounded-full blur-2xl" />
            </div>
          </Link>

          {/* Screenshots */}
          <Link to="/smart-clean" className="group">
            <div className="relative h-[160px] rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.08] overflow-hidden backdrop-blur-xl p-4 flex flex-col justify-between">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-400/80 to-pink-500/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Image className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-[15px]">Screenshots</h3>
                <p className="text-white/40 text-xs mt-0.5">Ekran görüntüleri</p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-rose-500/20 rounded-full blur-2xl" />
            </div>
          </Link>

          {/* Objects */}
          <Link to="/smart-clean" className="group">
            <div className="relative h-[160px] rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.08] overflow-hidden backdrop-blur-xl p-4 flex flex-col justify-between">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-400/80 to-indigo-500/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Box className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-[15px]">Objeler</h3>
                <p className="text-white/40 text-xs mt-0.5">Nesne bazlı filtre</p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl" />
            </div>
          </Link>

          {/* Videos */}
          <Link to="/smart-clean" className="group">
            <div className="relative h-[160px] rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.08] overflow-hidden backdrop-blur-xl p-4 flex flex-col justify-between">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/80 to-teal-500/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Video className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-[15px]">Videolar</h3>
                <p className="text-white/40 text-xs mt-0.5">Video dosyaları</p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl" />
            </div>
          </Link>

          {/* Random Clean - Full width */}
          <Link to="/smart-clean" className="col-span-2 group">
            <div className="relative h-[80px] rounded-3xl bg-gradient-to-r from-white/[0.06] to-white/[0.03] border border-white/[0.08] overflow-hidden backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent" />
              <div className="relative h-full px-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400/80 to-green-500/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-[15px]">Random Clean</h3>
                  <p className="text-white/40 text-xs">Rastgele temizlik</p>
                </div>
                <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom spacing */}
        <div className="h-8" />
      </div>
    </div>
  );
};

export default MainScreen;
