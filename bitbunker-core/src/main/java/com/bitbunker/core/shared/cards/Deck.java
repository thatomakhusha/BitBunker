package com.bitbunker.core.shared.cards;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;
import java.util.Objects;
public class Deck {
    private final ArrayList<Card> cards;
    public Deck(){
        cards = new ArrayList<>();
        for(Suit suit: Suit.values()) {
            for(Rank rank : Rank.values()){
                Card card = new Card(rank, suit);
                cards.add(card);
            }
        }
    }
    
    public void shuffle(Random random) {
        Objects.requireNonNull(random);
        Collections.shuffle(cards, random);
    }
    
    public Card draw() {
        if(cards.isEmpty()){
            throw new IllegalStateException("No cards remain in the deck");
        }
        
        return cards.remove(0);
    }
    
    public int remainingCards() {
        return cards.size();
    }
}
