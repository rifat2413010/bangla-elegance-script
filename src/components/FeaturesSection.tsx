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

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6 border border-gold/20">
            বিশেষ সুবিধা
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            কেন এই টি-শার্ট <span className="text-gradient-gold">বিশেষ</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            প্রতিটি বিবরণে মানের প্রতি আমাদের যত্ন প্রকাশ পায়।
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-background p-6 rounded-2xl border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-soft"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
