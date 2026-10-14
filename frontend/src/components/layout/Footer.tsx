
"use client";

import Link from "next/link";

function Footer() {
  const scrollToSection = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-main arcade-container">
        <div>
          <Link href="/" className="flex items-center gap-3 text-sm cursor-pointer" aria-label="BitBunker home">
                <span className="brand-icon" aria-hidden="true">
                    <i className="brand-piece"/>
                    <i className="brand-piece"/>
                    <i className="brand-piece"/>
                    <i className="brand-piece"/>
                    <i className="brand-piece"/>
                </span>
                <span className="brand-text text-foreground whitespace-nowrap">
                    BIT<span className="text-primary">BUNKER</span>
                </span>
            </Link>
            <p>BUILT FOR THE LOVE OF THE GAME.</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
            <button onClick={() => scrollToSection("arcade")}>
                ARCADE
            </button>

            <Link href="/leaderboard">LEADERBOARD</Link>

            <button onClick={() => scrollToSection("about")}>
                ABOUT
            </button>

            <a
                href="https://github.com/thatomakhusha/BitBunker"
                target="_blank"
                rel="noopener noreferrer"
            >
                GITHUB ↗
            </a>
        </nav>
        </div>
        
        <div className="footer-system arcade-container">
            <span>
                ©2026 BITBUNKER. ALL SCORES RESERVED.
                {" "}
                <span className="footer-credit-separator">|</span>
                {" "}
                BUILT BY{" "}
                <a
                    href="https://freelance-web-eta.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-credit text-primary"
                >
                    THATO MAKHUSHA ↗
                </a>
            </span>

            <span>
                <i aria-hidden="true" />
                BITBUNKER ARCADE SYSTEMS // ONLINE
            </span>
        </div>

    </footer>
  );
}

export default Footer;
