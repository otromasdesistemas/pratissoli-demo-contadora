import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ForWhom from "@/components/ForWhom";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ForWhom />
      <Services />
      <Stats />
      <Process />
      <About />
      <FAQ />
      <Testimonials />
      <CTA />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
