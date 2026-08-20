import { site } from "@/lib/content";

const links = [
  {
    label: "Facebook",
    href: site.facebook,
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M14.5 8.5H16V6.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V12H7v2.6h2.3V22h2.8v-7.4H15l.4-2.6h-2.3v-1.8c0-.8.2-1.3 1.4-1.3Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: site.instagram,
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.4" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: site.tiktok,
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M14.2 3v2.2c1.4.9 3 1.4 4.8 1.5V9c-1.6 0-3.1-.4-4.4-1.2v6.3A5.6 5.6 0 1 1 9.2 8.7v2.4a3.2 3.2 0 1 0 2.6 3.1V3h2.4Z" />
      </svg>
    ),
  },
];

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {links.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          className="grid h-10 w-10 place-items-center rounded-full border border-line bg-paper/80 text-ink transition hover:border-ink hover:bg-ink hover:text-cream"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
