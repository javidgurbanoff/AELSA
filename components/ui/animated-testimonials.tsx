"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState, useCallback } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const rotations = useRef(
    testimonials.map(() => Math.floor(Math.random() * 21) - 10),
  );

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, active, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleNext, handlePrev]);

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* Image side */}
        <div>
          <div className="relative h-[500px] w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotations.current[index],
                  }}
                  animate={{
                    opacity: index === active ? 1 : 0.7,
                    scale: index === active ? 1 : 0.95,
                    z: index === active ? 0 : -100,
                    rotate: index === active ? 0 : rotations.current[index],
                    zIndex:
                      index === active ? 40 : testimonials.length + 2 - index,
                    y: index === active ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotations.current[index],
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    draggable={false}
                    className="h-full w-full rounded-[32px] object-cover object-center border border-white/10 shadow-[0_20px_60px_rgba(14,165,233,0.15)]"
                  />
                </motion.div>
              ))}
            </AnimatePresence>

            <div className="absolute -left-6 bottom-10 rounded-3xl bg-surface/80 backdrop-blur-xl border border-white/10 p-5 shadow-xl">
              <p className="text-sm text-muted">Ocean Data</p>
              <h3 className="text-3xl font-bold text-accent">24/7</h3>
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-3xl font-bold text-text">
              {testimonials[active].name}
            </h3>
            <p className="text-accent font-medium mt-2">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8 text-lg leading-8 text-muted">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Nav buttons — fixed to dark theme */}
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-surface/60 border border-white/10 backdrop-blur-xl shadow-lg transition-all duration-300 hover:bg-primary cursor-pointer"
            >
              <IconArrowLeft className="h-5 w-5 text-primary transition-all duration-300 group-hover:text-white group-hover:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-surface/60 border border-white/10 backdrop-blur-xl shadow-lg transition-all duration-300 hover:bg-primary cursor-pointer"
            >
              <IconArrowRight className="h-5 w-5 text-primary transition-all duration-300 group-hover:text-white group-hover:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
