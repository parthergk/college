import React from 'react'
import Image from "next/image";
const Hero = () => {
  return (
    <section className="relative">
    <div className="absolute inset-0 bg-gradient-to-r from-[#0e7490]/80 to-[#0e7490]/40 z-10" />
    <Image
      src="/img/main.jpg"
      width={1600}
      height={600}
      alt="Pharmacy students in laboratory"
      className="w-full h-[600px] object-cover"
      priority
    />
      <div className=" px-4 py-6 sm:p-8 absolute z-10 inset-0 flex flex-col justify-center max-w-2xl text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Shaping the Future of Pharmaceutical Excellence
        </h1>
        <p className="mt-6 text-lg">
          Join our prestigious college and embark on a journey to become a
          leader in pharmaceutical innovation and healthcare.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="bg-white hover:bg-white/90 h-11 rounded-md px-8 text-black cursor-pointer">
            Apply Now
          </button>
          <button className="bg-transparent border-white text-white hover:bg-white/10 border border-input h-11 rounded-md px-8 cursor-pointer">
            Schedule a Visit
          </button>
        </div>
      </div>
  </section>
  )
}

export default Hero