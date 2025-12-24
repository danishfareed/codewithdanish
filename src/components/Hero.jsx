import site from "@/data/site.json";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pt-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs text-white/60">AVAILABLE • DUBAI • REMOTE/ONSITE</p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight md:text-6xl">
            {site.title.split("|")[0].trim()}{" "}
            <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              {site.title.split("|")[1]?.trim()}
            </span>
          </h1>

        

          <p className="mt-5 text-lg text-white/70">{site.summary}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/#contact" className="rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-3 font-bold hover:bg-sky-400/15">
              Hire me
            </a>
            <a href="/#projects" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-bold hover:bg-white/10">
              View projects
            </a>
            <a href="/blog" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-bold hover:bg-white/10">
              Read blog
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-sky-400/15 via-violet-400/10 to-pink-400/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
            {/* Put your photo at public/me.jpg */}
            <img src="/profile1.jpg" alt={site.name} className="h-[550px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-xs text-white/70">
              <span className="font-mono">profile.jpg</span>
              <span className="font-mono">codewithdanish.dev</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
