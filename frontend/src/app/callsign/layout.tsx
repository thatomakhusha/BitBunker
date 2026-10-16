import Link from "next/link";

export default function CallsignLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <header className="flex arcade-container justify-between items-center h-18.75 border-b border-border">
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
            <span className="font-pixel text-[0.5rem] text-muted">GUEST ACCESS // NO ACCOUNT REQUIRED</span>
        </header>
        {children}
        <footer className="arcade-container ">
            <div className="footer-system">
                <span>
                    BITBUNKER PLAYER TERMINAL // READY
                </span>
                <span>
                    SECURE GUEST SESSION PROTOTYPE
                </span>
            </div>
        </footer>
    </>
  );
}
