import Link from "next/link";
import { Game } from "@/lib/games";
import GameArt from "./GameArt";

const statusLabel = {
    playable: "ONLINE",
    "coming-soon": "SOON",
};

const accents = ["", "accent-secondary", "accent-tertiary"];

export default function GameCard({ game, number }: { game: Game; number: number }) {
    const accent = accents[(number - 1) % 3];
    const isPlayable = game.status === "playable";

    return (
        <article className={`game-card ${accent}`}>
            <div className="card-topline">
                <span>GAME_{String(number).padStart(2, "0")}</span>
                <span className="card-light">
                    <i /> {statusLabel[game.status]}
                </span>
            </div>

            <GameArt slug={game.slug} />

            <div className="card-copy">
                <h3>{game.title}</h3>
                <p>{game.summary}</p>
            </div>

            {game.playTime && (
                <div className="game-meta">
                    <span>
                        <small>RUN TIME</small>
                        {game.playTime}
                    </span>
                </div>
            )}

            {isPlayable ? (
                <Link href={`/games/${game.slug}`} className="card-action">
                    PLAY GAME <span>→</span>
                </Link>
            ) : (
                <button className="card-action" disabled>
                    COMING SOON <span>→</span>
                </button>
            )}
        </article>
    );
}