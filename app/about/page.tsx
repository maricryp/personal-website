import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Mariana in Web3",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight mb-6">About me</h1>
      <div className="prose max-w-xl">
        <p>
          I&apos;m a business developer focused on partnerships, pipeline, and
          the deals that actually move a company forward. This space is where
          I write about what I&apos;m learning along the way — from
          outreach and negotiation to reading the fine print in a term sheet.
        </p>
        <p>
          {/* TODO: replace with your real background, industries, and highlights */}
          Add a paragraph or two here about your experience: the industries
          you&apos;ve worked in, the kinds of deals or partnerships you&apos;ve
          led, and what you care about most in this line of work.
        </p>
        <h2>What I focus on</h2>
        <ul>
          <li>Partnerships &amp; strategic alliances</li>
          <li>Pipeline generation and outbound strategy</li>
          <li>Deal negotiation and structuring</li>
          <li>Go-to-market planning</li>
        </ul>
      </div>
    </div>
  );
}
