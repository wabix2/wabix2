import { useEffect, useState } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  ExternalLink,
  FileText,
  Code2,
  Cpu,
  Shield,
  Globe,
  Sparkles,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Reveal } from "./Reveal";
import { projects, certificates, skills, timeline } from "./data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

const categoryIcon: Record<string, typeof Code2> = {
  Programming: Code2,
  "AI & Systems": Cpu,
  "Cybersecurity (Learning)": Shield,
  "Web Development": Globe,
};

const currentYear = 2026;

export function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message ready", {
      description: "Thanks! I'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen text-foreground">
      <Toaster />
      {/* Nav */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all ${
          scrolled
            ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-semibold tracking-tight">
            <span className="text-gradient">Wabi</span>
            <span className="text-muted-foreground">.dev</span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
          <Button asChild size="sm" variant="secondary" className="hidden md:inline-flex">
            <a href="#contact">
              <Mail className="size-4" /> Hire / Connect
            </a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden px-6 pt-40 pb-24 sm:pt-48 sm:pb-32"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
              <Sparkles className="size-3.5 text-primary" />
              Student developer · Researcher · Builder
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
              Hi, I'm <span className="text-gradient">Wabi Tafese</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl">
              I build real systems to learn — from offline AI assistants to
              numerical simulations of planetary motion. Curious about
              software, AI, cybersecurity, and how things actually work.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="/cv.pdf" download>
                  <Download className="size-4" /> Download CV
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">
                  <Mail className="size-4" /> Contact
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="About" title="A student who learns by building">
        <div className="grid gap-8 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a high-school student exploring software, AI, and
              cybersecurity through hands-on projects. I'm not a polished
              expert — I'm a focused beginner who ships things, breaks them,
              and understands them better each iteration.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              I care about systems that work in the real world: offline,
              low-resource, accessible. My favorite kind of progress is when a
              messy script slowly turns into something that solves a real
              problem.
            </p>
          </Reveal>
          <Reveal delay={120} className="md:col-span-2">
            <Card className="bg-card/60 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-base text-primary">
                  Learning philosophy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>· Build first, polish later.</p>
                <p>· Prefer understanding over memorisation.</p>
                <p>· Small, finished projects beat big, abandoned ones.</p>
                <p>· Honesty about what I know — and what I'm still learning.</p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" eyebrow="Projects" title="Things I've built and learned from">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Card className="group h-full overflow-hidden bg-card/60 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-xl">{p.title}</CardTitle>
                    <div className="flex gap-1.5 opacity-70 transition-opacity group-hover:opacity-100">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="rounded-md p-1.5 hover:bg-secondary"
                      >
                        <Github className="size-4" />
                      </a>
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live"
                        className="rounded-md p-1.5 hover:bg-secondary"
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                  <div>
                    <div className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">
                      My contribution
                    </div>
                    <p className="text-sm text-foreground/90">{p.contribution}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="font-normal">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Skills" title="Where I'm comfortable, and where I'm growing">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => {
            const Icon = categoryIcon[group.category] ?? Code2;
            return (
              <Reveal key={group.category} delay={i * 80}>
                <Card className="h-full bg-card/60 backdrop-blur">
                  <CardHeader>
                    <div className="mb-2 inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-base">{group.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-1.5">
                    {group.items.map((s) => (
                      <Badge key={s} variant="outline" className="font-normal">
                        {s}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Journey */}
      <Section id="journey" eyebrow="Journey" title="How I got here">
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-1/2" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 60}>
                <div
                  className={`relative flex flex-col gap-4 sm:flex-row ${
                    i % 2 ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 pl-10 sm:pl-0 sm:px-8">
                    <Card className="bg-card/60 backdrop-blur">
                      <CardContent className="p-5">
                        <div className="text-xs font-medium uppercase tracking-wider text-primary">
                          {t.year}
                        </div>
                        <div className="mt-1 font-semibold">{t.title}</div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {t.body}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-0 top-5 size-6 rounded-full border-2 border-primary bg-background sm:left-1/2 sm:-translate-x-1/2" />
                  <div className="hidden flex-1 sm:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Certificates */}
      <Section id="certificates" eyebrow="Certificates" title="Coursework & learning records">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <Card className="h-full bg-card/60 backdrop-blur">
                <CardContent className="flex h-full flex-col p-5">
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FileText className="size-5" />
                  </div>
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-sm text-muted-foreground">{c.issuer}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{c.date}</div>
                  <div className="mt-4 pt-4 border-t border-border/60">
                    <a
                      href={c.href}
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                    >
                      View <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Contact" title="Let's talk">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <p className="text-lg text-muted-foreground">
              I'm open to learning opportunities, research programs,
              scholarships, and collaboration on projects that solve real
              problems. Reach out — I reply.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4 text-primary" />
                <span>Email Wabi</span>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-4 text-primary" /> github.com/wabi
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="size-4 text-primary" /> linkedin.com/in/wabi
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Card className="bg-card/60 backdrop-blur">
              <CardContent className="p-6">
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Input required name="name" placeholder="Your name" />
                    <Input
                      required
                      type="email"
                      name="email"
                      placeholder="Your email"
                    />
                  </div>
                  <Input required name="subject" placeholder="Subject" />
                  <Textarea
                    required
                    name="message"
                    placeholder="Your message"
                    rows={5}
                  />
                  <Button type="submit" className="w-full">
                    Send message <ArrowRight className="size-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Section>

      <footer className="border-t border-border/60 px-6 py-10 text-center text-sm text-muted-foreground">
        © {currentYear} Wabi Tafese. Built with care.
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
