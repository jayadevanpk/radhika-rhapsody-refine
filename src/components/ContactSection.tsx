import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Book a concert or enrol to learn!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contact us below to book a concert, or enrol to learn Carnatic music from basic to intermediate and advanced levels.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Card className="p-8 shadow-soft border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-0 space-y-6">
                <h3 className="text-2xl font-display font-semibold text-foreground">
                  Get in Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">contact@radhikasings.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">Available upon request</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Locations</p>
                      <p className="text-muted-foreground">India & UK</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-display font-semibold text-foreground">
                What We Offer
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Concert Performances</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Music Lessons (Basic to Advanced)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Academic Collaborations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Workshop & Lecture Demonstrations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="animate-scale-in" style={{animationDelay: '0.4s'}}>
            <Card className="p-8 shadow-elegant border-0 bg-gradient-primary text-primary-foreground">
              <CardContent className="p-0 text-center space-y-8">
                <h3 className="text-3xl font-display font-bold">
                  Start Your Musical Journey
                </h3>
                
                <p className="text-lg opacity-90 leading-relaxed">
                  Whether you're looking to book a performance or begin learning the beautiful 
                  art of Carnatic music, we're here to help you take the next step.
                </p>

                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-soft text-lg font-medium py-6"
                  >
                    Contact Us
                  </Button>
                  
                  <p className="text-sm opacity-80">
                    Response within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;