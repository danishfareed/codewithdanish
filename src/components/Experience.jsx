"use client";

import { useMemo, useState } from "react";
import experience from "@/data/experience.json";

const iconUrl = (slug) => (slug ? `https://cdn.simpleicons.org/${slug}` : null);

export default function Experience() {
  const [activeId, setActiveId] = useState(experience[0]?.id);

  const active = useMemo(
    () => experience.find((e) => e.id === activeId) || experience[0],
    [activeId]
  );

  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-5 pt-20">
      <h2 className="text-3xl font-extrabold tracking-tight">Work Experience</h2>
      <p className="mt-2 text-white/70">Click a role to view details and tech stack.</p>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_400px]">
        {/* Left: Responsibilities */}
        <div className="grid gap-3">
          {experience.map((e) => {
            const isActive = e.id === activeId;
            return (
              <button
                key={e.id}
                onClick={() => setActiveId(e.id)}
                className={[
                  "text-left rounded-2xl border p-5 transition",
                  isActive
                    ? "border-sky-400/30 bg-sky-400/10"
                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10",
                ].join(" ")}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-extrabold">{e.role}</div>
                    <div className="mt-1 text-white/70">{e.company}</div>
                    <div className="mt-1 text-sm text-white/50">{e.place} • {e.time}</div>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
                  {e.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>

        {/* Right: ONLY Highlights + Skills */}
        <aside className="sticky top-24 h-fit rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="font-extrabold tracking-tight text-lg">{active.role}</div>
              <div className="mt-1 text-sm text-white/70">
                {active.company} • {active.place}
              </div>
            </div>
            
          </div>

          {/* Key Achievements / Highlights */}
          {active.highlights && active.highlights.length > 0 && (
            <div className="mt-5">
              <div className="text-xs font-bold uppercase tracking-wider text-white/50">Key Achievements</div>
              <ul className="mt-3 space-y-2">
                {active.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm">
                    <span className="text-sky-400">→</span>
                    <span className="text-white/80">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mt-5">
            <div className="text-xs font-bold uppercase tracking-wider text-white/50">Tech Stack</div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {active.stack.map((s) => (
                <div key={s.name} className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/30">
                    {iconUrl(s.iconSlug) ? (
                      <img src={iconUrl(s.iconSlug)} alt={`${s.name} logo`} className="h-6 w-6" />
                    ) : (
                      <span className="font-mono text-xs text-white/70">#</span>
                    )}
                  </div>
                  <div className="mt-2 font-mono text-[11px] text-white/70">{s.name}</div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
