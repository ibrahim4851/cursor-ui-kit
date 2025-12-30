import { useState, useEffect } from "react";
import { FileText, Mountain, User, Folder, Trash2 } from "lucide-react";

type PhotoType = "document" | "landscape" | "portrait";
type Phase = "onBelt" | "enteringMachine" | "analyzing" | "exiting" | "done";

interface PhotoItem {
  id: number;
  type: PhotoType;
  phase: Phase;
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
        phase: "onBelt"
      };
      
      setPhotos(prev => [...prev.slice(-3), newPhoto]);
      
      // Enter machine
      setTimeout(() => {
        setPhotos(prev => 
          prev.map(p => p.id === newPhoto.id ? { ...p, phase: "enteringMachine" } : p)
        );
      }, 600);
      
      // Analyzing inside machine
      setTimeout(() => {
        setPhotos(prev => 
          prev.map(p => p.id === newPhoto.id ? { ...p, phase: "analyzing" } : p)
        );
      }, 900);
      
      // Exit machine
      setTimeout(() => {
        setPhotos(prev => 
          prev.map(p => p.id === newPhoto.id ? { ...p, phase: "exiting" } : p)
        );
      }, 1400);
      
      // Done
      setTimeout(() => {
        setPhotos(prev => 
          prev.map(p => p.id === newPhoto.id ? { ...p, phase: "done" } : p)
        );
      }, 2000);
    };

    spawnPhoto();
    const interval = setInterval(spawnPhoto, 2200);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center overflow-hidden">
      {/* Conveyor belt - Left (input) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[calc(50%-48px)] h-3 flex items-center">
        <div className="w-full h-full bg-muted/30 rounded-r-sm relative overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="w-4 h-1 bg-muted-foreground/20 rounded-full mx-2 animate-[conveyorLeft_1s_linear_infinite]"
                style={{ animationDelay: `${i * 0.08}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Conveyor belt - Right (trash) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[calc(50%-48px)] h-3 flex items-center">
        <div className="w-full h-full bg-muted/30 rounded-l-sm relative overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="w-4 h-1 bg-muted-foreground/20 rounded-full mx-2 animate-[conveyorRight_1s_linear_infinite]"
                style={{ animationDelay: `${i * 0.08}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Conveyor belt - Top (documents) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[calc(50%-48px)] w-3 flex flex-col items-center">
        <div className="w-full h-full bg-muted/30 rounded-b-sm relative overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="h-4 w-1 bg-muted-foreground/20 rounded-full my-2 animate-[conveyorUp_1s_linear_infinite]"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Folder destination (top) */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
          <Folder size={28} className="text-primary" />
        </div>
      </div>

      {/* Trash destination (right) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2">
        <div className="p-3 rounded-xl bg-muted/50 border border-border">
          <Trash2 size={24} className="text-muted-foreground" />
        </div>
      </div>

      {/* Machine (center) */}
      <div className="relative w-24 h-24 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center z-10">
        {/* Inner glow effect */}
        <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-primary/5 to-transparent" />
        
        {/* Scan line */}
        <div className="absolute inset-x-3 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-[scanVertical_1.5s_ease-in-out_infinite]" />
        
        {/* Machine dots */}
        <div className="absolute top-2 right-2 flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
        </div>

        {/* Photos inside machine */}
        {photos.map(photo => (
          <PhotoItem key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

const PhotoItem = ({ photo }: { photo: PhotoItem }) => {
  const isDocument = photo.type === "document";
  
  const getPosition = (): React.CSSProperties => {
    switch (photo.phase) {
      case "onBelt":
        return {
          transform: "translateX(-140px)",
          opacity: 1,
        };
      case "enteringMachine":
        return {
          transform: "translateX(0)",
          opacity: 1,
        };
      case "analyzing":
        return {
          transform: "translateX(0) scale(1.1)",
          opacity: 1,
        };
      case "exiting":
        if (isDocument) {
          return {
            transform: "translateY(-140px)",
            opacity: 1,
          };
        } else {
          return {
            transform: "translateX(140px)",
            opacity: 0.6,
          };
        }
      case "done":
        return {
          transform: isDocument ? "translateY(-180px)" : "translateX(180px)",
          opacity: 0,
        };
      default:
        return {};
    }
  };

  const getIcon = () => {
    const isAnalyzing = photo.phase === "analyzing";
    const baseClass = `transition-all duration-200 ${isAnalyzing ? "text-primary" : "text-foreground/70"}`;
    
    switch (photo.type) {
      case "document":
        return <FileText size={24} className={baseClass} />;
      case "landscape":
        return <Mountain size={24} className={baseClass} />;
      case "portrait":
        return <User size={24} className={baseClass} />;
    }
  };

  return (
    <div 
      className="absolute transition-all duration-500 ease-out"
      style={getPosition()}
    >
      <div className={`p-2 rounded-lg bg-background/80 border border-border/50 shadow-sm ${
        photo.phase === "analyzing" ? "ring-2 ring-primary/30 shadow-primary/20 shadow-lg" : ""
      }`}>
        {getIcon()}
      </div>
    </div>
  );
};

export default DocumentSortingLoader;
