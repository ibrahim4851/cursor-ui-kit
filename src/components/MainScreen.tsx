import { Settings, FileText, Image, Box, Video, Sparkles, Wand2, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryCard = ({ 
  icon: Icon, 
  title, 
  description, 
  to,
  accentColor = "purple"
}: { 
  icon: any; 
  title: string; 
  description: string;
  to: string;
  accentColor?: "purple" | "pink" | "blue" | "orange" | "cyan";
}) => {
  const colorClasses = {
    purple: "from-purple-500/30 to-purple-600/20 border-purple-500/30",
    pink: "from-pink-500/30 to-pink-600/20 border-pink-500/30",
    blue: "from-blue-500/30 to-blue-600/20 border-blue-500/30",
    orange: "from-orange-500/30 to-orange-600/20 border-orange-500/30",
    cyan: "from-cyan-500/30 to-cyan-600/20 border-cyan-500/30",
  };

  return (
    <Link to={to} className="block group">
      <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-[28px] border border-white/[0.08] p-5 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12] hover:scale-[1.02] active:scale-[0.98]">
        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
        
        <div className="relative flex items-center gap-4">
          {/* Icon container with gradient background */}
          <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${colorClasses[accentColor]} border flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110`}>
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10" />
            <Icon className="w-6 h-6 text-white/90 relative z-10" strokeWidth={1.5} />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-[17px] font-semibold text-white/95 mb-0.5 tracking-tight">{title}</h3>
            <p className="text-[14px] text-white/50 truncate">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const MainScreen = () => {
  const categories = [
    { icon: FileText, title: "Belgeler", description: "PDF ve dökümanlar", to: "/smart-clean", accentColor: "purple" as const },
    { icon: Image, title: "Screenshots", description: "Ekran görüntüleri", to: "/smart-clean", accentColor: "pink" as const },
    { icon: Box, title: "Objeler", description: "Fotoğrafları nesnelere göre filtrele", to: "/smart-clean", accentColor: "blue" as const },
    { icon: Video, title: "Videolar", description: "Video dosyaları", to: "/smart-clean", accentColor: "cyan" as const },
    { icon: Sparkles, title: "Random Clean", description: "Rastgele temizlik", to: "/smart-clean", accentColor: "orange" as const },
  ];

  return (
    <div className="min-h-screen bg-background pb-safe relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-pink-500/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 pt-safe">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-primary shadow-lg shadow-purple-500/20" />
            <span className="text-[18px] font-semibold text-white/95 tracking-tight">Cleaner</span>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/stats" className="block">
              <button className="w-11 h-11 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.1] hover:scale-105 active:scale-95 transition-all duration-200">
                <BarChart3 className="w-5 h-5 text-white/70" strokeWidth={1.5} />
              </button>
            </Link>
            <Link to="/settings" className="block">
              <button className="w-11 h-11 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.1] hover:scale-105 active:scale-95 transition-all duration-200">
                <Settings className="w-5 h-5 text-white/70" strokeWidth={1.5} />
              </button>
            </Link>
          </div>
        </div>

        {/* Title */}
        <div className="px-6 mt-6 mb-8">
          <h1 className="text-[32px] font-bold text-white/95 leading-[1.15] tracking-tight">
            Ne temizlemek<br />istersin?
          </h1>
        </div>

        {/* Category Cards */}
        <div className="px-5 space-y-3">
          {categories.map((category, index) => (
            <div 
              key={category.title}
              style={{ animationDelay: `${index * 60}ms` }}
              className="animate-fade-in"
            >
              <CategoryCard {...category} />
            </div>
          ))}
        </div>

        {/* Smart Clean Card */}
        <div className="px-5 mt-5 pb-8">
          <Link to="/smart-clean" className="block group">
            <div className="relative overflow-hidden rounded-[28px] p-6 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-pink-400" />
              
              {/* Subtle mesh overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
              
              {/* Glow effect */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl" />
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Wand2 className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[22px] font-bold text-white mb-0.5 tracking-tight">Smart Clean</h3>
                  <p className="text-white/80 text-[14px]">AI destekli akıllı temizlik</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
