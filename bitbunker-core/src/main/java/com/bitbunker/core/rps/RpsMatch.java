package com.bitbunker.core.rps;

import java.util.Random;
import java.util.Objects;

public class RpsMatch {
    private final MatchFormat format;
    private int playerScore;
    private int computerScore;
    private int roundsPlayed;
    private boolean finished;
    private final Random random;
    
    public RpsMatch(MatchFormat format, Random random){
        this.format = Objects.requireNonNull(format);
        this.random = Objects.requireNonNull(random);
    }
    
    private Move generateComputerMove(){
        Move[] moves = Move.values();
        int index = random.nextInt(moves.length);
        
        return moves[index];
    }
    
    private RoundResult determineWinner(Move playerMove, Move computerMove){
        if(playerMove == computerMove){
            return RoundResult.TIE;
        } else if(
                (playerMove == Move.ROCK && computerMove == Move.SCISSORS) || 
                (playerMove == Move.PAPER && computerMove == Move.ROCK) || 
                (playerMove == Move.SCISSORS && computerMove == Move.PAPER)
        ){
            return RoundResult.PLAYER_WIN;
        } else {
            return RoundResult.COMPUTER_WIN;
        }
    }
    
    public RoundRecord playRound(Move playerMove){
        if(playerMove == null) {
            throw new IllegalArgumentException("Player move cannot be null");
        } 
        if (finished){
            throw new IllegalStateException("Match has already finished");
        }
        
        Move computerMove = generateComputerMove();
        
        RoundResult result = determineWinner(playerMove, computerMove);
        
        if(result == RoundResult.PLAYER_WIN) {
            playerScore++;
        } else if(result == RoundResult.COMPUTER_WIN) {
            computerScore++;
        } 
        
        roundsPlayed++;
        
        if (playerScore >= format.winsNeeded() || computerScore >= format.winsNeeded()) {
            finished = true;
        }
        
        return new RoundRecord(playerMove, computerMove, result, playerScore, computerScore);
    }
    
    public boolean isFinished(){
        return finished;
    }
    
    public int getPlayerScore(){
        return playerScore;
    }
    
    public int getComputerScore(){
        return computerScore;
    }
    
    public int getRoundsPlayed(){
        return roundsPlayed;
    }
    
    public MatchFormat getFormat(){
        return format;
    }
    
    public void reset(){
        playerScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
        finished = false;
    }
}
