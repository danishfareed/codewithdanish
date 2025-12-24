import blog from "@/data/blog.json";
import BlogCard from "@/components/BlogCard";

export default function BlogIndexPage() {
  const posts = blog.posts;

  return (
    <main className="mx-auto w-full max-w-6xl px-5 pt-16">
      <h1 className="text-4xl font-extrabold tracking-tight">Blog</h1>
      <p className="mt-2 text-white/70">All posts, categories, and clean reading UX.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {posts.map((p) => <BlogCard key={p.slug} post={p} categories={blog.categories} />)}
      </div>
    </main>
  );
}
