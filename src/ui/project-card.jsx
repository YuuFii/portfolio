import React from "react";
import { ArrowUpRight } from "lucide-react";

// Tambahkan prop isFeatured
const ProjectCard = ({project, isFeatured}) => {
    return (
        <div className="group bg-white rounded-4xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer h-full flex flex-col">
            {/* Logika conditional untuk class aspect ratio */}
            <div className={`relative w-full bg-slate-100 overflow-hidden ${isFeatured ? 'aspect-4/3 lg:aspect-21/9' : 'aspect-4/3'}`}>
                <div className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full text-sm font-semibold text-slate-800 z-10 shadow-sm">
                    {project.categoryTag}
                </div>
                <img 
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="relative p-8 flex flex-col grow">
                <div className="flex justify-between items-center mb-4">
                    <span className="tracking-widest text-sm text-amber-600 font-medium">{project.projectNum}</span>
                    <span className="text-slate-500 text-sm font-medium">{project.year}</span>
                </div>
                <h3 className="text-2xl text-slate-800 font-bold mb-2">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-7">
                    {project.description}
                </p>

                <div className="mt-auto">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                        <div className="flex flex-wrap gap-2">
                            {project.techTags.map((tag, idx) => (
                                <span key={idx} className="px-4 py-2 bg-slate-100 text-slate-500 rounded-full text-xs font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* <div className="static lg:absolute lg:bottom-6 lg:right-6 mt-6 lg:mt-0 w-full flex justify-end"> */}
                    <div className="absolute bottom-6">
                        <a href={project.link} className="flex items-center gap-1 text-sm text-slate-800 font-bold group/link hover:text-amber-600 transition-colors">
                            Read more
                            <ArrowUpRight className="w-5 h-5 transform transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;