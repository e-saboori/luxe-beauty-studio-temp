type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  copy?: string;
};

export function SectionHeading({ eyebrow, title, align = "left", copy }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}
