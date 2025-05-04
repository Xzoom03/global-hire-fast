
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const showcaseData = [
  {
    title: "Global Talent Acquisition",
    description: "Connect your business with top talent from around the world. Our international network provides access to qualified candidates across 6 continents.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Diverse Workforce Solutions",
    description: "Build diverse, high-performing teams with our specialized recruitment services. We focus on finding the right cultural and technical fit for your organization.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "International Relocation Support",
    description: "Comprehensive relocation packages and visa consultancy to ensure smooth transitions for your new international hires anywhere in the world.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
];

const RecruitmentShowcase = () => {
  return (
    <section id="recruitment-showcase" className="py-16 md:py-24 bg-gradient-enhanced">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Global Staff Recruitment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting businesses with exceptional talent worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseData.map((item, index) => (
            <Card key={index} className="card-gradient border-0 overflow-hidden h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-gray-700 text-base">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/contact">
            <Button 
              className="mt-4 bg-primary hover:bg-primary-light text-white font-medium px-8 py-6 rounded-md text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Contact Us to Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentShowcase;
