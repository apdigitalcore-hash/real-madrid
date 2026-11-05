import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsCard, PlayerCard } from "@/components/editorial";
import { Newsletter } from "@/components/newsletter";
import { featureImage, honours, players, stadium, stories } from "@/lib/madrid-data";

const TITLE = "Madridista Wire | Real Madrid News, Results & Transfers";
const DESC =
  "An independent Real Madrid publication: sourced news, match stories and browsable player profiles. Follow Madridista Wire on TikTok, YouTube, Instagram and X.";

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

// The lead story is the newest entry in the shared data module, so the hero and
// the news grid never drift apart.
const lead = stories[0];

function Hero() {
  return (
    <section className="feature-hero">
      <img src={featureImage} alt="Jude Bellingham after the match in Athens" />
      <div className="hero-shade" />
      <div className="hero-content">
        <div className="site-container">
          <span className="hero-category">{lead.category.toUpperCase()}</span>
          <h1>
            European nights. <em>Madrid mentality.</em>
          </h1>
          <p>{lead.summary}</p>
          <Button asChild className="hero-button">
            <a href={lead.href} target="_blank" rel="noopener noreferrer">
              Read the story <ArrowUpRight size={14} />
            </a>
          </Button>
        </div>
        <div className="hero-bottom">
          <div className="site-container flex items-center justify-between">
            <span>{lead.date} · ATHENS</span>
            <div className="hero-pagination" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClubStrip() {
  return (
    <div className="club-strip">
      <div className="site-container club-strip-inner">
        <p className="club-motto">
          Hala Madrid.
          <small>Founded 1902 · Santiago Bernabéu, Madrid</small>
        </p>
        {honours.map((honour) => (
          <div key={honour.label} className="honour">
            <Trophy aria-hidden="true" />
            <div>
              <strong>{honour.count}</strong>
              <span>{honour.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <main>
      <Hero />
      <ClubStrip />

      <section className="section-block">
        <div className="site-container">
          <div className="section-heading">
            <div className="section-title">
              <h2>Latest news</h2>
            </div>
            <Link to="/news" className="section-link">
              All news <ArrowUpRight size={12} />
            </Link>
          </div>
          <div className="news-grid">
            {stories.map((story) => (
              <NewsCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      <section className="stadium-feature">
        <img src={stadium} alt="The Santiago Bernabéu" />
        <div className="hero-shade" />
        <div className="site-container">
          <span className="eyebrow">THE BERNABÉU</span>
          <h2>Where the nights are made.</h2>
          <p>
            Eighty thousand voices, a remade roof and the same demand every season: win, and win in
            white. The stadium tour and matchday tickets are handled by the club.
          </p>
          <a
            href="https://www.realmadrid.com/en-US/the-club/santiago-bernabeu-stadium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the official stadium page <ArrowUpRight size={13} />
          </a>
        </div>
      </section>

      <section className="section-block squad-section">
        <div className="site-container">
          <div className="section-heading">
            <div className="section-title">
              <h2>The squad</h2>
            </div>
            <Link to="/squad" className="section-link">
              Full squad <ArrowUpRight size={12} />
            </Link>
          </div>
          <p className="squad-intro">
            Tap a player to open their profile. Shirt numbers follow the club's published 2026/27
            list.
          </p>
          <div className="player-grid">
            {players.slice(0, 4).map((player) => (
              <PlayerCard key={player.number} player={player} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
