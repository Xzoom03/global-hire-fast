
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import RequestForm from "@/components/RequestForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <RequestForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
