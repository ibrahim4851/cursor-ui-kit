import { ChevronLeft, ChevronRight, Bell, Lock, Palette, Info, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const SettingItem = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  onClick 
}: { 
  icon: any; 
  title: string; 
  subtitle?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:scale-[1.01] transition-all duration-200 group"
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
        <Icon className="w-5 h-5 text-white/90" />
      </div>
      <div className="flex-1 text-left">
        <p className="text-white/90 font-medium">{title}</p>
        {subtitle && <p className="text-white/60 text-sm">{subtitle}</p>}
      </div>
      <ChevronRight className="w-5 h-5 text-white/40" />
    </button>
  );
};

const SettingsScreen = () => {
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
          <h1 className="text-lg font-semibold text-white/90">Settings</h1>
          <div className="w-10" />
        </div>

        {/* Settings */}
        <div className="px-6 mt-8 space-y-3 animate-fade-in">
          <SettingItem
            icon={Bell}
            title="Notifications"
            subtitle="Manage your notifications"
          />
          <SettingItem
            icon={Lock}
            title="Privacy & Security"
            subtitle="Control your privacy"
          />
          <SettingItem
            icon={Palette}
            title="Appearance"
            subtitle="Customize the look"
          />
          <SettingItem
            icon={Info}
            title="About"
            subtitle="Version 1.0.0"
          />
          <SettingItem
            icon={Heart}
            title="Rate Us"
            subtitle="Show some love"
          />
        </div>

        {/* Storage Info */}
        <div className="px-6 mt-8">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 p-6">
            <h3 className="text-white/90 font-semibold mb-4">Storage</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-white/60 text-sm">Photos cleaned</span>
                <span className="text-white/90 font-medium">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60 text-sm">Space recovered</span>
                <span className="text-white/90 font-medium">8.4 GB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;
