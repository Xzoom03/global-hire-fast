
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import RecruitmentShowcase from "@/components/RecruitmentShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-highlight/30 to-white font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <RecruitmentShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
