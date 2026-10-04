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
          I&apos;m Mariana Coimbra Rodrigues. I work across sales, project
          delivery, and client management. I started as a Business Analyst
          and spent the last four years leading business development.
        </p>
        <p>
          In that time I&apos;ve worked on over $1B in transactions with 60+
          clients, and built a network of 500+ contacts. That mix of
          analysis and sales is what lets me sell work that the team can
          actually deliver.
        </p>
        <h2>What I focus on</h2>
        <ul>
          <li>Delivery and project management</li>
          <li>Sales and business development</li>
          <li>Account management</li>
          <li>RevOps</li>
          <li>Strategy, ICP, and goal setting</li>
        </ul>
      </div>
    </div>
  );
}
