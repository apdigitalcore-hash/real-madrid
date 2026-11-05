import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/editorial";
import { Newsletter } from "@/components/newsletter";
import { stories, type Story } from "@/lib/madrid-data";

const TITLE = "News | Madridista Wire";
const DESC =
  "Real Madrid match stories, player reaction and club news, each one linked to its original source on realmadrid.com.";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: News,
});

const CATEGORIES: Array<Story["category"] | "All"> = ["All", "Champions League", "Club"];

function News() {
  const [filter, setFilter] = useState<Story["category"] | "All">("All");
  const shown = filter === "All" ? stories : stories.filter((s) => s.category === filter);

  return (
    <main>
      <div className="site-container page-heading">
        <span className="eyebrow">THE WIRE</span>
        <h1>News</h1>
        <p>
          Every story here is written up from the club's own channels and links back to the
          original. Dates are the publication date of the source, not a live feed.
        </p>
      </div>

      <section className="section-block pt-0">
        <div className="site-container">
          <div className="filter-bar" role="group" aria-label="Filter news by category">
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                size="sm"
                variant={filter === category ? "default" : "outline"}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {shown.length === 0 ? (
            <p className="empty-state">No stories in this category yet.</p>
          ) : (
            <div className="news-grid">
              {shown.map((story) => (
                <NewsCard key={story.id} story={story} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
