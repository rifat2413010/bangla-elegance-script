import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductDescription from "@/components/ProductDescription";
import FeaturesSection from "@/components/FeaturesSection";
import BonusSection from "@/components/BonusSection";
import ReviewsSection from "@/components/ReviewsSection";
import OrderSection from "@/components/OrderSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductDescription />
      <FeaturesSection />
      <BonusSection />
      <ReviewsSection />
      <OrderSection />
    </main>
  );
};

export default Index;
