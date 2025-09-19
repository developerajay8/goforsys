import About from "./components/about";
import AnimatedTestimonials from "./components/animatedtestimonials";
import ContactSection from "./components/contactsection";
import Header from "./components/header";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import ProcessTimeline from "./components/processtimeline";
import Servicessections from "./components/services-sections";
import StatsSection from "./components/stats-section";
import TechTrendsLanding from "./components/techtrendslanding";


const App = () => {
  

  return (
  <div className="">
    <Header/>
    <Hero/>
    <About/>
    <Servicessections/>
    <ProcessTimeline/>
    <StatsSection/>
    <TechTrendsLanding/>
    <Portfolio/>
    <AnimatedTestimonials/>
    <ContactSection/>
  </div>
  );
};

export default App;