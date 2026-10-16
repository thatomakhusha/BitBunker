import UsernameForm from "@/components/player/UsernameForm";
import Link from "next/link";
const CallsignPage = () => {
    return ( 
        <main className="arcade-container py-20">
            <section className="mx-auto max-w-xl bg-surface border border-border p-10 border-t-2 border-t-primary text-center">
                <div className="flex items-center justify-center gap-3">
                    <div className="h-3 w-3 bg-primary animate-pulse" />
                    <p className="text-muted font-pixel text-[0.5rem]">
                        <span className="text-primary">SYSTEM ONLINE</span> | PLAYER REGISTRATION
                    </p>
                </div>
                <h1 className="font-bold uppercase text-4xl sm:text-5xl leading-none mt-8">
                    Choose your <br/> <span className="text-primary">Callsign</span>
                </h1>
                <p className="text-muted mt-4">Claim your name. Enter the arcade. No account required.</p>
                
                <UsernameForm/>
                <div className="mt-6">
                    <Link href="/" className="font-pixel text-[0.4rem] text-muted hover:text-primary">
                        ALREADY PLAYING? RETURN TO ARCADE &#8594;
                    </Link>
                </div>
                <div className="mt-8 border-t border-border pt-8">
                    <p className="font-pixel text-[0.4rem]">
                        NO EMAIL. NO PASSWORD. JUST PLAY.
                    </p>
                    <p className="text-[0.6rem] text-muted mt-4">
                        Your guest identity is remembered on this browser. Clearing browser data or switching devices may prevent us from restoring it.
                    </p>
                </div>
            </section>
            
        </main>
     );
}
 
export default CallsignPage;