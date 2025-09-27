import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeviceVerification from "./pages/deviceVerification";
import EmailDashboard from "./pages/EmailDashboard"; // Import the updated dashboard
import NotFound from "./pages/NotFound";
import Cards from "./pages/Cards";
import AboutPage from "./pages/AboutPage";

const queryClient = new QueryClient();

import NavBar from "./pages/NavBar";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/:name/verification" element={<DeviceVerification />} />
          <Route path="/dashboard/:emailAddress" element={<EmailDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
