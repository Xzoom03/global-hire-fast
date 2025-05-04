
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const scrollToFooter = () => {
    const footerElement = document.querySelector('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-primary text-xl font-bold">Find4Staff</h1>
          </Link>
        </div>
        
        <div className="flex gap-3">
          <Button 
            onClick={scrollToFooter} 
            variant="outline" 
            className="flex items-center gap-2 hover:bg-secondary-light"
          >
            FIND US
          </Button>
          
          <Link to="/contact" className="transition-all duration-300 hover:scale-105">
            <Button 
              variant="outline" 
              className="flex items-center gap-2 bg-primary hover:bg-primary-light text-white"
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
