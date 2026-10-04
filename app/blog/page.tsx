import Link from "next/link";
import type { Metadata } from "next";
import { getSortedPostsData } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing | Mariana Coimbra Rodrigues",
};

export default function BlogIndex() {
  const posts = getSortedPostsData();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <p className="text-sm font-medium tracking-wide text-accent mb-3">
        Writing
      </p>
      <h1 className="font-serif text-4xl sm:text-5xl tracking-tight mb-10">
        Latest posts
      </h1>
      <div className="grid gap-4 max-w-2xl">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-border bg-surface p-6 hover:border-accent transition-colors"
          >
            <p className="text-xs text-muted mb-2">{post.date}</p>
            <h2 className="font-serif text-2xl mb-2 group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <p className="text-muted">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
