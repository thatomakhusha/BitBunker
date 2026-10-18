"use client"

import { useState } from "react";

export default function GuessInput(
    { min, max, onGuess, disabled } : {min: number; max: number, onGuess: (value: number) => void, disabled: boolean}
){
    const [value, setValue] = useState("");

    const guess = Number(value);
    const isValid = value !== "" && guess >= min && guess <= max;

    return (
        <div className="mx-auto mt-10 max-w-md">
            <p className="font-pixel text-[0.4rem] text-muted">
                ENTER VALUE // {String(min).padStart(3, "0")}-{String(max).padStart(3, "0")}
            </p>
            <div className="mt-3 flex gap-4">
                <input 
                    type="number" 
                    min={min}
                    max={max}
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    placeholder="00"
                    disabled={disabled}
                    className="h-16 w-full flex-1 border border-border-strong bg-background px-4 text-center font-pixel text-2xl outline-none placeholder:text-muted focus:border-tertiary"
                />
                <button className="arcade-button px-10" disabled={disabled || !isValid} onClick={() => onGuess(guess)}>
                    GUESS &#8594;
                </button>
            </div>
        </div>
    )
}