"use client";

import * as React from "react";

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <article
      className="
        mb-4 overflow-hidden rounded-2xl
        border border-white/10
        bg-surface/40 backdrop-blur-xl
        transition-all duration-300
        hover:border-primary/20
      "
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between px-7 py-6 text-left"
      >
        <h2 className="text-lg md:text-xl font-semibold tracking-tight text-text pr-4">
          {question}
        </h2>

        <div
          className={`
            flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full
            border border-white/10 transition-all duration-300
            ${
              isOpen
                ? "rotate-180 bg-primary/20 border-primary/30 text-primary"
                : "bg-surface/60 text-text/50"
            }
          `}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 4l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <div
        className={`
          grid transition-all duration-300
          ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
        `}
      >
        <div className="overflow-hidden">
          <p className="px-7 pb-7 text-[15px] leading-8 text-muted">{answer}</p>
        </div>
      </div>
    </article>
  );
}

const faqs = [
  {
    question: "What is AELSA Technologies?",
    answer:
      "AELSA Technologies combines modern engineering with marine innovation. We build intelligent systems, autonomous solutions, and advanced sea technologies designed for the future of ocean monitoring.",
  },
  {
    question: "What is our mission?",
    answer:
      "Our mission is to develop sustainable, reliable, and highly autonomous maritime systems capable of solving real-world challenges through modern AI and unmanned technologies.",
  },
  {
    question: "What have we achieved so far?",
    answer:
      "We deployed 12 autonomous surface units across the North Sea, reached 98% AI forecast accuracy in open-water trials, and maintained 99.98% system uptime across all active deployments over the past 12 months.",
  },
  {
    question: "Which oceans and regions do you operate in?",
    answer:
      "AELSA systems are active across 78 countries, covering the North Sea, Arctic shelf, Pacific corridors, and major coastal monitoring zones used by our partner organizations.",
  },
  {
    question: "How can I work with or partner with AELSA?",
    answer:
      "We work with maritime operators, research institutions, and government agencies. Reach out via our contact page and our partnerships team will respond within 2 business days.",
  },
];

function FAQs() {
  return (
    <section className="relative overflow-hidden bg-background py-24 px-6">
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Support
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-text">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted">
            Everything you need to know about AELSA Technologies, our marine
            systems, and the future of intelligent sea solutions.
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
          <p className="text-muted text-base">Still have questions?</p>
          href="/contact" className="mt-2 inline-flex items-center gap-2
          text-primary font-semibold hover:opacity-70 transition-opacity
          duration-200" Contact our team <span>{"→"}</span>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
