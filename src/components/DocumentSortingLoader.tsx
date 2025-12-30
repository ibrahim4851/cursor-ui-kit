import { useState, useEffect } from "react";
import { FileText, User, Settings } from "lucide-react";

interface PhotoItem {
  id: number;
  isDocument: boolean;
  phase: "entering" | "scanning" | "sorting" | "done";
}

const DocumentSortingLoader = () => {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [documentCount, setDocumentCount] = useState(0);

  useEffect(() => {
    let photoId = 0;
    
    const spawnPhoto = () => {
      const isDocument = Math.random() > 0.5;
      const newPhoto: PhotoItem = {
        id: photoId++,
        isDocument,
        phase: "entering"
      };
      
      setPhotos(prev => [...prev.slice(-4), newPhoto]);
      
      // Phase transitions
      setTimeout(() => {
        setPhotos(prev => 
          prev.map(p => p.id === newPhoto.id ? { ...p, phase: "scanning" } : p)
        );
      }, 400);
      
      setTimeout(() => {
        setPhotos(prev => 
          prev.map(p => p.id === newPhoto.id ? { ...p, phase: "sorting" } : p)
        );
        if (isDocument) {
          setDocumentCount(prev => prev + 1);
        }
      }, 900);
      
      setTimeout(() => {
        setPhotos(prev => 
          prev.map(p => p.id === newPhoto.id ? { ...p, phase: "done" } : p)
        );
      }, 1400);
    };

    spawnPhoto();
    const interval = setInterval(spawnPhoto, 1600);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center overflow-hidden">
      {/* Background gears */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          {/* Left gear */}
          <div className="absolute -left-16 -top-8 opacity-[0.04]">
            <Settings 
              size={120} 
              className="animate-[spin_12s_linear_infinite]"
              strokeWidth={1}
            />
          </div>
          {/* Right gear */}
          <div className="absolute -right-12 top-4 opacity-[0.04]">
            <Settings 
              size={80} 
              className="animate-[spin_8s_linear_infinite_reverse]"
              strokeWidth={1}
            />
          </div>
        </div>
      </div>

      {/* Document stack destination */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="relative">
          <div className="w-12 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-sm">
            <FileText size={20} className="text-primary/60" />
          </div>
          {/* Stacked effect */}
          <div className="absolute -bottom-1 -right-1 w-12 h-14 rounded-lg bg-primary/5 border border-primary/10 -z-10" />
          <div className="absolute -bottom-2 -right-2 w-12 h-14 rounded-lg bg-primary/[0.02] border border-primary/5 -z-20" />
          
          {/* Count badge */}
          {documentCount > 0 && (
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium animate-scale-in">
              {documentCount}
            </div>
          )}
        </div>
      </div>

      {/* Sorting area */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Center scan zone indicator */}
        <div className="absolute w-20 h-20 rounded-2xl border border-foreground/5 bg-foreground/[0.02]" />
        
        {/* Photo items */}
        {photos.map(photo => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>

      {/* Discard zone indicator (subtle) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
        <User size={24} className="text-muted-foreground" />
      </div>
    </div>
  );
};

const PhotoCard = ({ photo }: { photo: PhotoItem }) => {
  const getStyles = (): string => {
    const base = "absolute w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ease-out";
    
    switch (photo.phase) {
      case "entering":
        return `${base} translate-y-40 opacity-0 scale-90`;
      case "scanning":
        return `${base} translate-y-0 opacity-100 scale-100`;
      case "sorting":
        if (photo.isDocument) {
          return `${base} -translate-y-32 opacity-100 scale-75`;
        } else {
          return `${base} translate-x-32 opacity-0 scale-75`;
        }
      case "done":
        return `${base} opacity-0 pointer-events-none`;
      default:
        return base;
    }
  };

  const getBgStyles = (): string => {
    if (photo.phase === "scanning") {
      return photo.isDocument 
        ? "bg-primary/20 border-primary/30 shadow-[0_0_20px_rgba(177,108,234,0.2)]"
        : "bg-secondary/30 border-secondary/40";
    }
    return "bg-card/50 border-border/30";
  };

  return (
    <div className={`${getStyles()} border backdrop-blur-sm ${getBgStyles()}`}>
      {photo.isDocument ? (
        <FileText 
          size={22} 
          className={`transition-colors duration-300 ${
            photo.phase === "scanning" ? "text-primary" : "text-muted-foreground"
          }`}
        />
      ) : (
        <User 
          size={22} 
          className={`transition-colors duration-300 ${
            photo.phase === "scanning" ? "text-secondary-foreground" : "text-muted-foreground"
          }`}
        />
      )}
      
      {/* Scan sweep effect */}
      {photo.phase === "scanning" && (
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-[scan_0.5s_ease-out]"
            style={{
              animation: "scan 0.5s ease-out"
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DocumentSortingLoader;
