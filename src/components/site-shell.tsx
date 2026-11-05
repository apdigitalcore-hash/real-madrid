import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Menu, X, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { crest } from "@/lib/madrid-data";
function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Madridista Wire home">
      <img src={crest} alt="Real Madrid crest" width={42} height={58} />
      <div>
        <div className="brand-name">
          <span>MADRIDISTA</span>
          <span>
            WIRE<span className="sr-only"> — independent fan site</span>
          </span>
        </div>
        <div className="brand-caption">INDEPENDENT. ALWAYS MADRID.</div>
      </div>
    </Link>
  );
}
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-card">
      <div className="site-container masthead">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "active" }}>
            Home
          </Link>
          <Link to="/news" activeProps={{ className: "active" }}>
            News
          </Link>
          <Link to="/squad" activeProps={{ className: "active" }}>
            The squad
          </Link>
          <Link to="/club" activeProps={{ className: "active" }}>
            The club
          </Link>
          <a
            href="https://www.realmadrid.com/en-US/football/games"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fixtures <ArrowUpRight size={12} className="ml-1" />
          </a>
        </nav>
        <div className="nav-actions">
          <Button
            asChild
            size="icon"
            variant="ghost"
            aria-label="Madridista Wire on Instagram"
            title="Instagram"
          >
            <a
              href="https://www.instagram.com/madridistawire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </Button>
          <Button asChild className="join-button">
            <Link to="/news">
              Inside Madrid <ArrowUpRight />
            </Link>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="mobile-menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="site-container mobile-nav" aria-label="Mobile navigation">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/news" onClick={() => setOpen(false)}>
            News
          </Link>
          <Link to="/squad" onClick={() => setOpen(false)}>
            The squad
          </Link>
          <Link to="/club" onClick={() => setOpen(false)}>
            The club
          </Link>
          <a
            href="https://www.realmadrid.com/en-US/football/games"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official fixtures ↗
          </a>
        </nav>
      )}
      <div className="ticker">
        <div className="site-container ticker-inner">
          <span className="ticker-label">
            <span className="live-dot" />
            THE WIRE
          </span>
          <span className="ticker-divider" />
          <Link to="/news" className="ticker-text">
            European nights. Madrid mentality. Bellingham and Valverde reflect on the comeback in
            Athens.
          </Link>
          <ArrowUpRight size={13} className="ml-auto shrink-0" />
        </div>
      </div>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top">
          <Brand />
          <div className="footer-socials">
            <a
              href="https://www.tiktok.com/@madridistawire"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
              <ArrowUpRight size={12} />
            </a>
            <a
              href="https://www.youtube.com/@MadridistaWire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={15} />
              YouTube
            </a>
            <a
              href="https://www.instagram.com/madridistawire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={14} />
              Instagram
            </a>
            <a href="https://x.com/MadridistaWire" target="_blank" rel="noopener noreferrer">
              𝕏
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-disclaimer">
            An independent fan publication. Not affiliated with or endorsed by Real Madrid C.F. Club
            crest and official photography belong to their respective owners. Stories link to their
            original sources.
          </p>
          <div className="footer-legal">
            <span>© 2026 Madridista Wire</span>
            <Link to="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
