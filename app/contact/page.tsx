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
            <a className="underline" href="mailto:mar.rcrodrigues@gmail.com">
              mar.rcrodrigues@gmail.com
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              className="underline"
              href="https://www.linkedin.com/in/marianarcrod/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/marianarcrod
            </a>
          </li>
          <li>
            Twitter:{" "}
            <a
              className="underline"
              href="https://twitter.com/maricoim"
              target="_blank"
              rel="noopener noreferrer"
            >
              @maricoim
            </a>
          </li>
          <li>
            Telegram:{" "}
            <a
              className="underline"
              href="https://t.me/maricoim"
              target="_blank"
              rel="noopener noreferrer"
            >
              @maricoim
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
