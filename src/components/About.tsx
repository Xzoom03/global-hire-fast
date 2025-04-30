
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "10,000+", label: "Roles Filled" },
  { value: "50+", label: "Industries Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Global Reach, Local Expertise</h2>
            <p className="text-lg text-gray-600 mb-6">
              Find4Staff connects businesses with exceptional talent across the globe. With a presence in major markets and a deep understanding of local employment landscapes, we bridge the gap between companies and their ideal candidates.
            </p>
            <p className="text-lg text-gray-600">
              Our experienced team specializes in finding the perfect match for your specific industry needs, ensuring a seamless hiring process from start to finish.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="border-none shadow-sm bg-white text-center p-6">
                  <CardContent className="p-0">
                    <p className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.value}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
