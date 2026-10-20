package com.bitbunker.core.rps;

public enum MatchFormat {
    BEST_OF_3(2),
    BEST_OF_5(3),
    BEST_OF_7(4);

    private final int numWins;
    
    MatchFormat(int numWins){
        this.numWins = numWins;
    }
    
    public int winsNeeded(){
        return numWins;
    }
}

