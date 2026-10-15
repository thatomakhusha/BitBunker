import SectionHeading from "../home/SectionHeading";
import ArcadeGrid from "../games/ArcadeGrid";

const ArcadeSection = () => {
    return (
        <section id="arcade" className="content-shell py-20">
            <SectionHeading
                eyebrow="SELECT YOUR CHALLENGE"
                title="THE ARCADE"
                description="Pick your game. Beat your best. Run it back."
            />
            <ArcadeGrid />
        </section>
    );
};

export default ArcadeSection;