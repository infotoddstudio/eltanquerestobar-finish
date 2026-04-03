import Navbar from "@/components/Navbar";
import ElTanqueHero from "@/components/ElTanqueHero";
import TickerBanner from "@/components/TickerBanner";
import PopularSection from "@/components/PopularSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";

const Index = () => (
  <>
    <Navbar />
    <main>
      <ElTanqueHero />
      <TickerBanner />
      <PopularSection />
      <MenuSection />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <GallerySection />
      <ContactSection />
    </main>
    <Footer />
    <MobileFloatingCTA />
  </>
);

export default Index;
