"use client";

import FAQs from "@/components/accordion";
import Backmenu from "@/components/backmenu";

export default function About() {
  return (
    <div className="bg-[#F5F9FC]">
      <Backmenu />

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-[#0A2540]">
            About <span className="text-[#38BDF8]">Us</span>
          </h2>

          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-[#0FB9B1]">
              AELSA Techonolgies
            </span>{" "}
            — Learning and growing a well-balanced mind starts here.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-2">
                Our Mission
              </h3>
              <p className="text-slate-600">
                To simplify your travels with innovative tools and real-time
                insights, helping you prepare smarter and travel lighter.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-2">
                Our Vision
              </h3>
              <p className="text-slate-600">
                To become a trusted AI-driven assistant, making exploration
                accessible, reliable, and seamless.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-[#0A2540] mb-2">
                Our Values
              </h3>
              <p className="text-slate-600">
                Innovation, reliability, precision, and a passion for technology
                that empowers real-world decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FAQs />
    </div>
  );
}
