import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
interface Props {
  name: string;
  program: string;
  year: string;
  quote: string;
}
const Card = ({ name, program, year, quote }: Props) => (
  <div className="md:w-1/3 flex-shrink-0 overflow-hidden border rounded-lg">
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src="/placeholder.svg?height=48&width=48"
            width={48}
            height={48}
            alt="Student portrait"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-black">{name}</h4>
          <p className="text-sm text-slate-600">
            {program}, Class of {year}
          </p>
        </div>
      </div>
      <p className="text-slate-600 italic">"{quote}"</p>
    </div>
  </div>
);

const Testimonial = () => (
  <section className="py-16 md:py-24 bg-slate-50">
    <div className="container mx-auto px-8 2xl:max-w-[1400px]">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-black">
          Student Testimonials
        </h2>
        <div className="mt-4 h-1 w-20 bg-[#0e7490] mx-auto"></div>
        <p className="mt-6 text-slate-600">
          Hear what our students and alumni have to say about their experience
          at our college.
        </p>
      </div>

      <div className="mt-12 relative">
        <div className="overflow-hidden px-4">
          <div className="flex flex-col md:flex-row gap-6">
            <Card
              name="Sarah Johnson"
              program="Pharm.D"
              year="2022"
              quote="The hands-on experience and mentorship I received at PharmCollege prepared me exceptionally well for my career. The faculty's dedication to student success is unmatched."
            />
            <Card
              name="Michael Chen"
              program="B.Pharm"
              year="2023"
              quote="The research opportunities available to undergraduates are incredible. I was able to contribute to meaningful research projects from my second year, which gave me a competitive edge."
            />
            <Card
              name="Priya Patel"
              program="M.S. Pharmaceutical Sciences"
              year="2021"
              quote="The faculty's industry connections helped me secure an internship that turned into a full-time position. The curriculum perfectly balances theory with practical applications."
            />
          </div>
        </div>

        <div className="flex justify-center mt-8  gap-5">
          <button className=" h-10 w-10 border border-neutral-600 flex justify-center items-center rounded-full text-neutral-700 bg-white hover:cursor-pointer hover:bg-neutral-100">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="h-10 w-10 border border-neutral-600 flex justify-center items-center rounded-full text-neutral-700 bg-white hover:cursor-pointer hover:bg-neutral-100">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonial;
