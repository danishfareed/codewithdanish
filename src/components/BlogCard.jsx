export default function BlogCard({ post, categories }) {
  const cats = post.categories
    .map((c) => categories.find((x) => x.slug === c))
    .filter(Boolean);

  return (
    <a href={`/blog/${post.slug}/`} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
      <div className="h-44 bg-gradient-to-br from-sky-400/15 via-violet-400/10 to-pink-400/10">
        <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover opacity-70" />
      </div>
      <div className="p-5">
        <div className="font-mono text-xs text-white/60">{post.date}</div>
        <div className="mt-2 text-lg font-extrabold">{post.title}</div>
        <p className="mt-2 text-sm text-white/70">{post.excerpt}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {cats.map((c) => (
            <span key={c.slug} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 font-mono text-xs text-white/70">
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
