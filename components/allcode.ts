
        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  About Our College
                </h2>
                <div className="mt-4 h-1 w-20 bg-primary"></div>
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
                    <span className="text-3xl font-bold text-primary">30+</span>
                    <span className="text-sm text-slate-600">
                      Years of Excellence
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">95%</span>
                    <span className="text-sm text-slate-600">
                      Graduate Employment Rate
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">50+</span>
                    <span className="text-sm text-slate-600">
                      Research Publications Yearly
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">
                      200+
                    </span>
                    <span className="text-sm text-slate-600">
                      Industry Partnerships
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg"></div>
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  width={600}
                  height={500}
                  alt="College building"
                  className="rounded-lg relative z-10 w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight">
                Our Programs
              </h2>
              <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
              <p className="mt-6 text-slate-600">
                We offer a comprehensive range of pharmacy programs designed to
                prepare students for diverse careers in the pharmaceutical
                industry, research, and healthcare.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                icon={BookOpen}
                title="Doctor of Pharmacy (Pharm.D)"
                description="Our flagship 6-year program preparing students for clinical pharmacy practice and patient care."
              />
              <Card
                icon={Flask}
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
              <button className="h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#">View All Programs</Link>
              </button>
            </div>
          </div>
        </section>

        {/* Campus Life Section */}
        <section id="campus" className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight">Campus Life</h2>
              <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
              <p className="mt-6 text-slate-600">
                Experience a vibrant campus community with state-of-the-art
                facilities, diverse student organizations, and enriching
                activities.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Campus library"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Student lounge"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Research laboratory"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Student activities"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Campus grounds"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Lecture hall"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Student dormitory"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Campus cafeteria"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight">
                Our Facilities
              </h2>
              <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
              <p className="mt-6 text-slate-600">
                Our college boasts cutting-edge facilities designed to provide
                students with hands-on experience and research opportunities.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Microscope className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Research Laboratories</h3>
                <p className="mt-2 text-slate-600">
                  State-of-the-art research labs equipped with the latest
                  technology for pharmaceutical research and development.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Flask className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Compounding Pharmacy</h3>
                <p className="mt-2 text-slate-600">
                  Simulated pharmacy environment where students learn medication
                  preparation and dispensing techniques.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Specialized Library</h3>
                <p className="mt-2 text-slate-600">
                  Comprehensive collection of pharmaceutical literature,
                  journals, and digital resources for research and study.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Simulation Center</h3>
                <p className="mt-2 text-slate-600">
                  Clinical simulation facilities for practicing patient care
                  scenarios and interprofessional collaboration.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Collaborative Spaces</h3>
                <p className="mt-2 text-slate-600">
                  Modern study areas designed for group projects, discussions,
                  and interdisciplinary collaboration.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Beaker className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Drug Analysis Lab</h3>
                <p className="mt-2 text-slate-600">
                  Specialized laboratory for pharmaceutical analysis, quality
                  control, and formulation development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight">
                Student Testimonials
              </h2>
              <div className="mt-4 h-1 w-20 bg-primary mx-auto"></div>
              <p className="mt-6 text-slate-600">
                Hear what our students and alumni have to say about their
                experience at our college.
              </p>
            </div>

            <div className="mt-12 relative">
              <div className="overflow-hidden px-4">
                <Testimonials/>
              </div>

              <div className="flex justify-center mt-8 gap-2">
                <button className="h-10 w-10 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous testimonial</span>
                </button>
                <button className="h-10 w-10 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-full">
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next testimonial</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 md:py-24 bg-primary text-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Ready to Begin Your Journey?
                </h2>
                <p className="mt-4">
                  Take the first step toward a rewarding career in pharmacy.
                  Apply now or schedule a campus visit to learn more about our
                  programs and facilities.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 bg-white text-primary hover:bg-white/90">
                    Apply Now
                  </button>
                  <button className="h-11 rounded-md px-8 border border-input hover:bg-accent hover:text-accent-foreground bg-transparent border-white hover:bg-white/10">
                    Schedule a Visit
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg text-slate-900">
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium"
                      >
                        First Name
                      </label>
                      <input
                        id="first-name"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium"
                      >
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="program" className="text-sm font-medium">
                      Program of Interest
                    </label>
                    <select
                      id="program"
                      className="w-full px-3 py-2 border rounded-md"
                    >
                      <option value="">Select a Program</option>
                      <option value="pharm-d">
                        Doctor of Pharmacy (Pharm.D)
                      </option>
                      <option value="b-pharm">
                        Bachelor of Pharmacy (B.Pharm)
                      </option>
                      <option value="ms-pharm">
                        M.S. in Pharmaceutical Sciences
                      </option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
