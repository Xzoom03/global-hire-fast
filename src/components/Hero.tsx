
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToShowcase = () => {
    const showcaseElement = document.getElementById('recruitment-showcase');
    if (showcaseElement) {
      showcaseElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-28 bg-gradient-to-b from-secondary-light to-highlight relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-accent/20 blur-xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
            Find the Right Talent <span className="text-accent">Faster</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
            We help companies hire top-quality staff without the hassle.
          </p>
          <div className="flex gap-4">
            <Button 
              onClick={scrollToShowcase} 
              size="lg" 
              className="mt-4 bg-primary hover:bg-primary-light text-white font-medium px-8 py-3 rounded-md text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Explore Services
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm">
            <div className="flex items-center px-4 py-2 bg-white/80 rounded-full shadow-md border border-gray-100 transition-transform hover:scale-105">
              <span className="font-semibold text-primary mr-2">10,000+</span> Roles Filled
            </div>
            <div className="flex items-center px-4 py-2 bg-white/80 rounded-full shadow-md border border-gray-100 transition-transform hover:scale-105">
              <span className="font-semibold text-primary mr-2">50+</span> Industries Served
            </div>
            <div className="flex items-center px-4 py-2 bg-white/80 rounded-full shadow-md border border-gray-100 transition-transform hover:scale-105">
              <span className="font-semibold text-primary mr-2">Global</span> Reach
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
