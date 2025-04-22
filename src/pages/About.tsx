import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-gray-100"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
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
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-4">About HarvestGlobal</h1>
            <p className="text-xl text-white/80">
              Connecting premium agricultural products with global markets since 2005.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* About Us Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn} className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-primary mb-6">About Fair Enterprises</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                Fair Enterprises is a professionally managed and well-established export company based in India, renowned for delivering premium quality agricultural and food products across global markets. Our core strength lies in our specialization in Frozen Buffalo Meat, complemented by a growing portfolio that includes processed foods, spices, lentils, grains, and more.                </p>
                <p className="mb-4">
                Since our inception in 2019, we’ve evolved from a modest product lineup into a trusted export partner offering a diverse range of high-quality commodities to meet the dynamic needs of international buyers. Our journey is defined by commitment, excellence, and the belief that “We Deliver Only the Best.”                </p>
                <p className="mb-4">
                Our operations are headquartered in Gulshan Colony, Toli Chowki, Hyderabad, Telangana, a strategically located hub offering smooth connectivity. This location ensures efficient coordination with our state-of-the-art meat processing facility, and easy accessibility for visiting clients and partners.                </p>
                <p className="text-lg font-semibold text-secondary">
                  "BELIEVE IN DELIVERING THE BEST"
                </p>
                <p>
                Our products meet HACCP standards and are ISO-certified, with rigorous quality checks carried out at every stage of processing — ensuring only the finest goods are packed and shipped globally.                </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="order-1 lg:order-2 relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Agricultural landscape"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-harvest-green/20 rounded-lg -z-10"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Location and Procurement Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 md:py-24 bg-muted"
      >
        <div className="container px-4 md:px-6">
          <motion.div variants={fadeIn} className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Location and Procurement</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
              Our head office, located in Gulshan Colony, Toli Chowki, Hyderabad 500008, offers both convenience and connectivity, just 45 minutes from the airport and 25 minutes from the nearest train station. This prime location enables seamless coordination with our advanced meat processing plant, positioned for operational efficiency and visitor accessibility.              </p>
              <p className="mb-4">
              Being situated in Telangana — a region rich in agricultural and livestock resources — allows us access to top-quality cattle raised by local farmers on natural, green diets. This geographic advantage empowers us to personally select superior livestock and raw materials, maintaining an uncompromising standard of quality in all our exports.              </p>

            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Objectives Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container px-4 md:px-6">
          <motion.div variants={fadeIn} className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Objectives</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
              At Fair Enterprises, our vision is clear:
              To be the most preferred and trusted brand of frozen meat and Indian agricultural products in the global market.              </p>
              <p className="mb-4">
              We aim to become the first choice for importers, retailers, manufacturers, and food service providers worldwide — not just in the Asia-Pacific region, but across all international markets. Our ambition is to bring India’s culinary richness and heritage to tables across the globe.              </p>
              <p className="mb-4">
              In addition to our meat exports, we are proud to offer premium Indian rice varieties, grown in geographically distinct and nutrient-rich regions, delivering unmatched flavor and quality.              </p>
              <p className="mb-4">
              Our promise:
              <ul>
                <li>
                Consistent high-quality products
                </li>
                <li>
                Competitive pricing
                </li>
                <li>
                Reliable service
                </li>
                <li>
                And a long-term vision of growth for both our partners and our internal team
                </li>
              </ul>
              </p>
              <p>
              Because at Fair Enterprises, “We Don’t Compromise — We Deliver the Best.”
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Opportunities Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 md:py-24 bg-muted"
      >
        <div className="container px-4 md:px-6">
          <motion.div variants={fadeIn} className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Opportunities</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
              Partnering with Fair Enterprises opens the door to immense growth potential. Our modern, world-class infrastructure includes:
              </p>
              <p className="mb-4">
              An internationally equipped meat processing complex
              </p>
              <p className="mb-4">
              Advanced deboning and freezing technology
              </p>
              <p className="mb-4">
              Environmentally conscious green-fueled generators and trailers
              </p>
              <p className="mb-4">
              On-site UASB-based effluent treatment for sustainable operations
              </p>
              <p className="mb-4">
              All machinery and processing tools are sourced from top-tier international brands, ensuring that our quality consistently meets — and exceeds — global standards.              
              </p>
              <p className="mb-4">
              This robust ecosystem allows us to gain the trust of our global clientele, distinguishing us from competitors in the Indian frozen meat industry and agricultural export space.              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Client Relationship Management Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container px-4 md:px-6">
          <motion.div variants={fadeIn} className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Client Relationship Management</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
              At Fair Enterprises, our customers are at the heart of everything we do. We operate with a fully equipped, technology-driven call center to handle:
              <ul>
                <li>
                Shipment tracking
                </li>
                <li>
                Order placements
                </li>
                <li>
                Product-related queries
                </li>
                <li>
                After-sales support
                </li>
              </ul>
              </p>
              <p>
              We maintain a 24/7 global service model, ensuring real-time communication and support across different time zones. Our dedicated team works tirelessly to offer reliable, responsive, and professional service — every time.              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Certificates Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container px-4 md:px-6">
          <motion.div variants={fadeIn} className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Certifications</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Our authenticity can be viewed through our following government 
                issued certifications recognised globally:
              </p>
              <ul className="list-disc pl-6">
                <li>Certificate of compliance to meet the requirements of HACCP</li>
                <li>ISO 9001-2015 QFS management system</li>
                <li>ISO 22000 - 2018</li>
                <li>HALAL CERTIFICATION BY HMC</li>
              </ul>
              <p className="mt-4">
                These certifications demonstrate our commitment to quality, 
                safety, and international standards in food production and export.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default About;
