import { useState, useEffect } from "react";
import { FileText, Mountain, User, Settings } from "lucide-react";

type PhotoType = "document" | "landscape" | "portrait";

interface PhotoItem {
  id: number;
  type: PhotoType;
  phase: "entering" | "scanning" | "sorting" | "done";
}

const DocumentSortingLoader = () => {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);

  useEffect(() => {
    let photoId = 0;
    const types: PhotoType[] = ["document", "landscape", "portrait"];
    
    const spawnPhoto = () => {
      const type = types[Math.floor(Math.random() * types.length)];
      const newPhoto: PhotoItem = {
        id: photoId++,
        type,
        phase: "entering"
      };
      
      setPhotos(prev => [...prev.slice(-4), newPhoto]);
      
      setTimeout(() => {
        setPhotos(prev => 
          prev.map(p => p.id === newPhoto.id ? { ...p, phase: "scanning" } : p)
        );
      }, 400);
      
      setTimeout(() => {
        setPhotos(prev => 
          prev.map(p => p.id === newPhoto.id ? { ...p, phase: "sorting" } : p)
        );
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
          <div className="absolute -left-16 -top-8 opacity-[0.04]">
            <Settings 
              size={120} 
              className="animate-[spin_12s_linear_infinite]"
              strokeWidth={1}
            />
          </div>
          <div className="absolute -right-12 top-4 opacity-[0.04]">
            <Settings 
              size={80} 
              className="animate-[spin_8s_linear_infinite_reverse]"
              strokeWidth={1}
            />
          </div>
        </div>
      </div>

      {/* Document destination - top */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2">
        <FileText size={28} className="text-primary/40" />
      </div>

      {/* Photo destination - right */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        <Mountain size={24} className="text-muted-foreground/30" />
        <User size={24} className="text-muted-foreground/30" />
      </div>

      {/* Sorting area */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        <div className="absolute w-16 h-16 rounded-full border border-foreground/5 bg-foreground/[0.02]" />
        
        {photos.map(photo => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

const PhotoCard = ({ photo }: { photo: PhotoItem }) => {
  const isDocument = photo.type === "document";
  
  const getStyles = (): string => {
    const base = "absolute transition-all duration-500 ease-out";
    
    switch (photo.phase) {
      case "entering":
        return `${base} -translate-x-40 opacity-0 scale-90`;
      case "scanning":
        return `${base} translate-x-0 opacity-100 scale-100`;
      case "sorting":
        if (isDocument) {
          return `${base} -translate-y-36 opacity-100 scale-90`;
        } else {
          return `${base} translate-x-36 opacity-0 scale-75`;
        }
      case "done":
        return `${base} opacity-0 pointer-events-none`;
      default:
        return base;
    }
  };

  const getGlowStyles = (): string => {
    if (photo.phase === "scanning") {
      return isDocument 
        ? "drop-shadow-[0_0_12px_rgba(177,108,234,0.5)]"
        : "drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]";
    }
    return "";
  };

  const renderIcon = () => {
    const baseClass = `transition-all duration-300 ${getGlowStyles()}`;
    const color = photo.phase === "scanning" 
      ? (isDocument ? "text-primary" : "text-foreground/70")
      : "text-muted-foreground/60";
    
    switch (photo.type) {
      case "document":
        return <FileText size={32} className={`${baseClass} ${color}`} />;
      case "landscape":
        return <Mountain size={32} className={`${baseClass} ${color}`} />;
      case "portrait":
        return <User size={32} className={`${baseClass} ${color}`} />;
    }
  };

  return (
    <div className={getStyles()}>
      {renderIcon()}
      
      {photo.phase === "scanning" && isDocument && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-primary/10 animate-ping" />
        </div>
      )}
    </div>
  );
};

export default DocumentSortingLoader;
