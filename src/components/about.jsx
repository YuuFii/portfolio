import React from "react";
import ItemTag from "../ui/item-tag";
import { MapPin, Compass } from "lucide-react";
import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";

const technologiesData = [
    { id: 'ai', label: 'AI & Machine Learning', items: ["ML", "Deep Learning", "Computer Vision", "NLP"] },
    { id: 'frontend', label: 'Frontend', items: ["HTML", "CSS", "JavaScript", "Tailwind CSS"] },
    { id: 'languages', label: 'Languages', items: ["Python", "SQL"] },
    { id: 'tools', label: 'Tools & Platforms', items: ["PyTorch", "FastAPI"] },
];

const exploring = ["Gen AI / LLM", "ReactJS"];

const socialMedia = [
    {icon: FiMail, text: "Email", href: "mailto:aryanico47@gmail.com"},
    {icon: FiLinkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/nicoaryadivano"},
    {icon: FiGithub, text: "GitHub", href: "https://github.com/YuuFii"},
]

function About() {
    return (
        <section id="about" className="px-6 lg:px-32 py-12">
            <div>
                <h3 className="tracking-widest text-sm text-gold font-semibold">ABOUT ME</h3>
                <h1 className="text-3xl text-slate-800 font-bold mt-4 mb-2">Still learning, always building.</h1>
                <p className="text-slate-500">
                    I'd like to share my journey with you. Let's connect and get to know each other better.
                </p>
                <div className="flex flex-wrap gap-3 mt-5">
                    {socialMedia.map(({icon: Icon, text, href}, index) => (
                        <a 
                            key={index} 
                            href={href}
                            className="flex justify-center items-center gap-2 border-2 hover:border-gold hover:text-gold hover:translate-x-1 transition-all duration-300 rounded-lg py-2 px-4 font-semibold"
                            target="_blank"
                        >
                            <Icon />
                            <span className="">
                                {text}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            <div className="mt-10 grid lg:grid-cols-3 gap-6">
                {/* Profile */}
                <div className="p-7 border border-slate-200 rounded-3xl lg:col-span-2 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
                    <h2 className="text-xl text-slate-800 font-semibold mb-3">Hi there! My name is Nico Arya Divano</h2>
                    <p className="text-slate-500 leading-7">
                        I'm a Computer Science student with research experience in field of deep learning and accepted for publication at 
                        international conference (1st ICDSG 2025). Experienced in developing a multimodal food nutrition estimation 
                        project based on the CLIP architecture. Proficient in building end-to-end ML pipelines, including exploratory 
                        data analysis (EDA), model development, and evaluation. Skilled in Python, PyTorch, and scikit-learn, as well 
                        as API development using FastAPI.
                    </p>
                </div>

                {/* Location */}
                <div className="p-7 border border-slate-200 rounded-3xl hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
                    <div className="border border-gold bg-amber-100 w-fit p-3.5 rounded-3xl">
                        <MapPin className="w-6 h-6 text-gold"/>
                    </div>
                    <h2 className="text-xl text-slate-800 font-semibold mt-4 mb-2">Based in Batu</h2>
                    <div className="text-slate-500">
                        <div className="mb-5">
                            East Java, Indonesia
                        </div>
                        <span>
                            Adaptable to remote, hybrid, or on-site work environments.
                        </span>
                    </div>
                </div>

                {/* Technologies */}
                <div className="p-7 border border-slate-200 rounded-3xl lg:col-span-2 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
                    <h2 className="text-xl text-slate-800 font-semibold mb-3">Toolbox</h2>
                    <div>
                        {technologiesData.map(({id, label, items}) => (
                            <div key={id} className="mt-5">
                                <h3 className="tracking-widest text-xs text-gold font-semibold mb-2.5 uppercase">
                                    {label}
                                </h3>

                                <div className="flex flex-wrap gap-2 text-sm text-slate-600">
                                    {items.map((item, index) => (
                                        <ItemTag key={index} item={item} hasBorder={true}/>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Exploring */}
                <div className="p-7 border border-slate-200 rounded-3xl hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
                    <div className="border border-gold bg-amber-100 w-fit p-3.5 rounded-3xl">
                        <Compass className="w-6 h-6 text-gold"/>
                    </div>
                    
                    <h2 className="text-xl text-slate-800 font-semibold mt-4 mb-2">
                        Currently Exploring
                    </h2>
                    <div className="flex flex-col gap-2 text-sm text-slate-600">
                        {exploring.map((item, index) => (
                            <ItemTag key={index} item={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;