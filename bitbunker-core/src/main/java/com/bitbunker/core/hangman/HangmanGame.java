package com.bitbunker.core.hangman;

import java.util.Set;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import com.bitbunker.core.common.GameStatus;

public class HangmanGame {
    private final String secretWord;
    private final Set<Character> guessedLetters;
    private final int maxWrongGuesses;
    private int wrongGuesses;
    private GameStatus status;
    
    public HangmanGame(String secretWord, int maxWrongGuesses){
        
        if(secretWord == null || secretWord.isBlank()){
            throw new IllegalArgumentException("Word must not be empty");
        }
        for(int i = 0; i < secretWord.length(); i++) {
            char c = secretWord.charAt(i);
            if(!Character.isLetter(c)){
                throw new IllegalArgumentException("word may only contain letters");
            }
                    
        }
        if (maxWrongGuesses < 1){
            throw new IllegalArgumentException("max wrong guesses must be at least 1");
        }
    
        this.secretWord = secretWord.toLowerCase();
        this.guessedLetters = new HashSet<>();
        this.maxWrongGuesses = maxWrongGuesses;
        this.status = GameStatus.IN_PROGRESS;
    }
    
    private String buildMaskedWord(){
        StringBuilder builder = new StringBuilder();
        for(int i = 0; i < secretWord.length(); i++){
            char c = secretWord.charAt(i);
            if (i > 0) {
                builder.append(' ');
            }
            if (guessedLetters.contains(c)) {
                builder.append(c);
            } else{
                builder.append('_');
            }
        }
        
        return builder.toString();
    }
    
    private boolean allLettersGuessed(){
        for (int i = 0; i < secretWord.length(); i++) {
            char c = secretWord.charAt(i);
            if (!guessedLetters.contains(c)) {
                return false;
            }
        }
        return true;
    }
    
    public HangmanGuessResult guess(char letter){
        if (status != GameStatus.IN_PROGRESS) {
            throw new IllegalStateException("Game not in progress: the game is already over");
        }
        
        char lower = Character.toLowerCase(letter);
        
        if (!Character.isLetter(lower)) {
            throw new IllegalArgumentException("Not a letter: the guess must be a letter.");
        }
        
        if (guessedLetters.contains(lower)) {
            throw new IllegalArgumentException("Repeat: the letter has already been guessed.");
        }
        
        guessedLetters.add(lower);
        
        List<Integer> positions = new ArrayList<>();
        
        for (int i = 0; i < secretWord.length(); i++) {
            if (secretWord.charAt(i) == lower) {
                positions.add(i);
            }
        }
        
        boolean correct = !positions.isEmpty();
        
        if (!correct) {
            wrongGuesses++;
        }
        
        if (wrongGuesses >= maxWrongGuesses) {
            status = GameStatus.LOST;
        } else if (allLettersGuessed()) {
            status = GameStatus.WON;
        }
        return new HangmanGuessResult(correct, positions, buildMaskedWord(), wrongGuesses, status);
    }
    
    public GameStatus getStatus(){
        return status;
    }
    
    public String getMaskedWord(){
        return buildMaskedWord();    
    }
    
    public String getSecretWord(){
        if (status == GameStatus.IN_PROGRESS) {
            throw new IllegalStateException("The word can’t be revealed until the game is over");
        }
        
        return secretWord;
    }
}
