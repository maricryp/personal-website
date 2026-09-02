import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mariana in Web3 | Business Developer",
  description:
    "Notes on business development, partnerships, and building pipeline, from Mariana in Web3.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-border">
          <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">
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

        <main className="flex-1">{children}</main>

        <footer className="border-t border-border">
          <div className="max-w-3xl mx-auto px-6 py-8 text-sm text-muted flex items-center justify-between">
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
