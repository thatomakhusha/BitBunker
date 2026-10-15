export function isValidCallsign(name: string) : boolean{
    return /^[A-Za-z0-9_]{3,16}$/.test(name);
}

const CALLSIGN_KEY = "bitbunker.callsign";

export function getCallsign(){
    return localStorage.getItem(CALLSIGN_KEY);
}