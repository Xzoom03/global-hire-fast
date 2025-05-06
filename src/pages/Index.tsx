
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import RecruitmentShowcase from "@/components/RecruitmentShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary-dark to-primary font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        
        {/* Visual separator between Services and About */}
        <div className="h-4 bg-gradient-to-b from-primary-light to-primary-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,78,137,0.3)_0%,rgba(0,40,80,0.1)_50%)]"></div>
        </div>
        
        <About />
        
        {/* Visual separator between About and RecruitmentShowcase */}
        <div className="h-4 bg-gradient-to-b from-primary-dark to-primary-light relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,191,255,0.2)_0%,rgba(0,60,120,0.1)_50%)]"></div>
        </div>
        
        <RecruitmentShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
