import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import heroTshirt from "@/assets/hero-tshirt.png";

const HeroSection = () => {
  const scrollToOrder = () => {
    document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const floatingBadgeVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-cream to-secondary" />
        
        {/* Animated decorative circles */}
        <motion.div 
          className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-gold/3 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0,0,0,.06) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gold/30"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 lg:pt-40 lg:pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Premium badge */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8 cursor-pointer"
            >
              <motion.span 
                className="flex items-center gap-1"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                  </motion.div>
                ))}
              </motion.span>
              <motion.span 
                className="text-gold text-sm font-medium"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                প্রিমিয়াম কালেকশন ২০২৪
              </motion.span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 text-foreground"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                স্টাইল যেখানে
              </motion.span>
              <br />
              <motion.span 
                className="text-gradient-gold inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                কোয়ালিটির সাথে
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                মিলে যায়
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              প্রিমিয়াম কাপড়ের আরাম অনুভব করুন। প্রতিদিন ব্যবহারের জন্য পারফেক্ট ফিট এবং দীর্ঘস্থায়ী কোয়ালিটি।
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="hero" 
                  size="xl" 
                  onClick={scrollToOrder}
                  className="group rounded-xl relative overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <span className="relative flex items-center">
                    এখনই অর্ডার করুন
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.span>
                  </span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="premium" 
                  size="lg" 
                  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                  className="rounded-xl hover-shine"
                >
                  বিস্তারিত দেখুন
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div 
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/25 to-gold/10 border-2 border-border flex items-center justify-center text-foreground text-xs font-bold"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + i * 0.1 }}
                      whileHover={{ 
                        scale: 1.2, 
                        zIndex: 10,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {String.fromCharCode(64 + i)}
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  className="text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <motion.div 
                    className="text-foreground font-semibold"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ১০০০+
                  </motion.div>
                  <div className="text-muted-foreground text-sm">সন্তুষ্ট গ্রাহক</div>
                </motion.div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-border" />
              <motion.div 
                className="flex items-center gap-3 text-muted-foreground text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
              >
                <motion.div 
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span>ক্যাশ অন ডেলিভারি</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="relative order-1 lg:order-2"
          >
            {/* Glow effect behind product */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-80 h-80 rounded-full bg-gold/20 blur-[100px]"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            
            {/* Product image */}
            <motion.div 
              className="relative"
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={heroTshirt}
                alt="UR Media প্রিমিয়াম টি-শার্ট"
                className="w-full max-w-xl mx-auto rounded-3xl"
                whileHover={{ 
                  rotateY: 10,
                  rotateX: 5,
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Sparkle effects */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${20 + i * 20}%`,
                    left: `${15 + i * 18}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  <Sparkles className="w-4 h-4 text-gold" />
                </motion.div>
              ))}
            </motion.div>

            {/* Floating badges */}
            <motion.div
              variants={floatingBadgeVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ delay: 1.2 }}
              className="absolute top-1/4 -right-4 lg:right-0 bg-background/70 backdrop-blur-md border border-border rounded-2xl px-4 py-3 shadow-soft cursor-pointer"
            >
              <motion.div 
                className="text-gold text-xl font-bold"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ৳৯৯০
              </motion.div>
              <div className="text-muted-foreground text-xs">শুধুমাত্র</div>
            </motion.div>

            <motion.div
              variants={floatingBadgeVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ delay: 1.4 }}
              className="absolute bottom-1/4 -left-4 lg:left-0 bg-background/70 backdrop-blur-md border border-border rounded-2xl px-4 py-3 shadow-soft cursor-pointer"
            >
              <motion.div 
                className="text-foreground text-sm font-medium"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ১০০% কটন
              </motion.div>
              <div className="text-muted-foreground text-xs">প্রিমিয়াম ফ্যাব্রিক</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;