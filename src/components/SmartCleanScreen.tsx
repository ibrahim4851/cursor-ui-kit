import { useState } from "react";
import { 
  ChevronLeft, 
  Sparkles, 
  Loader2,
  Camera,
  ImageMinus,
  Film,
  Clock,
  Copy,
  Images,
  HardDrive,
  LucideIcon
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface FilterConfig {
  key: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

const FilterItem = ({ 
  label, 
  description,
  icon: Icon,
  enabled, 
  onToggle 
}: { 
  label: string; 
  description: string;
  icon: LucideIcon;
  enabled: boolean; 
  onToggle: () => void;
}) => {
  return (
    <button
      onClick={onToggle}
      className={`flex items-start gap-4 w-full p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 group ${
        enabled 
          ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30' 
          : 'bg-gradient-to-br from-white/10 to-white/5 border-white/10 hover:border-white/20'
      }`}
    >
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
        enabled 
          ? 'bg-primary/20 text-primary' 
          : 'bg-white/10 text-white/50'
      }`}>
        <Icon className="w-5 h-5" />
      </div>
      
      <div className="flex-1 text-left min-w-0">
        <h3 className={`text-[16px] font-medium transition-colors duration-300 ${
          enabled ? 'text-white' : 'text-white/80'
        }`}>
          {label}
        </h3>
        <p className="text-[13px] text-white/50 mt-0.5 leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className={`w-12 h-7 rounded-full transition-all duration-300 relative flex-shrink-0 mt-1 ${
        enabled ? 'bg-primary' : 'bg-white/20'
      }`}>
        <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ${
          enabled ? 'left-5' : 'left-0.5'
        }`} />
      </div>
    </button>
  );
};

const SmartCleanScreen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    blurry: true,
    lowRes: true,
    shortVideos: false,
    longVideos: false,
    exactDuplicates: true,
    similarPhotos: true,
    largeFiles: false,
  });

  const filterList: FilterConfig[] = [
    { 
      key: "blurry", 
      label: "Blurry Photos", 
      description: "Detect out-of-focus or motion-blurred images",
      icon: Camera
    },
    { 
      key: "lowRes", 
      label: "Low Resolution", 
      description: "Find images below 1MP that may look pixelated",
      icon: ImageMinus
    },
    { 
      key: "shortVideos", 
      label: "Short Videos", 
      description: "Videos under 3 seconds, often accidental recordings",
      icon: Film
    },
    { 
      key: "longVideos", 
      label: "Long Videos", 
      description: "Videos over 5 minutes that take up storage",
      icon: Clock
    },
    { 
      key: "exactDuplicates", 
      label: "Exact Duplicates", 
      description: "Identical copies of the same photo or video",
      icon: Copy
    },
    { 
      key: "similarPhotos", 
      label: "Similar Photos", 
      description: "Near-identical shots from burst mode or retakes",
      icon: Images
    },
    { 
      key: "largeFiles", 
      label: "Large Files", 
      description: "Media files over 50MB consuming excess storage",
      icon: HardDrive
    },
  ];

  const toggleFilter = (key: string) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const enabledCount = Object.values(filters).filter(Boolean).length;

  const handleFindPhotos = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/swipe");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] pb-safe">
      <div className="pt-safe">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5">
          <Link to="/">
            <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:scale-110 transition-transform duration-200">
              <ChevronLeft className="w-5 h-5 text-white/90" />
            </button>
          </Link>
          <div className="text-center">
            <h1 className="text-lg font-semibold text-white">Smart Clean</h1>
            <p className="text-xs text-white/50 mt-0.5">{enabledCount} filters active</p>
          </div>
          <div className="w-10" />
        </div>

        {/* Section Header */}
        <div className="px-6 mt-2 mb-4">
          <p className="text-white/60 text-sm">
            Select what to scan for in your photo library
          </p>
        </div>

        {/* Filters */}
        <div className="px-6 space-y-3 pb-32 animate-fade-in">
          {filterList.map((filter, index) => (
            <div 
              key={filter.key}
              style={{ animationDelay: `${index * 40}ms` }}
              className="animate-fade-in"
            >
              <FilterItem
                label={filter.label}
                description={filter.description}
                icon={filter.icon}
                enabled={filters[filter.key as keyof typeof filters]}
                onToggle={() => toggleFilter(filter.key)}
              />
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="fixed bottom-0 left-0 right-0 px-6 pb-8 pt-6 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F] to-transparent">
          <button
            onClick={handleFindPhotos}
            disabled={loading || enabledCount === 0}
            className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-[17px] flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-200 shadow-2xl disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Find Photos to Clean
              </>
            )}
          </button>
        </div>
      </div>

      {/* Loading Modal */}
      {loading && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 blur-3xl animate-pulse" />
                <Loader2 className="w-16 h-16 text-white/90 animate-spin relative z-10" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white/90 mb-2">Analyzing Photos</h3>
                <p className="text-white/60">This may take a moment...</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartCleanScreen;
