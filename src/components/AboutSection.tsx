import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            About
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Card className="p-8 shadow-soft border-0 bg-card/80 backdrop-blur-sm">
              <p className="text-lg leading-relaxed text-foreground">
                <span className="font-semibold text-primary">Radhika Balakrishnan</span> is a distinguished Carnatic vocalist 
                with over 15 years of experience, recognized for her performances across India and UK. 
                She holds a doctorate in music and contributes as an academic and guru.
              </p>
            </Card>

            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Musical Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Her journey spans traditional concerts, innovative collaborations, and educational initiatives. 
                Radhika's approach bridges the gap between classical tradition and contemporary expression, 
                making Carnatic music accessible to diverse audiences while preserving its authentic essence.
              </p>
            </div>

            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-2 gap-4 animate-scale-in" style={{animationDelay: '0.4s'}}>
            <div className="space-y-4">
              <div className="aspect-[4/5] bg-muted rounded-xl overflow-hidden shadow-soft">
                <img
                  src="https://radhikasings.com/wp-content/uploads/2024/07/Inside-Image-a-884x1024.jpg"
                  alt="Radhika performing"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] bg-muted rounded-xl overflow-hidden shadow-soft">
                <img
                  src="https://radhikasings.com/wp-content/uploads/2024/06/Inside-Image1-1024x683.jpg"
                  alt="Musical performance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="space-y-4 mt-8">
              <div className="aspect-[4/3] bg-muted rounded-xl overflow-hidden shadow-soft">
                <img
                  src="https://radhikasings.com/wp-content/uploads/2024/06/Inside-Image3-1024x747.jpg"
                  alt="Academic setting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/5] bg-muted rounded-xl overflow-hidden shadow-soft">
                <img
                  src="https://radhikasings.com/wp-content/uploads/2024/07/Inside-Image-b-1-1024x683.jpg"
                  alt="Teaching session"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;