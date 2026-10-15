import type { ReactNode } from "react";

const arts: Record<string, { type: string; content: ReactNode }> = {
    "number-guessing": { type: "numbers", content: <><b>?</b><i>42</i><i>77</i></> },
    "rock-paper-scissors": { type: "rps", content: <><b>✦</b><i className="block-a" /><i className="block-b" /></> },
    "higher-or-lower": { type: "arrows", content: <><b>↑</b><b>↓</b><i>58</i></> },
    "memory-match": { type: "memory", content: <><i>?</i><i className="flipped">A</i><i>?</i><i>?</i><i className="flipped">A</i><i>?</i></> },
    "tic-tac-toe": { type: "grid", content: <><i>×</i><i>○</i><i>×</i><i>○</i></> },
    "hangman": { type: "hangman", content: <><i className="gallows" /><b>_ A _</b></> },
    "word-scramble": { type: "letters", content: <><i>B</i><i>T</i><i>I</i></> },
    "quiz-master": { type: "quiz", content: <><b>?</b><i>A</i><i>B</i><i>C</i></> },
    "wordle": { type: "wordle", content: <><i>B</i><i>I</i><i>T</i><i>S</i></> },
    "connect-four": { type: "connect", content: <><i /><i /><i /><i /><i /><i /><i /><i /></> },
    "blackjack": { type: "cards", content: <><i>A♠</i><i>K♦</i><b>21</b></> },
};

export default function GameArt({ slug }: { slug: string }) {
    const art = arts[slug];

    return (
        <div className={`game-art ${art ? `art-${art.type}` : ""}`} aria-hidden="true">
            {art?.content}
        </div>
    );
}