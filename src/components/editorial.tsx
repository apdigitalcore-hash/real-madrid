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
      <Button
        variant="ghost"
        className="player-card"
        aria-label={`View ${player.name} profile`}
        onClick={() => setOpen(true)}
      >
        <div className="player-portrait">
          <span className="shirt-number">{player.number}</span>
          <span className="player-country" title={player.country}>
            {player.flag}
          </span>
          {player.image ? (
            <img src={player.image} alt={player.name} loading="lazy" />
          ) : (
            // No portrait on file for this player: the shirt number carries the
            // card rather than a broken image or a stand-in face.
            <span className="player-noportrait" aria-hidden="true" />
          )}
        </div>
        <div className="player-info">
          <div>
            <h3>{player.shortName}</h3>
            <p>{player.position.toUpperCase()}</p>
          </div>
          <ArrowUpRight />
        </div>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          {player.image && <img src={player.image} alt={player.name} className="profile-photo" />}
          <DialogTitle className="font-display text-4xl">{player.name}</DialogTitle>
          <DialogDescription>
            {player.bio ??
              `${player.position} · born in ${player.birthplace}. Squad number ${player.number}.`}
          </DialogDescription>

          <div className="profile-stats">
            <div>
              <span>SHIRT</span>
              <strong>{player.number}</strong>
            </div>
            <div>
              <span>POSITION</span>
              <strong>{player.position}</strong>
            </div>
            <div>
              <span>BORN IN</span>
              <strong>{player.country}</strong>
            </div>
          </div>

          <dl className="profile-detail">
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
              <span>APPEARANCES</span>
              <strong>{player.stats.played}</strong>
            </div>
            <div>
              <span>AS STARTER</span>
              <strong>{player.stats.starter}</strong>
            </div>
            <div>
              <span>MINUTES</span>
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
