
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFooter = () => {
    const footerElement = document.querySelector('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`py-4 sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md' 
        : 'bg-white shadow-sm'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent text-xl font-bold hover:scale-105 transition-transform">Find<span className="text-accent">4</span>Staff</h1>
          </Link>
        </div>
        
        <div className="flex gap-3">
          <Button 
            onClick={scrollToFooter} 
            variant="outline" 
            className="flex items-center gap-2 border-highlight hover:border-secondary hover:bg-secondary-light/20 transition-all duration-300"
          >
            FIND US
          </Button>
          
          <Link to="/contact" className="transition-all duration-300 hover:scale-105">
            <Button 
              variant="outline" 
              className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-white"
            >
              <MessageCircle className="w-4 h-4" /> 
              CONTACT US
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
