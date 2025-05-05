
import { Globe, Users, Clock, ShieldCheck, FileCheck, UserPlus, FileText, Home } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const servicesData = [
  {
    title: "Global Talent Sourcing",
    description: "Access qualified candidates from around the world through our extensive international network.",
    icon: Globe,
    color: "bg-blue-900/30 text-blue-400",
  },
  {
    title: "Industry-Specific Recruitment",
    description: "Our specialists understand the unique hiring needs of your industry and match you with the perfect candidates.",
    icon: Users,
    color: "bg-purple-900/30 text-purple-400",
  },
  {
    title: "Fast-Track Hiring Solutions",
    description: "Accelerate your hiring process with our streamlined recruitment methods and pre-vetted talent pool.",
    icon: Clock,
    color: "bg-green-900/30 text-green-400",
  },
  {
    title: "Pre-Screening and Vetting",
    description: "Save time with our thorough candidate screening process that ensures only qualified applicants reach you.",
    icon: ShieldCheck,
    color: "bg-red-900/30 text-red-400",
  },
  {
    title: "VISA Consultancy",
    description: "Expert guidance on visa requirements and application processes for international talent acquisition.",
    icon: FileCheck,
    color: "bg-yellow-900/30 text-yellow-400",
  },
  {
    title: "Allocating Workforce",
    description: "Strategic distribution of qualified personnel based on your specific business needs and locations.",
    icon: UserPlus,
    color: "bg-indigo-900/30 text-indigo-400",
  },
  {
    title: "VISA Documentation",
    description: "Comprehensive assistance with preparing and processing all required visa documentation for your hires.",
    icon: FileText,
    color: "bg-pink-900/30 text-pink-400",
  },
  {
    title: "Relocation Packages",
    description: "Tailored relocation solutions for seamless transitions to Europe & North America for your new hires.",
    icon: Home,
    color: "bg-orange-900/30 text-orange-400",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-primary to-primary-dark relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-primary-light/20 via-secondary/30 to-accent/20"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-secondary-dark/40 text-secondary-light rounded-full text-sm font-medium mb-3">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-6">
            Comprehensive recruitment solutions tailored to your business needs
          </p>
          <div className="flex justify-center">
            <Separator className="w-24 h-1 bg-accent" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <Card 
              key={index} 
              className="border border-primary-light/20 bg-primary-dark/60 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-secondary/60 to-transparent"></div>
              <CardHeader className="relative">
                <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-accent/20 via-secondary/30 to-primary-light/20"></div>
    </section>
  );
};

export default Services;
