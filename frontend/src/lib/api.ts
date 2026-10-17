// MOCK: this file stands in for the Java server and gets replaced by real fetch calls
// Only import this from "use client" components: the variables below are shared by every importer.

export type Hint = "TOO_LOW" | "TOO_HIGH" | "CORRECT";
export type GameStatus = "IN_PROGRESS" | "WON" | "LOST";
export type GuessResponse = {
    gameId: string;
    status: GameStatus;
    hint: Hint;
    attemptsUsed: number;
    attemptsRemaining: number;
    target? : number;
}

export type StartResponse = {
    gameId: string;
    status: GameStatus;
    attemptsRemaining: number;
}
const MAX_ATTEMPTS = 7;

// MOCK: the real server keeps this per game, in Java
let secret = 0;
let attemptsUsed = 0;
let finished = false;
let started = false;

export async function startGame() : Promise<StartResponse> {
    secret = Math.floor(Math.random() * 100) + 1;
    attemptsUsed = 0;
    finished = false;
    started = true;

    return { gameId: "mock-game", status: "IN_PROGRESS", attemptsRemaining: MAX_ATTEMPTS};
}

export async function guess(gameId: string, value: number): Promise<GuessResponse>{
    if (!started) {
        throw new Error("GAME_NOT_STARTED");
    }
    if (finished) {
        throw new Error("GAME_ALREADY_FINISHED");
    }
    if (!Number.isInteger(value) || value < 1 || value > 100) {
        throw new Error("INVALID_GUESS");
    }
    attemptsUsed = attemptsUsed + 1;

    let hint: Hint;

    if (value === secret) {
        hint = "CORRECT";
    } else if (value < secret) {
        hint = "TOO_LOW";
    } else {
        hint = "TOO_HIGH";
    }

    let status: GameStatus;

    if (hint === "CORRECT") {
        status = "WON"
    } else if (attemptsUsed >= MAX_ATTEMPTS) {
        status = "LOST";
    } else {
        status = "IN_PROGRESS";
    }

    

    finished = status !== "IN_PROGRESS";

    return { gameId, status, hint, attemptsUsed, attemptsRemaining: MAX_ATTEMPTS - attemptsUsed, target : finished ? secret : undefined };
}