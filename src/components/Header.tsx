import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
  const scrollToOrder = () => {
    document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToReviews = () => {
    document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="bg-white/80 backdrop-blur-xl rounded-full px-6 md:px-10 py-3.5 shadow-lg border border-white/50">
        <div className="flex items-center gap-6 md:gap-10">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl md:text-2xl font-bold text-charcoal">
              UR <span className="text-gold-dark">Media</span>
            </span>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={scrollToFeatures}
              className="text-charcoal/70 hover:text-charcoal transition-colors text-sm font-medium"
            >
              বিশেষত্ব
            </button>
            <button
              onClick={scrollToReviews}
              className="text-charcoal/70 hover:text-charcoal transition-colors text-sm font-medium"
            >
              রিভিউ
            </button>
            <button
              onClick={scrollToOrder}
              className="text-charcoal/70 hover:text-charcoal transition-colors text-sm font-medium"
            >
              অর্ডার
            </button>
          </nav>

          {/* CTA Button */}
          <Button 
            variant="gold" 
            size="sm" 
            onClick={scrollToOrder}
            className="rounded-full px-6"
          >
            Order Now
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
