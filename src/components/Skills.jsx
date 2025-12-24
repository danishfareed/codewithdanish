"use client";

import skills from "@/data/skills.json";

const iconUrl = (slug) => (slug ? `https://cdn.simpleicons.org/${slug}` : null);

export default function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-5 pt-20">
      <h2 className="text-3xl font-extrabold tracking-tight">Skills</h2>
      <p className="mt-2 text-white/70">
        Comprehensive tech stack organized by category. Hover for animated effects.
      </p>

      {skills.map((category) => (
        <div key={category.category} className="mt-12">
          {/* Category title */}
          <h3 className="mb-4 flex items-center gap-3 text-xl font-bold">
            <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></span>
            <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              {category.category}
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent"></span>
          </h3>

          {/* Skills grid */}
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {category.skills.map((s) => {
              // Check if local image exists, otherwise use Simple Icons
              const localImage = s.localImage ? `/${s.localImage}` : null;
              const simpleIconUrl = iconUrl(s.iconSlug);
              const imageSource = localImage || simpleIconUrl;

              return (
                <div
                  key={s.name}
                  className="group relative isolate overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                >
                  {/* Animated gradient background */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-sky-400/15 via-violet-400/10 to-pink-400/15 bg-[length:200%_200%]" />
                    
                    {/* Animated code lines */}
                    <div className="absolute inset-0 overflow-hidden">
                      <pre className="animate-codeScroll p-4 font-mono text-[10px] leading-5 text-white/20">
{`import ${s.name.replace(/\W/g, "")} from "tech";

const build = () => {
  return <App />;
};

export default build;

// Production ready
// Fast & scalable`}
                      </pre>
                    </div>

                    {/* Shimmer effect */}
                    <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" 
                         style={{ backgroundSize: '200% 100%' }} />
                  </div>

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-base font-extrabold leading-tight">{s.name}</div>
                    </div>

                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-black/20">
                      {imageSource ? (
                        <img
                          src={imageSource}
                          alt={`${s.name} logo`}
                          className="h-6 w-6"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextElementSibling.style.display = "block";
                          }}
                        />
                      ) : null}
                      <span
                        className="font-mono text-lg text-white/50"
                        style={{ display: imageSource ? "none" : "block" }}
                      >
                        #
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes codeScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20px); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .animate-gradient {
          animation: gradient 4s ease infinite;
        }

        .animate-codeScroll {
          animation: codeScroll 2s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
