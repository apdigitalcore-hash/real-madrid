import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import logo from "@/assets/mw-logo.png";
import { supabase } from "@/integrations/supabase/client";

const TITLE = "Madridista Wire | Real Madrid News, Results & Transfers";
const DESC =
  "Fast, sourced Real Madrid news, results, lineups and transfer updates. Follow Madridista Wire on TikTok, YouTube, Instagram and X.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

type Social = { name: string; href: string; icon: React.ReactNode };

const icon = (d: string) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
    <path d={d} />
  </svg>
);

const SOCIALS: Social[] = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@madridistawire",
    icon: icon(
      "M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.77.12V9.77a5.7 5.7 0 1 0 4.91 5.63V9.01a7.3 7.3 0 0 0 4.27 1.37V7.3a4.28 4.28 0 0 1-3.21-1.48Z",
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@MadridistaWire",
    icon: icon(
      "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z",
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/madridistawire",
    icon: icon(
      "M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2Zm0 4.9a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8Zm0 8.1a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.1-9.4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z",
    ),
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/MadridistaWire",
    icon: icon(
      "M18.2 2.3h3.4l-7.4 8.4 8.7 11.5h-6.8l-5.3-7-6.1 7H1.3l7.9-9L.8 2.3h7l4.8 6.4 5.6-6.4Zm-1.2 17.9h1.9L7.1 4.2H5.1l11.9 16Z",
    ),
  },
];

// Add future links (e.g. "Shop / Jersey deals") to this list.
const EXTRA_LINKS: Social[] = [];

const emailSchema = z.string().trim().email().max(255);

function LinkButton({ s }: { s: Social }) {
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex w-full items-center justify-center rounded-2xl border-2 border-primary bg-secondary px-5 py-4 text-lg font-semibold text-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
    >
      <span className="absolute left-5 text-primary transition-colors group-hover:text-primary-foreground">
        {s.icon}
      </span>
      {s.name}
    </a>
  );
}

function Signup() {
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (hp) {
      setStatus("ok");
      return;
    }
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setStatus("error");
      setMsg("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    const { error } = await supabase
      .from("subscribers")
      .insert({ email: parsed.data.toLowerCase() });
    if (error) {
      setStatus("error");
      setMsg(
        error.code === "23505"
          ? "You're already on the list. Hala Madrid!"
          : "Something went wrong. Please try again.",
      );
      return;
    }
    setStatus("ok");
  }

  return (
    <section className="rounded-3xl border border-primary/50 bg-card p-6">
      <h2 className="font-display text-2xl uppercase">Get the Madrid news first</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Breaking news, match results and transfer updates in your inbox. No spam, unsubscribe
        any time.
      </p>
      {status === "ok" ? (
        <p className="mt-5 text-lg font-semibold text-primary" role="status">
          You're in! ⚪🟡
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-5 flex gap-2" noValidate>
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
            aria-hidden="true"
          />
          <input
            type="email"
            required
            maxLength={255}
            placeholder="you@email.com"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="min-w-0 flex-1 rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-xl bg-primary px-5 py-3 font-display uppercase text-primary-foreground transition hover:brightness-110 disabled:opacity-60"
          >
            {status === "loading" ? "…" : "Join"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-primary" role="alert">
          {msg}
        </p>
      )}
    </section>
  );
}

function Index() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[480px] flex-col gap-8 px-5 py-10">
      <header className="flex flex-col items-center text-center">
        <img
          src={logo}
          alt="Madridista Wire logo"
          width={120}
          height={120}
          className="h-[120px] w-[120px] rounded-full shadow-lg"
        />
        <h1 className="mt-5 font-display text-4xl tracking-tight">MADRIDISTA WIRE</h1>
        <p className="mt-2 font-medium text-primary">
          Real Madrid news, results & transfers, fast.
        </p>
      </header>

      <nav className="flex flex-col gap-3" aria-label="Social links">
        {[...SOCIALS, ...EXTRA_LINKS].map((s) => (
          <LinkButton key={s.name} s={s} />
        ))}
      </nav>

      <Signup />

      <footer className="mt-auto space-y-3 pt-4 text-center text-xs text-muted-foreground">
        <p>
          Madridista Wire is an independent fan page. We are not affiliated with, endorsed by,
          or connected to Real Madrid C.F. All trademarks belong to their owners. Rumours are
          always labelled and sourced.
        </p>
        <p>
          © 2026 Madridista Wire ·{" "}
          <Link to="/privacy" className="underline hover:text-primary">
            Privacy
          </Link>{" "}
          ·{" "}
          <a href="mailto:contact@madridistawire.com" className="underline hover:text-primary">
            contact@madridistawire.com
          </a>
        </p>
      </footer>
    </main>
  );
}
