
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RequestForm from "@/components/RequestForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-highlight/30 via-secondary-light/20 to-white font-sans">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10 max-w-4xl mx-auto">
              <Link to="/" className="inline-block mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 hover:text-primary-light transition-colors">
                  Find<span className="text-accent">4</span>Staff
                </h1>
              </Link>
              <div className="bg-gradient-to-br from-white/90 to-highlight/60 shadow-lg rounded-xl p-8 backdrop-blur-sm border border-highlight-light">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h2>
                <p className="text-xl text-gray-700 mb-6">
                  We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Request form section */}
        <RequestForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
