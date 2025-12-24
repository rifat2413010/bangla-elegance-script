import { motion } from "framer-motion";
import { Gift, Clock, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const bonusItems = [
  {
    icon: Gift,
    title: "ফ্রি গিফট র‍্যাপিং",
    description: "আপনার অর্ডার আসবে প্রিমিয়াম প্যাকেজিংয়ে। উপহার দিতে চাইলে একদম রেডি।",
  },
  {
    icon: Clock,
    title: "সীমিত স্টক",
    description: "প্রতিটি ব্যাচে সীমিত সংখ্যক পণ্য তৈরি হয়। দেরি করলে মিস হতে পারে।",
  },
  {
    icon: Zap,
    title: "দ্রুত ডেলিভারি",
    description: "ঢাকায় ২-৩ দিন এবং ঢাকার বাইরে ৩-৫ দিনের মধ্যে পৌঁছে যাবে।",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const BonusSection = () => {
  const scrollToOrder = () => {
    document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [-50, 50, -50],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6 border border-gold/30"
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: ["0 0 0 0 hsl(38 75% 55% / 0)", "0 0 20px 5px hsl(38 75% 55% / 0.3)", "0 0 0 0 hsl(38 75% 55% / 0)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            সীমিত সময়ের অফার
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-cream mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            বিশেষ <span className="text-shimmer">বোনাস অফার</span>
          </motion.h2>
          <motion.p 
            className="text-cream/70 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            এখনই অর্ডার করলে পাচ্ছেন বিশেষ সুবিধা যা শুধু সীমিত সময়ের জন্য।
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {bonusItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.3)"
              }}
              className="bg-charcoal-light/50 backdrop-blur-sm p-6 rounded-2xl border border-gold/20 cursor-pointer group relative overflow-hidden"
            >
              {/* Shine effect on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />
              
              <motion.div 
                className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4 relative z-10"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  <item.icon className="w-6 h-6 text-gold" />
                </motion.div>
              </motion.div>
              <motion.h3 
                className="text-lg font-semibold text-cream mb-2 relative z-10"
                whileHover={{ x: 5 }}
              >
                {item.title}
              </motion.h3>
              <p className="text-cream/60 text-sm leading-relaxed relative z-10">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToOrder}
              className="animate-pulse-gold relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-gold/0 via-white/20 to-gold/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              <span className="relative flex items-center gap-2">
                এখনই অর্ডার করুন
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </span>
            </Button>
          </motion.div>
          <motion.p 
            className="text-cream/50 text-sm mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            বুদ্ধিমানের কাজ হলো সময় থাকতে সিদ্ধান্ত নেওয়া।
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default BonusSection;