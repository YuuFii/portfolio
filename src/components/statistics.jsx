import React from "react";
import { AnimatedCounter } from "../ui/animated-counter";

function Metrics() {
    const metrics = [
      { value: 12, suffix: "", label: "Projects shipped" },
      { value: 8, suffix: "", label: "Technologies used" },
      { value: 2, suffix: "+", label: "Years of experience" },
    ];

    return (
        <section id="metrics" className="py-10 w-full max-w-4xl mx-auto px-4">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-4">
                {metrics.map(({value, suffix, label}, index) => (
                    <li
                        key={label}
                        className={`text-center p-4
                            ${index === 2 ? "col-span-2 md:col-span-1" : ""}
                        `}
                    >
                        <h2 className="text-5xl mb-3 font-bold text-slate-800">
                            <AnimatedCounter target={value}/>
                            <span>{suffix}</span>
                        </h2>
                        <span className="text-slate-500">{label}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Metrics;