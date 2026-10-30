package com.bitbunker.core.hangman;

import java.util.Set;
import java.util.HashSet;
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
}
