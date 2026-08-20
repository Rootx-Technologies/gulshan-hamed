import Image from "next/image";
import type { MenuItem } from "@/lib/content";

export function ProductCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex h-full flex-col">
      <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <p className="mt-4 min-h-4 text-[0.72rem] tracking-[0.16em] uppercase text-gold-deep">
        {item.tag ?? "\u00a0"}
      </p>
      <h3 className="mt-1 font-serif text-[1.55rem] leading-tight">{item.name}</h3>
      <p className="mt-2 flex-1 text-[0.98rem] leading-7 text-muted">{item.note}</p>
    </article>
  );
}
