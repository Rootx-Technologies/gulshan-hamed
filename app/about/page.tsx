import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} — mix mithai, cakes, patties, rolls, and fresh bakery.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="container-site grid gap-12 py-16 md:grid-cols-2 md:items-end md:py-20">
        <div>
          <p className="eyebrow">About the shop</p>
          <h1 className="mt-4 font-serif text-[2.8rem] leading-[1.08] tracking-[-0.03em] md:text-[4rem]">
            A sweets-and-bakers counter, packed every day.
          </h1>
        </div>
        <p className="max-w-md text-[1.08rem] leading-8 text-muted">
          Gulshan Hameed is known for mix mithai, celebration cakes, and the
          bakery tray — patties, rolls, bread, and biscuits. Open from six in
          the morning until ten at night, every day, with free home delivery.
        </p>
      </section>

      <section className="container-site pb-8">
        <div className="relative aspect-[16/8] overflow-hidden rounded-[1.75rem] bg-cream md:aspect-[16/7]">
          <Image
            src={images.mithai}
            alt="Mix mithai and festive sweets"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="container-site grid gap-16 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
        <div>
          <p className="font-urdu text-3xl leading-relaxed">{site.urduName}</p>
          <p className="mt-4 text-sm tracking-[0.16em] uppercase text-gold-deep">
            Sweets &amp; bakers
          </p>
        </div>
        <div className="space-y-6 text-[1.05rem] leading-8 text-muted">
          <p>
            The work is simple: trays that travel, cakes that arrive on time,
            bakery that is still useful at breakfast. Mix boxes for Eid and
            weddings. Gulab jamun and jalebi when someone wants something hot
            and sweet. Barfi and ladoo for the guest tray.
          </p>
          <p>
            On the savoury side: chicken patty, chicken roll, spring roll,
            samosa, and sandwiches. Cream rolls and rusk sit with the bread.
            Cakes are happier with a little notice. Mix and bakery you can
            usually walk in for.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-cream/80">
        <div className="container-site grid gap-10 py-16 md:grid-cols-3">
          {[
            [
              "Hours that fit the day",
              "Six until ten, seven days. Early enough for bread; late enough for a last box.",
            ],
            [
              "Packed to take away",
              "Mix mithai is boxed at the counter. Free home delivery when you would rather not come in.",
            ],
            [
              "Cakes when the date matters",
              "Birthday and gathering cakes are ordered at the shop. Tell us the name, the size, and when you will collect.",
            ],
          ].map(([title, body]) => (
            <article key={title}>
              <h2 className="font-serif text-2xl">{title}</h2>
              <p className="mt-3 leading-7 text-muted">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-site py-20">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl">See what is on the tray.</h2>
          <p className="mt-4 leading-8 text-muted">
            Mithai, cakes, patties, and rolls — the same counter, every day.
          </p>
          <Link
            href="/menu"
            className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-cream hover:bg-gold-deep"
          >
            See the menu
          </Link>
        </div>
      </section>
    </>
  );
}
