import { useState } from "react";
import { ChevronLeft, Trash2, Check, X, RotateCcw } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ReviewScreen = () => {
  const navigate = useNavigate();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState<Set<number>>(new Set());

  const photos = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    url: `https://picsum.photos/200/200?random=${i + 50}`,
    size: Math.floor(Math.random() * 5) + 1, // MB
  }));

  const togglePhoto = (id: number) => {
    const newSelected = new Set(selectedPhotos);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedPhotos(newSelected);
  };

  const handleDelete = () => {
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
      navigate("/");
    }, 3000);
  };

  const selectedCount = selectedPhotos.size;
  const totalSize = photos
    .filter(p => selectedPhotos.has(p.id))
    .reduce((sum, p) => sum + p.size, 0);

  return (
    <div className="min-h-screen bg-[#0A0A0F] pb-safe">
      <div className="pt-safe">
        {/* Header */}
        <div className="flex items-center justify-center px-6 py-6 relative">
          <Link to="/swipe" className="absolute left-6">
            <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:scale-110 transition-transform duration-200">
              <ChevronLeft className="w-5 h-5 text-white/90" />
            </button>
          </Link>
          <h1 className="text-lg font-semibold text-white/90">Review</h1>
        </div>

        {/* Photo Grid */}
        <div className="px-6 mt-6 pb-32">
          <div className="grid grid-cols-4 gap-2 animate-fade-in">
            {photos.map((photo, index) => {
              const isSelected = selectedPhotos.has(photo.id);
              return (
                <button
                  key={photo.id}
                  onClick={() => togglePhoto(photo.id)}
                  style={{ animationDelay: `${index * 20}ms` }}
                  className="relative aspect-square rounded-2xl overflow-hidden animate-fade-in group"
                >
                  <img
                    src={photo.url}
                    alt={`Photo ${photo.id}`}
                    className={`w-full h-full object-cover transition-all duration-200 ${
                      isSelected ? "scale-90" : "group-hover:scale-95"
                    }`}
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 transition-all duration-200 ${
                    isSelected 
                      ? "bg-gradient-to-br from-red-500/40 to-red-600/40" 
                      : "bg-black/0 group-hover:bg-black/20"
                  }`} />

                  {/* Selection Indicator */}
                  <div className={`absolute top-2 right-2 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    isSelected 
                      ? "bg-red-500 border-red-400 scale-100" 
                      : "bg-white/20 border-white/40 scale-0 group-hover:scale-100"
                  }`}>
                    {isSelected && <X className="w-4 h-4 text-white" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 px-6 py-6 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F] to-transparent">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-6 shadow-2xl">
            {/* Summary */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-2xl font-bold text-white/90">
                  {selectedCount} photos
                </p>
                <p className="text-sm text-white/60">
                  {totalSize.toFixed(1)} MB
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/60">
                  {photos.length - selectedCount} will remain
                </p>
              </div>
            </div>

            {/* Delete Button */}
            <button
              onClick={handleDelete}
              disabled={selectedCount === 0}
              className="w-full py-4 rounded-full bg-gradient-primary text-white font-semibold text-[17px] flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Trash2 className="w-5 h-5" />
              Delete Selected
            </button>
          </div>
        </div>
      </div>

      {/* Snackbar */}
      {showSnackbar && (
        <div className="fixed bottom-32 left-1/2 -translate-x-1/2 animate-fade-in z-50">
          <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-4 border border-white/20 shadow-2xl flex items-center gap-3">
            <Check className="w-5 h-5 text-green-400" />
            <span className="text-white/90 font-medium">
              Deleted · <button className="text-primary underline">Undo?</button>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewScreen;
