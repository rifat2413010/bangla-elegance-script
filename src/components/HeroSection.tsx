import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroTshirt from "@/assets/hero-tshirt.png";

const HeroSection = () => {
  const scrollToOrder = () => {
    document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-charcoal-light" />
        
        {/* Decorative circles */}
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-gold/3 blur-3xl" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 lg:pt-40 lg:pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8"
            >
              <span className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </span>
              <span className="text-gold text-sm font-medium">প্রিমিয়াম কালেকশন ২০২৪</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream leading-[1.1] mb-6">
              স্টাইল যেখানে
              <br />
              <span className="text-gradient-gold">কোয়ালিটির সাথে</span>
              <br />
              মিলে যায়
            </h1>
            
            <p className="text-lg md:text-xl text-cream/60 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              প্রিমিয়াম কাপড়ের আরাম অনুভব করুন। প্রতিদিন ব্যবহারের জন্য পারফেক্ট ফিট এবং দীর্ঘস্থায়ী কোয়ালিটি।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={scrollToOrder}
                className="group rounded-xl"
              >
                এখনই অর্ডার করুন
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="premium" 
                size="lg" 
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-xl"
              >
                বিস্তারিত দেখুন
              </Button>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/40 to-gold/20 border-2 border-charcoal flex items-center justify-center text-cream text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-cream font-semibold">১০০০+</div>
                  <div className="text-cream/50 text-sm">সন্তুষ্ট গ্রাহক</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-cream/20" />
              <div className="flex items-center gap-3 text-cream/60 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>ক্যাশ অন ডেলিভারি</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative order-1 lg:order-2"
          >
            {/* Glow effect behind product */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-gold/20 blur-[100px]" />
            </div>
            
            {/* Product image */}
            <div className="relative animate-float">
              <img
                src={heroTshirt}
                alt="UR Media প্রিমিয়াম টি-শার্ট"
                className="w-full max-w-xl mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute top-1/4 -right-4 lg:right-0 bg-charcoal/90 backdrop-blur-sm border border-gold/20 rounded-2xl px-4 py-3 shadow-elevated"
            >
              <div className="text-gold text-xl font-bold">৳৯৯০</div>
              <div className="text-cream/60 text-xs">শুধুমাত্র</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute bottom-1/4 -left-4 lg:left-0 bg-charcoal/90 backdrop-blur-sm border border-gold/20 rounded-2xl px-4 py-3 shadow-elevated"
            >
              <div className="text-cream text-sm font-medium">১০০% কটন</div>
              <div className="text-cream/50 text-xs">প্রিমিয়াম ফ্যাব্রিক</div>
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
