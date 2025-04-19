import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServersList from "@/components/ServersList";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import HowToJoin from "@/components/HowToJoin";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServersList />
        <Features />
        <Stats />
        <HowToJoin />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
