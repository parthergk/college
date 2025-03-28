import React from "react";
import Link from "next/link";
import Card from "./Card";
import { BookOpen, FlaskConical, Microscope } from "lucide-react";

const Program = () => {
  return (
    <section id="programs" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-3 sm:px-8 2xl:max-w-[1400px]">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-black">Our Programs</h2>
          <div className="mt-4 h-1 w-20 bg-[#0e7490] mx-auto"></div>
          <p className="mt-6 text-slate-600">
            We offer a comprehensive range of pharmacy programs designed to
            prepare students for diverse careers in the pharmaceutical industry,
            research, and healthcare.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            icon={BookOpen}
            title="Doctor of Pharmacy (Pharm.D)"
            description="Our flagship 6-year program preparing students for clinical pharmacy practice and patient care."
          />
          <Card
            icon={FlaskConical}
            title="Bachelor of Pharmacy (B.Pharm)"
            description="A 4-year undergraduate program covering pharmaceutical sciences and practice fundamentals."
          />
          <Card
            icon={Microscope}
            title="M.S. in Pharmaceutical Sciences"
            description="Advanced research-focused program with specializations in drug development and pharmacology."
          />
        </div>

        <div className="mt-12 text-center">
          <button className="h-10 px-4 py-2 bg-[#0e7490] text-[#0e7490]-foreground hover:bg-[#0e7490]/90 rounded-lg">
            <Link href="#">View All Programs</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Program;
