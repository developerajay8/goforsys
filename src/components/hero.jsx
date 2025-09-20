import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import Heroimg from "../assets/hero.png"; 

export default function HeroSection() {
    const words = ["Web Development", "App Development", "UI/UX Designing"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        let typingSpeed = isDeleting ? 100 : 150;

        const handleTyping = () => {
            if (!isDeleting && displayText.length < currentWord.length) {
                setDisplayText(currentWord.slice(0, displayText.length + 1));
            } else if (isDeleting && displayText.length > 0) {
                setDisplayText(currentWord.slice(0, displayText.length - 1));
            } else if (!isDeleting && displayText.length === currentWord.length) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && displayText.length === 0) {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentWordIndex]);

    const scrollToId = (id) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

    return (
        <section
            style={{
                backgroundImage: `url(${Heroimg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100%",
            }}
            className="flex items-center justify-center px-4"
        >
            <div className="max-w-[1170px] mx-auto text-left p-8 rounded-lg">
                <div className="text-[16px] font-bold text-[#ff712c] uppercase tracking-wider">
                    TECH CONSULTING | STRATEGY | OUTSOURCING
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black leading-tight mt-4">
                    <span className="block uppercase">Great products for great ideas</span>
                    <span className="block bg-gradient-to-r from-black via-[#ff712c] to-black bg-clip-text text-transparent">
                        {displayText}
                        <span className="border-r-2 border-[#ff712c] animate-pulse ml-1"></span>
                    </span>

                </h1>

                {/* CTA Button */}
                <div className="mt-8 flex items-center gap-4">
                    <button onClick={() => scrollToId("contact-section")} className="flex cursor-pointer items-center px-6 py-3 
    bg-gradient-to-r from-black via-[#ff712c] to-black
    text-white text-lg font-semibold rounded-full 
    shadow-lg hover:scale-105 hover:shadow-xl 
    transition-all duration-300 ease-in-out">

                        <Play className="mr-2 h-5 w-5 text-[#ff712c] group-hover:rotate-90 transition-transform duration-300" />
                        GET IN TOUCH
                    </button>
                </div>

            </div>
        </section>
    );
}
