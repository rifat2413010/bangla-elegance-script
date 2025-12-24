import { motion } from "framer-motion";
import tshirtDetail from "@/assets/tshirt-detail.png";
import { CheckCircle } from "lucide-react";

const ProductDescription = () => {
  const qualityPoints = [
    "সেরা মানের কটন থেকে তৈরি",
    "নরম অনুভূতি এবং দীর্ঘস্থায়িত্ব",
    "বারবার ধোয়ার পরেও রং অটুট",
    "প্রতিদিন পরার উপযোগী ডিজাইন"
  ];

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={tshirtDetail}
                alt="টি-শার্ট ফ্যাব্রিক ডিটেইল"
                className="w-full rounded-2xl shadow-elevated"
                whileHover={{ 
                  boxShadow: "0 30px 60px -15px rgba(0,0,0,0.3)"
                }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-gold text-charcoal px-6 py-3 rounded-xl font-semibold shadow-gold"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 3,
                  boxShadow: "0 15px 40px -10px hsl(38 75% 55% / 0.5)"
                }}
              >
                প্রিমিয়াম কোয়ালিটি
              </motion.div>
              
              {/* Floating decoration */}
              <motion.div 
                className="absolute -top-4 -left-4 w-20 h-20 border-2 border-gold/20 rounded-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6 border border-gold/20"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                boxShadow: ["0 0 0 0 hsl(38 75% 55% / 0)", "0 0 15px 3px hsl(38 75% 55% / 0.15)", "0 0 0 0 hsl(38 75% 55% / 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              কেন আমাদের টি-শার্ট আলাদা
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              প্রতিটি সেলাইয়ে <br />
              <span className="text-shimmer">মানের প্রতিশ্রুতি</span>
            </motion.h2>

            <div className="space-y-4 mb-8">
              {qualityPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  </motion.div>
                  <span className="text-muted-foreground">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* Quality badges */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="bg-card p-4 rounded-xl border border-border hover-lift cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ 
                  borderColor: "hsl(38 75% 55% / 0.5)",
                  boxShadow: "0 10px 30px -10px hsl(38 75% 55% / 0.2)"
                }}
              >
                <motion.div 
                  className="text-2xl font-bold text-gold mb-1"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ১০০%
                </motion.div>
                <div className="text-sm text-muted-foreground">প্রিমিয়াম কটন</div>
              </motion.div>
              <motion.div 
                className="bg-card p-4 rounded-xl border border-border hover-lift cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ 
                  borderColor: "hsl(38 75% 55% / 0.5)",
                  boxShadow: "0 10px 30px -10px hsl(38 75% 55% / 0.2)"
                }}
              >
                <motion.div 
                  className="text-2xl font-bold text-gold mb-1"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  ৫০+
                </motion.div>
                <div className="text-sm text-muted-foreground">ওয়াশ গ্যারান্টি</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;