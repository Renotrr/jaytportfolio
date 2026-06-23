import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import QueueTopCaseStudy from "./pages/work/QueueTop.tsx";
import GrowthBotCaseStudy from "./pages/work/GrowthBot.tsx";
import AtelierCaseStudy from "./pages/work/Atelier.tsx";

// Scroll to top on case study routes; the portfolio ("/") restores its own
// scroll position when returning from a case study.
const ScrollManager = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname !== "/") window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work/queuetop" element={<QueueTopCaseStudy />} />
          <Route path="/work/growthbot" element={<GrowthBotCaseStudy />} />
          <Route path="/work/atelier" element={<AtelierCaseStudy />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
