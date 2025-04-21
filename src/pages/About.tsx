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
                  AM HIND Exports is a professionally managed and well-established company, which deals in export of various products to various countries. Frozen Buffalo meat is our speciality. Company encompasses exceptional ability and outstanding strength in fulfilling the growth demands of International buyers.
                </p>
                <p className="mb-4">
                  Starting with just few numbers on our supply list in the year 2019, we have grown to offer more products of export like Processed food, spices etc.
                </p>
                <p className="mb-4">
                  The Head Office in Ghaziabad is not only at easy access for visitors but also serves us better to coordinate and monitor the production at our Meat Processing House which is located at Sahibabad Industrial Area. The Product We Supply and serve to our Clients are HACCP approved and ISO certified.
                </p>
                <p className="text-lg font-semibold text-secondary">
                  "BELIEVE IN DELIVERING THE BEST"
                </p>
                <p>
                  Our Quality control team checks the quality of product at the processing and makes sure only the best gets packed.
                </p>
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
                As The Head Office is located In Ghaziabad is not only at easy access for visitors but also serves us better to coordinate and monitor the production at our Processing House Which is located at Sahibabad Industrial Area. The Product We Supply and serve to our Clients are HACCP approved and ISO certified.
              </p>
              <p className="mb-4">
                This makes it really easy for our Buyers to visit our Head office and Processing plant for their complete satisfaction. The location is easily accessible and only 45mins from Airport and 25mins from Train Station.
              </p>
              <p>
                As we are sitting in the heart of country/Also a Buffalo meat capital Ghazipur it also makes us enjoy the benefit of the selection of the animal of our own choice and of best quality. On top of that, the location around us is also countryside and village post areas where we can get best of the cattle from local farmers where they get fed only natural diet and greens.
              </p>
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
                AM HIND Exports will be the most preferred brand of frozen meat products from India. It will be the first choice for all importers, retailers, manufacturers & caterers and with its progressive and dynamic entity will set standards which other brands will seek to match.
              </p>
              <p className="mb-4">
                We as a brand would like to stretch our hand and feet to all international waters and not limit our self Asia Pacific only. Our Strategy is to get involved and spread Indian Water Buffalo Meat and eatables / Specialities all across the globe.
              </p>
              <p className="mb-4">
                Fair Enterprises will achieve these objectives whilst simultaneously ensuring regular returns to its buyers/importers and providing its employees with an environment for excellence and growth.
              </p>
              <p className="mb-4">
                Our Objective is to enhance & spread Indian grown rice varieties to rest of the world to enjoy the flavour of India on their dinner tables. The rice variety we do here at AM Hind Pvt. Ltd. is the best quality which is been grown in only certain specific geographic locations in India providing exceptional soil quality advantages.
              </p>
              <p>
                By keeping the quality high and competitive pricing make us stand tall in this competitive market and gives our buyers a confidence to get the right quality at right price as "WE BELIEVE IN DELIVERING THE BEST".
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
                A.M Hind Pvt. Ltd. provides you an opportunity to get associated with us and you can have a great field to play and grow with the brand. Quantity and quality is assured when we adjoined hands with our buyers and partners.
              </p>
              <p className="mb-4">
                The firm has established a modern state of art meat processing complex. The meat complex or slaughter house machineries imported from best of the international brands, deboning and freezing plant are also imported, a rendering plant and a U.A.S.B. based effluent treatment plant are there in our procurement brands.
              </p>
              <p className="mb-4">
                All the generators in our factories & our trailers are powered by green fuel produced by us in this compound itself. All above facilitation gives us an Opportunity to gain the trust of our buyers and importers to get best of the quality better than all existing brands in Indian land who provide Frozen meat as product to International land.
              </p>
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
                AM HIND Pvt. believe in the resolution of all queries from our customers first. We have the best technology-based call centres where our representatives help customers, buyers, importers by tracking shipments, taking orders online or on call, or any product related issues.
              </p>
              <p>
                We have an authentic configuration to correspond to international working hours. Our 24 * 7 staff works accordingly to meet the working hours of the available international clientele.
              </p>
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
