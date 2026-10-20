package com.bitbunker.core.rps;

import java.util.Random;
import java.util.Objects;

public class RpsMatch {
    private MatchFormat format;
    private int playerScore;
    private int computerScore;
    private int roundsPlayed;
    private boolean finished;
    private final Random random;
    
    public RpsMatch(MatchFormat format, Random random){
        this.format = Objects.requireNonNull(format);
        this.random = Objects.requireNonNull(random);
    }
}
