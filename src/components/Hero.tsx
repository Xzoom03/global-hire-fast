
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('request-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
            Find the Right Talent Faster
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            We help companies hire top-quality staff without the hassle.
          </p>
          <Button 
            onClick={scrollToForm} 
            size="lg" 
            className="mt-8 bg-secondary hover:bg-secondary/90 text-white font-medium px-8 py-3 rounded-md text-lg"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
