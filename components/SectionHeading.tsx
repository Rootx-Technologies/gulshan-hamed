export function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-[2.1rem] leading-[1.15] tracking-[-0.02em] text-ink md:text-[2.75rem]">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 max-w-xl text-[1.05rem] leading-8 text-muted">{body}</p>
      ) : null}
    </div>
  );
}
