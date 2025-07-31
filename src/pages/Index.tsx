import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  console.log('Index page is rendering...');
  
  return (
    <div className="min-h-screen">
      <div style={{ padding: '20px', fontSize: '18px', color: 'blue' }}>
        <h2>Index page loaded successfully!</h2>
        <p>Now testing components one by one...</p>
      </div>
      <Navigation />
    </div>
  );
};

export default Index;
