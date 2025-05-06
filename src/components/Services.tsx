import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            We offer a range of services to help you find the perfect staff for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-gradient-to-br from-white/80 to-highlight/20 rounded-xl shadow-lg p-6 md:p-8 hover:scale-105 transition-transform border border-highlight-light">
            <Rocket className="w-10 h-10 text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Direct Hire</h3>
            <p className="text-gray-700">
              Find the perfect full-time employee for your team. We handle the entire recruitment process, from sourcing to onboarding.
            </p>
            <Button variant="secondary" className="mt-4 w-full">Learn More</Button>
          </div>
          
          {/* Service Card 2 */}
          <div className="bg-gradient-to-br from-white/80 to-accent/20 rounded-xl shadow-lg p-6 md:p-8 hover:scale-105 transition-transform border border-highlight-light">
            <Rocket className="w-10 h-10 text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Contract Staffing</h3>
            <p className="text-gray-700">
              Quickly scale your workforce with our contract staffing solutions. Access skilled professionals for short-term projects or seasonal needs.
            </p>
            <Button variant="secondary" className="mt-4 w-full">Learn More</Button>
          </div>
          
          {/* Service Card 3 */}
          <div className="bg-gradient-to-br from-white/80 to-primary/20 rounded-xl shadow-lg p-6 md:p-8 hover:scale-105 transition-transform border border-highlight-light">
            <Rocket className="w-10 h-10 text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Executive Search</h3>
            <p className="text-gray-700">
              Find top-tier leadership talent with our executive search services. We identify and recruit experienced executives to drive your business forward.
            </p>
            <Button variant="secondary" className="mt-4 w-full">Learn More</Button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-white font-medium text-lg py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Contact Us To Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
