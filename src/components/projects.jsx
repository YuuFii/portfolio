import React, { useState } from "react";
import ProjectCard from "../ui/project-card";
import makanKitaImage from "/src/assets/project-makan-kita.png";
import retoriqaImage from "/src/assets/retoriqa-architecture.png";
import pklDashboardImage from "/src/assets/preview-dashboard.png";

const projectsData = [
    {
        id: 1,
        categoryTag: "AI/ML",
        projectNum: "PROJECT 01",
        year: "2025",
        title: "MakanKita",
        description: "A food nutrition estimation platform designed to support dietary management and the recovery of post-hospitalization patients.",
        techTags: ["Python", "Multimodal AI", "Web Dev"],
        imageSrc: makanKitaImage,
        link: "https://docs.google.com/document/d/1MTBJYc0bzbb3RzoZh3I6Q06wxkR4kJRW/edit?usp=sharing&ouid=105959795647399178581&rtpof=true&sd=true"
    },
    {
        id: 2,
        categoryTag: "Data",
        projectNum: "PROJECT 02",
        year: "2025",
        title: "Dashboard Analisis Mahasiswa FILKOM UB",
        description: "An internship project designed to comprehensively visualize data on interests and aptitudes. Built using Google Data Studio, the dashboard transforms raw data into actionable insights through interactive visualizations.",
        techTags: ["Google Data Studio", "Data Visualization", "Data Analytics"],
        imageSrc: pklDashboardImage,
        link: "https://datastudio.google.com/reporting/3f8c5363-9284-414e-abff-89ed22562a12"
    },
    {
        id: 3,
        categoryTag: "AI/ML",
        projectNum: "PROJECT 03",
        year: "2026",
        title: "RetoriQA",
        description: "An ongoing development of an advanced question-answering system leveraging Retrieval-Augmented Generation (RAG) and Large Language Models (LLM) to accurately process and retrieve information directly from PDF documents. Currently focusing on system architecture design and pipeline integration.",
        techTags: ["RAG", "NLP", "Python"],
        imageSrc: retoriqaImage,
        link: "https://github.com/YuuFii/RetoriQA.git"
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