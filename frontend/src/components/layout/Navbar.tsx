import Link from "next/link";

const Navbar = () => {
    return ( 
        <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
            <nav className="flex items-center justify-between h-18.75 arcade-container">
                {/* Logo */}
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

                {/* Navigation links */}
                <div className="nav-links">
                    <Link href="/#arcade">
                        ARCADE
                    </Link>
                        
                    <Link href="/leaderboard">
                        LEADERBOARD
                    </Link>

                    <Link href="/#about">
                        ABOUT
                    </Link>
                </div>

                {/* Play Now button */}
                <Link href="/#arcade" className="arcade-button text-[0.5rem]">
                    PLAY NOW
                </Link>
            </nav>
        </header>
    );
}
 
export default Navbar;