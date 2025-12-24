import site from "@/data/site.json";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/20">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-white/70">
        <div>© {new Date().getFullYear()} {site.name}</div>
        <div className="flex flex-wrap gap-2">
          <a className="rounded-full border border-white/10 px-3 py-2 hover:bg-white/5" href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="rounded-full border border-white/10 px-3 py-2 hover:bg-white/5" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="rounded-full border border-white/10 px-3 py-2 hover:bg-white/5" href={site.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
