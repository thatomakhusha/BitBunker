"use client";

import { useState, useEffect } from "react";
import { getCallsign } from "@/lib/storage";
import Link from "next/link";
import { ChessKnight, ChevronDown, RotateCw, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";

export default function PlayerIdentity() {
    const [callsign, setCallsign] = useState<string | null | undefined>(
        undefined
    );

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setCallsign(getCallsign());
    }, []);

    const currentPath = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [currentPath]);

    if (callsign) {
        return (
            <div className="relative">
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-3 border  border-border px-4 py-2 transition-colors hover:border-[#39d353] cursor-pointer"
                >
                    <div className="flex h-10 w-10 items-center justify-center border border-[#39d353]/40 bg-[#39d353]/10">
                        <ChessKnight size={20} className="text-primary" />
                    </div>

                    <div className="flex flex-col items-start gap-1">
                        <span className="font-pixel tracking-[0.2em] text-muted/80 text-[0.35rem]">
                            PLAYER_01
                        </span>

                        <span className="font-mono text-sm font-bold tracking-wide">
                            {callsign}
                        </span>
                    </div>
                    {isOpen ? <ChevronUp size={15} className="ml-2 text-primary"/> : <ChevronDown size={15} className="ml-2 text-primary"/>}
                    
                </div>
                {isOpen && (
                    <div className="absolute right-0 top-full mt-2 w-72 border border-border border-t-2 border-t-primary bg-background p-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center border border-[#39d353]/40 bg-[#39d353]/10">
                                <ChessKnight size={24} className="text-primary" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-mono text-[1rem] font-bold tracking-wide">
                                    {callsign}
                                </span>
                                <span className="font-mono text-[10px] tracking-[0.2em] text-primary">
                                    Guest Player
                                </span>
                            </div>
                        </div>
                        <div className="my-4 border-t border-border"/>
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col items-center gap-1 border-r border-t border-b border-border p-3">
                                <p className="font-pixel text-[0.7rem] font-bold text-foreground">0</p>
                                <p className="font-mono text-[0.6rem] tracking-[0.2em] text-muted">GAMES</p>
                            </div>
                            <div className="flex flex-col items-center gap-1 border-t border-b border-border p-3">
                                <p className="font-pixel text-[0.7rem] font-bold text-foreground">0</p>
                                <p className="font-mono text-[0.6rem] tracking-[0.2em] text-muted">POINTS</p>
                            </div>
                        </div>
                        <Link
                            href="/scores"
                            className="flex justify-between p-3 hover:text-primary font-pixel mt-3"
                        >
                            <span className="text-[0.5rem]">MY SCORES</span>
                            <span className="text-[0.3rem]">→</span>
                        </Link>
                        <div className="mt-1 border-t border-border"/>
                        <Link
                            href="/callsign"
                            className="flex justify-between p-3 hover:text-primary font-pixel mt-1"
                        >
                            <span className="text-[0.5rem] text-muted">SWITCH PLAYER</span>
                            <RotateCw size={10} className="ml-2 text-muted"/>
                        </Link>
                        <div className="mt-1 border-t border-border"/>

                        <p className="text-muted/80 text-[0.6rem] mt-4">
                            Your guest identity is remembered on this browser. Clearing browser data or switching devices may prevent us from restoring it.
                        </p>
                    </div>
                )}
            </div>
        );
    }

    return (
        <Link
            href="/callsign"
            className="border border-[#39d353] px-4 py-2 font-mono text-sm tracking-widest text-[#39d353] transition-colors hover:bg-[#39d353] hover:text-black"
        >
            PLAY NOW
        </Link>
    );
}
