
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import RecruitmentShowcase from "@/components/RecruitmentShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />
      <main>
        <Hero />
        
        {/* Visual separator between Hero and Services */}
        <div className="h-4 bg-gradient-to-r from-primary/10 via-accent/20 to-secondary/10"></div>
        
        <Services />
        
        {/* Visual separator between Services and About */}
        <div className="h-8 bg-gradient-to-b from-white to-gray-50/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,78,137,0.05)_0%,rgba(255,255,255,0)_50%)]"></div>
        </div>
        
        <About />
        
        {/* Visual separator between About and RecruitmentShowcase */}
        <div className="h-8 bg-gradient-to-b from-gray-50/80 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,191,255,0.05)_0%,rgba(255,255,255,0)_50%)]"></div>
        </div>
        
        <RecruitmentShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
