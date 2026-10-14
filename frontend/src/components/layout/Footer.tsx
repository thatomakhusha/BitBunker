
"use client";

import Link from "next/link";
import PixelMark from "@/components/PixelMark";

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
          <PixelMark />
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
        <span>© {new Date().getFullYear()} BITBUNKER. ALL SCORES RESERVED.</span>

        <span>
          <i aria-hidden="true" />
          BITBUNKER ARCADE SYSTEMS // ONLINE
        </span>
      </div>
    </footer>
  );
}

export default Footer;
