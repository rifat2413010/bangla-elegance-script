import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "রাফি আহমেদ",
    location: "ঢাকা",
    rating: 5,
    review: "কাপড়ের কোয়ালিটি সত্যিই ভালো। তিন মাস ধরে পরছি, রং একটুও ফ্যাকাশে হয়নি। অবশ্যই আবার অর্ডার করব।",
  },
  {
    name: "তানভীর হোসেন",
    location: "চট্টগ্রাম",
    rating: 5,
    review: "ফিটিং একদম পারফেক্ট। আমি সাধারণত অনলাইনে কাপড় কিনি না, কিন্তু এটা নিয়ে খুশি।",
  },
  {
    name: "ফারহান ইসলাম",
    location: "সিলেট",
    rating: 5,
    review: "ডেলিভারি দ্রুত পেয়েছি। প্যাকেজিংও সুন্দর ছিল। কাপড় পরে আরাম পাচ্ছি।",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6 border border-gold/20">
            গ্রাহকদের মতামত
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            তারা কী <span className="text-gradient-gold">বলছেন</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            যারা আমাদের পণ্য ব্যবহার করেছেন তাদের অভিজ্ঞতা।
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-foreground leading-relaxed mb-6">
                "{review.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-semibold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {review.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {review.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
