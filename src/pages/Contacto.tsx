import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";

const Contacto = () => (
  <>
    <Navbar />
    <main className="pt-20">
      <ContactSection />
    </main>
    <Footer />
    <MobileFloatingCTA />
  </>
);

export default Contacto;
