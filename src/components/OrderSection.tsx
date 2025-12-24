import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck, Truck, CreditCard, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const OrderSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    deliveryArea: "inside",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.mobile || !formData.address) {
      toast({
        title: "তথ্য পূরণ করুন",
        description: "সব তথ্য সঠিকভাবে পূরণ করুন।",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate order submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "অর্ডার সফল হয়েছে!",
      description: "শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব।",
    });
    
    setFormData({ name: "", mobile: "", address: "", deliveryArea: "inside" });
    setIsSubmitting(false);
  };

  const deliveryCharge = formData.deliveryArea === "inside" ? 50 : 100;

  const trustBadges = [
    {
      icon: ShieldCheck,
      title: "কোয়ালিটি নিশ্চিত",
      description: "১০০% অরিজিনাল প্রোডাক্ট। সন্তুষ্ট না হলে রিটার্ন সুবিধা।",
    },
    {
      icon: Truck,
      title: "দ্রুত ডেলিভারি",
      description: "ঢাকায় ২-৩ দিন, ঢাকার বাইরে ৩-৫ দিনের মধ্যে।",
    },
    {
      icon: CreditCard,
      title: "ক্যাশ অন ডেলিভারি",
      description: "পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন।",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="order-section" className="py-20 lg:py-32 bg-card relative overflow-hidden">
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
          className="text-center mb-12"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6 border border-gold/20"
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: ["0 0 0 0 hsl(38 75% 55% / 0)", "0 0 20px 5px hsl(38 75% 55% / 0.2)", "0 0 0 0 hsl(38 75% 55% / 0)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            অর্ডার করুন
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            সহজ অর্ডার <span className="text-shimmer">প্রক্রিয়া</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            ক্যাশ অন ডেলিভারি সুবিধায় নিশ্চিন্তে অর্ডার করুন।
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Trust badges */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.title}
                variants={itemVariants}
                whileHover={{ 
                  x: 10,
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)"
                }}
                className="bg-background p-6 rounded-2xl border border-border cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <badge.icon className="w-6 h-6 text-gold" />
                    </motion.div>
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="font-semibold text-foreground mb-1"
                      whileHover={{ x: 3 }}
                    >
                      {badge.title}
                    </motion.h3>
                    <p className="text-sm text-muted-foreground">
                      {badge.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Urgency */}
            <motion.div 
              className="bg-gold/10 border border-gold/20 p-4 rounded-xl text-center"
              variants={itemVariants}
              animate={{ 
                boxShadow: ["0 0 0 0 hsl(38 75% 55% / 0)", "0 0 20px 5px hsl(38 75% 55% / 0.15)", "0 0 0 0 hsl(38 75% 55% / 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.p 
                className="text-gold font-medium"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ⚡ সীমিত স্টক উপলব্ধ — এখনই অর্ডার করুন
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Order Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="bg-background p-8 rounded-2xl border border-border shadow-soft relative overflow-hidden"
              whileHover={{ 
                boxShadow: "0 20px 50px -15px rgba(0,0,0,0.15)"
              }}
            >
              {/* Form shine effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -translate-x-full"
                animate={{ translateX: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
              
              <div className="space-y-5 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <Label htmlFor="name" className="text-foreground mb-2 block">
                    নাম
                  </Label>
                  <motion.div
                    animate={focusedField === "name" ? { scale: 1.02 } : { scale: 1 }}
                  >
                    <Input
                      id="name"
                      placeholder="আপনার পুরো নাম"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="h-12 transition-all duration-300 focus:ring-2 focus:ring-gold/30 focus:border-gold"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Label htmlFor="mobile" className="text-foreground mb-2 block">
                    মোবাইল নাম্বার
                  </Label>
                  <motion.div
                    animate={focusedField === "mobile" ? { scale: 1.02 } : { scale: 1 }}
                  >
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="০১XXXXXXXXX"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      onFocus={() => setFocusedField("mobile")}
                      onBlur={() => setFocusedField(null)}
                      className="h-12 transition-all duration-300 focus:ring-2 focus:ring-gold/30 focus:border-gold"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Label htmlFor="address" className="text-foreground mb-2 block">
                    ঠিকানা / লোকেশন
                  </Label>
                  <motion.div
                    animate={focusedField === "address" ? { scale: 1.02 } : { scale: 1 }}
                  >
                    <Input
                      id="address"
                      placeholder="সম্পূর্ণ ডেলিভারি ঠিকানা"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      onFocus={() => setFocusedField("address")}
                      onBlur={() => setFocusedField(null)}
                      className="h-12 transition-all duration-300 focus:ring-2 focus:ring-gold/30 focus:border-gold"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Label className="text-foreground mb-3 block">
                    ডেলিভারি এলাকা
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: "inside", label: "ঢাকার ভিতরে", charge: "৳৫০" },
                      { value: "outside", label: "ঢাকার বাইরে", charge: "৳১০০" }
                    ].map((option) => (
                      <motion.button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, deliveryArea: option.value })}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          formData.deliveryArea === option.value
                            ? "border-gold bg-gold/10 text-foreground"
                            : "border-border text-muted-foreground hover:border-gold/50"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        animate={formData.deliveryArea === option.value ? {
                          boxShadow: ["0 0 0 0 hsl(38 75% 55% / 0)", "0 0 15px 3px hsl(38 75% 55% / 0.2)", "0 0 0 0 hsl(38 75% 55% / 0)"]
                        } : {}}
                        transition={{ duration: 1.5, repeat: formData.deliveryArea === option.value ? Infinity : 0 }}
                      >
                        <div className="font-semibold">{option.label}</div>
                        <div className="text-sm mt-1">{option.charge}</div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Delivery charge summary */}
                <motion.div 
                  className="bg-card p-4 rounded-xl border border-border"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex justify-between text-muted-foreground text-sm mb-2">
                    <span>ডেলিভারি চার্জ</span>
                    <motion.span
                      key={deliveryCharge}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      ৳{deliveryCharge}
                    </motion.span>
                  </div>
                  <div className="flex justify-between text-foreground font-semibold">
                    <span>মোট</span>
                    <motion.span 
                      className="text-gold"
                      key={990 + deliveryCharge}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                    >
                      ৳{990 + deliveryCharge}
                    </motion.span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="xl" 
                    className="w-full relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.span
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <Loader2 className="w-5 h-5 animate-spin" />
                          প্রক্রিয়াধীন...
                        </motion.span>
                      ) : (
                        <motion.span
                          key="submit"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="w-5 h-5" />
                          অর্ডার কনফার্ম করুন
                        </motion.span>
                      )}
                    </AnimatePresence>
                    
                    {/* Button shine effect */}
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                  </Button>
                </motion.div>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;