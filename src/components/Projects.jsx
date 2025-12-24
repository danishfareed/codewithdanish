"use client";

import { useState } from "react";
import projects from "@/data/projects.json";

export default function Projects() {
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-5 pt-20">
      <h2 className="text-3xl font-extrabold tracking-tight">Portfolio</h2>
      <p className="mt-2 text-white/70">
        Multiple projects delivered across e-commerce, corporate, and web apps.
      </p>

      {/* Category filters */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={[
              "rounded-full px-4 py-2 text-sm font-bold transition",
              activeCategory === cat
                ? "border-sky-400/30 bg-sky-400/10 text-sky-400"
                : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10",
              "border",
            ].join(" ")}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
          >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden bg-black/20">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-400">
                {project.category}
              </div>
              <h3 className="mt-2 text-lg font-extrabold leading-tight">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{project.description}</p>

              {/* Tech stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 font-mono text-xs text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover arrow */}
            <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
