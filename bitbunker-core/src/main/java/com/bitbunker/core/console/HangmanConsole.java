package com.bitbunker.core.console;

import com.bitbunker.core.common.GameStatus;
import com.bitbunker.core.hangman.HangmanGame;
import com.bitbunker.core.hangman.HangmanGuessResult;
import java.util.Scanner;

public class HangmanConsole {
    private final Scanner scanner;
    private HangmanGame game;

    public HangmanConsole(Scanner scanner) {
        this.scanner = scanner;
    }

    public void play() {
        game = new HangmanGame("terminal", 6);

        while (game.getStatus() == GameStatus.IN_PROGRESS) {
            System.out.println(game.getMaskedWord());
            System.out.print("Enter a letter: ");
            String input = scanner.nextLine();

            if (input.isBlank()) {
                System.out.println("Enter a letter.");
                continue;
            }

            char letter = input.charAt(0);

            try {
                HangmanGuessResult result = game.guess(letter);

                if (result.correct()) {
                    System.out.println("Yes! That letter is in the word.");
                } else {
                    System.out.println("No, that letter is not in the word.");
                }

                System.out.println("Wrong guesses: " + result.wrongGuesses());
            } catch (IllegalArgumentException e) {
                System.out.println(e.getMessage());
            }
        }

        if (game.getStatus() == GameStatus.WON) {
            System.out.println("Congratulations! The word is: " + game.getSecretWord());
        } else if (game.getStatus() == GameStatus.LOST) {
            System.out.println("Game over! The word was: " + game.getSecretWord());
        }
    }
}