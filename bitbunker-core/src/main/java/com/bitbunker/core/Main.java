
package com.bitbunker.core;

import com.bitbunker.core.console.NumberGuessConsole;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int choice;
        
        do{
            System.out.println("Pick a game:");
            System.out.println("1. Number Guessing");
            System.out.println("2. Rock Paper Scissors");
            System.out.println("3. Higher or Lower");
            System.out.println("0. Quit");
            System.out.print("Enter choice: ");
            String input = scanner.nextLine();
            
            try{
                choice = Integer.parseInt(input);
            } catch (NumberFormatException e){
                choice = -1;
            }
            switch(choice){
                case 1: 
                    NumberGuessConsole guessGame = new NumberGuessConsole(scanner);
                    guessGame.play();
                    break;
                case 2:
                    System.out.println("Coming Soon");
                    break;
                case 3:
                    System.out.println("Coming Soon");
                    break;
                case 0:
                    System.out.println("Thanks for playing");
                    break;

                default:
                    System.out.println("Wrong entry!");
                    break;

            }
        } while(choice != 0);
        
        scanner.close();
    }
}
