
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-fair-blue/20 shadow-sm"
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        {/* <Link to="/" className="text-2xl font-bold text-fair-blue">
          Fair Enterprises
        </Link> */}
        <img

          src="fe.webp"
          alt="logo"
          className="w-30 h-10 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-fair-red transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-foreground hover:text-fair-red transition-colors">
            About Us
          </Link>
          <Link to="/products" className="text-foreground hover:text-fair-red transition-colors">
            Products
          </Link>
          <Link to="/contact" className="text-foreground hover:text-fair-red transition-colors">
            Contact
          </Link>
          <Button className="bg-fair-blue hover:bg-fair-red text-white">Request Quote</Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-fair-blue"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-b border-fair-blue/20"
        >
          <div className="container px-4 py-4 flex flex-col space-y-4">
            <Link to="/" onClick={toggleMenu} className="text-foreground hover:text-fair-red transition-colors py-2">
              Home
            </Link>
            <Link to="/about" onClick={toggleMenu} className="text-foreground hover:text-fair-red transition-colors py-2">
              About Us
            </Link>
            <Link to="/products" onClick={toggleMenu} className="text-foreground hover:text-fair-red transition-colors py-2">
              Products
            </Link>
            <Link to="/contact" onClick={toggleMenu} className="text-foreground hover:text-fair-red transition-colors py-2">
              Contact
            </Link>
            <Button className="bg-fair-blue hover:bg-fair-red text-white w-full">Request Quote</Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
