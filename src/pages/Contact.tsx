
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    subject: "",
    message: "",
    inquiryType: "general",
    productInterest: "",
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          country: "",
          subject: "",
          message: "",
          inquiryType: "general",
          productInterest: "",
          newsletter: false
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-4">Contact Us</h1>
            <p className="text-xl text-white/80">
              Get in touch with our team to discuss your agricultural import and export needs.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <Card className="h-full border-harvest-lightbrown/20 hover:border-harvest-lightbrown hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-harvest-green/20 rounded-full flex items-center justify-center mb-4 text-harvest-darkgreen">
                    <Mail className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-harvest-darkgreen">Email Us</CardTitle>
                  <CardDescription>Our team is ready to assist you</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">General Inquiries:</p>
                    <p className="text-muted-foreground">info@amhindexport.com</p>
                    <p className="font-medium mt-3">Sales Department:</p>
                    <p className="text-muted-foreground">milan@amhindexport.com</p>
                    <p className="font-medium mt-3">Support:</p>
                    <p className="text-muted-foreground">milansharma23@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <Card className="h-full border-harvest-lightbrown/20 hover:border-harvest-lightbrown hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-harvest-green/20 rounded-full flex items-center justify-center mb-4 text-harvest-darkgreen">
                    <Phone className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-harvest-darkgreen">Call Us</CardTitle>
                  <CardDescription>Speak directly with our experts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">Main Office:</p>
                    <p className="text-muted-foreground">+91 7428555496</p>
                    <p className="font-medium mt-3">International Sales:</p>
                    <p className="text-muted-foreground">+91 7042712220</p>
                    <p className="font-medium mt-3">Customer Support:</p>
                    <p className="text-muted-foreground">+91 7042712220</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <Card className="h-full border-harvest-lightbrown/20 hover:border-harvest-lightbrown hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-harvest-green/20 rounded-full flex items-center justify-center mb-4 text-harvest-darkgreen">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-harvest-darkgreen">Visit Us</CardTitle>
                  <CardDescription>Our global headquarters</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">Headquarters:</p>
                    <address className="not-italic text-muted-foreground">
                      <p>A.M. HIND PRIVATE LIMITED  KHASRA NO. 1624</p>
                      <p>SHEENAI FARM, R.K. PURAM, GOVINDPURAM </p>
                      <p>GHAZIABAD, Uttar Pradesh 201002 </p>
                      <p>India</p>
                    </address>
                    <p className="font-medium mt-3">Office Hours:</p>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="py-12 md:py-20 bg-harvest-cream/30"
      >
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-harvest-darkgreen mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below to connect with our team. Whether you're interested in our products, have questions about our services, or want to request a quote, we're here to help.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-harvest-lightbrown/20">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Select
                        value={formData.country}
                        onValueChange={(value) => handleSelectChange("country", value)}
                        required
                      >
                        <SelectTrigger id="country">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="in">India</SelectItem>
                          <SelectItem value="jp">Japan</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Type of Inquiry *</Label>
                    <RadioGroup 
                      value={formData.inquiryType} 
                      onValueChange={handleRadioChange}
                      className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general" id="inquiry-general" />
                        <Label htmlFor="inquiry-general" className="cursor-pointer">General Inquiry</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="quote" id="inquiry-quote" />
                        <Label htmlFor="inquiry-quote" className="cursor-pointer">Request a Quote</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="partnership" id="inquiry-partnership" />
                        <Label htmlFor="inquiry-partnership" className="cursor-pointer">Partnership Opportunity</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="productInterest">Product of Interest</Label>
                    <Select
                      value={formData.productInterest}
                      onValueChange={(value) => handleSelectChange("productInterest", value)}
                    >
                      <SelectTrigger id="productInterest">
                        <SelectValue placeholder="Select a product category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="grains">Food Grains</SelectItem>
                        <SelectItem value="spices">Spices</SelectItem>
                        <SelectItem value="bovine">Frozen Bovine</SelectItem>
                        <SelectItem value="seafood">Seafood</SelectItem>
                        <SelectItem value="lentils">Lentils</SelectItem>
                        <SelectItem value="vegetables">Vegetables</SelectItem>
                        <SelectItem value="fruits">Fruits</SelectItem>
                        <SelectItem value="meat">Meat</SelectItem>
                        <SelectItem value="multiple">Multiple Categories</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleCheckboxChange("newsletter", checked as boolean)}
                    />
                    <Label htmlFor="newsletter" className="text-sm text-muted-foreground leading-tight cursor-pointer">
                      Subscribe to our newsletter to receive updates on new products, market trends, and special offers.
                    </Label>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-harvest-brown hover:bg-harvest-lightbrown text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
                  </Button>
                  
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-green-50 text-green-800 rounded-md text-center"
                    >
                      Thank you for your message! Our team will be in touch with you shortly.
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>
      
      {/* Map Section */}
      {/* <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-harvest-darkgreen mb-4">Our Location</h2>
            <p className="text-lg text-muted-foreground">
              Visit our headquarters to meet our team and discuss your agricultural export needs in person.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="bg-harvest-darkgreen/5 rounded-lg overflow-hidden h-96"
          >
            <div className="w-full h-full bg-harvest-cream/40 flex items-center justify-center">
              <p className="text-harvest-darkgreen italic">Interactive map would be displayed here</p>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground">
              Our headquarters are located in the heart of the business district, easily accessible by public transportation and with ample parking available.
            </p>
          </motion.div>
        </div>
      </section> */}
      
      <Footer />
    </div>
  );
};

export default Contact;
