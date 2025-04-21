
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

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
    description: "Premium quality rice, wheat, corn, and other essential grains.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Spices",
    description: "Aromatic spices that add flavor and depth to culinary creations.",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Frozen Bovine",
    description: "Premium quality frozen bovine products with highest safety standards.",
    image: "public/Bovine.jpeg"
  },
  {
    id: 4,
    name: "Seafood",
    description: "Fresh and sustainable seafood harvested from the world's oceans.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2026&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Lentils",
    description: "Nutrient-rich lentils and pulses, essential protein sources.",
    image: "public/lentils.jpg"
  },
  {
    id: 6,
    name: "Vegetables",
    description: "Farm-fresh vegetables grown with sustainable practices.",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=2012&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Fruits",
    description: "Seasonal fruits harvested at peak ripeness for international markets.",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Meat",
    description: "Premium quality meat products processed with international standards.",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2070&auto=format&fit=crop"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ProductCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-harvest-darkgreen mb-4">Our Product Categories</h2>
          <p className="text-lg text-muted-foreground">
            Explore our diverse range of premium food and agricultural products, sourced from the finest producers around the world.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {productCategories.map((category) => (
            <motion.div key={category.id} variants={item}>
              <Link to={`/products/${category.id}`} className="block h-full">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full"
                >
                  <Card className="overflow-hidden h-full border-harvest-lightbrown/20 hover:border-harvest-lightbrown hover:shadow-md transition-all duration-300">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <h3 className="absolute bottom-3 left-3 text-xl font-bold text-white">{category.name}</h3>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-muted-foreground">{category.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;
