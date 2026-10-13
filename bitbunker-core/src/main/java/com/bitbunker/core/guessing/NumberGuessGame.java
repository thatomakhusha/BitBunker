package com.bitbunker.core.guessing;

import com.bitbunker.core.common.GameStatus;
import java.util.Random;

public class NumberGuessGame {

    private final int min;
    private final int max;
    private final int maxAttempts;
    private final int target;
    private int attempts = 0;
    private GameStatus status = GameStatus.IN_PROGRESS;

    public NumberGuessGame(int min, int max, int maxAttempts) {
        if (min >= max) {
            throw new IllegalArgumentException("min must be less than max");
        }
        if (maxAttempts < 1) {
            throw new IllegalArgumentException("max attempts must be greater than 0");
        }

        this.min = min;
        this.max = max;
        this.maxAttempts = maxAttempts;

        Random random = new Random();
        this.target = random.nextInt(min, max + 1);
    }

    public GameStatus getStatus() {
        return status;
    }

    public int getAttempts() {
        return attempts;
    }

    public int getAttemptsLeft() {
        return maxAttempts - attempts;
    }

    public int getMin() {
        return min;
    }

    public int getMax() {
        return max;
    }
    
    public Hint guess(int number){
        if (status != GameStatus.IN_PROGRESS){
            throw new IllegalStateException("Game not in progress");
        }
        
        if (number < min || number > max) {
            throw new IllegalArgumentException("Number is below min or above max");
        }
        
        attempts++;
        
        if (number == target) {
            this.status = GameStatus.WON;
            return Hint.CORRECT;
        }
        
        if (attempts >= maxAttempts) {
            this.status = GameStatus.LOST;
        }
        
        return number < target ? Hint.TOO_LOW : Hint.TOO_HIGH; 
    }
    
    public int getTarget() {
        if (status == GameStatus.IN_PROGRESS) {
            throw new IllegalStateException("The game is still in progress");
        } else {
            return target;
        }
    }
}
