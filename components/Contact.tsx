import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0e7490] text-white">
      <div className="container mx-auto px-3 sm:px-8 2xl:max-w-[1400px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to Begin Your Journey?
            </h2>
            <p className="mt-4">
              Take the first step toward a rewarding career in pharmacy. Apply
              now or schedule a campus visit to learn more about our programs
              and facilities.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className=" text-[#0e7490]-foreground h-11 rounded-md px-8 bg-white text-[#0e7490] hover:bg-white/90">
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
                  <label htmlFor="first-name" className="text-sm font-medium">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="First Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
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
                  <option value="pharm-d">Doctor of Pharmacy (Pharm.D)</option>
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
                className="w-full bg-[#0e7490] text-white hover:bg-[#0e7490]/90 h-10 px-4 py-2 rounded-lg cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
