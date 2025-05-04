
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RequestForm from "@/components/RequestForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-highlight/30 to-white font-sans">
      <Header />
      <main>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get in touch with our recruitment specialists to find the perfect talent for your business
              </p>
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
