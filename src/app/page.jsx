import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import site from "@/data/site.json";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Intro />
      <Skills />
      <Experience />
      <Projects />

      <section id="contact" className="mx-auto w-full max-w-6xl px-5 pt-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
          <h2 className="text-3xl font-extrabold tracking-tight">Hire me</h2>
          <p className="mt-2 text-white/70">Open to Web Developer / Technical Lead roles in Dubai - UAE or remote.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-3 font-bold hover:bg-sky-400/15" href={site.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-bold hover:bg-white/10" href={`mailto:${site.email}`}>
              Email
            </a>
            <a className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-bold hover:bg-white/10" href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-bold hover:bg-white/10" href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
