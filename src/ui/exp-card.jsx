import React from "react";
import { Briefcase, ChevronDown } from "lucide-react";
import { FiMinus } from "react-icons/fi";

const ExperienceCard = ({experience, isOpen, onToggle}) => {

    return (
        <div className="relative">
            <div className="absolute -left-6.75 top-0 w-3 h-3 bg-white rounded-full border-2 border-amber-300 shadow-sm z-10"></div>

            <div 
                key={experience.id}
                onClick={onToggle}
                className="p-4 border border-slate-300 rounded-2xl"
            >
                <div className="relative flex flex-col md:flex-row lg:items-center gap-2 md:space-x-3">
                    <div className="tracking-widest text-xs text-gold font-medium">
                        {experience.period}
                    </div>
                    <div className="flex items-center space-x-1.5 bg-slate-100 border border-slate-300 text-slate-800 text-xs max-w-fit px-3 py-1 rounded-full">
                        <Briefcase className="w-4 h-4"/> <span>{experience.type}</span>
                    </div>

                    {/* Arrow down/up */}
                    <div className="text-slate-400 absolute right-0 transform transition-transform duration-300">
                        <ChevronDown className={`transform transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}/>
                    </div>
                </div>
                <h1 className="text-xl font-semibold mt-4 mb-2 text-slate-800 leading-5">
                    {experience.role}
                </h1>
                <p className="text-slate-500">
                    {experience.company}
                </p>
                <div 
                    className={`grid transition-all duration-400 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                >
                    <div className="overflow-hidden">
                        <ul className="list-item pt-4 border-t border-slate-200 text-slate-500">
                            {experience.description.map((desc) => (
                                <li
                                    key={desc}
                                    className="relative mb-1.5"
                                >
                                    <FiMinus className="absolute top-1.5"/>
                                    <p className="ml-6">
                                        {desc}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;