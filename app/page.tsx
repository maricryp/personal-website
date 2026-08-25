import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const latestPosts = getSortedPostsData().slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-6">
      <section className="py-16 sm:py-24">
        <p className="text-sm uppercase tracking-wide text-accent font-medium mb-3">
          Business Developer
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-5">
          Hi, I&apos;m Mariana — welcome to Mariana in Web3.
        </h1>
        <p className="text-lg text-muted max-w-xl mb-8">
          I write about business development, partnerships, and what it
          actually takes to build a pipeline that lasts — one deal, one
          relationship, and one lesson at a time.
        </p>
        <div className="flex gap-4 text-sm">
          <Link
            href="/blog"
            className="px-4 py-2 rounded-md bg-accent text-background font-medium hover:opacity-90 transition-opacity"
          >
            Read the blog
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 rounded-md border border-border hover:border-accent hover:text-accent transition-colors"
          >
            About me
          </Link>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="pb-24">
          <h2 className="text-sm uppercase tracking-wide text-accent font-medium mb-5">
            Latest posts
          </h2>
          <div className="flex flex-col gap-8">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <p className="text-xs text-muted mb-1">{post.date}</p>
                <h3 className="text-lg font-medium mb-1 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
