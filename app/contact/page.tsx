import type { Metadata } from "next";
import { contact } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact | Mariana in Web3",
};

const channels = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    label: "LinkedIn",
    value: contact.linkedinLabel,
    href: contact.linkedin,
  },
  {
    label: "Twitter",
    value: contact.handle,
    href: contact.twitter,
  },
  {
    label: "Telegram",
    value: contact.handle,
    href: contact.telegram,
  },
];

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <p className="text-sm font-medium tracking-wide text-accent mb-3">
        Contact
      </p>
      <h1 className="font-serif text-4xl sm:text-5xl tracking-tight mb-5">
        Get in touch
      </h1>
      <p className="text-lg text-muted max-w-xl mb-10">
        Open to conversations about delivery, project management, and sales,
        or just swapping notes on what&apos;s working right now.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
        {channels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.label === "Email" ? undefined : "_blank"}
            rel={channel.label === "Email" ? undefined : "noopener noreferrer"}
            className="group rounded-2xl border border-border bg-surface p-6 hover:border-accent transition-colors"
          >
            <p className="text-sm text-muted mb-1">{channel.label}</p>
            <p className="font-serif text-xl group-hover:text-accent transition-colors break-words">
              {channel.value}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
