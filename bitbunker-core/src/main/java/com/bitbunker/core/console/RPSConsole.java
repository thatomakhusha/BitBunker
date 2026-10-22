package com.bitbunker.core.console;

import com.bitbunker.core.rps.MatchFormat;
import com.bitbunker.core.rps.Move;
import com.bitbunker.core.rps.RoundRecord;
import com.bitbunker.core.rps.RpsMatch;
import java.util.Random;
import java.util.Scanner;

public class RPSConsole {
    private final Scanner scanner;

    public RPSConsole(Scanner scanner) {
        this.scanner = scanner;
    }

    public void play() {
        MatchFormat format = askFormat();
        RpsMatch match = new RpsMatch(format, new Random());

        System.out.printf("First to %d wins takes the match!%n", format.winsNeeded());

        while (!match.isFinished()) {
            Move playerMove = askMove();
            RoundRecord round = match.playRound(playerMove);

            System.out.printf(
                "You played %s, computer played %s.%n",
                round.playerMove(),
                round.computerMove()
            );

            switch (round.roundResult()) {
                case PLAYER_WIN:
                    System.out.println("You win this round!");
                    break;

                case COMPUTER_WIN:
                    System.out.println("Computer wins this round!");
                    break;

                case TIE:
                    System.out.println("It's a tie!");
                    break;
            }

            System.out.printf(
                "Score: You %d - %d Computer%n%n",
                round.playerScore(),
                round.computerScore()
            );
        }

        if (match.getPlayerScore() > match.getComputerScore()) {
            System.out.println("Congratulations! You won the match!");
        } else {
            System.out.println("Game over! The computer won the match.");
        }
    }

    private MatchFormat askFormat() {
        while (true) {
            System.out.println("Choose a match format:");
            System.out.println("1. Best of 3");
            System.out.println("2. Best of 5");
            System.out.println("3. Best of 7");
            System.out.print("Enter choice: ");

            String input = scanner.nextLine().trim();

            switch (input) {
                case "1":
                    return MatchFormat.BEST_OF_3;
                case "2":
                    return MatchFormat.BEST_OF_5;
                case "3":
                    return MatchFormat.BEST_OF_7;
                default:
                    System.out.println("Enter 1, 2 or 3.");
                    break;
            }
        }
    }

    private Move askMove() {
        while (true) {
            System.out.print("Your move (r = rock, p = paper, s = scissors): ");

            String input = scanner.nextLine().trim().toLowerCase();

            switch (input) {
                case "r":
                case "rock":
                    return Move.ROCK;
                case "p":
                case "paper":
                    return Move.PAPER;
                case "s":
                case "scissors":
                    return Move.SCISSORS;
                default:
                    System.out.println("Enter r, p or s.");
                    break;
            }
        }
    }
}