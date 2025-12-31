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

const SliderToggle = ({ 
  enabled, 
  onToggle 
}: { 
  enabled: boolean; 
  onToggle: () => void;
}) => {
  return (
    <button
      onClick={onToggle}
      className={`w-11 h-6 rounded-full transition-all duration-400 relative flex-shrink-0 ${
        enabled ? 'bg-white' : 'bg-white/20'
      }`}
    >
      <div 
        className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-400 ease-out ${
          enabled 
            ? 'left-6 bg-[#0A0A0F]' 
            : 'left-1 bg-white/60'
        }`} 
      />
    </button>
  );
};

const FilterRow = ({ 
  label, 
  description,
  icon: Icon,
  enabled, 
  onToggle,
  isLast
}: { 
  label: string; 
  description: string;
  icon: LucideIcon;
  enabled: boolean; 
  onToggle: () => void;
  isLast: boolean;
}) => {
  return (
    <div className={`py-4 ${!isLast ? 'border-b border-white/[0.06]' : ''}`}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <Icon className={`w-[18px] h-[18px] flex-shrink-0 transition-colors duration-300 ${
            enabled ? 'text-white' : 'text-white/30'
          }`} />
          <div className="flex-1 min-w-0">
            <span className={`text-[15px] transition-colors duration-300 ${
              enabled ? 'text-white' : 'text-white/50'
            }`}>
              {label}
            </span>
          </div>
        </div>
        <SliderToggle enabled={enabled} onToggle={onToggle} />
      </div>
      <p className={`text-[12px] mt-1.5 ml-[30px] transition-colors duration-300 ${
        enabled ? 'text-white/40' : 'text-white/20'
      }`}>
        {description}
      </p>
    </div>
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
      label: "Blurry photos", 
      description: "Out-of-focus or motion-blurred",
      icon: Camera
    },
    { 
      key: "lowRes", 
      label: "Low resolution", 
      description: "Below 1MP, may look pixelated",
      icon: ImageMinus
    },
    { 
      key: "shortVideos", 
      label: "Short videos", 
      description: "Under 3 seconds",
      icon: Film
    },
    { 
      key: "longVideos", 
      label: "Long videos", 
      description: "Over 5 minutes",
      icon: Clock
    },
    { 
      key: "exactDuplicates", 
      label: "Exact duplicates", 
      description: "Identical copies",
      icon: Copy
    },
    { 
      key: "similarPhotos", 
      label: "Similar photos", 
      description: "Burst mode or retakes",
      icon: Images
    },
    { 
      key: "largeFiles", 
      label: "Large files", 
      description: "Over 50MB",
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
        <div className="flex items-center justify-between px-5 py-4">
          <Link to="/">
            <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 text-white/80" />
            </button>
          </Link>
          <span className="text-[13px] text-white/40 font-medium tracking-wide uppercase">
            {enabledCount} active
          </span>
        </div>

        {/* Title */}
        <div className="px-5 mt-4 mb-8">
          <h1 className="text-[28px] font-semibold text-white tracking-tight">
            Smart Clean
          </h1>
          <p className="text-[15px] text-white/40 mt-1">
            Choose what to look for
          </p>
        </div>

        {/* Filters */}
        <div className="px-5 pb-36">
          <div className="bg-white/[0.03] rounded-2xl px-4">
            {filterList.map((filter, index) => (
              <div 
                key={filter.key}
                style={{ animationDelay: `${index * 50}ms` }}
                className="animate-fade-in"
              >
                <FilterRow
                  label={filter.label}
                  description={filter.description}
                  icon={filter.icon}
                  enabled={filters[filter.key as keyof typeof filters]}
                  onToggle={() => toggleFilter(filter.key)}
                  isLast={index === filterList.length - 1}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action */}
        <div className="fixed bottom-0 left-0 right-0 px-5 pb-10 pt-8 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/95 to-transparent">
          <button
            onClick={handleFindPhotos}
            disabled={loading || enabledCount === 0}
            className="w-full py-4 rounded-full bg-white text-[#0A0A0F] font-semibold text-[16px] flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-40"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Scan Library
              </>
            )}
          </button>
        </div>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-[#0A0A0F]/90 backdrop-blur-xl flex items-center justify-center z-50 animate-fade-in">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-white/20 border-t-white animate-spin" />
            <span className="text-[15px] text-white/60">Analyzing...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartCleanScreen;
