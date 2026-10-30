package com.bitbunker.core.hangman;

import com.bitbunker.core.common.GameStatus;
import java.util.List;

public record HangmanGuessResult(
    boolean correct,
    List<Integer> positions,
    String maskedWord,
    int wrongGuesses,
    GameStatus status
) {
}
