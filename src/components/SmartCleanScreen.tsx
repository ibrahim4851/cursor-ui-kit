import { useState } from "react";
import { ChevronLeft, Sparkles, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Custom SVG illustrations for each filter
const BlurryIllustration = () => (
  <svg viewBox="0 0 80 80" className="w-full h-full">
    <defs>
      <filter id="blur1" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
      </filter>
    </defs>
    <rect x="15" y="20" width="50" height="40" rx="4" fill="currentColor" opacity="0.3" filter="url(#blur1)" />
    <circle cx="30" cy="35" r="6" fill="currentColor" opacity="0.5" filter="url(#blur1)" />
    <path d="M20 50 L35 40 L45 48 L60 35 L60 55 L20 55 Z" fill="currentColor" opacity="0.4" filter="url(#blur1)" />
  </svg>
);

const LowResIllustration = () => (
  <svg viewBox="0 0 80 80" className="w-full h-full">
    <rect x="20" y="25" width="8" height="8" fill="currentColor" opacity="0.6" />
    <rect x="30" y="25" width="8" height="8" fill="currentColor" opacity="0.4" />
    <rect x="40" y="25" width="8" height="8" fill="currentColor" opacity="0.6" />
    <rect x="50" y="25" width="8" height="8" fill="currentColor" opacity="0.3" />
    <rect x="20" y="35" width="8" height="8" fill="currentColor" opacity="0.3" />
    <rect x="30" y="35" width="8" height="8" fill="currentColor" opacity="0.5" />
    <rect x="40" y="35" width="8" height="8" fill="currentColor" opacity="0.4" />
    <rect x="50" y="35" width="8" height="8" fill="currentColor" opacity="0.6" />
    <rect x="20" y="45" width="8" height="8" fill="currentColor" opacity="0.5" />
    <rect x="30" y="45" width="8" height="8" fill="currentColor" opacity="0.3" />
    <rect x="40" y="45" width="8" height="8" fill="currentColor" opacity="0.6" />
    <rect x="50" y="45" width="8" height="8" fill="currentColor" opacity="0.4" />
  </svg>
);

const ShortVideoIllustration = () => (
  <svg viewBox="0 0 80 80" className="w-full h-full">
    <rect x="18" y="22" width="44" height="36" rx="4" fill="currentColor" opacity="0.2" />
    <polygon points="35,32 35,50 50,41" fill="currentColor" opacity="0.6" />
    <rect x="22" y="62" width="36" height="3" rx="1.5" fill="currentColor" opacity="0.3" />
    <rect x="22" y="62" width="8" height="3" rx="1.5" fill="currentColor" opacity="0.6" />
  </svg>
);

const LongVideoIllustration = () => (
  <svg viewBox="0 0 80 80" className="w-full h-full">
    <rect x="18" y="22" width="44" height="36" rx="4" fill="currentColor" opacity="0.2" />
    <polygon points="35,32 35,50 50,41" fill="currentColor" opacity="0.6" />
    <rect x="22" y="62" width="36" height="3" rx="1.5" fill="currentColor" opacity="0.3" />
    <rect x="22" y="62" width="32" height="3" rx="1.5" fill="currentColor" opacity="0.6" />
    <circle cx="54" cy="28" r="8" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    <path d="M54 22 L54 28 L58 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const DuplicatesIllustration = () => (
  <svg viewBox="0 0 80 80" className="w-full h-full">
    <rect x="28" y="18" width="32" height="26" rx="3" fill="currentColor" opacity="0.3" />
    <rect x="24" y="22" width="32" height="26" rx="3" fill="currentColor" opacity="0.4" />
    <rect x="20" y="26" width="32" height="26" rx="3" fill="currentColor" opacity="0.6" />
    <circle cx="30" cy="35" r="4" fill="currentColor" opacity="0.8" />
    <path d="M24 46 L32 40 L40 45 L48 38 L48 48 L24 48 Z" fill="currentColor" opacity="0.5" />
  </svg>
);

const SimilarIllustration = () => (
  <svg viewBox="0 0 80 80" className="w-full h-full">
    <rect x="12" y="24" width="24" height="32" rx="3" fill="currentColor" opacity="0.5" />
    <circle cx="20" cy="34" r="3" fill="currentColor" opacity="0.7" />
    <path d="M14 48 L20 42 L26 46 L32 40 L32 52 L14 52 Z" fill="currentColor" opacity="0.4" />
    <rect x="44" y="24" width="24" height="32" rx="3" fill="currentColor" opacity="0.5" />
    <circle cx="52" cy="34" r="3" fill="currentColor" opacity="0.7" />
    <path d="M46 48 L52 43 L58 47 L64 41 L64 52 L46 52 Z" fill="currentColor" opacity="0.4" />
    <path d="M38 40 L42 40 M36 40 L34 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
  </svg>
);

const LargeFilesIllustration = () => (
  <svg viewBox="0 0 80 80" className="w-full h-full">
    <rect x="25" y="18" width="30" height="44" rx="4" fill="currentColor" opacity="0.2" />
    <rect x="30" y="26" width="20" height="3" rx="1.5" fill="currentColor" opacity="0.5" />
    <rect x="30" y="32" width="16" height="3" rx="1.5" fill="currentColor" opacity="0.4" />
    <rect x="30" y="38" width="20" height="3" rx="1.5" fill="currentColor" opacity="0.5" />
    <rect x="30" y="44" width="12" height="3" rx="1.5" fill="currentColor" opacity="0.4" />
    <path d="M35 54 L40 58 L45 54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    <text x="40" y="68" textAnchor="middle" fontSize="8" fill="currentColor" opacity="0.5" fontWeight="bold">50MB+</text>
  </svg>
);

interface FilterConfig {
  key: string;
  label: string;
  description: string;
  illustration: React.FC;
  accentColor: string;
}

const FilterCard = ({ 
  label, 
  description,
  illustration: Illustration,
  accentColor,
  enabled, 
  onToggle 
}: { 
  label: string; 
  description: string;
  illustration: React.FC;
  accentColor: string;
  enabled: boolean; 
  onToggle: () => void;
}) => {
  return (
    <button
      onClick={onToggle}
      className={`relative flex items-center gap-4 w-full p-4 rounded-2xl transition-all duration-300 overflow-hidden ${
        enabled 
          ? 'bg-gradient-to-r from-purple-500/20 to-purple-600/10 border border-purple-500/30' 
          : 'bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.06]'
      }`}
    >
      {/* Illustration container */}
      <div 
        className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          enabled ? accentColor : 'text-white/30'
        }`}
        style={{
          background: enabled 
            ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(139, 92, 246, 0.1))' 
            : 'rgba(255,255,255,0.05)'
        }}
      >
        <Illustration />
      </div>
      
      {/* Text content */}
      <div className="flex-1 text-left min-w-0">
        <h3 className={`text-[15px] font-medium transition-colors duration-300 ${
          enabled ? 'text-white' : 'text-white/70'
        }`}>
          {label}
        </h3>
        <p className={`text-[12px] mt-0.5 transition-colors duration-300 ${
          enabled ? 'text-white/50' : 'text-white/30'
        }`}>
          {description}
        </p>
      </div>
      
      {/* Toggle */}
      <div className={`w-12 h-7 rounded-full transition-all duration-300 relative flex-shrink-0 ${
        enabled ? 'bg-purple-500' : 'bg-white/20'
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
      illustration: BlurryIllustration,
      accentColor: "text-purple-400"
    },
    { 
      key: "lowRes", 
      label: "Low Resolution", 
      description: "Find images below 1MP that may look pixelated",
      illustration: LowResIllustration,
      accentColor: "text-purple-400"
    },
    { 
      key: "shortVideos", 
      label: "Short Videos", 
      description: "Videos under 3 seconds, often accidental recordings",
      illustration: ShortVideoIllustration,
      accentColor: "text-purple-400"
    },
    { 
      key: "longVideos", 
      label: "Long Videos", 
      description: "Videos over 5 minutes that take up storage",
      illustration: LongVideoIllustration,
      accentColor: "text-purple-400"
    },
    { 
      key: "exactDuplicates", 
      label: "Exact Duplicates", 
      description: "Identical copies of the same photo or video",
      illustration: DuplicatesIllustration,
      accentColor: "text-purple-400"
    },
    { 
      key: "similarPhotos", 
      label: "Similar Photos", 
      description: "Near-identical shots from burst mode or retakes",
      illustration: SimilarIllustration,
      accentColor: "text-purple-400"
    },
    { 
      key: "largeFiles", 
      label: "Large Files", 
      description: "Media files over 50MB consuming excess storage",
      illustration: LargeFilesIllustration,
      accentColor: "text-purple-400"
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
    <div className="min-h-screen bg-[#0A0A0F] pb-safe relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-fuchsia-600/10 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="pt-safe relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4">
          <Link to="/">
            <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 text-white/80" />
            </button>
          </Link>
          <div className="text-center">
            <h1 className="text-[17px] font-semibold text-white">Smart Clean</h1>
            <p className="text-[11px] text-white/40 mt-0.5">{enabledCount} filters active</p>
          </div>
          <div className="w-10" />
        </div>

        {/* Section Header */}
        <div className="px-5 mt-2 mb-5">
          <p className="text-white/50 text-[14px]">
            Select what to scan for in your photo library
          </p>
        </div>

        {/* Filters */}
        <div className="px-5 space-y-3 pb-36">
          {filterList.map((filter, index) => (
            <div 
              key={filter.key}
              style={{ animationDelay: `${index * 50}ms` }}
              className="animate-fade-in"
            >
              <FilterCard
                label={filter.label}
                description={filter.description}
                illustration={filter.illustration}
                accentColor={filter.accentColor}
                enabled={filters[filter.key as keyof typeof filters]}
                onToggle={() => toggleFilter(filter.key)}
              />
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="fixed bottom-0 left-0 right-0 px-5 pb-10 pt-8 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/95 to-transparent z-20">
          <button
            onClick={handleFindPhotos}
            disabled={loading || enabledCount === 0}
            className="w-full py-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold text-[16px] flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-40 shadow-lg shadow-purple-500/25"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Find Photos to Clean
              </>
            )}
          </button>
        </div>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-[#0A0A0F]/90 backdrop-blur-xl flex items-center justify-center z-50 animate-fade-in">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-purple-500/30 border-t-purple-500 animate-spin" />
            <span className="text-[15px] text-white/60">Analyzing...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartCleanScreen;
