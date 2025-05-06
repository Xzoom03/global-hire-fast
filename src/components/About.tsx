import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="order-2 md:order-1">
            <img
              src="/about-us.webp"
              alt="About Find4Staff"
              className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>

          {/* Text Content Section */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              About Find<span className="text-accent">4</span>Staff
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At Find4Staff, we're dedicated to connecting businesses with top-tier talent.
              With years of experience in recruitment, we understand the challenges companies face
              in finding the right people. Our mission is to simplify this process, providing
              efficient and effective staffing solutions tailored to your unique needs.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We pride ourselves on our personalized approach, taking the time to understand your
              company culture and specific requirements. Whether you're a startup or a large
              enterprise, we're here to help you build a strong, capable team.
            </p>
            
            {/* Contact Us Button */}
            <Link to="/contact" className="transition-all duration-300 hover:scale-105">
              <Button className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-white font-medium text-lg py-3 px-8 rounded-md shadow-md hover:shadow-lg">
                Contact Us To Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
