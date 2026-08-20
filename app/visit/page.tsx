import type { Metadata } from "next";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Visit",
  description: `Hours, map, and reviews for ${site.name}.`,
};

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function VisitPage() {
  return (
    <section className="container-site py-16 md:py-20">
      <p className="eyebrow">Visit</p>
      <h1 className="mt-4 max-w-3xl font-serif text-[2.8rem] leading-[1.08] tracking-[-0.03em] md:text-[4rem]">
        Hours, map, and reviews.
      </h1>
      <p className="mt-6 max-w-xl text-[1.08rem] leading-8 text-muted">
        Open {site.hours.display}, every day. Free home delivery. Address is on
        the map below — we keep it here, not on every page.
      </p>

      <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-line">
        <iframe
          title="Google Maps listing for Gulshan Hameed Sweets and Bakers"
          src={site.mapsEmbed}
          className="h-[360px] w-full md:h-[440px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl">Hours</h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {days.map((day) => (
              <li
                key={day}
                className="flex items-center justify-between py-3 text-[0.98rem]"
              >
                <span>{day}</span>
                <span className="text-muted">{site.hours.display}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-2 text-[0.98rem] leading-7 text-muted">
            <p>
              <span className="text-ink">Address · </span>
              {site.addressLine}, {site.cityAlt}, {site.province} {site.postalCode}
            </p>
            <p>
              <span className="text-ink">Phone · </span>
              <a href={`tel:${site.phoneTel}`} className="hover:text-gold-deep">
                {site.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink px-6 py-3 text-cream"
            >
              Open in Google Maps
            </a>
            <a
              href={site.reviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-6 py-3"
            >
              Google reviews
            </a>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-line bg-cream/60 p-6 md:p-8">
          <h2 className="font-serif text-3xl">Cakes and mix boxes</h2>
          <p className="mt-3 leading-7 text-muted">
            Walk in during opening hours, or use the green button at the bottom
            of the page if you would like a box or a cake set aside.
          </p>
          <p className="mt-6 text-[0.98rem] leading-7 text-muted">
            Free home delivery. Give a day’s notice for celebration cakes when
            you can.
          </p>
        </div>
      </div>
    </section>
  );
}
