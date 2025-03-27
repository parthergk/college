import Link from 'next/link';
import { ChevronRight, LucideIcon } from 'lucide-react';
interface Props{
  icon: LucideIcon,
  title: string,
  description: string
}
const Card = ({ icon: Icon, title, description }: Props) => (
  <div className="overflow-hidden transition-all hover:shadow-lg border rounded-lg">
    <div className="h-48 bg-[#0e7490]/10 flex items-center justify-center">
      <Icon className="h-16 w-16 text-[#0e7490]" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
      <Link href="#" className="mt-4 inline-flex items-center text-[#0e7490] underline-offset-4 hover:underline">
        Learn More <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  </div>
);

export default Card