import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const Card = ({ icon: Icon, title, description }) => (
  <div className="overflow-hidden transition-all hover:shadow-lg border rounded-lg">
    <div className="h-48 bg-primary/10 flex items-center justify-center">
      <Icon className="h-16 w-16 text-primary" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
      <Link href="#" className="mt-4 inline-flex items-center text-primary underline-offset-4 hover:underline">
        Learn More <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  </div>
);

export default Card