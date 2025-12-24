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
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
    >
      <div className="bg-charcoal/95 backdrop-blur-xl rounded-full px-4 md:px-8 py-3 shadow-elevated border border-gold/10">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xl md:text-2xl font-bold text-cream">
              UR <span className="text-gradient-gold">Media</span>
            </span>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={scrollToFeatures}
              className="text-cream/70 hover:text-cream transition-colors text-sm font-medium"
            >
              বিশেষত্ব
            </button>
            <button
              onClick={scrollToReviews}
              className="text-cream/70 hover:text-cream transition-colors text-sm font-medium"
            >
              রিভিউ
            </button>
            <button
              onClick={scrollToOrder}
              className="text-cream/70 hover:text-cream transition-colors text-sm font-medium"
            >
              অর্ডার
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              variant="gold" 
              size="sm" 
              onClick={scrollToOrder}
              className="rounded-full px-5"
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
