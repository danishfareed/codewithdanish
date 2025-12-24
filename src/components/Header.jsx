import site from "@/data/site.json";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3">
        <a href="/" className="flex items-center gap-3">
          <Logo />
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          <a className="rounded-full px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white" href="/#intro">Intro</a>
          <a className="rounded-full px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white" href="/#skills">Skills</a>
          <a className="rounded-full px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white" href="/#experience">Experience</a>
          <a className="rounded-full px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white" href="/#projects">Projects</a>
          <a className="rounded-full px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white" href="/blog">Blog</a>
          <a className="rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 font-bold hover:bg-sky-400/15" href="/#contact">
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}
