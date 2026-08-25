import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mariana in Web3",
};

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight mb-6">
        Get in touch
      </h1>
      <div className="prose max-w-xl">
        <p>
          Open to conversations about partnerships, business development, or
          just swapping notes on what&apos;s working right now. Reach out:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a
              className="underline"
              href="mailto:you@example.com"
            >
              you@example.com
            </a>{" "}
            {/* TODO: replace with your real email */}
          </li>
          <li>
            LinkedIn:{" "}
            <a
              className="underline"
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/your-profile
            </a>{" "}
            {/* TODO: replace with your real LinkedIn URL */}
          </li>
        </ul>
      </div>
    </div>
  );
}
