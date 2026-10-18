import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { startGame, guess } from "./api";

// describe = the test class. Everything inside belongs to it.
describe("Number Guessing mock", () => {
  // Before every test: make Math.random always return 0.365,
  // so the secret number is always 37 (like seeding Random in Java).
  beforeEach(() => {
    vi.spyOn(Math, "random").mockReturnValue(0.365);
  });

  // After every test: put the real Math.random back.
  afterEach(() => {
    vi.restoreAllMocks();
  });

  // it = one @Test method.
  it("starts a game with 7 attempts", async () => {
    const result = await startGame();
    expect(result.status).toBe("IN_PROGRESS");
    expect(result.attemptsRemaining).toBe(7);
  });

  it("says TOO_LOW for a guess below the secret and hides the target", async () => {
    await startGame();
    const result = await guess("g", 10);
    expect(result.hint).toBe("TOO_LOW");
    expect(result.status).toBe("IN_PROGRESS");
    expect(result.attemptsUsed).toBe(1);
    expect(result.attemptsRemaining).toBe(6);
    expect(result.target).toBeUndefined(); // secret stays hidden during play
  });

  it("says TOO_HIGH for a guess above the secret", async () => {
    await startGame();
    const result = await guess("g", 90);
    expect(result.hint).toBe("TOO_HIGH");
    expect(result.status).toBe("IN_PROGRESS");
  });

  it("wins on a correct guess and reveals the target", async () => {
    await startGame();
    const result = await guess("g", 37);
    expect(result.hint).toBe("CORRECT");
    expect(result.status).toBe("WON");
    expect(result.target).toBe(37);
  });

  it("loses after 7 wrong guesses and reveals the target", async () => {
    await startGame();
    for (let i = 0; i < 6; i++) {
      await guess("g", 1); // 6 wrong guesses, still in progress
    }
    const result = await guess("g", 1); // the 7th wrong guess
    expect(result.status).toBe("LOST");
    expect(result.attemptsRemaining).toBe(0);
    expect(result.target).toBe(37);
  });

  it("still counts a correct guess on the 7th attempt as a win", async () => {
    await startGame();
    for (let i = 0; i < 6; i++) {
      await guess("g", 1);
    }
    const result = await guess("g", 37);
    expect(result.status).toBe("WON");
  });

  // Like assertThrows in JUnit. The guess must fail with this error.
  it("rejects a guess after the game is over", async () => {
    await startGame();
    await guess("g", 37); // win, so the game is over
    await expect(guess("g", 10)).rejects.toThrow("GAME_ALREADY_FINISHED");
  });

  it("rejects guesses outside 1-100 or not whole numbers", async () => {
    await startGame();
    await expect(guess("g", 0)).rejects.toThrow("INVALID_GUESS");
    await expect(guess("g", 101)).rejects.toThrow("INVALID_GUESS");
    await expect(guess("g", 3.5)).rejects.toThrow("INVALID_GUESS");
  });
});