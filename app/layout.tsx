import type { Metadata } from "next";
import Link from "next/link";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mariana in Web3 | Delivery, Project & Sales Leader",
  description:
    "Notes on delivery, project management, and sales, from Mariana in Web3.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-border">
          <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link href="/" className="font-serif text-xl tracking-tight">
              Mariana in Web3
            </Link>
            <nav className="flex gap-6 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1 overflow-x-clip">{children}</main>

        <footer className="border-t border-border">
          <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-muted flex items-center justify-between">
            <span>&copy; {new Date().getFullYear()} Mariana in Web3</span>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Get in touch
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
