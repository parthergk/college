import {
  Beaker,
  BookOpen,
  Building,
  FlaskRound,
  Microscope,
  Users,
} from "lucide-react";
import React from "react";

const Facilities = () => {
  return (
    <section id="facilities" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-8 2xl:max-w-[1400px]">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-black">Our Facilities</h2>
          <div className="mt-4 h-1 w-20 bg-[#0e7490] mx-auto"></div>
          <p className="mt-6 text-slate-600">
            Our college boasts cutting-edge facilities designed to provide
            students with hands-on experience and research opportunities.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#0e7490]/10 flex items-center justify-center mb-4">
              <Microscope className="h-8 w-8 text-[#0e7490]" />
            </div>
            <h3 className="text-xl font-bold text-black">Research Laboratories</h3>
            <p className="mt-2 text-slate-600">
              State-of-the-art research labs equipped with the latest technology
              for pharmaceutical research and development.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#0e7490]/10 flex items-center justify-center mb-4">
              <FlaskRound className="h-8 w-8 text-[#0e7490]" />
            </div>
            <h3 className="text-xl font-bold text-black">Compounding Pharmacy</h3>
            <p className="mt-2 text-slate-600">
              Simulated pharmacy environment where students learn medication
              preparation and dispensing techniques.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#0e7490]/10 flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-[#0e7490]" />
            </div>
            <h3 className="text-xl font-bold text-black">Specialized Library</h3>
            <p className="mt-2 text-slate-600">
              Comprehensive collection of pharmaceutical literature, journals,
              and digital resources for research and study.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#0e7490]/10 flex items-center justify-center mb-4">
              <Building className="h-8 w-8 text-[#0e7490]" />
            </div>
            <h3 className="text-xl font-bold text-black">Simulation Center</h3>
            <p className="mt-2 text-slate-600">
              Clinical simulation facilities for practicing patient care
              scenarios and interprofessional collaboration.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#0e7490]/10 flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-[#0e7490]" />
            </div>
            <h3 className="text-xl font-bold text-black">Collaborative Spaces</h3>
            <p className="mt-2 text-slate-600">
              Modern study areas designed for group projects, discussions, and
              interdisciplinary collaboration.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#0e7490]/10 flex items-center justify-center mb-4">
              <Beaker className="h-8 w-8 text-[#0e7490]" />
            </div>
            <h3 className="text-xl font-bold text-black">Drug Analysis Lab</h3>
            <p className="mt-2 text-slate-600">
              Specialized laboratory for pharmaceutical analysis, quality
              control, and formulation development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
