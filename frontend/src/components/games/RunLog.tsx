export type RunLogEntry = {
    guess: number;
    hint: string;
};

export default function RunLog({ entries } : {entries: RunLogEntry[]}){
    return (
        <div className="border border-border bg-surface p-6 min-h-64">
            <p className="font-pixel text-[0.5rem] text-primary">
                RUN LOG
            </p>
            {entries.length === 0 ? 
                <p className="mt-10 text-center font-pixel text-[0.4rem] text-muted">
                    NO GUESSES LOGGED
                </p> : 
                <div className="mt-4">
                    {entries.map((entry, index) => (
                        <div className="flex items-center gap-4 border-b border-border py-3" key={entries.length - index}>
                            <span className="font-pixel text-[0.4rem] text-muted">
                                #{String(entries.length - index).padStart(2, "0")}
                            </span>
                            <span className="font-pixel text-sm">
                                {entry.guess}
                            </span>
                            <span className="ml-auto font-pixel text-[0.4rem] text-tertiary">
                                {entry.hint}
                            </span>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}