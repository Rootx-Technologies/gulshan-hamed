import Image from "next/image";
import { SocialIcons } from "@/components/SocialIcons";
import { images, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream pb-20">
      <div className="container-site grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="relative h-14 w-14 overflow-hidden rounded-xl ring-1 ring-line">
              <Image
                src={images.logo}
                alt={site.name}
                fill
                sizes="56px"
                className="object-cover"
              />
            </span>
            <div>
              <p className="font-serif text-2xl">{site.shortName}</p>
              <p className="mt-1 text-sm tracking-[0.16em] uppercase text-muted">
                Sweets &amp; Bakers
              </p>
            </div>
          </div>
          <p className="font-urdu mt-4 text-xl leading-relaxed text-ink/80">
            {site.urduName}
          </p>
          <p className="mt-4 max-w-sm text-[0.95rem] leading-7 text-muted">
            Mix mithai, cakes, patties, rolls, and morning bakery — packed fresh
            at the counter.
          </p>
        </div>

        <div>
          <p className="eyebrow">Hours</p>
          <p className="mt-3 text-[0.95rem] text-ink">{site.hours.display}</p>
          <p className="mt-1 text-[0.95rem] text-muted">Every day, including Sunday</p>
          <p className="mt-3 text-[0.95rem] text-muted">Free home delivery</p>
        </div>

        <div>
          <p className="eyebrow">Follow</p>
          <SocialIcons className="mt-4" />
        </div>
      </div>
      <div className="border-t border-line/80">
        <div className="container-site flex flex-col gap-2 py-5 text-sm text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>Free home delivery</p>
        </div>
      </div>
    </footer>
  );
}
