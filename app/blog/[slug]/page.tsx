import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return { title: `${post.title} | Mariana Coimbra Rodrigues` };
  } catch {
    return { title: "Post not found" };
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article className="max-w-5xl mx-auto px-6 py-16">
      <div className="max-w-2xl">
        <Link
          href="/blog"
          className="text-sm text-muted hover:text-accent transition-colors"
        >
          &larr; Back to writing
        </Link>
        <p className="text-sm text-muted mt-8 mb-3">{post.date}</p>
        <h1 className="font-serif text-4xl sm:text-5xl tracking-tight mb-10">
          {post.title}
        </h1>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </article>
  );
}
