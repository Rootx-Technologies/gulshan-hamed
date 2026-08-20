"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { images, nav, site } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="hidden border-b border-line/70 bg-cream/70 text-[0.78rem] text-muted md:block">
        <div className="container-site flex items-center justify-between py-2">
          <p>{site.hoursLabel}</p>
          <p>
            Free home delivery
            <span className="mx-2 text-line">·</span>
            <a href={`tel:${site.phoneTel}`} className="text-ink hover:text-gold-deep">
              {site.phoneDisplay}
            </a>
          </p>
        </div>
      </div>

      <div className="container-site flex items-center justify-between py-4 md:py-5">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-12 w-12 overflow-hidden rounded-xl ring-1 ring-line md:h-14 md:w-14">
            <Image
              src={images.logo}
              alt={site.name}
              fill
              sizes="56px"
              className="object-cover"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-[1.15rem] text-ink">
              {site.shortName}
            </span>
            <span className="block text-[0.68rem] tracking-[0.18em] uppercase text-muted">
              Sweets &amp; Bakers
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[0.95rem] md:flex">
          {nav
            .filter((item) => item.href !== "/menu")
            .map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                }
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/menu"
            className="rounded-full bg-ink px-5 py-2.5 text-sm text-cream hover:bg-gold-deep"
          >
            See the menu
          </Link>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-[18px] flex-col items-center gap-[5px]">
            <span className={`block h-px w-full bg-ink transition ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block h-px w-full bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-full bg-ink transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-paper px-5 pb-5 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {nav
              .filter((item) => item.href !== "/menu")
              .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-lg text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/menu"
              className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-cream"
              onClick={() => setOpen(false)}
            >
              See the menu
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
