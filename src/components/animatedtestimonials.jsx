import React, { useEffect, useState, useRef } from "react";

const testimonials = [
  {
    quote:
      "I was impressed by the food — every dish is bursting with flavor! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive, going the extra mile. I'll definitely be back for more!",
    name: "Tamar Mendelson",
    designation: "Restaurant Critic",
    src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote:
      "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond to ensure a fantastic visit. I'll definitely keep returning for more exceptional dining experience.",
    name: "Joe Charlescraft",
    designation: "Frequent Visitor",
    src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote:
      "Shining Yam is a hidden gem! From the moment I walked in, I knew I was in for a treat. The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
    name: "Martina Edelweist",
    designation: "Satisfied Customer",
    src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1368&auto=format&fit=crop",
  },
];

const AnimatedTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    clearInterval(intervalRef.current);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    clearInterval(intervalRef.current);
  };

  return (
    <div id="testimonials" className="w-full bg-gray-50 md:py-20 py-10">
      <div className="max-w-[1170px] mx-auto px-8 xl:px-0 ">

        <div className="text-center mb-12 ">
                    <h2 className="text-3xl  uppercase lg:text-4xl font-extrabold text-gray-900 relative inline-block">
                        What our clients say
                        <div className="flex items-center justify-center">
                            <span className="block  w-16 h-1 bg-gradient-to-r from-black via-[#ff712c] to-black mt-2 rounded"></span>
                        </div>
                    </h2>
                </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* ✅ Left Image Section */}
          <div className="relative flex justify-center items-center w-full h-72 md:h-96 perspective">
            {testimonials.map((t, index) => {
              const isActive = index === activeIndex;
              const isNext = index === (activeIndex + 1) % testimonials.length;
              const isPrev =
                index ===
                (activeIndex - 1 + testimonials.length) % testimonials.length;

              let transformClass = "hidden md:block"; // ✅ hide extra cards on mobile
              if (isActive) {
                transformClass =
                  "translate-x-0 translate-y-0 rotate-y-0 scale-100 opacity-100 z-20";
              } else if (isNext) {
                transformClass =
                  "translate-x-1/5 -translate-y-4 -rotate-y-12 scale-90 opacity-100 z-10";
              } else if (isPrev) {
                transformClass =
                  "-translate-x-1/5 -translate-y-4 rotate-y-12 scale-90 opacity-100 z-10";
              }

              return (
                <img
                  key={index}
                  src={t.src}
                  alt={t.name}
                  className={`absolute sm:w-64 w-38 h-42 sm:h-64 md:w-[340px] md:h-[340px] object-cover rounded-2xl shadow-xl transition-all duration-700 ease-in-out transform ${transformClass}`}
                />
              );
            })}
          </div>

          {/* ✅ Right Content Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-black mb-1">
                {testimonials[activeIndex].name}
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                {testimonials[activeIndex].designation}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {testimonials[activeIndex].quote}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8 md:mt-4">
              <button
                onClick={handlePrev}
                className="cursor-pointer w-8 h-8 rounded-full bg-gradient-to-r from-black via-[#ff712c] to-black flex items-center justify-center  transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="cursor-pointer w-8 h-8 rounded-full bg-gradient-to-r from-black via-[#ff712c] to-black flex items-center justify-center  transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Extra CSS for perspective + 3D */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .rotate-y-12 {
          transform: rotateY(15deg);
        }
        .-rotate-y-12 {
          transform: rotateY(-15deg);
        }
        .translate-x-1\\/5 {
          transform: translateX(20%);
        }
        .-translate-x-1\\/5 {
          transform: translateX(-20%);
        }
      `}</style>
    </div>
  );
};

export default AnimatedTestimonials;
