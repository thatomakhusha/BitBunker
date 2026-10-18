"use client";

import GamePageLayout from "@/components/games/GamePageLayout";
import RunLog, { RunLogEntry } from "@/components/games/RunLog";
import GameScreen from "@/components/games/GameScreen";
import AttemptsCounter from "@/components/games/AttemptsCounter";
import SystemMessage from "@/components/games/SystemMessage";
import GuessInput from "@/components/games/GuessInput";
import { useState, useEffect } from "react";
import { startGame, guess, GameStatus } from "@/lib/api";

const hintText = {
    TOO_LOW: "TOO LOW",
    TOO_HIGH: "TOO HIGH",
    CORRECT: "CORRECT — CODE CRACKED"
};

export default function NumberGuessingGame(){
    const [attemptsRemaining, setAttemptsRemaining] = useState(7);
    const [message, setMessage] = useState("MAKE YOUR FIRST GUESS");
    const [log, setLog] = useState<RunLogEntry[]>([]);
    const [gameId, setGameId] = useState<string | null>(null);
    const [status, setStatus] = useState<GameStatus>("IN_PROGRESS");

    useEffect(() => {
        async function load() {
            const result = await startGame();
            setGameId(result.gameId);
            setAttemptsRemaining(result.attemptsRemaining);
            console.log("started", result);
        }
        load();
    }, []);

    async function handleGuess(value: number) { 
        if (gameId === null) {
            return;
        }
        const result = await guess(gameId, value);
        setAttemptsRemaining(result.attemptsRemaining);
        setStatus(result.status);
        if (result.status === "LOST") {
            setMessage(`RUN OVER — THE CODE WAS ${result.target}`);
        }
        else {
            setMessage(hintText[result.hint]);
        }

        setLog([{
            guess: value,
            hint: hintText[result.hint]
        }, ...log])
    }

    async function handlePlayAgain() {
        const result = await startGame();
        setGameId(result.gameId);
        setAttemptsRemaining(result.attemptsRemaining);
        setStatus("IN_PROGRESS");
        setMessage("MAKE YOUR FIRST GUESS");
        setLog([]);
    }
    return(
        <GamePageLayout 
            title="Number Guessing" 
            number={1} 
            subtitle="Crack the hidden code before your attempts run out." 
            statusLabel="GAME STATUS" 
            statusValue="IN PROGRESS" 
            steps={["Enter your best guess.", "Read the system hint.", "Adjust and try again."]} 
            howTitle="Crack the code." 
            howText={<>The bunker has generated a number between <strong className="text-foreground">1 and 100</strong>. You have seven attempts to find it.</>} 
            sidePanel={<RunLog entries={log} />}
        >
            <GameScreen 
                label="BITBUNKER // CODEBREAKER" 
                status="SIGNAL STABLE"
                footerLeft="PLAYER_01"
                footerRight="SESSION // LOCAL"
            >
                {/* MOCK: replace with values from the API */}
                <AttemptsCounter remaining={attemptsRemaining} total={7} />

                {/* MOCK: replace with the message from the API */}
                <SystemMessage message={message} />

                {/* MOCK: Guess will call the API later */}
                <GuessInput min={1} max={100} onGuess={handleGuess} disabled={status !== "IN_PROGRESS"}/>
                {status !== "IN_PROGRESS" && (
                    <div className="mt-8 text-center">
                        <button className="arcade-button" onClick={handlePlayAgain}>PLAY AGAIN &#8594;</button>
                    </div>
                )}
            </GameScreen>

        </GamePageLayout>
    )
}