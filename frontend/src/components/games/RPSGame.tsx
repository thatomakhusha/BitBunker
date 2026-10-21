"use client"

import GamePageLayout from "@/components/games/GamePageLayout";
import MatchupGuide from "./MatchupGuide";
import GameScreen from "@/components/games/GameScreen";
import AttemptsCounter from "@/components/games/AttemptsCounter";
import SystemMessage from "@/components/games/SystemMessage";
import GuessInput from "@/components/games/GuessInput";
import { useState, useEffect } from "react";
import { startGame, guess, GameStatus } from "@/lib/api";

const statusText = {
    IN_PROGRESS: "IN PROGRESS",
    WON: "YOU WON",
    LOST: "YOU GOT OVERPOWERED"
}

const messageColor = {
    IN_PROGRESS: "text-tertiary",
    WON: "text-primary",
    LOST: "text-secondary"
}


export default function RPSGame(){
    const [message, setMessage] = useState("SELECT YOUR WEAPON");
    const [status, setStatus] = useState<GameStatus>("IN_PROGRESS");

    return(
        <GamePageLayout 
            title="ROCK PAPER SCISSORS" 
            number={2} 
            subtitle="Best of 3, Best of 5, Best of 7. Read the machine and choose wisely." 
            statusLabel="GAME STATUS" 
            statusValue={statusText[status]}
            steps={["Select a weapon.", "CPU reveals its move.", "First to three wins."]} 
            howTitle="BEAT THE MACHINE." 
            howText={<>Choose your move.<strong className="text-foreground"> Rock crushes scissors, scissors cut paper, and paper covers rock.</strong></>} 
            sidePanel= {<MatchupGuide/>}
        >
            <GameScreen 
                label="BITBUNKER // HAND-TO-HAND" 
                status="CPU READY"
                footerLeft="PLAYER_01"
                footerRight="SESSION // LOCAL"
            >
                
                <p>div</p>
            </GameScreen>
        </GamePageLayout>
    )
}