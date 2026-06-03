import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import QueueTopCaseStudy from "./pages/work/QueueTop.tsx";
import RiSwiftCaseStudy from "./pages/work/RiSwift.tsx";
import RevolutCaseStudy from "./pages/work/Revolut.tsx";
import AtelierCaseStudy from "./pages/work/Atelier.tsx";
import VirexCaseStudy from "./pages/work/Virex.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work/queuetop" element={<QueueTopCaseStudy />} />
          <Route path="/work/riswift" element={<RiSwiftCaseStudy />} />
          <Route path="/work/revolut" element={<RevolutCaseStudy />} />
          <Route path="/work/atelier" element={<AtelierCaseStudy />} />
          <Route path="/work/virex" element={<VirexCaseStudy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
