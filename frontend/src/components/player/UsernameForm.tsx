"use client"

import { useState } from "react";
import { isValidCallsign, saveCallsign } from "@/lib/storage";
import { useRouter } from "next/navigation";



export default function UsernameForm() {
    const [callsign, setCallsign] = useState("");
    const [saveError, setSaveError] = useState("");
    let error = "";
    if (callsign.length > 0 && callsign.length<3) {
        error = "Callsign must be at least 3 characters."
    } else if(callsign.length >= 3 && !isValidCallsign(callsign)){
        error = "Only letters, numbers and underscores."
    }
    const router = useRouter();

    function handleClaim(){
        const ok = saveCallsign(callsign);
        if (!ok) {
            setSaveError("Couldn't save your callsign. Check your browser settings and try again.");
        } else{
            router.push("/");
        }
    }
    return(
        <div className="mt-10 text-left">
            <label htmlFor="callsign" className="font-pixel text-[0.5rem] text-muted">
                PLAYER NAME
            </label>
            <div className={`flex items-center gap-4 mt-3 h-16 px-5 bg-background border ${error ? "border-secondary" : "border-border-strong focus-within:border-primary"}`}>
                <span className="text-primary font-pixel">{">"}</span>
                <input
                    id="callsign"
                    value={callsign}
                    onChange={(event) => setCallsign(event.target.value)}
                    maxLength={16}
                    className="flex-1 bg-transparent outline-none font-pixel text-xs placeholder:text-[0.5rem] placeholder:text-muted"
                    placeholder="ENTER YOUR CALLSIGN"
                />
                <span className="font-pixel text-[0.4rem] text-muted">{callsign.length}/16</span>
            </div>
            
            
            
            <div className="flex gap-3 mt-4">
                <span className={`grid h-6 w-6 shrink-0 place-items-center border font-pixel text-[0.5rem] ${error ? "border-secondary text-secondary" : "border-border text-muted"}`}>
                    {error ? "!" : "i" }
                </span>
                <div>
                    {error ? (
                        <p className="font-pixel text-[0.5rem] text-secondary">{error}</p>
                    ) : (
                        <div>
                            <p className="font-pixel text-[0.4rem]">
                                Choose your player name.
                            </p>
                            <p className="text-[0.8rem] text-muted mt-1">
                                3-16 characters // letters, numbers, underscores
                            </p>
                        </div>
                    )}
                </div>

            </div>
            <button 
                onClick={handleClaim} 
                disabled={!isValidCallsign(callsign)}
                className="arcade-button w-full mt-6"
            >
                CLAIM CALLSIGN &#8594;
            </button>
            
            {saveError && <p>{saveError}</p>}
        </div>
    );
}