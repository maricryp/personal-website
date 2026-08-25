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
    return { title: `${post.title} | Mariana in Web3` };
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
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-sm text-muted hover:text-accent transition-colors">
        &larr; Back to blog
      </Link>
      <p className="text-xs text-muted mt-6 mb-2">{post.date}</p>
      <h1 className="text-3xl font-semibold tracking-tight mb-8">
        {post.title}
      </h1>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
