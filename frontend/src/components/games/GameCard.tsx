import { Game } from "@/lib/games";

export default function GameCard({ game } : { game: Game}){
    return (
        <div className="bg-surface border border-border p-6">
            {game.title}
            <p>{game.summary}</p>
            <p>{game.status}</p>
            {game.playTime && <p>{game.playTime}</p>}
        </div>
    );
}