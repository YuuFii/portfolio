import React, { useState } from "react";
import ExperienceCard from "../ui/exp-card";

const experiencesData = [
    {
        id: 1,
        period: "Nov 2025 - Feb 2026",
        type: "Contract",
        role: "Research and Development Assistant",
        company: "Faculty of Computer Science, Brawijaya University",
        description: [
            "Preprocessed over 33,000 multimodal data points to optimize inputs for the inference process using the CLIP architecture.",
            "Developed and evaluated model performance using Python for a food calorie estimation system.",
            "Designed a back-end architecture using FastAPI to deploy and integrate the predictive model into an API system, ensuring smooth data inference in a production environment."
        ]
    },
    {
        id: 2,
        period: "Feb 2025 - Jul 2025",
        type: "Internship",
        role: "Data Analyst Intern",
        company: "International Relation Office, FILKOM UB",
        description: [
            "Collected, processed, and visualized data of 200+ students in preparation for the MBKM Program for the Odd Semester 2025/2026.",
            "Arranged the final exam schedule for the Even Semester 2024/2025 MBKM Program to prevent scheduling conflicts among students.",
            "Input student data from the Even Semester 2024/2025 MBKM Program, including assignment and final exam scores.",
        ]
    },
    {
        id: 3,
        period: "Feb 2025 - Jun 2025",
        type: "Part-Time",
        role: "Teaching Assistant of CIF64311 Advanced Artificial Intelligence",
        company: "Faculty of Computer Science, Brawijaya University",
        description: [
            "Designed live coding problems covering 10 topics and evaluated students' technical skills.",
            "Managed assessment results for assignments and practical exams for 36 students.",
        ]
    },
];

function Experiences() {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="experiences" className="px-6 lg:px-32 py-12 lg:flex">
            {/* Kolom kiri */}
            <div>
                <h3 className="tracking-widest text-sm text-gold font-semibold">EXPERIENCE</h3>
                <h1 className="text-3xl text-slate-800 font-bold mt-4 mb-2">Learning by building.</h1>
                <p className="text-slate-500">
                    A timeline of the roles, communities and coursework that shaped how I write software today.
                </p>
            </div>

            {/* Kolom kanan */}
            <div className="relative pl-8 mt-6 flex flex-col gap-4">
                <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-slate-200"></div>
                
                {experiencesData.map((exp) => {
                    return (
                    <ExperienceCard
                        key={exp.id}
                        experience={exp}
                        isOpen={openId === exp.id}
                        onToggle={() => handleToggle(exp.id)}
                    />
                    )
                })}
                {/* exp card */}
                
            </div>
        </section>
    );
}

export default Experiences;