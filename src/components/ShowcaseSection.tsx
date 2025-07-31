import { Card, CardContent } from "@/components/ui/card";

const ShowcaseSection = () => { // Updated images
  const showcaseItems = [
    {
      title: "East Side Jazz Club",
      description: '"Global Traditions: A concert series of folk music from around the world" hosted by Royal Birmingham Conservatoire.',
      image: "/lovable-uploads/c5219dcb-1805-4ac9-9a6d-82368802f296.png",
      category: "Performance"
    },
    {
      title: "Lecture Demo",
      description: "Lecture demo on the influence of Nagaswaram on Carnatic Music with Vid K N Surendra at Gayana Samaja, Bangalore.",
      image: "/lovable-uploads/6f3651fa-33a1-407b-a4e5-2f18095446cd.png",
      category: "Academic"
    },
    {
      title: "Teacher's Training",
      description: "Teacher's training for ARCO Project teachers who train Sunshine Orchestra, founded by A R Rahman.",
      image: "/lovable-uploads/60bd2ed3-cb9c-4e9c-bb14-1a0ba1ffdf33.png",
      category: "Education"
    },
    {
      title: "Carnatic Concerts",
      description: "Performing a carnatic music concert at the Sarvani Sangeeth Sabha, Bangalore",
      image: "/lovable-uploads/cf799458-3add-4559-b5ea-1af74f220c7b.png",
      category: "Performance"
    }
  ];

  return (
    <section id="showcase" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Radhika's work ranges from performing, to academic pursuits and teaching.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {showcaseItems.map((item, index) => (
            <Card 
              key={item.title} 
              className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-500 bg-card/80 backdrop-blur-sm animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-sm font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;