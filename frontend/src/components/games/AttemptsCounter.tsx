export default function AttemptsCounter(
    { remaining, total } : {remaining: number; total: number}){
    return(
        <div className="text-center">
            <p className="font-pixel text-[0.5rem] text-muted">
                ATTEMPTS REMAINING
            </p>
            <p className="mt-6 font-pixel text-8xl text-primary text-glow">
                {String(remaining).padStart(2, "0")}
            </p>
            <div className="mt-6 flex justify-center gap-2">
                {Array.from({ length: total }).map((_, i) => (
                    <div key={i} className={`h-1 w-8 ${i < remaining ? "bg-primary" : "bg-border-strong"}`}>

                    </div>
                ))}
            </div>
        </div>
    )
}
    
