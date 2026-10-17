export default function SystemMessage(
    {message} : {message: string}
){
    return (
        <div className="mx-auto mt-10 max-w-md border border-border bg-background/40 px-6 py-5 text-center">
            <p className="font-pixel text-[0.4rem] text-muted">
                SYSTEM MESSAGE
            </p>
            <p className="mt-3 font-pixel text-sm text-tertiary">
                {message}
            </p>
        </div>
    )
}