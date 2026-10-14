import Link from "next/link";

const Hero = () => {
    return ( 
        <section className="arcade-container py-20">
            <div className="grid gap-12 lg:grid-cols-2 items-center">

                <div className="flex flex-col gap-6">

                    <div className="flex items-center gap-3">
                        <div className="h-3 w-3 bg-primary animate-pulse" />
                        <p className="text-muted font-pixel text-[0.5rem]">
                            SYSTEM ONLINE | V1.0.0
                        </p>
                    </div>
                    
                    <h1 className="font-bold uppercase text-4xl sm:text-5xl lg:text-7xl leading-[0.9]">
                        Your next <br /> <span className="text-primary">High Score</span><br />Starts Here
                    </h1>

                    <p className="text-muted text-[1.4rem]">
                        Classic games. One arcade. How high can you score?
                    </p>

                    <div className="flex gap-5">
                        <Link href="/callsign" className="arcade-button">
                            Enter the arcade &#8594;
                        </Link>

                        <Link href="/#arcade" className="arcade-button-secondary">
                            Explore Games &#8594;
                        </Link>
                    </div>

                    <div className="flex gap-8 pt-6">
                        <div className="flex flex-col gap-1">
                            <span className="font-pixel text-2xl">10</span>
                            <span className="pixel-label text-muted">GAMES</span>
                        </div>

                        <div className="flex flex-col gap-1 border-l border-border pl-8 ">
                            <span className="font-pixel text-2xl">1</span>
                            <span className="pixel-label text-muted">PLAYER</span>
                        </div>

                        <div className="flex flex-col gap-1 border-l border-border pl-8">
                            <span className="font-pixel text-2xl">∞</span>
                            <span className="pixel-label text-muted">REPLAYS</span>
                        </div>
                    </div>
                </div>

                   <div className="cabinet-wrap" aria-label="Retro arcade cabinet illustration">
                        <div className="cabinet">
                            <div className="cabinet-top">
                                <span>BITBUNKER</span>
                                <i />
                            </div>
                        </div>
                    </div>
            </div>
        </section>
     );
}
 
export default Hero;