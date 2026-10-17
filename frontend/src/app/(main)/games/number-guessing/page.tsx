import GamePageLayout from "@/components/games/GamePageLayout";
import RunLog from "@/components/games/RunLog";

const NumberGuessingPage = () => {
    return ( 
       <GamePageLayout 
            title="Number Guessing" 
            number={1} 
            subtitle="Crack the hidden code before your attempts run out." 
            statusLabel="GAME STATUS" 
            statusValue="IN PROGRESS" 
            steps={["Enter your best guess.", "Read the system hint.", "Adjust and try again."]} 
            howTitle="Crack the code." 
            howText={<>The bunker has generated a number between <strong className="text-foreground">1 and 100</strong>. You have seven attempts to find it.</>} 
            sidePanel={<RunLog entries={[]} />}
        >
            <p>
                hello
            </p>
        </GamePageLayout>
       
     );
}
 
export default NumberGuessingPage;