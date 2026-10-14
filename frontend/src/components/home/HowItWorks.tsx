import SectionHeading from "./SectionHeading";

const steps = [
    ["01", "CHOOSE YOUR GAME", "Pick a cabinet from the floor. Every game takes minutes to learn."],
    ["02", "PLAY YOUR RUN", "No tutorials. No grind. Just you, the clock, and one more try."],
    ["03", "CHASE YOUR RECORD", "Learn the patterns, sharpen your score, and climb the board."],
]

const HowItWorks = () => {


    return ( 
        <section id="about" className="how-section content-shell">
            <SectionHeading eyebrow="HOW IT WORKS" title="THREE STEPS. ZERO EXCUSES." />
            <div className="steps">
                {steps.map((step, index) => (
                    <article className="step" key={step[0]}>
                        <div className="step-icon"><span>{step[0]}</span><i>{index === 0 ? "◆" : index === 1 ? "▶" : "↑"}</i></div>
                        <h3>{step[1]}</h3>
                        <p>{step[2]}</p>
                    </article>
                ))}
            </div>

        </section>
     );
}
 
export default HowItWorks;