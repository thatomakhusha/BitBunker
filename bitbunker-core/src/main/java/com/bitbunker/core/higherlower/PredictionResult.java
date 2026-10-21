package com.bitbunker.core.higherlower;

import com.bitbunker.core.common.GameStatus;
import com.bitbunker.core.shared.cards.Card;

public record PredictionResult(
        Card card,
        PredictionOutcome outcome,
        int streak,
        GameStatus status
) {
}
