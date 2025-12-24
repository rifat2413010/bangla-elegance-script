import { motion } from "framer-motion";
import tshirtDetail from "@/assets/tshirt-detail.png";

const ProductDescription = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <img
                src={tshirtDetail}
                alt="টি-শার্ট ফ্যাব্রিক ডিটেইল"
                className="w-full rounded-2xl shadow-elevated"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold text-charcoal px-6 py-3 rounded-xl font-semibold shadow-gold">
                প্রিমিয়াম কোয়ালিটি
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6 border border-gold/20">
              কেন আমাদের টি-শার্ট আলাদা
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              প্রতিটি সেলাইয়ে <br />
              <span className="text-gradient-gold">মানের প্রতিশ্রুতি</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                আমাদের প্রতিটি টি-শার্ট তৈরি হয় সেরা মানের কটন থেকে। নরম অনুভূতি এবং দীর্ঘস্থায়িত্ব দুটোই পাবেন একসাথে।
              </p>
              <p>
                বিশেষ ফিনিশিং প্রযুক্তি ব্যবহার করা হয় যাতে বারবার ধোয়ার পরেও কাপড়ের রং ও আকৃতি অটুট থাকে।
              </p>
              <p>
                প্রতিদিন পরার উপযোগী ডিজাইন। অফিস হোক বা ক্যাজুয়াল আউটিং, সবখানে মানানসই।
              </p>
            </div>

            {/* Quality badges */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-card p-4 rounded-xl border border-border">
                <div className="text-2xl font-bold text-gold mb-1">১০০%</div>
                <div className="text-sm text-muted-foreground">প্রিমিয়াম কটন</div>
              </div>
              <div className="bg-card p-4 rounded-xl border border-border">
                <div className="text-2xl font-bold text-gold mb-1">৫০+</div>
                <div className="text-sm text-muted-foreground">ওয়াশ গ্যারান্টি</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
