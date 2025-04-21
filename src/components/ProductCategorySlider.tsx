
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCategory {
  id: number;
  name: string;
  description: string;
  image: string;
}

const productCategories: ProductCategory[] = [
  {
    id: 1,
    name: "Food Grains",
    description: "Premium quality rice, wheat, corn, and other essential grains sourced from the finest farms.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Spices",
    description: "Aromatic spices that add flavor and depth to culinary creations around the world.",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Frozen Bovine",
    description: "Premium quality frozen bovine products processed with the highest standards of safety and quality.",
    image: "public/Bovine.jpeg"
  },
  {
    id: 4,
    name: "Seafood",
    description: "Fresh and sustainable seafood harvested from the world's oceans with careful attention to quality.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2026&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Lentils",
    description: "Nutrient-rich lentils and pulses, essential protein sources exported to global markets.",
    image: "public/lentils.jpg"
  },
  {
    id: 6,
    name: "Vegetables",
    description: "Farm-fresh vegetables grown with sustainable practices and exported worldwide.",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=2012&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Fruits",
    description: "Seasonal fruits harvested at peak ripeness and handled with care for international markets.",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Meat",
    description: "Premium quality meat products processed with strict adherence to international standards.",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2070&auto=format&fit=crop"
  }
];

const ProductCategorySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productCategories.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + productCategories.length) % productCategories.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    } else if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div className="relative overflow-hidden w-full bg-harvest-darkgreen/5">
      <div 
        className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.5 } }}
            className="absolute inset-0 w-full h-full"
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${productCategories[currentIndex].image})` }}
            >
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-center px-4 max-w-3xl"
                >
                  <h2 className="text-4xl font-bold text-white mb-4">{productCategories[currentIndex].name}</h2>
                  <p className="text-xl text-white/90 mb-6">{productCategories[currentIndex].description}</p>
                  <Button className="bg-harvest-brown hover:bg-harvest-lightbrown text-white">
                    Explore {productCategories[currentIndex].name}
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
          {productCategories.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/40"
              } transition-all duration-300`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 z-10"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 z-10"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ProductCategorySlider;
