import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import { contact } from "@/lib/contact";

const expertise = [
  {
    title: "Delivery & project management",
    text: "Keeping scope, timelines and people aligned from kickoff to handover.",
  },
  {
    title: "Sales & business development",
    text: "Finding the right clients, shaping the deal and closing it.",
  },
  {
    title: "Account management",
    text: "Building relationships that renew and grow after the first contract.",
  },
  {
    title: "RevOps & strategy",
    text: "Defining the ICP, the goals and the process that makes revenue repeatable.",
  },
];

const stats = [
  { value: "$1B+", label: "in transactions" },
  { value: "60+", label: "clients" },
  { value: "500+", label: "contacts" },
  { value: "7", label: "years across sales, data analysis and process improvement" },
];

const methods = [
  {
    name: "Lean Six Sigma",
    where: "Tintas CIN",
    text: "Developed these methodologies to cut waste, reduce variation and make processes more predictable.",
  },
  {
    name: "Kaizen",
    where: "Bosch",
    text: "Used to improve day to day work through small, steady changes by the whole team.",
  },
];

const experience = [
  {
    role: "Sales Executive (freelance)",
    company: "Pashov Audits Group",
    length: "Now",
    text: "Owning the full sales cycle, from prospecting to closing.",
  },
  {
    role: "Business Development Lead",
    company: "Request Network",
    length: "2024 to 2026",
    text: "Led business development, covering ICP, pipeline, negotiations and key accounts.",
  },
  {
    role: "Business Development Lead",
    company: "Coinshift",
    length: "2022 to 2024",
    text: "Led business development from strategy to signed deal.",
  },
  {
    role: "Business Analyst",
    company: "Sonae",
    length: "2020 to 2022 · 1.5 years",
    text: "Data analysis and business analysis, learning how a business really works before trying to grow it.",
  },
  {
    role: "Continuous Process Improvement",
    company: "Bosch",
    length: "2019 to 2020 · 1 year",
    text: "Improving day to day processes with Kaizen.",
  },
  {
    role: "Process Improvement",
    company: "Tintas CIN",
    length: "2018 to 2019 · 7 months",
    text: "Developed Lean Six Sigma methodologies.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium tracking-wide text-accent mb-3">
      {children}
    </p>
  );
}

export default function Home() {
  const latestPosts = getSortedPostsData().slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-6">
      <section className="relative py-20 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-accent-soft blur-3xl"
        />
        <div className="relative flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between">
          <div>
          <span className="inline-block rounded-full bg-accent-soft px-4 py-1.5 text-sm text-accent font-medium mb-6">
            Delivery Manager · Project Manager · Sales
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl leading-[1.05] tracking-tight mb-6">
            Hello, I&apos;m Mariana.
            <br />
            <span className="italic text-accent">
              I connect selling with delivering.
            </span>
          </h1>
          <p className="text-lg text-muted max-w-xl mb-9">
            I work where sales, projects, and clients meet, closing deals
            that can actually be delivered and building client relationships
            that last past the first contract. This is also my corner of the
            internet to write about whatever I like.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/blog"
              className="rounded-full bg-accent text-on-accent px-6 py-3 font-medium hover:opacity-90 transition-opacity"
            >
              Read my writing
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border px-6 py-3 hover:border-accent hover:text-accent transition-colors"
            >
              Say hello
            </Link>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Currently freelancing with Pashov Audits Group as a Sales
            Executive
          </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/mariana.jpg"
            alt="Mariana Coimbra Rodrigues"
            width={720}
            height={720}
            className="h-44 w-44 shrink-0 rounded-full object-cover ring-4 ring-accent-soft shadow-lg md:h-72 md:w-72"
          />
        </div>
      </section>

      <section className="pb-20">
        <Eyebrow>What I do</Eyebrow>
        <h2 className="font-serif text-3xl sm:text-4xl tracking-tight mb-8 max-w-xl">
          Where sales, projects and clients meet
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="font-serif text-xl mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="rounded-3xl bg-accent-soft p-8 sm:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl sm:text-5xl text-accent mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <Eyebrow>Methods I work with</Eyebrow>
        <h2 className="font-serif text-3xl sm:text-4xl tracking-tight mb-8 max-w-xl">
          Process improvement, in practice
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {methods.map((method) => (
            <div
              key={method.name}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <p className="text-sm text-accent font-medium mb-1">
                {method.where}
              </p>
              <h3 className="font-serif text-2xl mb-2">{method.name}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {method.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20 grid gap-10 md:grid-cols-[1fr_2fr]">
        <div>
          <Eyebrow>Experience</Eyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">
            My path so far
          </h2>
        </div>
        <ol className="relative border-l border-border ml-2 space-y-10">
          {experience.map((item) => (
            <li key={`${item.company}-${item.role}`} className="relative pl-8">
              <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-accent" />
              <p className="text-sm text-muted">
                {item.length}
                {item.company && (
                  <span className="text-accent font-medium">
                    {" "}
                    · {item.company}
                  </span>
                )}
              </p>
              <h3 className="font-serif text-2xl">{item.role}</h3>
              <p className="text-muted mt-1">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="pb-20">
        <div className="rounded-3xl bg-accent text-on-accent p-8 sm:p-12">
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight mb-3">
            Let&apos;s work together
          </h2>
          <p className="max-w-lg mb-7 opacity-90">
            Got a project to deliver, a team to grow, or a deal to shape? I&apos;d
            love to hear about it.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href={`mailto:${contact.email}`}
              className="rounded-full bg-on-accent text-accent px-6 py-3 font-medium hover:opacity-90 transition-opacity"
            >
              Email me
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-on-accent/50 px-6 py-3 hover:bg-on-accent/10 transition-colors"
            >
              LinkedIn
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-on-accent/50 px-6 py-3 hover:bg-on-accent/10 transition-colors"
            >
              More ways to reach me
            </Link>
          </div>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="pb-24">
          <Eyebrow>Writing</Eyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight mb-3">
            Latest posts
          </h2>
          <p className="text-muted max-w-xl mb-8">
            Thoughts on work, life, and whatever else is on my mind.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-border bg-surface p-6 hover:border-accent transition-colors"
              >
                <p className="text-xs text-muted mb-2">{post.date}</p>
                <h3 className="font-serif text-xl mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <Link
            href="/blog"
            className="inline-block mt-8 text-sm font-medium text-accent hover:underline underline-offset-4"
          >
            See all posts &rarr;
          </Link>
        </section>
      )}
    </div>
  );
}
