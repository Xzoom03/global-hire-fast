
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const industries = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Retail",
  "Manufacturing",
  "Hospitality",
  "Construction",
  "Transportation",
  "Other",
];

const timelines = [
  "Urgent (within 1 week)",
  "Soon (within 1 month)",
  "Within 3 months",
  "Flexible/Not urgent",
];

const RequestForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request submitted!",
        description: "Thank you for your interest. Our team will contact you shortly.",
      });
      
      // Reset form
      e.currentTarget.reset();
    }, 1000);
  };
  
  return (
    <section id="request-form" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Tell Us Who You're Looking For</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and our recruitment specialists will get in touch with you.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Person's Full Name</Label>
                  <Input id="contact" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry/Business Type</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="positions">Number of Positions to Fill</Label>
                  <Input id="positions" type="number" min="1" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="roles">Job Titles or Roles Needed</Label>
                  <Input id="roles" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timeline">Preferred Hiring Timeline</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelines.map((timeline) => (
                        <SelectItem key={timeline} value={timeline}>
                          {timeline}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea id="notes" rows={4} />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-secondary hover:bg-secondary/90" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request Staff"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestForm;
