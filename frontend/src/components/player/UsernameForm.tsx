"use client"

import { useState } from "react";
import { saveCallsign } from "@/lib/storage";
import { useRouter } from "next/navigation";



export default function UsernameForm() {
    const [callsign, setCallsign] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    function handleClaim(){
        const ok = saveCallsign(callsign);
        if (!ok) {
            setError("3-16 characters: letters, numbers, underscores");
        } else{
            setError("");
            router.push("/");
        }
    }
    return(
        <div>
            <input
                value={callsign}
                onChange={(event) => setCallsign(event.target.value)}
                maxLength={16}
            />
            <span>{callsign.length}/16</span>
            <button onClick={handleClaim}>
                Claim callsign
            </button>
            {error && <p>{error}</p>}
        </div>
    );
}