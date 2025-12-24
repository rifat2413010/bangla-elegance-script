import { motion } from "framer-motion";
import { Gift, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const BonusSection = () => {
  const scrollToOrder = () => {
    document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6 border border-gold/30">
            সীমিত সময়ের অফার
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
            বিশেষ <span className="text-gradient-gold">বোনাস অফার</span>
          </h2>
          <p className="text-cream/70 max-w-xl mx-auto">
            এখনই অর্ডার করলে পাচ্ছেন বিশেষ সুবিধা যা শুধু সীমিত সময়ের জন্য।
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-charcoal-light/50 backdrop-blur-sm p-6 rounded-2xl border border-gold/20"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
              <Gift className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-lg font-semibold text-cream mb-2">
              ফ্রি গিফট র‍্যাপিং
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              আপনার অর্ডার আসবে প্রিমিয়াম প্যাকেজিংয়ে। উপহার দিতে চাইলে একদম রেডি।
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-charcoal-light/50 backdrop-blur-sm p-6 rounded-2xl border border-gold/20"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-lg font-semibold text-cream mb-2">
              সীমিত স্টক
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              প্রতিটি ব্যাচে সীমিত সংখ্যক পণ্য তৈরি হয়। দেরি করলে মিস হতে পারে।
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-charcoal-light/50 backdrop-blur-sm p-6 rounded-2xl border border-gold/20"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-lg font-semibold text-cream mb-2">
              দ্রুত ডেলিভারি
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              ঢাকায় ২-৩ দিন এবং ঢাকার বাইরে ৩-৫ দিনের মধ্যে পৌঁছে যাবে।
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button 
            variant="hero" 
            size="xl" 
            onClick={scrollToOrder}
            className="animate-pulse-gold"
          >
            এখনই অর্ডার করুন
          </Button>
          <p className="text-cream/50 text-sm mt-4">
            বুদ্ধিমানের কাজ হলো সময় থাকতে সিদ্ধান্ত নেওয়া।
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BonusSection;
