import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-3 sm:px-8 2xl:max-w-[1400px]">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-black">
                  About Our College
                </h2>
                <div className="mt-4 h-1 w-20 bg-[#0e7490]"></div>
                <p className="mt-6 text-slate-600">
                  Founded in 1985, our Pharmacy College has been at the
                  forefront of pharmaceutical education for over three decades.
                  We are committed to academic excellence, innovative research,
                  and producing graduates who make significant contributions to
                  healthcare worldwide.
                </p>
                <p className="mt-4 text-slate-600">
                  Our institution is accredited by the highest pharmaceutical
                  education authorities and consistently ranks among the top
                  pharmacy schools nationally.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#0e7490]">30+</span>
                    <span className="text-sm text-slate-600">
                      Years of Excellence
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#0e7490]">95%</span>
                    <span className="text-sm text-slate-600">
                      Graduate Employment Rate
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#0e7490]">50+</span>
                    <span className="text-sm text-slate-600">
                      Research Publications Yearly
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#0e7490]">
                      200+
                    </span>
                    <span className="text-sm text-slate-600">
                      Industry Partnerships
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#0e7490]/10 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0e7490]/20 rounded-lg"></div>
                <Image
                  src="/img/about.JPG"
                  width={600}
                  height={500}
                  alt="College building"
                  className="rounded-lg relative z-10 w-full transition-all hover:shadow-lg cursor-pointer"
                />
              </div>
            </div>
          </div>
        </section>
  )
}

export default About