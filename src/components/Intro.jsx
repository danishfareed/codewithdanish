"use client";
import { useEffect, useState } from "react";

export default function Intro() {
  const [lines, setLines] = useState([]);
  
  const codeLines = [
    { text: "const developer = {", delay: 0 },
    { text: '  name: "Danish Mohammed",', delay: 400 },
    { text: '  title: "Web Developer",', delay: 800 },
    { text: '  location: "Dubai, UAE",', delay: 1200 },
    { text: '  skills: ["React", "Next.js", "TypeScript"],', delay: 1600 },
    { text: '  passion: "Building fast, clean UX",', delay: 2000 },
    { text: "};", delay: 2400 },
    { text: "", delay: 2800 },
    { text: 'console.log("Hello World 👋");', delay: 3200 },
  ];

  useEffect(() => {
    codeLines.forEach((line, i) => {
      setTimeout(() => {
        setLines((prev) => [...prev, line.text]);
      }, line.delay);
    });
  }, []);

  return (
    <section id="intro" className="mx-auto w-full max-w-6xl px-5 pt-20">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 md:p-12">
        <div className="font-mono text-sm leading-relaxed text-white/80">
          {lines.map((line, i) => (
            <div
              key={i}
              className="opacity-0 animate-fadeIn"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
            >
              {line.includes("console.log") ? (
                <span className="text-sky-400">{line}</span>
              ) : line.includes("name:") || line.includes("title:") ? (
                <span className="text-violet-400">{line}</span>
              ) : (
                <span className="text-white/70">{line}</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-2xl font-bold">6+</div>
            <div className="mt-1 text-white/70">Years Experience</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-2xl font-bold">50+</div>
            <div className="mt-1 text-white/70">Projects Delivered</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="text-2xl font-bold">React + Next.js</div>
            <div className="mt-1 text-white/70">Core Stack</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
