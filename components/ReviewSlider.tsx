import { reviews } from "@/lib/content";

function Stars({ count }: { count: number }) {
  return (
    <p className="text-gold-deep tracking-[0.12em]" aria-label={`${count} out of 5 stars`}>
      {"★".repeat(count)}
      <span className="text-line">{"★".repeat(5 - count)}</span>
    </p>
  );
}

export function ReviewSlider() {
  const loop = [...reviews, ...reviews];

  return (
    <section className="py-20 md:py-24">
      <div className="container-site">
        <p className="eyebrow">Reviews</p>
        <h2 className="mt-3 font-serif text-[2.1rem] leading-[1.15] tracking-[-0.02em] md:text-[2.75rem]">
          What people say
        </h2>
      </div>
      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-paper to-transparent md:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-paper to-transparent md:w-16" />
        <div className="review-track flex w-max gap-5 px-5 hover:[animation-play-state:paused] md:gap-6 md:px-8">
          {loop.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="w-[300px] shrink-0 rounded-2xl border border-line bg-cream/70 p-6 md:w-[340px]"
            >
              <Stars count={review.stars} />
              <p className="mt-4 text-[1.02rem] leading-7 text-ink">{review.text}</p>
              <p className="mt-5 text-sm text-muted">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
