export type Game = {
    slug: string;
    title: string;
    summary: string;
    playTime?: string;
    status: "playable" | "coming-soon";
};

export const games: Game[] = [
    {
        slug: "number-guessing",
        title: "Number Guessing",
        summary: "Crack the hidden code before your attempts run out.",
        status: "playable",
    },
    {
        slug: "rock-paper-scissors",
        title: "Rock Paper Scissors",
        summary: "Beat the computer in a best-of-three showdown.",
        status: "playable",
    },
    {
        slug: "higher-or-lower",
        title: "Higher or Lower",
        summary: "Guess whether the next card is higher or lower.",
        status: "coming-soon",
    },
    {
        slug: "memory-match",
        title: "Memory Match",
        summary: "Flip the cards and find every matching pair.",
        playTime: "3 min",
        status: "coming-soon",
    },
    {
        slug: "tic-tac-toe",
        title: "Tic-Tac-Toe",
        summary: "Outsmart your opponent, one move at a time.",
        status: "coming-soon",
    },
    // {
    //     slug: "hangman",
    //     title: "Hangman",
    //     summary: "Save the word one letter at a time.",
    //     status: "coming-soon",
    // },
    // {
    //     slug: "word-scramble",
    //     title: "Word Scramble",
    //     summary: "Unscramble the letters before time runs out.",
    //     playTime: "3 min",
    //     status: "coming-soon",
    // },
    // {
    //     slug: "quiz-master",
    //     title: "Quiz Master",
    //     summary: "Test your knowledge and chase a perfect score.",
    //     playTime: "5 min",
    //     status: "coming-soon",
    // },
    // {
    //     slug: "wordle",
    //     title: "Wordle",
    //     summary: "Crack the five-letter word in six tries.",
    //     status: "coming-soon",
    // },
    // {
    //     slug: "connect-four",
    //     title: "Connect Four",
    //     summary: "Connect four pieces before your opponent does.",
    //     status: "coming-soon",
    // },
    // {
    //     slug: "blackjack",
    //     title: "Blackjack",
    //     summary: "Get closer to 21 without going over.",
    //     status: "coming-soon",
    // },
    // {
    //     slug: "lucky-slots",
    //     title: "Lucky Slots",
    //     summary: "Spin the reels and chase the jackpot.",
    //     status: "coming-soon",
    // },
    // {
    //     slug: "connections",
    //     title: "Connections",
    //     summary: "Sort sixteen words into four hidden groups.",
    //     status: "coming-soon",
    // },
    // {
    //     slug: "sudoku",
    //     title: "Sudoku",
    //     summary: "Fill the grid so every row, column and box is complete.",
    //     status: "coming-soon",
    // },
    // {
    //     slug: "chess",
    //     title: "Chess",
    //     summary: "Outplay the computer and checkmate the king.",
    //     status: "coming-soon",
    // },
];