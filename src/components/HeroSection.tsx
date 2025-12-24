import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroTshirt from "@/assets/hero-tshirt.png";

const HeroSection = () => {
  const scrollToOrder = () => {
    document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6 border border-gold/20"
            >
              প্রিমিয়াম কালেকশন
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
              স্টাইল যেখানে <br />
              <span className="text-gradient-gold">কোয়ালিটির সাথে মিলে যায়</span>
            </h1>
            
            <p className="text-lg md:text-xl text-cream/70 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              প্রিমিয়াম কাপড়ের আরাম অনুভব করুন। প্রতিদিন ব্যবহারের জন্য পারফেক্ট ফিট এবং দীর্ঘস্থায়ী কোয়ালিটি।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" onClick={scrollToOrder}>
                এখনই অর্ডার করুন
              </Button>
              <Button variant="goldOutline" size="lg" onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}>
                বিস্তারিত দেখুন
              </Button>
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start text-cream/60 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span>১০০% অরিজিনাল</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span>ক্যাশ অন ডেলিভারি</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span>দ্রুত ডেলিভারি</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative animate-float">
              <img
                src={heroTshirt}
                alt="UR Media প্রিমিয়াম টি-শার্ট"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gold/10 rounded-full blur-3xl -z-10 scale-75" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-cream/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-gold" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
