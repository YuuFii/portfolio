import React, { useState } from "react";
import ProjectCard from "../ui/project-card";

const projectsData = [
    {
        id: 1,
        categoryTag: "AI/ML",
        projectNum: "PROJECT 05",
        year: "2025",
        title: "MakanKita",
        description: "A food nutrition estimation platform designed to support dietary management and the recovery of post-hospitalization patients.",
        techTags: ["Python", "Multimodal AI", "Web Dev"],
        imageSrc: "https://placehold.co/800x600/e2e8f0/475569?text=Project+Image+Placeholder",
        link: "#"
    },
    {
        id: 2,
        categoryTag: "Web",
        projectNum: "PROJECT 04",
        year: "2025",
        title: "InternBridge",
        description: "A modern, responsive front-end architecture for a high-traffic retail platform serving thousands of daily users.",
        techTags: ["React", "Next.js", "Tailwind CSS"],
        imageSrc: "https://placehold.co/800x600/e2e8f0/475569?text=Web+Project",
        link: "#"
    },
    {
        id: 3,
        categoryTag: "AI/ML",
        projectNum: "PROJECT 03",
        year: "2023",
        title: "Predictive Engine",
        description: "Machine learning model deployed to predict customer churn based on historical usage patterns.",
        techTags: ["Python", "Scikit-learn", "FastAPI"],
        imageSrc: "https://placehold.co/800x600/e2e8f0/475569?text=AI+Project",
        link: "#"
    },
];

const subfield = [
    { text: "All" },
    { text: "Web" },
    { text: "Data" },
    { text: "AI/ML" },
];

function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = activeFilter === "All"
        ? projectsData
        : projectsData.filter(project => project.categoryTag === activeFilter);

    return (
        <section id="projects" className="px-6 md:px-16 lg:px-32 py-12">
            <h3 className="tracking-widest text-sm text-gold font-semibold">SELECTED WORK</h3>
            <h1 className="text-3xl text-slate-800 font-bold mt-4 mb-2">Things I've built.</h1>
            <div>
                <div className="text-slate-500">
                    <p>
                        A selection of projects I've built, contributed to, and experimented with—each teaching me something new.
                    </p>
                </div>
                <ul className="flex flex-wrap mt-6 gap-2 font-semibold text-slate-600">
                    {subfield.map(({text}, index) => {
                        const isActive = activeFilter === text;
                        return (
                            <li
                                key={index}
                                onClick={() => setActiveFilter(text)}
                                className={`cursor-pointer px-5 py-2 rounded-full transition-all duration-300 border-2 ${isActive
                                        ? "bg-slate-900 text-white border-slate-900"
                                        : "bg-transparent border-slate-200 hover:border-slate-900 hover:text-slate-900"
                                    }`}
                            >
                                {text}
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/* Grid layout projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
                {filteredProjects.map((project, index) => {
                    const isFeatured = index === 0;
                    const gridClasses = isFeatured ? "lg:col-span-2" : "lg:col-span-1";

                    return (
                        <div key={project.id} className={gridClasses}>
                            <ProjectCard project={project} isFeatured={isFeatured}/>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Projects;