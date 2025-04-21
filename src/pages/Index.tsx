
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ProductCategorySlider from "@/components/ProductCategorySlider";
import ProductCategories from "@/components/ProductCategories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Product Slider Section */}
      <section className="w-full">
        <ProductCategorySlider />
      </section>
      
      {/* Why Choose Us Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20 bg-harvest-cream/30"
      >
        <div className="container px-4 md:px-6">
          <motion.div variants={fadeIn} className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-harvest-darkgreen mb-4">Why Choose HarvestGlobal?</h2>
            <p className="text-lg text-muted-foreground">
              We connect premium agricultural products with global markets through sustainable practices and trusted relationships.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              variants={fadeIn}
              className="bg-white p-6 rounded-lg shadow-sm border border-harvest-lightbrown/10"
            >
              <div className="w-12 h-12 bg-harvest-green/20 rounded-full flex items-center justify-center mb-4 text-harvest-darkgreen">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-harvest-darkgreen">Premium Quality</h3>
              <p className="text-muted-foreground mb-4">
                We source only the highest quality agricultural products from trusted producers around the world.
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              className="bg-white p-6 rounded-lg shadow-sm border border-harvest-lightbrown/10"
            >
              <div className="w-12 h-12 bg-harvest-green/20 rounded-full flex items-center justify-center mb-4 text-harvest-darkgreen">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19 1.398 10.01a1.2 1.2 0 0 0 0 1.695l4.717 4.82a1.194 1.194 0 0 0 1.696 0l4.716-4.82a1.2 1.2 0 0 0 0-1.695L7.81 5.19a1.194 1.194 0 0 0-1.695 0ZM16.19 5.19l-4.717 4.82a1.2 1.2 0 0 0 0 1.695l4.717 4.82a1.194 1.194 0 0 0 1.696 0l4.716-4.82a1.2 1.2 0 0 0 0-1.695l-4.716-4.82a1.194 1.194 0 0 0-1.696 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-harvest-darkgreen">Global Network</h3>
              <p className="text-muted-foreground mb-4">
                Our extensive network ensures reliable supply chains and competitive pricing across international markets.
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              className="bg-white p-6 rounded-lg shadow-sm border border-harvest-lightbrown/10"
            >
              <div className="w-12 h-12 bg-harvest-green/20 rounded-full flex items-center justify-center mb-4 text-harvest-darkgreen">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-harvest-darkgreen">Sustainability</h3>
              <p className="text-muted-foreground mb-4">
                We prioritize sustainable sourcing practices and environmentally responsible supply chains.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Product Categories Section */}
      <ProductCategories />
      
      {/* Call to Action Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-harvest-darkgreen text-white"
      >
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Expand Your Global Reach?</h2>
          <p className="text-xl text-harvest-cream/80 mb-8 max-w-2xl mx-auto">
            Connect with our team to discuss how HarvestGlobal can supply premium agricultural products to your business.
          </p>
          <Button asChild size="lg" className="bg-harvest-brown hover:bg-harvest-lightbrown text-white">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default Index;
