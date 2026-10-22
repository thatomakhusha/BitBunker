
package com.bitbunker.core.console;

import com.bitbunker.core.common.GameStatus;
import com.bitbunker.core.guessing.Hint;
import com.bitbunker.core.guessing.NumberGuessGame;
import java.util.Scanner;

public class NumberGuessConsole {
        private NumberGuessGame game;
        private final Scanner scanner;

        public NumberGuessConsole(Scanner scanner){
            this.scanner = scanner;
        }
        public void play(){
            
            game = new NumberGuessGame(1, 100, 7);
                    
            while (game.getStatus() == GameStatus.IN_PROGRESS) {

                System.out.printf(
                    "Enter a guess (between %d-%d), %d attempts left: ",
                    game.getMin(),
                    game.getMax(),
                    game.getAttemptsLeft()
                );


                String input = scanner.nextLine();

                try {
                    int number = Integer.parseInt(input);
                    Hint hint = game.guess(number);

                    switch (hint) {
                        case TOO_LOW:
                            System.out.println("Too low! Try again.");
                            break;

                        case TOO_HIGH:
                            System.out.println("Too high! Try again.");
                            break;

                        case CORRECT:
                            System.out.println("Correct! You guessed the number!");
                            break;
                    }

                } catch (NumberFormatException e) {
                    System.out.println("Enter a whole number.");
                } catch (IllegalArgumentException e) {
                    System.out.println(e.getMessage());
                }
            }

            if (game.getStatus() == GameStatus.WON) {
                System.out.printf(
                    "Congratulations! You guessed the number in %d attempts.%n",
                    game.getAttempts()
                );
            } else if (game.getStatus() == GameStatus.LOST) {
                System.out.printf(
                    "Game over! The number was %d.%n",
                    game.getTarget()
                );
            }
        }
        

}
