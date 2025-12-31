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
  LucideIcon,
  Check
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface FilterConfig {
  key: string;
  label: string;
  icon: LucideIcon;
}

interface CategoryConfig {
  title: string;
  filters: FilterConfig[];
}

const FilterCard = ({ 
  label, 
  icon: Icon,
  enabled, 
  onToggle 
}: { 
  label: string; 
  icon: LucideIcon;
  enabled: boolean; 
  onToggle: () => void;
}) => {
  return (
    <button
      onClick={onToggle}
      className={`relative flex flex-col items-center justify-center p-4 rounded-2xl aspect-square transition-all duration-300 ${
        enabled 
          ? 'bg-white text-[#0A0A0F]' 
          : 'bg-white/[0.05] text-white/60 hover:bg-white/[0.08]'
      }`}
    >
      {enabled && (
        <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#0A0A0F] flex items-center justify-center">
          <Check className="w-3 h-3 text-white" strokeWidth={3} />
        </div>
      )}
      <Icon className={`w-7 h-7 mb-2 transition-colors duration-300 ${
        enabled ? 'text-[#0A0A0F]' : 'text-white/50'
      }`} />
      <span className={`text-[13px] font-medium text-center leading-tight transition-colors duration-300 ${
        enabled ? 'text-[#0A0A0F]' : 'text-white/70'
      }`}>
        {label}
      </span>
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

  const categories: CategoryConfig[] = [
    {
      title: "Quality",
      filters: [
        { key: "blurry", label: "Blurry", icon: Camera },
        { key: "lowRes", label: "Low Res", icon: ImageMinus },
      ]
    },
    {
      title: "Videos",
      filters: [
        { key: "shortVideos", label: "Short", icon: Film },
        { key: "longVideos", label: "Long", icon: Clock },
      ]
    },
    {
      title: "Duplicates",
      filters: [
        { key: "exactDuplicates", label: "Exact", icon: Copy },
        { key: "similarPhotos", label: "Similar", icon: Images },
      ]
    },
    {
      title: "Storage",
      filters: [
        { key: "largeFiles", label: "Large Files", icon: HardDrive },
      ]
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
          <h1 className="text-[17px] font-semibold text-white">Smart Clean</h1>
          <div className="w-9" />
        </div>

        {/* Categories */}
        <div className="px-5 mt-4 pb-36 space-y-6">
          {categories.map((category, catIndex) => (
            <div 
              key={category.title}
              style={{ animationDelay: `${catIndex * 80}ms` }}
              className="animate-fade-in"
            >
              <h2 className="text-[13px] font-medium text-white/40 uppercase tracking-wider mb-3 px-1">
                {category.title}
              </h2>
              <div className={`grid gap-3 ${
                category.filters.length === 1 ? 'grid-cols-2' : 'grid-cols-2'
              }`}>
                {category.filters.map((filter) => (
                  <FilterCard
                    key={filter.key}
                    label={filter.label}
                    icon={filter.icon}
                    enabled={filters[filter.key as keyof typeof filters]}
                    onToggle={() => toggleFilter(filter.key)}
                  />
                ))}
                {category.filters.length === 1 && (
                  <div className="aspect-square" />
                )}
              </div>
            </div>
          ))}
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
                Scan {enabledCount} Filter{enabledCount !== 1 ? 's' : ''}
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
