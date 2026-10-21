package com.bitbunker.core.higherlower;

import com.bitbunker.core.common.GameStatus;
import com.bitbunker.core.shared.cards.Card;
import com.bitbunker.core.shared.cards.Deck;
import java.util.Random;
import java.util.Objects;

public class HigherLowerGame {
    private final Deck deck;
    private Card currentCard;
    private int streak;
    private GameStatus status;
    
    public HigherLowerGame(Random random){
        Objects.requireNonNull(random, "Random cannot be null");
        deck = new Deck();
        deck.shuffle(random);
        currentCard = deck.draw();
        streak = 0;
        status = GameStatus.IN_PROGRESS;
    }
    
    public Card getCurrentCard(){
        return currentCard;
    }
    
    public int getStreak() {
        return streak;
    }
    
    public GameStatus getStatus() {
        return status;
    }
    
    public int getCardsRemaining() {
        return deck.remainingCards();
    }
    
    public PredictionResult playPrediction(Prediction prediction){
        if(prediction == null) {
            throw new IllegalArgumentException("Prediction cannot be null");
        }
        if (status != GameStatus.IN_PROGRESS) {
            throw new IllegalStateException("Game has already ended");
        }
        
        Card nextCard = deck.draw();
        int currentValue = currentCard.getRank().value();
        int nextValue = nextCard.getRank().value();
        PredictionOutcome outcome;
        if (nextValue > currentValue){
            if(prediction == Prediction.HIGHER) {
                outcome = PredictionOutcome.CORRECT;
            } else{
                outcome = PredictionOutcome.WRONG;
            } 
        } else if(nextValue < currentValue) {
            if(prediction == Prediction.LOWER) {
                outcome = PredictionOutcome.CORRECT;
            } else {
                outcome = PredictionOutcome.WRONG;
            }
        } else{
            outcome = PredictionOutcome.PUSH;
        }
        
        if (outcome == PredictionOutcome.CORRECT) {
            streak++;
        } else if(outcome == PredictionOutcome.WRONG) {
            status = GameStatus.LOST;
        }
        
        currentCard = nextCard;
        
        if(deck.remainingCards() == 0 && status != GameStatus.LOST){
            status = GameStatus.WON;
        }
        
        return new PredictionResult(currentCard, outcome, streak, status);
    }
}
