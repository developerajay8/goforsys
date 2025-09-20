import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProcessTimeline = () => {
  const scrollToId = (id) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};
  return (
    <div id='process' className="min-h-screen bg-white md:py-20 py-10 px-4">
      <div className="max-w-[1170px] mx-auto xl:px-0 px-6">
        {/* Header Section */}
        <div className="text-center mb-12 ">
          <h2 className="text-3xl uppercase lg:text-4xl font-extrabold text-gray-900 relative inline-block">
            Case Studies
            <div className="flex items-center justify-center">
            <span className="block  w-16 h-1 bg-gradient-to-r from-black via-[#ff712c] to-black mt-2 rounded"></span>
            </div>
            </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Step 01 - Discovery & Planning */}
          <div className="relative group">
            <div className="bg-white rounded-2xl  ">
              {/* Image Circle */}
              <div className="w-42 h-42 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=300&fit=crop&crop=center" 
                    alt="Discovery & Planning"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-black via-[#ff712c] to-black rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  01
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">
                  DISCOVERY & PLANNING
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  First we make different and unique planning for every website to make a unique identity on the internet and which is suitable for your business.
                </p>
              </div>
            </div>

            {/* Arrow Connector */}
            
          </div>

          {/* Step 02 - Quality Design */}
          <div className="relative group">
            <div className="bg-white rounded-2xl  ">
              <div className="w-42 h-42 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=300&h=300&fit=crop&crop=center" 
                    alt="Quality Design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-black via-[#ff712c] to-black rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  02
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">
                  QUALITY DESIGN
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  There are millions of websites on the internet, but we always select a unique, attractive and quality design for your business.
                </p>
              </div>
            </div>

            
          </div>

          {/* Step 03 - Development */}
          <div className="relative group">
            <div className="bg-white rounded-2xl  ">
              <div className="w-42 h-42 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=300&fit=crop&crop=center" 
                    alt="Development"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-black via-[#ff712c] to-black rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  03
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">
                  DEVELOPMENT
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We develop a website on secure MVC/CMS technologies like – PHP, Codeigniter, ASP.NET, WordPress, Joomla etc.
                </p>
              </div>
            </div>

            
          </div>

          {/* Step 04 - Testing & Launch */}
          <div className="relative group">
            <div className="bg-white rounded-2xl  ">
              <div className="w-42 h-42 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?w=300&h=300&fit=crop&crop=center" 
                    alt="Testing & Launch"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-black via-[#ff712c] to-black rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  04
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">
                  TESTING & LAUNCH
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Before launching the website we test all validations, fonts, Spellings and Site Speed. And also minify the files for improving speed.
                </p>
              </div>
            </div>
          </div>
        </div>

        

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <button onClick={() => scrollToId("contact-section")} className="cursor-pointer uppercase bg-gradient-to-r from-black via-[#ff712c] to-black
    text-white sm:text-lg text-[16px] font-semibold rounded-full 
    shadow-lg hover:scale-105 hover:shadow-xl 
    transition-all duration-300 ease-in-out   sm:py-4 py-3 sm:px-8 px-6  transform ">
            Start Your Project Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;