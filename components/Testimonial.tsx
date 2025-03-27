import Image from 'next/image';

const Card = ({ name, program, year, quote }) => (
  <div className={`md:w-1/3 flex-shrink-0 overflow-hidden border rounded-lg}`}>
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
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-slate-600">{program}, Class of {year}</p>
        </div>
      </div>
      <p className="text-slate-600 italic">"{quote}"</p>
    </div>
  </div>
);

const Testimonials = () => (
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
);

export default Testimonials;
