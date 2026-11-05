import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { type Player, type Story, squadSource } from "@/lib/madrid-data";
import { ageFrom, formatBorn } from "@/lib/format";

const NEWS_ALT: Record<string, string> = {
  foundation: "Real Madrid Foundation board meeting",
  bellingham: "Jude Bellingham after the match in Athens",
  valverde: "Federico Valverde after the match in Athens",
};

export function NewsCard({ story }: { story: Story }) {
  return (
    <article className="news-card">
      <a href={story.href} target="_blank" rel="noopener noreferrer">
        <div className="news-image">
          <img src={story.image} alt={NEWS_ALT[story.id] ?? story.title} loading="lazy" />
        </div>
        <div className="news-meta">
          <span>{story.category.toUpperCase()}</span>
          <time dateTime="2026-11-04">{story.date}</time>
        </div>
        <h3>{story.title}</h3>
        <p>{story.summary}</p>
        <span className="news-source">
          Real Madrid · Read original story <ExternalLink size={10} />
        </span>
      </a>
    </article>
  );
}

export function PlayerCard({ player }: { player: Player }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className="player-card" onClick={() => setOpen(true)}>
        <span className="player-portrait">
          <img src={player.photo} alt={player.name} loading="lazy" width={441} height={587} />
        </span>
        <span className="player-info">
          <span className="player-num">{player.number}</span>
          <span className="player-named">
            <strong>{player.shortName}</strong>
            <em>{player.position}</em>
          </span>
          <span className="player-flag" title={`Born in ${player.country}`}>
            {player.flag}
          </span>
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <img src={player.photo} alt={player.name} className="profile-photo" />
          <DialogTitle className="font-display text-4xl">{player.name}</DialogTitle>
          <DialogDescription>
            {player.bio ??
              `${player.position} \u00b7 born in ${player.birthplace}. Squad number ${player.number}.`}
          </DialogDescription>

          <dl className="profile-detail">
            <div>
              <dt>Shirt</dt>
              <dd>{player.number}</dd>
            </div>
            <div>
              <dt>Position</dt>
              <dd>{player.position}</dd>
            </div>
            <div>
              <dt>Date of birth</dt>
              <dd>
                {formatBorn(player.born)} ({ageFrom(player.born)})
              </dd>
            </div>
            <div>
              <dt>Place of birth</dt>
              <dd>{player.birthplace}</dd>
            </div>
            {player.weight && (
              <div>
                <dt>Weight</dt>
                <dd>{player.weight}</dd>
              </div>
            )}
          </dl>

          <div className="profile-stats">
            <div>
              <span>Appearances</span>
              <strong>{player.stats.played}</strong>
            </div>
            <div>
              <span>As starter</span>
              <strong>{player.stats.starter}</strong>
            </div>
            <div>
              <span>Minutes</span>
              <strong>{player.stats.minutes.toLocaleString("en-GB")}</strong>
            </div>
          </div>

          <Button asChild variant="outline">
            <a href={squadSource} target="_blank" rel="noopener noreferrer">
              Official squad page <ArrowUpRight />
            </a>
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
