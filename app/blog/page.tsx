import Link from "next/link";
import type { Metadata } from "next";
import { getSortedPostsData } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | Mariana in Web3",
};

export default function BlogIndex() {
  const posts = getSortedPostsData();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight mb-8">Blog</h1>
      <div className="flex flex-col gap-10">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <p className="text-xs text-muted mb-1">{post.date}</p>
            <h2 className="text-xl font-medium mb-1 group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <p className="text-muted">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
