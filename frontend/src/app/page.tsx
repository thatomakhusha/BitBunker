import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import GameCard from "@/components/games/GameCard";
import { games } from "@/lib/games";

const Home = () => {
  return ( 
    <>
      <Hero/>
      <HowItWorks/>
      <GameCard game={games[0]}/>
      <GameCard game={games[3]}/>
    </>
   );
}
 
export default Home;