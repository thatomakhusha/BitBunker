package com.bitbunker.core.console;

import com.bitbunker.core.common.GameStatus;
import com.bitbunker.core.higherlower.HigherLowerGame;
import com.bitbunker.core.higherlower.Prediction;
import com.bitbunker.core.higherlower.PredictionResult;
import java.util.Random;
import java.util.Scanner;

public class HigherLowerConsole {
    private final Scanner scanner;

    public HigherLowerConsole(Scanner scanner) {
        this.scanner = scanner;
    }

    public void play() {
        HigherLowerGame game = new HigherLowerGame(new Random());

        System.out.println("Predict if the next card is higher or lower. Keep your streak alive!");

        while (game.getStatus() == GameStatus.IN_PROGRESS) {
            System.out.printf(
                "%nCurrent card: %s | Streak: %d | Cards left: %d%n",
                game.getCurrentCard(),
                game.getStreak(),
                game.getCardsRemaining()
            );

            Prediction prediction = askPrediction();
            PredictionResult result = game.playPrediction(prediction);

            System.out.printf("Next card: %s%n", result.card());

            switch (result.outcome()) {
                case CORRECT:
                    System.out.printf("Correct! Streak: %d%n", result.streak());
                    break;

                case WRONG:
                    System.out.println("Wrong!");
                    break;

                case PUSH:
                    System.out.println("Same rank! It's a push, the streak stays.");
                    break;
            }
        }

        if (game.getStatus() == GameStatus.WON) {
            System.out.printf(
                "Incredible! You got through the whole deck with a streak of %d!%n",
                game.getStreak()
            );
        } else {
            System.out.printf("Game over! Final streak: %d%n", game.getStreak());
        }
    }

    private Prediction askPrediction() {
        while (true) {
            System.out.print("Next card (h = higher, l = lower): ");

            String input = scanner.nextLine().trim().toLowerCase();

            switch (input) {
                case "h":
                case "higher":
                    return Prediction.HIGHER;
                case "l":
                case "lower":
                    return Prediction.LOWER;
                default:
                    System.out.println("Enter h or l.");
                    break;
            }
        }
    }
}