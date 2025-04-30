
import { Button } from "@/components/ui/button";
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('request-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Center the logo and tagline */}
        <div className="flex flex-col items-center justify-center mb-8">
          <h2 className="text-2xl font-bold">Find4Staff</h2>
          <p className="mt-2 text-gray-300">Find the Right Talent Faster</p>
        </div>
        
        {/* Social media section */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-8">
          <p className="text-lg font-medium mb-3 md:mb-0 md:mr-6">Find Us Here:</p>
          <div className="flex space-x-6">
            <a href="https://instagram.com" className="text-white hover:text-secondary transition-colors flex items-center">
              <Instagram className="w-6 h-6 mr-2" />
              <span className="hidden md:inline">Instagram</span>
            </a>
            <a href="https://wa.me/message" className="text-white hover:text-secondary transition-colors flex items-center">
              <Phone className="w-6 h-6 mr-2" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
            <a href="mailto:sales@find4staff.online" className="text-white hover:text-secondary transition-colors flex items-center">
              <Mail className="w-6 h-6 mr-2" />
              <span className="hidden md:inline">Email</span>
            </a>
          </div>
        </div>
        
        {/* Countries */}
        <div className="text-center mb-8">
          <p className="text-lg font-medium mb-2">Our Global Presence</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <span className="px-3 py-1 bg-primary-foreground/10 rounded-full text-sm">SERBIA</span>
            <span className="px-3 py-1 bg-primary-foreground/10 rounded-full text-sm">UAE</span>
            <span className="px-3 py-1 bg-primary-foreground/10 rounded-full text-sm">USA</span>
            <span className="px-3 py-1 bg-primary-foreground/10 rounded-full text-sm">GREECE</span>
            <span className="px-3 py-1 bg-primary-foreground/10 rounded-full text-sm">EUROPE</span>
          </div>
        </div>
        
        <hr className="my-8 border-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Button 
              onClick={scrollToForm} 
              variant="secondary"
              className="bg-secondary hover:bg-secondary/90"
            >
              Get Started
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Find4Staff. All rights reserved.
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <button 
                onClick={scrollToTop}
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
