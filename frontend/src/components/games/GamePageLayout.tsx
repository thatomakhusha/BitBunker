import Link from "next/link";

export default function GamePageLayout(
    { title, number, subtitle, children }: { title: string; number: number; subtitle: string; children: React.ReactNode }){
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
                <div className="eyebrow mt-12"><span>//</span> GAME_{String(number).padStart(2, "0")}</div>
                <h1 className="mt-6 text-5xl font-bold uppercase leading-[0.9] lg:text-7xl">{firstWords}<br /><span className="text-primary">{lastWord}</span></h1>
                <p className="mt-6 text-muted">{subtitle}</p>
                {children}
            </main>
        );
}