import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { ReviewSlider } from "@/components/ReviewSlider";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialIcons } from "@/components/SocialIcons";
import { categories, favourites, gallery, images, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="px-3 pb-4 pt-4 md:px-5 md:pb-5 md:pt-5">
        <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[1.5rem] bg-paper">
          <div className="relative min-h-[22rem] md:h-[26rem] lg:h-[27.5rem]">
            <div className="absolute inset-y-0 right-0 w-full md:w-[70%]">
              <Image
                src={images.hero}
                alt="Fresh bakery counter"
                fill
                priority
                sizes="(min-width: 768px) 70vw, 100vw"
                className="object-cover object-[68%_center]"
              />
            </div>
            <div className="hero-blend pointer-events-none absolute inset-0" />
            <div className="relative z-10 flex h-full max-w-lg flex-col justify-center px-5 py-7 sm:px-8 md:max-w-xl md:px-10 md:py-8">
              <p className="font-urdu text-xl leading-relaxed text-gold-deep md:text-[1.55rem]">
                {site.urduName}
              </p>
              <h1 className="mt-2 font-serif text-[2.05rem] leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.7rem] lg:text-[3rem]">
                Mithai for the box.
                <br />
                Bakery for the morning.
              </h1>
              <p className="mt-3 max-w-md text-[0.95rem] leading-7 text-muted">
                Mix mithai packed by the box, gulab jamun and jalebi from the
                tray, celebration cakes, cream rolls, chicken patty, chicken
                roll, and morning bread. Fresh through the day.
              </p>
              <SocialIcons className="mt-5" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-cream/70">
        <div className="container-site grid grid-cols-2 gap-8 py-8 md:grid-cols-4 md:py-10">
          <div className="flex gap-3">
            <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper text-gold-deep ring-1 ring-line">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v4.5l3 1.5" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <p className="font-serif text-2xl md:text-3xl">6am – 10pm</p>
              <p className="mt-1 text-sm text-muted">Open &amp; close, every day</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper text-gold-deep ring-1 ring-line">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M3 7h11v8H3z" />
                <path d="M14 10h4l3 3v2h-7" />
                <circle cx="7" cy="17.5" r="1.5" />
                <circle cx="17.5" cy="17.5" r="1.5" />
              </svg>
            </span>
            <div>
              <p className="font-serif text-2xl md:text-3xl">Free</p>
              <p className="mt-1 text-sm text-muted">Home delivery</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper text-gold-deep ring-1 ring-line">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M13 3 5 14h7l-1 7 8-11h-7l1-7z" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <p className="font-serif text-2xl md:text-3xl">Fast service</p>
              <p className="mt-1 text-sm text-muted">Ready when you are</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper text-gold-deep ring-1 ring-line">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
                <circle cx="9" cy="8" r="2.4" />
                <circle cx="15.5" cy="8.5" r="2" />
                <path d="M4.5 18c.4-2.6 2.4-4 4.5-4s4.1 1.4 4.5 4" />
                <path d="M14 14.2c1.7.2 3.2 1.4 3.6 3.8" />
              </svg>
            </span>
            <div>
              <p className="font-serif text-2xl md:text-3xl">1000+</p>
              <p className="mt-1 text-sm text-muted">Customers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site py-20 md:py-24">
        <SectionHeading
          eyebrow="On the counter"
          title="What people take home"
          body="Mix mithai for guests, a cake for the date, chicken patty and roll when you want something savoury."
        />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {favourites.map((item) => (
            <ProductCard key={item.name} item={item} />
          ))}
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="container-site grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-24">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem]">
            <Image
              src={images.bakery}
              alt="Bakery shelves in the morning"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[0.72rem] tracking-[0.22em] uppercase text-gold">
              The shop
            </p>
            <h2 className="mt-3 font-serif text-[2.4rem] leading-[1.12] md:text-[3rem]">
              Mithai, cakes, and the daily bake.
            </h2>
            <p className="mt-5 text-[1.05rem] leading-8 text-cream/75">
              The case holds mix boxes for Eid and weddings, gulab jamun and
              jalebi, birthday cakes, cream rolls, bread for tea, and savoury
              patties and rolls. Open six until ten, every day.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full bg-cream px-6 py-3 text-ink hover:bg-paper"
            >
              Our story
            </Link>
          </div>
        </div>
      </section>

      <section className="container-site py-20 md:py-24">
        <SectionHeading
          eyebrow="The case"
          title="Four kinds of hunger"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/menu#${category.id}`}
              className="group overflow-hidden rounded-2xl border border-line bg-paper hover:border-gold"
            >
              <div className="img-zoom relative aspect-[16/8]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <p className="eyebrow">{category.id}</p>
                <h3 className="mt-3 font-serif text-3xl">{category.title}</h3>
                <p className="mt-3 max-w-md leading-7 text-muted">{category.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-8">
        <div className="container-site">
          <SectionHeading
            eyebrow="A look at the trays"
            title="Mithai, patties, rolls, and cake"
            body="Each photograph is the item it names — mix mithai, chicken patty, chicken roll, cake, samosa, gulab jamun."
          />
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 px-3 md:grid-cols-3 md:gap-4 md:px-6">
          {gallery.map((shot) => (
            <div key={shot.alt} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <ReviewSlider />

      <section className="container-site py-20 md:py-24">
        <div className="rounded-[1.75rem] bg-cream px-6 py-12 md:flex md:items-end md:justify-between md:px-12 md:py-16">
          <div className="max-w-xl">
            <p className="eyebrow">Visit</p>
            <h2 className="mt-3 font-serif text-[2.2rem] leading-tight md:text-4xl">
              Open 6am to 10pm, every day.
            </h2>
            <p className="mt-4 leading-8 text-muted">
              Free home delivery. Walk in for mix, cakes, patties, and bakery.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 md:mt-0">
            <Link
              href="/visit"
              className="rounded-full bg-ink px-6 py-3 text-cream"
            >
              Hours &amp; map
            </Link>
            <Link
              href="/menu"
              className="rounded-full border border-line px-6 py-3"
            >
              See the menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
