import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Radhika's incredible talent and unparalleled voice are only matched by her warmth, generosity, and enthusiasm for teaching others about the music she practices so well.",
      author: "Isaac Boulter",
      title: "Masters of Music, Royal Birmingham Conservatoire"
    },
    {
      quote: "Her creative energy, sheer positivity and an excellent ability to connect with students and staff alike, notwithstanding her evident abilities as a musician, have been behind the success of her time with us.",
      author: "Prof Shirley Thompson",
      title: "Vice Principal (Music), Royal Birmingham Conservatoire"
    },
    {
      quote: "I really enjoyed performing alongside Radhika. The beauty and intricacy of Indian Classical music was very inspiring!",
      author: "Charlotte Atkinson",
      title: "Student, Royal Conservatoire Of Birmingham"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative p-8 border-0 shadow-soft hover:shadow-elegant transition-all duration-500 bg-card/80 backdrop-blur-sm animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-0 space-y-6">
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/30" />
                  <p className="text-foreground leading-relaxed italic pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary font-display">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {testimonial.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;