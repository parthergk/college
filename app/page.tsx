
import Link from "next/link";
import {
  ChevronRight,
  Beaker,
  BookOpen,
  FlaskRoundIcon as Flask,
  Microscope,
  Building,
  Users,
  ChevronLeft,
} from "lucide-react";
import Card from "@/components/Card";
import Testimonials from "@/components/Testimonial";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header/>
      <main className="flex-1">
        <Hero/>
      </main>
      <Footer/>
    </div>
  );
}
