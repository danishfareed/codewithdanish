import blog from "@/data/blog.json";

export function generateStaticParams() {
  return blog.posts.map((p) => ({ slug: p.slug }));
}

function findPost(slug) {
  return blog.posts.find((p) => p.slug === slug);
}

function relatedPosts(post) {
  const set = new Set(post.categories || []);
  return blog.posts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => (p.categories || []).some((c) => set.has(c)))
    .slice(0, 3);
}

export default function BlogPostPage({ params }) {
  const post = findPost(params.slug);

  if (!post) {
    return (
      <main className="mx-auto w-full max-w-3xl px-5 pt-16">
        <h1 className="text-2xl font-extrabold">Post not found</h1>
      </main>
    );
  }

  const rel = relatedPosts(post);

  return (
    <main className="mx-auto w-full max-w-3xl px-5 pt-16">
      <a href="/blog" className="text-white/70 hover:text-white">← Back to Blog</a>

      <h1 className="mt-4 text-4xl font-extrabold tracking-tight">{post.title}</h1>
      <div className="mt-3 flex items-center gap-3 text-sm text-white/70">
        <img src={post.author.avatar} alt={post.author.name} className="h-9 w-9 rounded-full object-cover" />
        <div>
          <div className="font-bold text-white">{post.author.name}</div>
          <div className="text-white/60">{post.author.role}</div>
        </div>
        <span className="ml-auto font-mono text-xs text-white/60">{post.date}</span>
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <img src={post.coverImage} alt={post.title} className="h-72 w-full object-cover opacity-80" />
      </div>

      {/* Share icons can be added later; for now links */}
      <div className="mt-6 flex flex-wrap gap-2">
        <a className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm hover:bg-white/5" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://codewithdanish.dev/blog/" + post.slug + "/")}`} target="_blank" rel="noreferrer">
          Share on LinkedIn
        </a>
        <a className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm hover:bg-white/5" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent("https://codewithdanish.dev/blog/" + post.slug + "/")}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noreferrer">
          Share on X
        </a>
      </div>

      <article className="prose prose-invert mt-10 max-w-none prose-headings:tracking-tight prose-a:text-sky-300"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-12 border-t border-white/10 pt-8">
        <div className="text-sm font-bold">Related posts</div>
        <div className="mt-4 grid gap-3">
          {rel.map((p) => (
            <a key={p.slug} href={`/blog/${p.slug}/`} className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10">
              <div className="font-bold">{p.title}</div>
              <div className="mt-1 text-sm text-white/70">{p.excerpt}</div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
