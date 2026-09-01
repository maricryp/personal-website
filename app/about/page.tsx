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
          I&apos;m Mariana Coimbra Rodrigues, a business leader with four
          years of experience as a Business Development Lead, building on an
          earlier three years as a Business Analyst.
        </p>
        <p>
          Over that time, I&apos;ve helped drive over $1B in transactions,
          working directly with 60+ clients and building a network of 500+
          contacts along the way.
        </p>
        <h2>What I focus on</h2>
        <ul>
          <li>RevOps</li>
          <li>Business development</li>
          <li>Account management</li>
          <li>Strategy definition &amp; ICP</li>
          <li>Goal-setting &amp; go-to-market direction</li>
        </ul>
      </div>
    </div>
  );
}
