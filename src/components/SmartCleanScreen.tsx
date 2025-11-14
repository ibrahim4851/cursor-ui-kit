import { useState } from "react";
import { ChevronLeft, Sparkles, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const FilterItem = ({ 
  label, 
  enabled, 
  onToggle 
}: { 
  label: string; 
  enabled: boolean; 
  onToggle: () => void;
}) => {
  return (
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:scale-[1.01] transition-all duration-200 group"
    >
      <span className="text-white/90 text-[17px]">{label}</span>
      <div className={`w-14 h-8 rounded-full transition-all duration-300 relative ${enabled ? 'bg-gradient-primary' : 'bg-white/20'}`}>
        <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ${enabled ? 'left-7' : 'left-1'}`} />
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
    oldScreenshots: true,
    socialScreenshots: true,
    exactDuplicates: true,
    similarPhotos: true,
    largeFiles: false,
    dateRange: false,
    poorComposition: false,
  });

  const filterList = [
    { key: "blurry", label: "Blurry Photos" },
    { key: "lowRes", label: "Low Resolution" },
    { key: "shortVideos", label: "Short Videos" },
    { key: "longVideos", label: "Long Videos" },
    { key: "oldScreenshots", label: "Old Screenshots" },
    { key: "socialScreenshots", label: "Social Media Screenshots" },
    { key: "exactDuplicates", label: "Exact Duplicates" },
    { key: "similarPhotos", label: "Similar Photos" },
    { key: "largeFiles", label: "Large Files" },
    { key: "dateRange", label: "Date Range" },
    { key: "poorComposition", label: "Poor Composition" },
  ];

  const toggleFilter = (key: string) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

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
        <div className="flex items-center justify-between px-6 py-6">
          <Link to="/">
            <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:scale-110 transition-transform duration-200">
              <ChevronLeft className="w-5 h-5 text-white/90" />
            </button>
          </Link>
          <h1 className="text-lg font-semibold text-white/90">Smart Clean</h1>
          <div className="w-10" />
        </div>

        {/* Filters */}
        <div className="px-6 mt-6 space-y-3 pb-32 animate-fade-in">
          {filterList.map((filter, index) => (
            <div 
              key={filter.key}
              style={{ animationDelay: `${index * 30}ms` }}
              className="animate-fade-in"
            >
              <FilterItem
                label={filter.label}
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
            disabled={loading}
            className="w-full py-5 rounded-full bg-gradient-primary text-white font-semibold text-[17px] flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-200 shadow-2xl disabled:opacity-70"
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
                <div className="absolute inset-0 bg-gradient-glow-purple blur-3xl animate-glow-pulse" />
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
