import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
  const scrollToOrder = () => {
    document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-foreground">
            UR <span className="text-gradient-gold">Media</span>
          </span>
        </div>
        <Button variant="gold" size="sm" onClick={scrollToOrder}>
          Order Now
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
