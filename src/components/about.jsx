import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import AboutImg from "../assets/about.png"; 

const About = () => {
  return (
    <section id="about" className="relative py-16 lg:py-24 bg-gray-50">
      <div className="max-w-[1170px] mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Image */}
        <div className=" group">
          <img
            src={AboutImg}
            alt="About GoForSys"
            className=" shadow-lg transform group-hover:scale-105 transition duration-500"
          />
          
        </div>

        {/* Right Side Content */}
        <div>
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 relative inline-block">
            ABOUT US
            <span className="block w-16 h-1 bg-gradient-to-r from-black via-[#ff712c] to-black mt-2 rounded"></span>
          </h2>

          {/* Paragraph */}
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We’re GoForSys! India's best web development company since 2014.
            We are a team of technophiles with uncanny love for innovation and
            ardour for digital solutions. We help you grow fast and sustain the
            growth, through our complete package of web development services from
            website designing and development, Mobile app development, Digital
            marketing and Data Analytics.
          </p>

          {/* Why Choose Us */}
          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Why Choose Us?
          </h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Agile Decision Making",
              "Passionate Team",
              "Flexibility in approach",
              "Full Service Digital",
              "Result oriented",
              "Value for time",
              "Client Satisfaction",
              "Data Security",
            ].map((item, idx) => (
              <div key={idx} className="flex leading-[5px] items-center space-x-2">
                <FaCheckCircle className="bg-gradient-to-r from-black via-[#ff712c] to-black rounded-full " />
                <span className="text-gray-700 ">{item}</span>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default About;
