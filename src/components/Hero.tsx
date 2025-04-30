
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('request-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-28 bg-gradient-to-b from-highlight to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
            Find the Right Talent Faster
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
            We help companies hire top-quality staff without the hassle.
          </p>
          <div className="flex gap-4">
            <Button 
              onClick={scrollToForm} 
              size="lg" 
              className="mt-4 bg-secondary hover:bg-secondary/90 text-white font-medium px-8 py-3 rounded-md text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-primary-light">
            <div className="flex items-center px-4 py-2 bg-white/80 rounded-full shadow-sm">
              <span className="font-semibold text-primary mr-2">10,000+</span> Roles Filled
            </div>
            <div className="flex items-center px-4 py-2 bg-white/80 rounded-full shadow-sm">
              <span className="font-semibold text-primary mr-2">50+</span> Industries Served
            </div>
            <div className="flex items-center px-4 py-2 bg-white/80 rounded-full shadow-sm">
              <span className="font-semibold text-primary mr-2">Global</span> Reach
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
