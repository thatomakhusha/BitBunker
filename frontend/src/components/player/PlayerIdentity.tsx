"use client"

import { useState, useEffect } from "react";
import { getCallsign } from "@/lib/storage";
import Link from "next/link";

export default function PlayerIdentity(){
    const [callsign, setCallsign] = useState<string | null | undefined>(undefined);

    useEffect(() =>{
        setCallsign(getCallsign());
    }, []);

    if (callsign) {
        return <span>{callsign}</span>
    } 

    return <Link href="/callsign">PLAY NOW</Link>
}