import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Newsletter } from "@/components/newsletter";
import {
  clubFacts,
  coachingStaff,
  dataReadOn,
  fullHonours,
  headCoach,
  honoursSource,
  president,
  squadSource,
  stadium,
} from "@/lib/madrid-data";
import { formatBorn } from "@/lib/format";

const TITLE = "The club | Madridista Wire";
const DESC =
  "Who runs Real Madrid: the president, José Mourinho and the full first-team coaching staff, with the club’s honours and the facts behind them.";

export const Route = createFileRoute("/club")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/club" },
    ],
    links: [{ rel: "canonical", href: "/club" }],
  }),
  component: Club,
});

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Club() {
  return (
    <main>
      <div className="site-container page-heading">
        <span className="eyebrow">THE CLUB</span>
        <h1>The club</h1>
        <p>
          The people who run Real Madrid and the record they are judged against. Read from the
          club's own pages on {dataReadOn}.
        </p>
      </div>

      <section className="section-block pt-0">
        <div className="site-container">
          <div className="section-heading">
            <div className="section-title">
              <h2>Leadership</h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="person-card">
              <div className="person-badge">{initials(president.name)}</div>
              <div>
                <h3>{president.name}</h3>
                <p className="role">{president.role.toUpperCase()}</p>
                <p>{president.note}</p>
              </div>
            </div>

            <div className="person-card">
              <div className="person-badge">{initials(headCoach.name)}</div>
              <div>
                <h3>{headCoach.name}</h3>
                <p className="role">{headCoach.role.toUpperCase()}</p>
                <p>{headCoach.note}</p>
                <p>
                  Born {formatBorn(headCoach.born)} in {headCoach.birthplace}. Previously:{" "}
                  {headCoach.career}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block pt-0">
        <div className="site-container">
          <div className="section-heading">
            <div className="section-title">
              <h2>Coaching staff</h2>
            </div>
            <span className="section-link">{coachingStaff.length} listed</span>
          </div>
          <div className="staff-grid">
            {coachingStaff.map((member) => (
              <div key={member.name} className="staff-card">
                <strong>{member.name}</strong>
                <span>{member.role.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stadium-feature">
        <img src={stadium} alt="The Santiago Bernabéu" />
        <div className="hero-shade" />
        <div className="site-container">
          <span className="eyebrow">THE BERNABÉU</span>
          <h2>Home since 1947.</h2>
          <p>
            The Santiago Bernabéu has been rebuilt around the team it houses. Tours, tickets and
            hospitality are handled by the club.
          </p>
          <a
            href="https://www.realmadrid.com/en-US/the-club/santiago-bernabeu-stadium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official stadium page <ArrowUpRight size={13} />
          </a>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container">
          <div className="section-heading">
            <div className="section-title">
              <h2>Honours</h2>
            </div>
            <a
              href={honoursSource}
              target="_blank"
              rel="noopener noreferrer"
              className="section-link"
            >
              Full record <ArrowUpRight size={12} />
            </a>
          </div>
          <div className="honour-grid">
            {fullHonours.map((honour) => (
              <div key={honour.label} className="honour-tile">
                <strong>{honour.count}</strong>
                <span>{honour.label.toUpperCase()}</span>
              </div>
            ))}
          </div>

          <div className="section-heading mt-12">
            <div className="section-title">
              <h2>At a glance</h2>
            </div>
          </div>
          <dl className="fact-list">
            {clubFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <p className="source-note">
            Leadership, coaching staff and squad size read from{" "}
            <a href={squadSource} target="_blank" rel="noopener noreferrer">
              the club's first-team pages
            </a>
            ; honours from{" "}
            <a href={honoursSource} target="_blank" rel="noopener noreferrer">
              its track-record page
            </a>
            . Both on {dataReadOn}. This is a static record, not a live feed.
          </p>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
