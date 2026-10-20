package com.bitbunker.core.rps;

public record RoundRecord(
        Move playerMove, 
        Move computerMove, 
        RoundResult roundResult, 
        int playerScore, 
        int computerScore
) {
    
}
