import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Clinical from "./pages/Clinical";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import Teaching from "./pages/Teaching";
import Gallery from "./pages/Gallery";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import WhatsAppFloat from "./components/ui/WhatsAppFloat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <WhatsAppFloat />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/clinical" element={<Clinical />} />
              <Route path="/research" element={<Research />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/teaching" element={<Teaching />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
