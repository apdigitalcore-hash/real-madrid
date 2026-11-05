import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlayerCard } from "@/components/editorial";
import { Newsletter } from "@/components/newsletter";
import {
  FORMATION,
  POSITION_ORDER,
  dataReadOn,
  players,
  squadByPosition,
  squadSource,
  startingXi,
  type Position,
} from "@/lib/madrid-data";

const TITLE = "The squad | Madridista Wire";
const DESC =
  "The full Real Madrid first-team squad: all 26 players with shirt numbers, positions, birthplaces and appearances this season, plus the most-used XI.";

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

const FILTERS: Array<Position | "All"> = ["All", ...POSITION_ORDER];

function StartingXi() {
  return (
    <section className="section-block">
      <div className="site-container">
        <div className="section-heading">
          <div className="section-title">
            <h2>The most-used XI</h2>
          </div>
          <span className="section-link">{FORMATION}</span>
        </div>

        <div className="pitch">
          {startingXi.map((line) => (
            <div key={line.line} className="pitch-line">
              {line.players.map((player) => (
                <div key={player.number} className="pitch-slot">
                  <div className="pitch-shirt">{player.number}</div>
                  <strong>{player.shortName}</strong>
                  <span>{player.stats.minutes.toLocaleString("en-GB")} min</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <p className="xi-note">
          The club does not publish a starting eleven, so this is not one. It is the most-used XI:
          for each line of a {FORMATION} we take the players with the most minutes this season,
          straight from the appearance figures on their official profiles. It will disagree with any
          given matchday line-up, and that is the point — it shows who has actually played.
        </p>
      </div>
    </section>
  );
}

function Squad() {
  const [filter, setFilter] = useState<Position | "All">("All");
  const groups =
    filter === "All" ? squadByPosition : squadByPosition.filter((g) => g.position === filter);
  const shownCount = groups.reduce((total, group) => total + group.players.length, 0);

  return (
    <main>
      <div className="site-container page-heading">
        <span className="eyebrow">ALWAYS MADRID</span>
        <h1>The squad</h1>
        <p>
          All {players.length} players in the first-team squad, with shirt numbers, positions,
          birthplaces and what each of them has actually played this season. Tap any player for
          their full profile. A static record read from the club on {dataReadOn}, not a live feed.
        </p>
      </div>

      <StartingXi />

      <section className="section-block pt-0">
        <div className="site-container">
          <div className="section-heading">
            <div className="section-title">
              <h2>Full squad</h2>
            </div>
            <span className="section-link">
              {shownCount} {shownCount === 1 ? "player" : "players"}
            </span>
          </div>

          <div className="filter-bar" role="group" aria-label="Filter players by position">
            {FILTERS.map((position) => (
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

          {groups.map((group) => (
            <div key={group.position} className="squad-group">
              <div className="squad-group-head">
                <h2>{group.position}s</h2>
                <span>
                  {group.players.length} {group.players.length === 1 ? "player" : "players"}
                </span>
              </div>
              <div className="player-grid">
                {group.players.map((player) => (
                  <PlayerCard key={player.number} player={player} />
                ))}
              </div>
            </div>
          ))}

          <p className="source-note">
            Squad list, shirt numbers, birthplaces and appearance figures read from{" "}
            <a href={squadSource} target="_blank" rel="noopener noreferrer">
              the club's official first-team pages
            </a>{" "}
            on {dataReadOn}. Player descriptions are ours. Everything else on this page is the
            club's own record, reproduced rather than estimated.
          </p>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
