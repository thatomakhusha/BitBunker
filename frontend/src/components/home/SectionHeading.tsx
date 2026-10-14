
type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) => {
  return (
    <div className="section-heading">
      <div className="eyebrow">
        <span>//</span> {eyebrow}
      </div>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
};

export default SectionHeading;
