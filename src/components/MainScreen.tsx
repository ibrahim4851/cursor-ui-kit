import { Settings, FileText, Image, Images, Video, Sparkles, Wand2 } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryCard = ({ 
  icon: Icon, 
  title, 
  description, 
  to 
}: { 
  icon: any; 
  title: string; 
  description: string;
  to: string;
}) => {
  return (
    <Link to={to} className="block">
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 p-6 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl group">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="absolute w-14 h-14 bg-gradient-glow-purple blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Icon className="w-7 h-7 text-white/90 relative z-10" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white/90 mb-0.5">{title}</h3>
            <p className="text-sm text-white/60">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const MainScreen = () => {
  const categories = [
    { icon: FileText, title: "Belgeler", description: "PDF ve dökümanlar", to: "/smart-clean" },
    { icon: Image, title: "Screenshots", description: "Ekran görüntüleri", to: "/smart-clean" },
    { icon: Images, title: "Seri Fotoğraflar", description: "Benzer fotoğraflar", to: "/smart-clean" },
    { icon: Video, title: "Videolar", description: "Video dosyaları", to: "/smart-clean" },
    { icon: Sparkles, title: "Random Clean", description: "Rastgele temizlik", to: "/smart-clean" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F] pb-safe">
      {/* Safe area top padding for dynamic island */}
      <div className="pt-safe">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-primary" />
            <span className="text-lg font-bold text-white/90">Cleaner</span>
          </div>
          <Link to="/settings" className="block">
            <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:scale-110 transition-transform duration-200">
              <Settings className="w-5 h-5 text-white/90" />
            </button>
          </Link>
        </div>

        {/* Title */}
        <div className="px-6 mt-8 mb-8">
          <h1 className="text-[32px] font-bold text-white/90 leading-tight">
            Ne temizlemek<br />istersin?
          </h1>
        </div>

        {/* Category Cards */}
        <div className="px-6 space-y-3 animate-fade-in">
          {categories.map((category, index) => (
            <div 
              key={category.title}
              style={{ animationDelay: `${index * 50}ms` }}
              className="animate-fade-in"
            >
              <CategoryCard {...category} />
            </div>
          ))}
        </div>

        {/* Smart Clean Card */}
        <div className="px-6 mt-6 pb-8">
          <Link to="/smart-clean">
            <div className="relative overflow-hidden bg-gradient-primary rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Wand2 className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">Smart Clean</h3>
                  <p className="text-white/80 text-sm">AI destekli akıllı temizlik</p>
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
