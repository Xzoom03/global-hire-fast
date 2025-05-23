
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const stats = [
  { value: "10,000+", label: "Roles Filled" },
  { value: "50+", label: "Industries Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-r from-gray-50 via-white to-gray-50 relative">
      {/* Decorative dividers */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
      
      {/* Side accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-48 bg-primary/10 rounded-r-lg"></div>
      <div className="absolute right-0 top-1/3 -translate-y-1/2 w-4 h-32 bg-secondary/20 rounded-l-lg"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 relative">
            <div className="absolute -left-4 -top-4 w-12 h-12 bg-accent/20 rounded-full blur-md"></div>
            <span className="inline-block px-4 py-1 bg-primary-light/20 text-primary rounded-full text-sm font-medium mb-3">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 relative">
              Global Reach, Local Expertise
              <div className="absolute -bottom-3 left-0 w-16 h-1 bg-accent"></div>
            </h2>
            <p className="text-lg text-gray-600 mb-6 border-l-4 border-highlight pl-4">
              Find4Staff connects businesses with exceptional talent across the globe. With a presence in major markets and a deep understanding of local employment landscapes, we bridge the gap between companies and their ideal candidates.
            </p>
            <p className="text-lg text-gray-600 bg-gradient-to-r from-white to-highlight/20 p-4 rounded-lg shadow-sm">
              Our experienced team specializes in finding the perfect match for your specific industry needs, ensuring a seamless hiring process from start to finish.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Background decorative element */}
              <div className="absolute -z-10 w-full h-full bg-gradient-to-br from-transparent via-secondary/5 to-highlight/20 rounded-2xl transform rotate-3"></div>
              
              {stats.map((stat, index) => (
                <Card key={index} className="border-none shadow-md bg-white text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-light via-primary to-primary-dark transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  <CardContent className="p-0">
                    <p className="text-3xl md:text-4xl font-bold text-gradient bg-gradient-to-br from-primary to-secondary mb-2">{stat.value}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative separator */}
        <div className="flex justify-center mt-16">
          <Separator className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default About;
