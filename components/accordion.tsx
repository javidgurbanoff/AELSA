import * as React from "react";

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="flex flex-col gap-4 bg-white rounded-xl border border-gray-200 px-5 py-7 mb-4">
      <button
        className="flex justify-between items-center text-xl font-semibold "
        onClick={toggleAccordion}
      >
        <h2>{question}</h2>
        <span className="w-6 h-6 cursor-pointer">{isOpen ? "▼" : "▲"} </span>
      </button>
      {isOpen && <p className="text-lg leading-7 font-thin">{answer}</p>}
    </article>
  );
}

function FAQs() {
  const faqs = [
    {
      question: "What is Aelsa Technologies?",
      answer:
        "AELSA Technologies combines both new & modern technologies and sea world together. With the help of new devices and tools we can create a new era swiftly and more accessible ",
    },
    {
      question: "What is our mission?",
      answer:
        "AELSA Technologies was founded as a young, multidisciplinary team aiming to develop innovative and sustainable solutions in the field of unmanned systems. Within the scope of the Teknofest Unmanned Surface Vessel Competition, our team aims to develop a task-oriented, reliable, adaptable to environmental conditions, and highly autonomous Unmanned Surface Vessel (USV). Our goal is not just to compete; it is to create systems applicable to real-world problems.",
    },
    {
      question: "What have we done in the current year?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
  ];

  return (
    <div className="bg-[#0A2540] py-10 px-5 ">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center text-white mb-8 text-5xl font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-center text-white mb-14 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
        <div className="text-center text-white mt-12 text-lg font-light">
          Haven't got your answer?
          <a
            href="/contact"
            className="hover:text-blue-700 ml-2 text-[#0FB9B1] font-light"
          >
            Contact our support now
          </a>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
