import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] flex flex-col items-center justify-center px-6">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-white/90">
          Photo Cleaner
        </h1>
        <div className="space-y-4">
          <Link to="/onboarding">
            <button className="w-full px-8 py-4 rounded-full bg-gradient-primary text-white font-semibold text-lg hover:scale-105 transition-transform duration-200">
              View Onboarding
            </button>
          </Link>
          <Link to="/main">
            <button className="w-full px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg hover:scale-105 transition-transform duration-200">
              Go to Main App
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
