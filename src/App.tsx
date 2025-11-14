import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import MainScreen from "./components/MainScreen";
import SmartCleanScreen from "./components/SmartCleanScreen";
import SwipeScreen from "./components/SwipeScreen";
import ReviewScreen from "./components/ReviewScreen";
import SettingsScreen from "./components/SettingsScreen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<MainScreen />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/smart-clean" element={<SmartCleanScreen />} />
          <Route path="/swipe" element={<SwipeScreen />} />
          <Route path="/review" element={<ReviewScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
