import Link from "next/link";

export default function GamePageLayout(
    { title, number, subtitle, statusLabel, statusValue,  children }: { title: string; number: number; subtitle: string; statusLabel: string; statusValue: string; children: React.ReactNode }){
        const words = title.split(" ");
        const lastWord = words.pop();
        const firstWords = words.join(" ");
        return (
            <main className="arcade-container py-10">

                <div className="flex gap-3 font-pixel text-[0.5rem]">
                    <Link href="/#arcade" className="text-primary">
                        ARCADE
                    </Link>
                    <span>/</span>
                    <span className="text-muted uppercase">{title}</span>
                </div>

                <div className="mt-12 flex flex-wrap items-end justify-between gap-6">

                    <div>
                        <div className="eyebrow"><span>//</span> GAME_{String(number).padStart(2, "0")}</div>
                        <h1 className="mt-6 text-5xl font-bold uppercase leading-[0.9] lg:text-7xl">{firstWords}<br /><span className="text-primary">{lastWord}</span></h1>
                        <p className="mt-6 text-muted">{subtitle}</p>
                    </div>

                    <div className="flex items-center gap-4 border border-border bg-surface px-6 py-4">

                        <div className="h-2 w-2 bg-primary"/>

                        <div>
                            <p className="font-pixel text-[0.4rem] text-muted">
                                {statusLabel}
                            </p>
                            <p className="font-pixel text-[0.5rem] text-primary mt-2">
                                {statusValue}
                            </p>
                        </div>

                    </div>

                </div>
                
                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    <div className="border border-border bg-surface p-4 lg:col-span-2">
                        {children}
                    </div>
                    <div>
                        <p>sidebar</p>
                        <Link href="/#arcade" className="mt-6 block font-pixel text-[0.5rem] text-primary">
                            &#8592; BACK TO ARCADE
                        </Link>
                    </div>
                </div>

            </main>
        );
}