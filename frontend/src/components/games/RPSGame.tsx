"use client"

import GamePageLayout from "@/components/games/GamePageLayout";
import RunLog, { RunLogEntry } from "@/components/games/RunLog";
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
    return(
        <div>
            
        </div>
    )
}