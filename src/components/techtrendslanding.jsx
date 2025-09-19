import React from 'react';
import { Check, Code, Smartphone, Globe, ShoppingCart, Shield } from 'lucide-react';
import Heroimg from "../assets/160338.jpg"; 

const TechTrendsLanding = () => {
  const services = [
    'Web Development',
    'Application Development', 
    'E-commerce Solution',
    'Quality Assurances'
  ];

  const techCards = [
    { name: 'WEB', icon: Globe },
    { name: 'ANDROID', icon: Smartphone },
    { name: 'iOS', icon: Code },
    { name: 'WORDPRESS', icon: Globe },
    { name: 'MAGENTO', icon: ShoppingCart },
    { name: 'SHOPIFY', icon: ShoppingCart }
  ];

  return (
    <div  style={{
                    backgroundImage: `url(${Heroimg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // height: "80vh",
                    // width: "100%",
                }} className="w-full bg-white relative overflow-hidden">
      

      <div className="relative max-w-[1170px] mx-auto z-10 flex flex-col lg:flex-row ">
        {/* Left Content Section */}
        <div className="flex-1 px-6  py-12 lg:py-20 flex flex-col justify-center">
          {/* Logo */}
          {/* <div className="mb-8">
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <div className="relative">
                  <svg width="60" height="50" viewBox="0 0 60 50" className="text-[#ff712c]">
                    <path 
                      d="M8 8 L35 8 L28 18 L48 18 L20 40 L5 40 L12 28 L8 8 Z" 
                      fill="currentColor"
                    />
                    <path 
                      d="M15 15 L25 15 L22 20 L32 20 L20 32 L15 32 L18 25 L15 15 Z" 
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <div className="flex items-baseline">
                    <span className="text-3xl sm:text-4xl font-bold">
                      <span className="text-[#ff712c]">GO</span>
                      <span className="text-white ml-1">FORSYS</span>
                    </span>
                  </div>
                  <div className="text-sm text-white font-medium tracking-wide -mt-1">
                    System that matters
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] uppercase font-bold text-black mb-4 leading-tight">
            Improve and Innovate with the{' '}
            <span className="bg-gradient-to-r from-black via-[#ff712c] to-black bg-clip-text text-transparent">
              Tech Trends
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-black text-lg sm:text-xl mb-6 max-w-2xl leading-relaxed">
            GoForSys Technologies team can assist you in transforming your business through latest tech capabilities to stay ahead of the curve.
          </p>

          {/* Services List */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-4 group">
                <div className="w-8 h-8 bg-gradient-to-r from-black via-[#ff712c] to-black rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-5 h-5 text-black" />
                </div>
                <span className="text-black font-semibold text-lg group-hover:text-[#ff712c] transition-colors duration-300">
                  {service}
                </span>
              </div>
            ))}
          </div>

          
        </div>

        {/* Right Section - Tech Cards */}
        <div className="flex-1 px-6 sm:px-8 lg:px-16 py-12 lg:py-20 flex items-center justify-center relative">
          {/* Background Person Image Placeholder - Subtle */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-80 h-80 bg-gray-200 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
                <Code className="w-16 h-16 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Tech Cards Grid */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 relative z-10">
            {techCards.map((tech, index) => (
              <div
                key={index}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:z-20 relative"
              >
                <div className="bg-transparent border-2 border-[#aa562c] hover:bg-[#ff712c] p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group-hover:border-[#ff712c]">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-black via-[#ff712c] to-black mt-2  group-hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm">
                      <tech.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-black group-hover:text-white font-bold text-base sm:text-lg transition-colors duration-300 tracking-wide">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subtle decorative elements */}
          <div className="absolute top-20 right-20 w-3 h-3 bg-[#ff712c] rounded-full opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-2 h-2 bg-[#ff712c] rounded-full opacity-40"></div>
          <div className="absolute top-1/2 right-10 w-1 h-1 bg-[#ff712c] rounded-full opacity-50"></div>
        </div>
      </div>

      {/* Bottom subtle line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </div>
  );
};

export default TechTrendsLanding;