"use client";

import { useEffect, useMemo, useState } from "react";
import { categories, menuItems, type MenuItem } from "@/lib/content";
import { ProductCard } from "@/components/ProductCard";

const filters = [
  { id: "all", label: "All" },
  ...categories.map((c) => ({ id: c.id, label: c.title })),
];

export function MenuBrowser() {
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const applyHash = () => {
      const id = window.location.hash.replace("#", "");
      if (filters.some((item) => item.id === id)) {
        setFilter(id);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const items = useMemo(
    () =>
      menuItems.filter((item: MenuItem) =>
        filter === "all" ? true : item.category === filter
      ),
    [filter]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((item) => {
          const active = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={`rounded-full px-4 py-2 text-sm ${
                active
                  ? "bg-ink text-cream"
                  : "border border-line bg-paper text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ProductCard key={`${item.category}-${item.name}`} item={item} />
        ))}
      </div>
    </div>
  );
}
