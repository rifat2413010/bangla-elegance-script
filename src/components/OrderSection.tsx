import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck, Truck, CreditCard } from "lucide-react";
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

  return (
    <section id="order-section" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6 border border-gold/20">
            অর্ডার করুন
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            সহজ অর্ডার <span className="text-gradient-gold">প্রক্রিয়া</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            ক্যাশ অন ডেলিভারি সুবিধায় নিশ্চিন্তে অর্ডার করুন।
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-background p-6 rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    কোয়ালিটি নিশ্চিত
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    ১০০% অরিজিনাল প্রোডাক্ট। সন্তুষ্ট না হলে রিটার্ন সুবিধা।
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    দ্রুত ডেলিভারি
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    ঢাকায় ২-৩ দিন, ঢাকার বাইরে ৩-৫ দিনের মধ্যে।
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    ক্যাশ অন ডেলিভারি
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন।
                  </p>
                </div>
              </div>
            </div>

            {/* Urgency */}
            <div className="bg-gold/10 border border-gold/20 p-4 rounded-xl text-center">
              <p className="text-gold font-medium">
                ⚡ সীমিত স্টক উপলব্ধ — এখনই অর্ডার করুন
              </p>
            </div>
          </motion.div>

          {/* Order Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-background p-8 rounded-2xl border border-border shadow-soft">
              <div className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-foreground mb-2 block">
                    নাম
                  </Label>
                  <Input
                    id="name"
                    placeholder="আপনার পুরো নাম"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="mobile" className="text-foreground mb-2 block">
                    মোবাইল নাম্বার
                  </Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="০১XXXXXXXXX"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="text-foreground mb-2 block">
                    ঠিকানা / লোকেশন
                  </Label>
                  <Input
                    id="address"
                    placeholder="সম্পূর্ণ ডেলিভারি ঠিকানা"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div>
                  <Label className="text-foreground mb-3 block">
                    ডেলিভারি এলাকা
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, deliveryArea: "inside" })}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        formData.deliveryArea === "inside"
                          ? "border-gold bg-gold/10 text-foreground"
                          : "border-border text-muted-foreground hover:border-gold/50"
                      }`}
                    >
                      <div className="font-semibold">ঢাকার ভিতরে</div>
                      <div className="text-sm mt-1">৳৫০</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, deliveryArea: "outside" })}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        formData.deliveryArea === "outside"
                          ? "border-gold bg-gold/10 text-foreground"
                          : "border-border text-muted-foreground hover:border-gold/50"
                      }`}
                    >
                      <div className="font-semibold">ঢাকার বাইরে</div>
                      <div className="text-sm mt-1">৳১০০</div>
                    </button>
                  </div>
                </div>

                {/* Delivery charge summary */}
                <div className="bg-card p-4 rounded-xl border border-border">
                  <div className="flex justify-between text-muted-foreground text-sm mb-2">
                    <span>ডেলিভারি চার্জ</span>
                    <span>৳{deliveryCharge}</span>
                  </div>
                  <div className="flex justify-between text-foreground font-semibold">
                    <span>মোট</span>
                    <span className="text-gold">৳{990 + deliveryCharge}</span>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="xl" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "প্রক্রিয়াধীন..." : "অর্ডার কনফার্ম করুন"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
