import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

// Type definitions
interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  details: string;
  origin: string;
  images: string[];
}

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: "Premium Basmati Rice",
    category: "Food Grains",
    description: "Long-grain aromatic rice known for its nutty flavor and distinct aroma.",
    details: "Our Premium Basmati Rice is sourced from the fertile foothills of the Himalayas. Aged for a minimum of 12 months to develop its characteristic aroma and flavor, this rice is perfect for pilafs, biryanis, and as an accompaniment to curries and stews. Available in various packaging options to meet your business needs.",
    origin: "India",
    images: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612708345411-43e928ae5c84?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    name: "Organic Quinoa",
    category: "Food Grains",
    description: "Nutrient-rich whole grain with high protein content and essential amino acids.",
    details: "Our Organic Quinoa is cultivated in the high altitudes of the Andes using traditional farming methods. This complete protein source is certified organic and gluten-free, making it a versatile ingredient for health-conscious consumers. Available in white, red, and black varieties, our quinoa undergoes rigorous quality testing to ensure premium quality.",
    origin: "Peru",
    images: [
      "public/Quinoa.webp"
    ]
  },
  {
    id: 3,
    name: "Premium Beef Striploin",
    category: "Frozen Bovine",
    description: "Tender, well-marbled beef cut ideal for steaks and high-end culinary applications.",
    details: "Our Premium Beef Striploin is sourced from grass-fed cattle raised in sustainable farming environments. The meat undergoes careful aging to enhance tenderness and flavor development. Each cut is precisely trimmed to exacting specifications and flash-frozen to lock in freshness. Available in various grades to meet different market requirements, from premium foodservice to retail.",
    origin: "Australia",
    images: [
      "public/beef.webp"
    ]
  },
  {
    id: 4,
    name: "Red Lentils",
    category: "Lentils",
    description: "Split red lentils that cook quickly and provide excellent protein and fiber.",
    details: "Our Red Lentils are carefully selected for uniform size, color, and cooking quality. These split lentils cook quickly, breaking down into a creamy consistency that's perfect for soups, stews, and curry dishes. Each batch undergoes cleaning, sorting, and quality testing to ensure freedom from foreign materials and consistent cooking performance. Available in bulk quantities for food manufacturing and retail packaging.",
    origin: "Turkey",
    images: [
      "public/red-lentils.jpg"
    ]
  },
  {
    id: 5,
    name: "Turmeric Powder",
    category: "Spices",
    description: "Vibrant yellow spice with earthy flavor and powerful anti-inflammatory properties.",
    details: "Our Turmeric Powder is made from the finest turmeric rhizomes, carefully selected for their high curcumin content. Each batch is tested for color strength, purity, and flavor. The turmeric is slowly dried and ground to preserve its essential oils and medicinal properties. Ideal for culinary applications as well as the health food and supplement industries.",
    origin: "India",
    images: [
      "public/turmeric.jpg"
    ]
  },
  {
    id: 6,
    name: "Black Peppercorns",
    category: "Spices",
    description: "Premium black peppercorns with intense flavor and aromatic complexity.",
    details: "Our Black Peppercorns are harvested at optimal ripeness to ensure maximum flavor development. These peppercorns feature a complex aroma with notes of pine, citrus, and wood, complemented by a sharp, penetrating heat. Each batch undergoes rigorous quality control to ensure uniform size, color, and oil content. Available in whole, crushed, and ground forms.",
    origin: "Vietnam",
    images: [
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 7,
    name: "Atlantic Salmon Fillets",
    category: "Seafood",
    description: "Fresh, premium salmon fillets with rich flavor and high omega-3 content.",
    details: "Our Atlantic Salmon Fillets are sustainably harvested from the cold, clear waters of the North Atlantic. Each fillet is carefully trimmed, pin-boned, and processed within hours of catching to ensure exceptional freshness. The fish are flash-frozen to lock in flavor and nutritional value. Available skin-on or skinless, portioned to your specifications, and in various packaging options suitable for retail or foodservice.",
    origin: "Norway",
    images: [
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2026&auto=format&fit=crop"
    ]
  },
  {
    id: 8,
    name: "Organic Broccoli",
    category: "Vegetables",
    description: "Fresh, certified organic broccoli florets, blanched and quick-frozen.",
    details: "Our Organic Broccoli is grown using sustainable farming practices and harvested at peak ripeness. The florets are carefully selected, trimmed to uniform sizes, blanched, and individually quick-frozen to maintain color, texture, and nutritional value. Perfect for food service, ready meals, and retail packaging. Each batch is tested for pesticide residues and microbial safety to ensure the highest quality and food safety standards.",
    origin: "Spain",
    images: [
      "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=2012&auto=format&fit=crop"
    ]
  },
  {
    id: 9,
    name: "Alphonso Mangoes",
    category: "Fruits",
    description: "Premium golden mangoes with rich, sweet flavor and smooth, fiber-free pulp.",
    details: "Our Alphonso Mangoes are handpicked at optimal ripeness from select orchards in India. Known as the 'King of Mangoes,' Alphonso varieties are prized for their intensely sweet flavor, rich aroma, and smooth, fiber-free pulp. Each mango is carefully sorted, graded, and packed to ensure perfect ripening upon arrival. Available seasonally in various packaging options suited for premium retail and specialty food service.",
    origin: "India",
    images: [
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 10,
    name: "Premium Lamb Rack",
    category: "Meat",
    description: "Tender, well-trimmed lamb racks from pasture-raised animals.",
    details: "Our Premium Lamb Racks are sourced from animals raised on open pastures, resulting in meat that's tender, flavorful, and well-marbled. Each rack is French-trimmed to exacting specifications, with the fat cap perfectly scored. The meat undergoes controlled aging for tenderness before being vacuum-packed and flash-frozen to preserve freshness. Ideal for high-end restaurants, specialty meat retailers, and gourmet food service operations.",
    origin: "New Zealand",
    images: [
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2070&auto=format&fit=crop"
    ]
  }
];

// Categories for filter
const categories = [
  "All Categories",
  "Food Grains",
  "Spices",
  "Frozen Bovine",
  "Seafood",
  "Lentils",
  "Vegetables",
  "Fruits",
  "Meat"
];

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
      staggerChildren: 0.1
    }
  }
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("name-asc");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products based on category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All Categories" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.origin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products based on sort order
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOrder) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "origin-asc":
        return a.origin.localeCompare(b.origin);
      case "origin-desc":
        return b.origin.localeCompare(a.origin);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('public/lentils.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-4">Product Portfolio</h1>
            <p className="text-xl text-white/80">
              Explore our comprehensive range of premium agricultural products sourced from around the world.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Product Filtering Section */}
      <section className="py-8 bg-harvest-cream/20 border-b border-harvest-lightbrown/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="w-full md:w-48">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-48">
              <Select
                value={sortOrder}
                onValueChange={setSortOrder}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  <SelectItem value="origin-asc">Origin (A-Z)</SelectItem>
                  <SelectItem value="origin-desc">Origin (Z-A)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Grid Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {sortedProducts.length > 0 ? (
                sortedProducts.map((product) => (
                  <motion.div 
                    key={product.id}
                    layout
                    variants={fadeIn}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      onClick={() => setSelectedProduct(product)}
                      className="cursor-pointer group"
                    >
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="border border-harvest-lightbrown/20 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300">
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <span className="inline-block px-2 py-1 bg-harvest-brown/80 text-white text-xs rounded-full mb-2">
                                {product.category}
                              </span>
                              <h3 className="text-xl font-bold text-white">{product.name}</h3>
                            </div>
                          </div>
                          <div className="p-4">
                            <p className="text-muted-foreground mb-3">{product.description}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">
                                Origin: <span className="font-medium">{product.origin}</span>
                              </span>
                              <Button variant="ghost" size="sm">View Details</Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  variants={fadeIn}
                  className="col-span-full text-center py-12"
                >
                  <h3 className="text-xl font-semibold text-harvest-darkgreen mb-2">No products found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      
      {/* Product Detail Modal */}
      {selectedProduct && (
        <Dialog
          open={!!selectedProduct}
          onOpenChange={(open) => {
            if (!open) setSelectedProduct(null);
          }}
        >
          <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-harvest-darkgreen">
                {selectedProduct.name}
              </DialogTitle>
              <DialogDescription>
                {selectedProduct.description}
              </DialogDescription>
            </DialogHeader>
            
            <Tabs defaultValue="details" className="mt-6">
              <TabsList className="w-full mb-4">
                <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
                <TabsTrigger value="gallery" className="flex-1">Gallery</TabsTrigger>
                <TabsTrigger value="specifications" className="flex-1">Specifications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="mt-2">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img
                      src={selectedProduct.images[0]}
                      alt={selectedProduct.name}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold mb-2">Product Details</h3>
                    <p className="text-muted-foreground mb-4">
                      {selectedProduct.details}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-harvest-darkgreen">Category</h4>
                        <p>{selectedProduct.category}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-harvest-darkgreen">Origin</h4>
                        <p>{selectedProduct.origin}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="bg-harvest-brown hover:bg-harvest-lightbrown text-white">
                        Request Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="gallery" className="mt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProduct.images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${selectedProduct.name} - Image ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="specifications" className="mt-2">
                <div className="bg-harvest-cream/20 p-4 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold mb-2">Product Specifications</h3>
                  <p className="italic text-muted-foreground mb-4">
                    Detailed specifications would be listed here, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Quality standards and certifications</li>
                    <li>Available packaging options</li>
                    <li>Shelf life and storage information</li>
                    <li>Nutritional information (where applicable)</li>
                    <li>Processing methods</li>
                    <li>Minimum order quantities</li>
                  </ul>
                </div>
                <div className="bg-harvest-cream/20 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
                  <p className="italic text-muted-foreground mb-4">
                    Shipping details would be provided here, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Available shipping methods</li>
                    <li>Typical lead times</li>
                    <li>Export documentation requirements</li>
                    <li>Temperature and handling specifications</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}
      
      <Footer />
    </div>
  );
};

export default Products;
