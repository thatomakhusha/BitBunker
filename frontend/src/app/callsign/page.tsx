import UsernameForm from "@/components/player/UsernameForm";

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
            </section>
            
        </main>
     );
}
 
export default CallsignPage;