import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// List of industries for the dropdown
const industries = ["Technology", "Healthcare", "Finance", "Education", "Retail", "Manufacturing", "Hospitality", "Construction", "Transportation", "Other"];

// Hiring timelines options
const timelines = ["Urgent (within 1 week)", "Soon (within 1 month)", "Within 3 months", "Flexible/Not urgent"];

// Country options for dropdown
const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

// Form validation schema
const formSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  phone: z.string().min(1, "Phone number is required"),
  country: z.string().min(1, "Country is required"),
  industry: z.string().min(1, "Industry is required"),
  otherIndustry: z.string().optional(),
  positions: z.string().min(1, "Number of positions is required"),
  jobRoles: z.string().min(1, "Job roles are required"),
  timeline: z.string().min(1, "Timeline is required"),
  message: z.string().optional()
});
type FormValues = z.infer<typeof formSchema>;
const RequestForm = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtherIndustry, setShowOtherIndustry] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      country: "",
      industry: "",
      otherIndustry: "",
      positions: "",
      jobRoles: "",
      timeline: "",
      message: ""
    }
  });
  const handleSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Adjust industry if "Other" was selected
      const formData = {
        ...data,
        industry: data.industry === "Other" ? data.otherIndustry : data.industry,
        submissionDate: new Date().toISOString()
      };
      console.log("Submitting form data to webhook:", formData);

      // Send to new webhook URL
      const response = await fetch("https://wasayfizz.app.n8n.cloud/webhook/find4staffform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      console.log("Form submission response:", response.status);
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Form submission error:", response.status, errorText);
        throw new Error(`Form submission failed: ${response.status}`);
      }

      // Show success message
      toast({
        title: "Form submitted successfully!",
        description: "Thank you for your interest. Our team will contact you shortly."
      });

      // Reset form
      form.reset();
      setShowOtherIndustry(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle industry selection change
  const handleIndustryChange = (value: string) => {
    form.setValue("industry", value);
    setShowOtherIndustry(value === "Other");
  };
  return <section id="request-form" className="py-16 md:py-20 bg-gradient-to-b from-primary/10 to-highlight/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Request Staff</h2>
            <p className="text-lg text-gray-600">
              Tell us about your staffing needs and we'll find the perfect match for your business.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 via-highlight/20 to-primary/5 rounded-xl shadow-lg p-6 md:p-8 border border-highlight/50 bg-sky-200">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary border-b border-highlight/30 pb-2 mb-4">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="name" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="text-primary-dark font-medium">Full Name</FormLabel>
                          <FormControl>
                            <Input {...field} className="bg-white/80 border-highlight/50 focus-visible:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <FormField control={form.control} name="email" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="text-primary-dark font-medium">Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} className="bg-white/80 border-highlight/50 focus-visible:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="company" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="text-primary-dark font-medium">Company Name</FormLabel>
                          <FormControl>
                            <Input {...field} className="bg-white/80 border-highlight/50 focus-visible:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <FormField control={form.control} name="phone" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="text-primary-dark font-medium">Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" {...field} placeholder="e.g. +1 555 123 4567" className="bg-white/80 border-highlight/50 focus-visible:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                  </div>
                  
                  <FormField control={form.control} name="country" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-primary-dark font-medium">Country</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/80 border-highlight/50 focus-visible:ring-primary">
                              <SelectValue placeholder="Select your country" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-80">
                            {countries.map(country => <SelectItem key={country} value={country}>{country}</SelectItem>)}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>} />
                </div>
                
                {/* Staffing Requirements */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary border-b border-highlight/30 pb-2 mb-4">Staffing Requirements</h3>
                  
                  <FormField control={form.control} name="industry" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-primary-dark font-medium">Industry</FormLabel>
                        <Select onValueChange={value => handleIndustryChange(value)} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/80 border-highlight/50 focus-visible:ring-primary">
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {industries.map(industry => <SelectItem key={industry} value={industry}>{industry}</SelectItem>)}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>} />
                  
                  {showOtherIndustry && <FormField control={form.control} name="otherIndustry" render={({
                  field
                }) => <FormItem>
                          <FormLabel className="text-primary-dark font-medium">Please Specify Your Industry</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Enter your industry" className="bg-white/80 border-highlight/50 focus-visible:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="positions" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="text-primary-dark font-medium">Number of Positions</FormLabel>
                          <FormControl>
                            <Input {...field} type="number" min="1" className="bg-white/80 border-highlight/50 focus-visible:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <FormField control={form.control} name="timeline" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="text-primary-dark font-medium">Hiring Timeline</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/80 border-highlight/50 focus-visible:ring-primary">
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {timelines.map(timeline => <SelectItem key={timeline} value={timeline}>{timeline}</SelectItem>)}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>} />
                  </div>
                  
                  <FormField control={form.control} name="jobRoles" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-primary-dark font-medium">Job Roles Needed</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="e.g. Software Developer, Project Manager" className="bg-white/80 border-highlight/50 focus-visible:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={form.control} name="message" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-primary-dark font-medium">Additional Requirements</FormLabel>
                        <FormControl>
                          <Textarea {...field} placeholder="Tell us more about your requirements, skills needed, etc." className="bg-white/80 border-highlight/50 focus-visible:ring-primary" rows={4} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                </div>
                
                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium text-lg py-6 shadow-md hover:shadow-lg transition-all" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  By submitting this form, you're allowing us to contact you regarding your staffing needs.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>;
};
export default RequestForm;