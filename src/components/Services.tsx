
import { Globe, Users, Clock, ShieldCheck, FileCheck, UserPlus, FileText, Home } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const servicesData = [
  {
    title: "Global Talent Sourcing",
    description: "Access qualified candidates from around the world through our extensive international network.",
    icon: Globe,
  },
  {
    title: "Industry-Specific Recruitment",
    description: "Our specialists understand the unique hiring needs of your industry and match you with the perfect candidates.",
    icon: Users,
  },
  {
    title: "Fast-Track Hiring Solutions",
    description: "Accelerate your hiring process with our streamlined recruitment methods and pre-vetted talent pool.",
    icon: Clock,
  },
  {
    title: "Pre-Screening and Vetting",
    description: "Save time with our thorough candidate screening process that ensures only qualified applicants reach you.",
    icon: ShieldCheck,
  },
  {
    title: "VISA Consultancy",
    description: "Expert guidance on visa requirements and application processes for international talent acquisition.",
    icon: FileCheck,
  },
  {
    title: "Allocating Workforce",
    description: "Strategic distribution of qualified personnel based on your specific business needs and locations.",
    icon: UserPlus,
  },
  {
    title: "VISA Documentation",
    description: "Comprehensive assistance with preparing and processing all required visa documentation for your hires.",
    icon: FileText,
  },
  {
    title: "Relocation Packages",
    description: "Tailored relocation solutions for seamless transitions to Europe & North America for your new hires.",
    icon: Home,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive recruitment solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white hover:bg-gray-50">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
