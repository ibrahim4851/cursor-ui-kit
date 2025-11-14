import { useState } from "react";
import { ChevronLeft, Eye, Trash2, ArrowRight, Check, RotateCcw } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const SwipeScreen = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(null);
  const [undoStack, setUndoStack] = useState<Array<{ index: number; action: string }>>([]);

  const photos = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    url: `https://picsum.photos/400/600?random=${i}`,
  }));

  const handleSwipe = (direction: "left" | "right") => {
    setSwipeDirection(direction);
    setUndoStack([...undoStack, { index: currentIndex, action: direction }]);
    
    setTimeout(() => {
      if (currentIndex < photos.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        navigate("/review");
      }
      setSwipeDirection(null);
    }, 300);
  };

  const handleUndo = () => {
    if (undoStack.length > 0) {
      const newStack = [...undoStack];
      newStack.pop();
      setUndoStack(newStack);
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  const currentPhoto = photos[currentIndex];
  const progress = ((currentIndex + 1) / photos.length) * 100;

  return (
    <div className="min-h-screen bg-[#0A0A0F] pb-safe overflow-hidden">
      <div className="pt-safe">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6">
          <Link to="/smart-clean">
            <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:scale-110 transition-transform duration-200">
              <ChevronLeft className="w-5 h-5 text-white/90" />
            </button>
          </Link>
          <button 
            onClick={() => navigate("/review")}
            className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium hover:scale-105 transition-transform duration-200"
          >
            Review
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 mb-6">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/60 text-sm mt-2 text-center">
            {currentIndex + 1} / {photos.length}
          </p>
        </div>

        {/* Photo Card */}
        <div className="flex items-center justify-center px-6 py-8">
          <div className="relative w-full max-w-sm">
            {/* Glow Effects */}
            {swipeDirection === "right" && (
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-glow-green blur-3xl animate-glow-pulse z-0" />
            )}
            {swipeDirection === "left" && (
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-glow-red blur-3xl animate-glow-pulse z-0" />
            )}

            {/* Card */}
            <div 
              className={`relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 transition-all duration-300 ${
                swipeDirection === "left" ? "animate-[slide-out-left_0.3s_ease-out]" : 
                swipeDirection === "right" ? "animate-[slide-out-right_0.3s_ease-out]" : 
                "animate-fade-in"
              }`}
            >
              <img 
                src={currentPhoto.url} 
                alt={`Photo ${currentPhoto.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
              
              {/* Swipe Indicators */}
              {swipeDirection === "right" && (
                <div className="absolute inset-0 flex items-center justify-center bg-green-500/20 animate-fade-in">
                  <div className="w-24 h-24 rounded-full bg-green-500/40 backdrop-blur-sm border-4 border-green-400 flex items-center justify-center">
                    <Check className="w-12 h-12 text-green-400" />
                  </div>
                </div>
              )}
              {swipeDirection === "left" && (
                <div className="absolute inset-0 flex items-center justify-center bg-red-500/20 animate-fade-in">
                  <div className="w-24 h-24 rounded-full bg-red-500/40 backdrop-blur-sm border-4 border-red-400 flex items-center justify-center">
                    <Trash2 className="w-12 h-12 text-red-400" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-6 px-6 mt-12">
          <button
            onClick={() => handleSwipe("left")}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm border border-red-500/40 flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg"
          >
            <Trash2 className="w-7 h-7 text-red-400" />
          </button>

          <button
            onClick={() => {
              if (currentIndex < photos.length - 1) {
                setCurrentIndex(currentIndex + 1);
              } else {
                navigate("/review");
              }
            }}
            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:scale-110 transition-all duration-200"
          >
            <ArrowRight className="w-6 h-6 text-white/90" />
          </button>

          <button
            onClick={() => handleSwipe("right")}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-500/40 flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg"
          >
            <Check className="w-7 h-7 text-green-400" />
          </button>
        </div>

        {/* Floating Undo Button */}
        {undoStack.length > 0 && (
          <button
            onClick={handleUndo}
            className="fixed bottom-8 left-6 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg animate-fade-in z-50"
          >
            <RotateCcw className="w-6 h-6 text-white/90" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SwipeScreen;
