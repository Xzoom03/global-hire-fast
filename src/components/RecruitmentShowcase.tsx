
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const showcaseData = [
  {
    title: "Global Talent Acquisition",
    description: "Connect your business with top talent from around the world. Our international network provides access to qualified candidates across 6 continents.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    color: "from-blue-500/30 to-blue-600/20",
  },
  {
    title: "Diverse Workforce Solutions",
    description: "Build diverse, high-performing teams with our specialized recruitment services. We focus on finding the right cultural and technical fit for your organization.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    color: "from-purple-500/30 to-purple-600/20",
  },
  {
    title: "International Relocation Support",
    description: "Comprehensive relocation packages and visa consultancy to ensure smooth transitions for your new international hires anywhere in the world.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    color: "from-green-500/30 to-green-600/20",
  },
];

const RecruitmentShowcase = () => {
  return (
    <section id="recruitment-showcase" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-secondary/10 to-highlight/20 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-12 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 relative">
          <span className="inline-block px-4 py-1 bg-secondary-light/20 text-primary rounded-full text-sm font-medium mb-3">Our Global Reach</span>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent mb-4">
            Global Staff Recruitment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connecting businesses with exceptional talent worldwide
          </p>
          <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-light to-accent"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseData.map((item, index) => (
            <Card key={index} className="border-0 overflow-hidden h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader className="pb-2 border-b border-gray-100">
                <CardTitle className="text-xl text-primary group-hover:text-primary-light transition-colors">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 bg-gradient-to-br from-white to-gray-50">
                <CardDescription className="text-gray-700 text-base pt-2">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-md -z-10"></div>
          <Link to="/contact">
            <Button 
              className="mt-4 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-white font-medium px-8 py-6 rounded-md text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Contact Us to Learn More
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white/80 to-transparent"></div>
    </section>
  );
};

export default RecruitmentShowcase;
