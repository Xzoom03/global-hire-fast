
import { Button } from "@/components/ui/button";

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
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Find4Staff</h2>
            <p className="mt-2 text-gray-300">Finding the right talent worldwide.</p>
          </div>
          
          <div>
            <Button 
              onClick={scrollToForm} 
              variant="secondary"
              className="bg-secondary hover:bg-secondary/90"
            >
              Get Started
            </Button>
          </div>
        </div>
        
        <hr className="my-8 border-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Find4Staff. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Terms of Service
            </a>
            <button 
              onClick={scrollToTop}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
