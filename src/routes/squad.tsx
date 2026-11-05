import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlayerCard } from "@/components/editorial";
import { Newsletter } from "@/components/newsletter";
import { players, squadSource, type Player } from "@/lib/madrid-data";

const TITLE = "The squad | Madridista Wire";
const DESC =
  "Browse Real Madrid player profiles — shirt numbers, positions and nationalities, taken from the club’s published 2026/27 squad list.";

export const Route = createFileRoute("/squad")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/squad" },
    ],
    links: [{ rel: "canonical", href: "/squad" }],
  }),
  component: Squad,
});

const POSITIONS: Array<Player["position"] | "All"> = ["All", "Goalkeeper", "Midfielder", "Forward"];

function Squad() {
  const [filter, setFilter] = useState<Player["position"] | "All">("All");
  const shown = filter === "All" ? players : players.filter((p) => p.position === filter);

  return (
    <main>
      <div className="site-container page-heading">
        <span className="eyebrow">ALWAYS MADRID</span>
        <h1>The squad</h1>
        <p>
          Tap a player to open their profile. Shirt numbers and positions follow the club's
          published 2026/27 squad list, linked below — this is a static record, not a live feed.
        </p>
      </div>

      <section className="section-block pt-0">
        <div className="site-container">
          <div className="filter-bar" role="group" aria-label="Filter players by position">
            {POSITIONS.map((position) => (
              <Button
                key={position}
                size="sm"
                variant={filter === position ? "default" : "outline"}
                aria-pressed={filter === position}
                onClick={() => setFilter(position)}
              >
                {position}
              </Button>
            ))}
          </div>

          {shown.length === 0 ? (
            <p className="empty-state">No players listed for this position yet.</p>
          ) : (
            <div className="player-grid">
              {shown.map((player) => (
                <PlayerCard key={player.number} player={player} />
              ))}
            </div>
          )}

          <p className="squad-intro mt-8">
            <a
              href={squadSource}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold"
            >
              Official 2026/27 shirt numbers <ArrowUpRight size={12} />
            </a>
          </p>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
