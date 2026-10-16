import Link from "next/link";
import { games } from "@/lib/games";

const Hero = () => {
    return ( 
        <section className="arcade-container py-20">
            <div className="grid gap-12 lg:grid-cols-2 items-center">

                <div className="flex flex-col gap-6">

                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary animate-pulse" />
                        <p className="text-muted font-pixel text-[0.48rem]">
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
                            <span className="font-pixel text-2xl">{games.length}</span>
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
                        
                        <div className="orbit orbit-one">+100</div>
                        <div className="orbit orbit-two">HI!</div>

                        <div className="cabinet-shadow" />

                        <div className="cabinet">
                            <div className="cabinet-top">
                                <span>BITBUNKER</span>
                                <i />
                            </div>
                            
                            <div className="cabinet-screen">
                                <div className="screen-top">
                                    <span>1UP</span>
                                    <span>009800</span>
                                </div>

                                <div className="pixel-bunker">
                                    <i /><i /><i /><i /><i /><i />
                                    <i /><i /><i /><i /><i /><i />
                                </div>

                                <div className="screen-copy">
                                    <strong>READY?</strong>
                                    <small>INSERT COIN</small>
                                </div>
                            </div>

                            <div className="cabinet-controls">
                                <div className="joystick">
                                    <i />
                                </div>

                                <div className="cabinet-buttons">
                                    <i />
                                    <i />
                                </div>
                            </div>

                            <div className="coin-slot">
                                <span>PLAYER_01</span>
                                <i />
                            </div>

                        </div>
                    </div>
            </div>
        </section>
     );
}
 
export default Hero;