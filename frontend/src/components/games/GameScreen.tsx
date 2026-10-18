export default function GameScreen(
    {label, status, footerLeft, footerRight, children}:{label: string; status: string; footerLeft: string; footerRight: string; children: React.ReactNode}
){
    return(
        <div className="border border-border bg-surface p-4">
            <div className="flex items-center justify-between font-pixel text-[0.4rem] text-muted">
                {label}
                <span className="flex items-center gap-2">
                    <i className="h-1.5 w-1.5 bg-primary" />
                    {status}
                </span>
            </div>
            <div className="mt-4 min-h-112 border-8 border-background bg-[#09120c] p-6">
                {children}
            </div>
            <div className="mt-4 flex justify-between font-pixel text-[0.4rem] text-muted">
                <span>{footerLeft}</span>
                <span>{footerRight}</span>
            </div>
        </div>
    );
}