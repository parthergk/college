import Image from "next/image";
import React from "react";

const Campus = () => {
  return (
    <section id="campus" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-8 2xl:max-w-[1400px]">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-black">Campus Life</h2>
          <div className="mt-4 h-1 w-20 bg-[#0e7490] mx-auto"></div>
          <p className="mt-6 text-slate-600">
            Experience a vibrant campus community with state-of-the-art
            facilities, diverse student organizations, and enriching activities.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square overflow-hidden rounded-lg hover:shadow-lg cursor-pointer">
            <Image
              src="/img/camp1.jpg"
              width={300}
              height={300}
              alt="Campus library"
              className="w-full h-full object-cover transition-transform hover:scale-105 "
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg hover:shadow-lg cursor-pointer">
            <Image
              src="/img/camp2.png"
              width={300}
              height={300}
              alt="Student lounge"
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg hover:shadow-lg cursor-pointer">
            <Image
              src="/img/camp3.jpg"
              width={300}
              height={300}
              alt="Research laboratory"
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg hover:shadow-lg cursor-pointer">
            <Image
              src="/img/camp4.JPG"
              width={300}
              height={300}
              alt="Student activities"
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg hover:shadow-lg cursor-pointer">
            <Image
              src="/img/camp5.jpg"
              width={300}
              height={300}
              alt="Campus grounds"
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg hover:shadow-lg cursor-pointer">
            <Image
              src="/img/camp6.jpg"
              width={300}
              height={300}
              alt="Lecture hall"
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg hover:shadow-lg cursor-pointer">
            <Image
              src="/img/about.JPG"
              width={300}
              height={300}
              alt="Student dormitory"
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg hover:shadow-lg cursor-pointer">
            <Image
              src="/img/main.jpg"
              width={300}
              height={300}
              alt="Campus cafeteria"
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;
