import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy | Madridista Wire" },
      { name: "description", content: "How Madridista Wire handles your email address." },
      { property: "og:title", content: "Privacy | Madridista Wire" },
      { property: "og:description", content: "How Madridista Wire handles your email address." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <main className="mx-auto w-full max-w-[480px] px-5 py-10">
      <Link to="/" className="text-sm text-primary underline">
        ← Back
      </Link>
      <h1 className="mt-6 font-display text-3xl uppercase">Privacy</h1>
      <div className="mt-5 space-y-4 text-muted-foreground">
        <p>We only store your email address, and only to send you Madridista Wire news.</p>
        <p>You can unsubscribe at any time using the link in any email, or by writing to us.</p>
        <p>We never sell or share your email. No trackers, no ads, no cookies.</p>
        <p>
          Questions:{" "}
          <a href="mailto:contact@madridistawire.com" className="text-primary underline">
            contact@madridistawire.com
          </a>
        </p>
      </div>
    </main>
  );
}
