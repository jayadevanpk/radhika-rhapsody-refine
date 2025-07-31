import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log('App component is rendering...');
  
  return (
    <div style={{ padding: '20px', fontSize: '24px', color: 'red' }}>
      <h1>TEST - App is working!</h1>
      <p>If you see this, the app is loading correctly.</p>
    </div>
  );
};

export default App;
