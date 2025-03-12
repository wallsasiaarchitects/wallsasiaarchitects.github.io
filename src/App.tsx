
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Article1 from "./pages/articles/Article1";
import Article2 from "./pages/articles/Article2";
import Article3 from "./pages/articles/Article3";
import Article4 from "./pages/articles/Article4";
import Article5 from "./pages/articles/Article5";
import Article6 from "./pages/articles/Article6";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog/modern-home-designs" element={<Article1 />} />
              <Route path="/blog/commercial-architecture-trends" element={<Article2 />} />
              <Route path="/blog/sustainable-architecture" element={<Article3 />} />
              <Route path="/blog/office-interior-design" element={<Article4 />} />
              <Route path="/blog/construction-materials" element={<Article5 />} />
              <Route path="/blog/hyderabad-architectural-heritage" element={<Article6 />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
