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

  const navLinkVariants = {
    initial: { y: 0 },
    hover: { 
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  const underlineVariants = {
    initial: { scaleX: 0 },
    hover: { 
      scaleX: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <motion.div 
        className="bg-white/80 backdrop-blur-xl rounded-full px-6 md:px-10 py-3.5 shadow-lg border border-white/50"
        whileHover={{ 
          boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)",
          scale: 1.01
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-6 md:gap-10">
          {/* Logo */}
          <motion.div 
            className="flex items-center flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl md:text-2xl font-bold text-charcoal">
              UR <motion.span 
                className="text-gold-dark"
                animate={{ 
                  textShadow: ["0 0 0px hsl(35 80% 40%)", "0 0 10px hsl(35 80% 40%)", "0 0 0px hsl(35 80% 40%)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >Media</motion.span>
            </span>
          </motion.div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "বিশেষত্ব", onClick: scrollToFeatures },
              { label: "রিভিউ", onClick: scrollToReviews },
              { label: "অর্ডার", onClick: scrollToOrder }
            ].map((item) => (
              <motion.button
                key={item.label}
                onClick={item.onClick}
                className="relative text-charcoal/70 hover:text-charcoal transition-colors text-sm font-medium py-1"
                variants={navLinkVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <motion.span 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-left"
                  variants={underlineVariants}
                />
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="gold" 
              size="sm" 
              onClick={scrollToOrder}
              className="rounded-full px-6 hover-shine relative overflow-hidden"
            >
              <motion.span
                animate={{ 
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Order Now
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;