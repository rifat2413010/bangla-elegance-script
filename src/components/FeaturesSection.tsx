import { motion } from "framer-motion";
import { Sparkles, Heart, Palette, Shirt } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "প্রিমিয়াম ফ্যাব্রিক",
    description: "সেরা মানের কটন যা ত্বকে নরম অনুভূতি দেয়।",
  },
  {
    icon: Heart,
    title: "সফট ও আরামদায়ক",
    description: "সারাদিন পরে থাকলেও আরাম পাবেন।",
  },
  {
    icon: Palette,
    title: "উজ্জ্বল রং",
    description: "বারবার ধোয়ার পরেও রং থাকবে নতুনের মতো।",
  },
  {
    icon: Shirt,
    title: "পারফেক্ট ফিট",
    description: "শরীরের সাথে মানানসই কাটিং ও ডিজাইন।",
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
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const iconVariants = {
  initial: { rotate: 0, scale: 1 },
  hover: { 
    rotate: [0, -10, 10, -10, 0],
    scale: 1.2,
    transition: { duration: 0.5 }
  }
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6 border border-gold/20"
            whileHover={{ scale: 1.05, y: -2 }}
            animate={{ 
              boxShadow: ["0 0 0 0 hsl(38 75% 55% / 0)", "0 0 20px 5px hsl(38 75% 55% / 0.2)", "0 0 0 0 hsl(38 75% 55% / 0)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            বিশেষ সুবিধা
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            কেন এই টি-শার্ট <span className="text-shimmer">বিশেষ</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            প্রতিটি বিবরণে মানের প্রতি আমাদের যত্ন প্রকাশ পায়।
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)"
              }}
              className="group bg-background p-6 rounded-2xl border border-border hover:border-gold/30 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <motion.div 
                className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors relative z-10"
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <feature.icon className="w-7 h-7 text-gold" />
                </motion.div>
              </motion.div>
              <motion.h3 
                className="text-lg font-semibold text-foreground mb-2 relative z-10"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {feature.title}
              </motion.h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                {feature.description}
              </p>
              
              {/* Corner decoration */}
              <motion.div 
                className="absolute -bottom-2 -right-2 w-16 h-16 bg-gold/10 rounded-full opacity-0 group-hover:opacity-100"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;