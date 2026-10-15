import { games } from "@/lib/games";
import GameCard from "./GameCard";

const ArcadeGrid = () => {
    return ( 
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {games.map((game, index) =>(
                <GameCard key={game.slug} game = {game} number={index + 1}/>
            ))}
        </div>
     );
}
 
export default ArcadeGrid;