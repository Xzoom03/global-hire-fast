
import { Instagram, MessageCircle, Phone, Mail } from "lucide-react";
import ContactPopup from "./EmailPopup";

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

  // WhatsApp URL with the provided phone number
  const whatsappUrl = "https://wa.me/17163421856";

  // Instagram URL
  const instagramUrl = "https://www.instagram.com/find4staff?igsh=OXVwMThjeHBmOGtu";

  return (
    <footer className="bg-gradient-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Center all footer content */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center justify-center mb-8">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-highlight">Find4Staff</h2>
            <p className="mt-2 text-highlight-light">Find the Right Talent Faster</p>
          </div>
          
          {/* Social media section */}
          <div className="flex flex-col md:flex-row justify-center items-center mb-8">
            <p className="text-lg font-medium mb-3 md:mb-0 md:mr-6">Find Us Here:</p>
            <div className="flex space-x-6">
              <ContactPopup 
                icon={<Instagram className="w-6 h-6 mr-2 text-accent hover:text-accent-light" />}
                content="@find4staff"
                url={instagramUrl}
                label="Instagram"
              />
              <ContactPopup 
                icon={<Phone className="w-6 h-6 mr-2 text-accent hover:text-accent-light" />}
                content="+1 (716) 342-1856"
                url={whatsappUrl}
                label="WhatsApp"
              />
              <ContactPopup 
                icon={<Mail className="w-6 h-6 mr-2 text-accent hover:text-accent-light" />}
                content="sales@find4staff.online"
                label="Email"
              />
            </div>
          </div>
          
          {/* Countries */}
          <div className="text-center mb-8">
            <p className="text-lg font-medium mb-2">Our Global Presence</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <span className="px-3 py-1 bg-gradient-to-r from-primary-light/30 to-primary/40 rounded-full text-sm shadow-sm">INDIA</span>
              <span className="px-3 py-1 bg-gradient-to-r from-primary-light/30 to-primary/40 rounded-full text-sm shadow-sm">SRI LANKA</span>
              <span className="px-3 py-1 bg-gradient-to-r from-primary-light/30 to-primary/40 rounded-full text-sm shadow-sm">USA</span>
              <span className="px-3 py-1 bg-gradient-to-r from-primary-light/30 to-primary/40 rounded-full text-sm shadow-sm">GREECE</span>
              <span className="px-3 py-1 bg-gradient-to-r from-primary-light/30 to-primary/40 rounded-full text-sm shadow-sm">EUROPE</span>
              <span className="px-3 py-1 bg-gradient-to-r from-primary-light/30 to-primary/40 rounded-full text-sm shadow-sm">TURKEY</span>
            </div>
          </div>
          
          <hr className="w-full my-8 border-gray-700" />
          
          <div className="flex flex-col items-center">
            <div className="text-gray-300 text-sm mb-4">
              &copy; 2019 Find4Staff. All rights reserved.
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">
                Terms of Service
              </a>
              <button 
                onClick={scrollToTop}
                className="text-gray-300 hover:text-accent transition-colors text-sm"
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
