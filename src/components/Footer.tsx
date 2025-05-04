import { Instagram, MessageSquare, Mail } from "lucide-react";
import ContactPopup from "./EmailPopup";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // WhatsApp URL with the provided phone number
  const whatsappUrl = "https://wa.me/17163421856";

  // Instagram URL
  const instagramUrl = "https://www.instagram.com/find4staff?igsh=OXVwMThjeHBmOGtu";
  return <footer className="footer-gradient text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Center all footer content */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center justify-center mb-6">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-highlight">Find4Staff</h2>
            <p className="mt-2 text-highlight-light">Find the Right Talent Faster</p>
          </div>
          
          {/* Social media section - Updated design with blue background and hover effects */}
          <div className="flex flex-col justify-center items-center mb-6" id="find-us-section">
            <div className="rounded-md px-6 py-3 flex items-center justify-center gap-6 md:gap-8 bg-sky-600">
              <p className="text-lg font-medium text-white">Find Us Here:</p>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-white flex items-center gap-2 hover:text-white hover:scale-110 transition-all duration-300">
                <Instagram className="w-5 h-5" />
                <span className="hidden md:inline">Instagram</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-white flex items-center gap-2 hover:text-white hover:scale-110 transition-all duration-300">
                <MessageSquare className="w-5 h-5" />
                <span className="hidden md:inline">WhatsApp</span>
              </a>
              <ContactPopup content="sales@find4staff.online" url="mailto:sales@find4staff.online" icon={<Mail className="w-5 h-5" />} label="Email" className="hover:scale-110 transition-all duration-300" />
            </div>
          </div>
          
          {/* Countries */}
          <div className="text-center mb-6">
            <p className="text-lg font-medium mb-2">Our Global Presence</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <span className="px-3 py-1 bg-gradient-to-r from-primary-light/30 to-primary/40 rounded-full text-sm shadow-sm">INDIA</span>
              <span className="px-3 py-1 bg-gradient-to-r from-primary-light/30 to-primary/40 rounded-full text-sm shadow-sm">SRI LANKA</span>
              <span className="px-3 py-1 bg-gradient-to-r from-primary-light/30 to-primary/40 rounded-full text-sm shadow-sm">USA</span>
              <span className="px-3 py-1 bg-gradient-to-r from-primary-light/30 to-primary/40 rounded-full text-sm shadow-sm">SERBIA</span>
              <span className="px-3 py-1 bg-gradient-to-r from-primary-light/30 to-primary/40 rounded-full text-sm shadow-sm">EUROPE</span>
              <span className="px-3 py-1 bg-gradient-to-r from-primary-light/30 to-primary/40 rounded-full text-sm shadow-sm">TURKEY</span>
            </div>
            
            {/* Copyright section moved here */}
            <div className="mt-6">
              <div className="text-gray-300 text-sm mb-2">
                &copy; 2019 Find4Staff. All rights reserved.
              </div>
              
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">
                  Terms of Service
                </a>
                <button onClick={scrollToTop} className="text-gray-300 hover:text-accent transition-colors text-sm">
                  Back to Top
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;