
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden h-screen flex items-center">
      {/* Hero Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 px-4 md:px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl space-y-6 text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl font-bold sm:text-5xl md:text-6xl"
          >
            From Farm to Global Market
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-100"
          >
            Premium agricultural exports connecting quality producers with global markets. Sustainable sourcing, trusted relationships, worldwide delivery.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
          >
            <Button asChild size="lg" className="bg-fair-red hover:bg-fair-red/90 text-white">
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-blue-900 hover:bg-fair-blue/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
