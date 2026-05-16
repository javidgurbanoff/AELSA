"use client";

import * as React from "react";

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <article
      className="
        group
        mb-5
        overflow-hidden
        rounded-3xl
        bg-white/80
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(14,165,233,0.08)]
        transition-all
        duration-300
        hover:shadow-[0_10px_50px_rgba(20,184,166,0.12)]
      "
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex
          w-full
          items-center
          justify-between
          px-7
          py-6
          text-left
        "
      >
        <h2
          className="
            text-lg
            md:text-xl
            font-semibold
            tracking-tight
            text-[#071120]
          "
        >
          {question}
        </h2>

        <div
          className={`
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#F1F5F9]
            text-[#0EA5E9]
            transition-all
            duration-300
            ${isOpen ? "rotate-180 bg-[#0EA5E9] text-white" : ""}
          `}
        >
          ▼
        </div>
      </button>

      <div
        className={`
          grid
          transition-all
          duration-300
          ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <p
            className="
              px-7
              pb-7
              text-[15px]
              leading-8
              text-[#475569]
            "
          >
            {answer}
          </p>
        </div>
      </div>
    </article>
  );
}

function FAQs() {
  const faqs = [
    {
      question: "What is AELSA Technologies?",
      answer:
        "AELSA Technologies combines modern engineering with marine innovation. We build intelligent systems, autonomous solutions, and advanced sea technologies designed for the future.",
    },
    {
      question: "What is our mission?",
      answer:
        "Our mission is to develop sustainable, reliable, and highly autonomous maritime systems capable of solving real-world challenges through modern AI and unmanned technologies.",
    },
    {
      question: "What have we done this year?",
      answer:
        "This year, our team focused on autonomous marine systems, real-time analytics, and scalable engineering solutions for next-generation sea technology projects.",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F8FBFF]
        py-24
        px-6
      "
    >
      {/* soft glow */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#0EA5E9]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p
            className="
              mb-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#14B8A6]
            "
          >
            SUPPORT
          </p>

          <h1
            className="
              text-4xl
              md:text-5xl
              font-extrabold
              tracking-tight
              text-[#071120]
            "
          >
            Frequently Asked Questions
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-[#64748B]
            "
          >
            Everything you need to know about AELSA Technologies, our marine
            innovation systems, and the future of intelligent sea solutions.
          </p>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-[#64748B] text-lg">Still have questions?</p>

          <a
            href="/contact"
            className="
              mt-3
              inline-flex
              items-center
              gap-2
              text-[#0EA5E9]
              font-semibold
              transition-all
              duration-300
              hover:text-[#14B8A6]
            "
          >
            Contact our support
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
