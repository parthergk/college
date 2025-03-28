import Testimonial from "@/components/Testimonial";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Program from "@/components/Program";
import Campus from "@/components/Campus";
import Facilities from "@/components/Facilities";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header/>
      <main className="flex-1">
        <Hero/>
        <About/>
        <Program/>
        <Campus/>
        <Facilities/>
        <Testimonial/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
