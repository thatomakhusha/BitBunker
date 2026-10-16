export function isValidCallsign(name: string) : boolean{
    return /^[A-Za-z0-9_]{3,16}$/.test(name);
}

const CALLSIGN_KEY = "bitbunker.callsign";

export function getCallsign() : string | null {
    try{
        return localStorage.getItem(CALLSIGN_KEY);
    } catch {
        return null;
    }
}

export function saveCallsign(name: string) : boolean{
    if (!isValidCallsign(name)){
        return false;
    }
    try{ 
        localStorage.setItem(CALLSIGN_KEY, name);
        return true;
    } catch{
        return false;
    }
}