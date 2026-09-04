import React, { useEffect, useState } from "react";
import Button from "../ui/button";
import { TypingText } from "../ui/typing-effect";
import DownloadButton from "../ui/download-button";
import { MapPin, GraduationCap, ArrowDownRight } from "lucide-react";
import laptopImage from "../assets/altumcode-PNbDkQ2DDgM-unsplash.jpg";
import coffeeImage from "../assets/adam-stefanca-8FNgM0nN76s-unsplash.jpg";
import profilePhoto from "../assets/self-photo-portrait.jpg";

const highlights = [
  { icon: MapPin, text: "Batu, East Java, Indonesia" },
  { icon: GraduationCap, text: "Computer Science (Fresh Graduate)" },
];

function Hero() {
    const roles = ["Data Analyst", "AI/ML Researcher"];

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section id="hero" className="min-h-screen pt-44 sm:pt-40 pb-20 px-6 md:px-16 lg:px-52 relative flex flex-col xl:flex-row justify-center items-center overflow-hidden">
            <div className="grid-background"></div>
            
            {/* Kolom kiri */}
            <div>
                <h2 className="text-lg mb-4">Hi! I'm <strong>Nico</strong> - Based on Indonesia</h2>
                
                <h1 className="text-4xl md:text-5xl font-bold">Data Scientist<span className="text-gold"> &</span></h1>
                
                <TypingText words={roles} className="min-h-10 md:min-h-14 mt-1 md:mt-3 text-4xl md:text-5xl font-bold sm:text-5xl lg:leading-[1.1]"/>
                
                <p className="text-base mt-4 mb-6 max-w-11/12 flex flex-wrap">
                    I build end-to-end ML solutions using Python, 
                    PyTorch, and scikit-learn, with research experience in multimodal AI and Deep Learning.
                </p>

                <ul className="mt-6 mb-10 flex flex-wrap gap-x-7 gap-y-3">
                   {highlights.map(({icon: Icon, text}) => (
                    <li
                        key={text}
                        className="flex items-center gap-2 text-sm text-slate-500"
                    >
                        <Icon className="size-4 text-gold" />
                        {text}
                    </li>
                   ))} 
                </ul>
                
                <div className="flex flex-col lg:flex-row gap-5">
                    <Button 
                        variant="primary"
                        size="custom"
                        onClick = {scrollToProjects}
                        className="px-6 py-3 shadow-md"
                        >
                        Explore my works
                        <ArrowDownRight className="w-5 h-5 ml-0.5"/>
                    </Button>

                    <DownloadButton 
                        href={"CV_Nico Arya Divano.pdf"} 
                        download={"CV-Nico-Arya-Divano.pdf"}
                        text={"Download CV"}
                        className={"text-slate-900"}
                    />
                </div>

                
            </div>

            {/* Kolom kanan (gambar) */}
            <div className="w-full lg:w-1/2 flex justify-center items-center py-10 lg:py-0">
                <div className="relative w-48 h-64 sm:w-64 sm:h-96">
                    <div
                        className={`absolute inset-0 bg-white p-2 sm:p-3 rounded-2xl shadow-xl border border-slate-100 transition-all duration-1200 ease-[cubic-bezier(0.23,1,0.32,1)] z-10 origin-bottom ${
                            isLoaded
                                ? '-rotate-12 -translate-x-12 translate-y-4 sm:-translate-x-16 opacity-100'
                                : 'rotate-0 translate-x-0 translate-y-24 opacity-0 scale-90'
                        }`}
                        style={{transitionDelay: '150ms'}}
                    >
                        <div className="w-full h-full rounded-xl overflow-hidden bg-slate-200">
                            <img
                                src={laptopImage}
                                alt="laptop on the table"
                                className="w-full h-full object-cover grayscale opacity-80"
                            />
                        </div>
                    </div>
                    
                    <div
                        className={`absolute inset-0 bg-white p-2 sm:p-3 rounded-2xl shadow-xl border border-slate-100 transition-all duration-1200 ease-[cubic-bezier(0.23,1,0.32,1)] z-20 origin-bottom ${
                            isLoaded
                                ? 'rotate-12 translate-x-12 translate-y-6 sm:translate-x-16 opacity-100'
                                : 'rotate-0 translate-x-0 translate-y-24 opacity-0 scale-90'
                        }`}
                        style={{transitionDelay: '300ms'}}
                    >
                        <div className="w-full h-full rounded-xl overflow-hidden bg-slate-200">
                            <img
                                src={coffeeImage}
                                alt="a coffee and a book"
                                className="w-full h-full object-cover grayscale opacity-80"
                            />
                        </div>
                    </div>

                    <div
                        className={`absolute inset-0 bg-white p-2 sm:p-3 rounded-2xl shadow-2xl border border-slate-100 transition-all duration-1200 ease-[cubic-bezier(0.23,1,0.32,1)] z-30 origin-bottom ${
                            isLoaded
                                ? 'rotate-0 translate-x-0 translate-y-0 opacity-100 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer'
                                : 'rotate-0 translate-x-0 translate-y-24 opacity-0 scale-90'
                        }`}
                        style={{transitionDelay: '450ms'}}
                    >
                        <div className="w-full h-full rounded-xl overflow-hidden bg-slate-200">
                            <img
                                src={profilePhoto}
                                alt="Laptop on the Table"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;