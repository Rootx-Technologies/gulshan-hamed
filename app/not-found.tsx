import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-site py-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-serif text-4xl md:text-5xl">That page is not on the tray.</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        Try the menu, or come back to the shopfront.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-cream"
      >
        Back home
      </Link>
    </section>
  );
}
