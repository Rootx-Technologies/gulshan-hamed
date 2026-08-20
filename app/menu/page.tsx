import type { Metadata } from "next";
import { MenuBrowser } from "@/components/MenuBrowser";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Menu",
  description: `Mithai, cakes, bakery, patties, and rolls at ${site.name}.`,
};

export default function MenuPage() {
  return (
    <section className="container-site py-16 md:py-20">
      <SectionHeading
        eyebrow="The menu"
        title="What we bake, fry, and pack"
        body="Mithai for the guest tray, cakes for the date, bread in the morning, chicken patty and roll when you want something savoury."
      />
      <div className="mt-12">
        <MenuBrowser />
      </div>
      <p className="mt-16 max-w-2xl text-sm leading-6 text-muted">
        Mix mithai is packed in boxes for taking home. Prices follow today’s
        tray — confirm at the counter.
      </p>
    </section>
  );
}
