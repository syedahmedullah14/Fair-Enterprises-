import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center bg-harvest-cream/10 py-20">
        <div className="container px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-9xl font-bold text-harvest-brown mb-6"
            >
              404
            </motion.div>
            <h1 className="text-3xl font-bold text-harvest-darkgreen mb-4">Page Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">
              We're sorry, but the page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-harvest-darkgreen hover:bg-harvest-green text-white w-full sm:w-auto">
                <Link to="/">Return to Home</Link>
              </Button>
              <Button asChild variant="outline" className="border-harvest-brown text-harvest-brown hover:bg-harvest-brown/10 w-full sm:w-auto">
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
