
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RequestForm from "@/components/RequestForm";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-highlight/30 via-secondary-light/20 to-white font-sans">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
              <p className="text-xl text-gray-600 mb-6">
                We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help.
              </p>
              
              <Card className="bg-white/80 shadow-md border-0 backdrop-blur-sm mb-8">
                <CardContent className="p-6 text-center">
                  <p className="text-gray-700 mb-4">
                    At <span className="font-bold text-primary">Find4Staff</span>, we specialize in global staff recruitment, connecting businesses with top-tier talent worldwide.
                  </p>
                  <p className="text-gray-700">
                    Ready to find the right talent? Fill out our onboarding form, and let's start the journey together.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Card className="bg-gradient-to-br from-white to-highlight/30 shadow-md border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-3">Our team will respond within 24 hours</p>
                  <a href="mailto:sales@find4staff.online" className="text-accent font-medium hover:underline">
                    sales@find4staff.online
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-white to-accent/20 shadow-md border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/10 text-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-accent mb-2">WhatsApp</h3>
                  <p className="text-gray-600 mb-3">Message us directly for immediate assistance</p>
                  <a href="https://wa.me/17163421856" target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">
                    +1 716 342 1856
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-white to-primary/20 shadow-md border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Instagram className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Instagram</h3>
                  <p className="text-gray-600 mb-3">Follow us for updates and opportunities</p>
                  <a href="https://www.instagram.com/find4staff?igsh=OXVwMThjeHBmOGtu" target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">
                    @find4staff
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <RequestForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
