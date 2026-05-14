import { createFileRoute } from "@tanstack/react-router";
import brochure1 from "@/assets/brochure/brochure-1.jpg";
import brochure2 from "@/assets/brochure/brochure-2.jpg";

export const Route = createFileRoute("/brochure")({
  component: Brochure,
  head: () => ({
    meta: [
      { title: "Brochure — Hemlock Valley Trail Society" },
      {
        name: "description",
        content:
          "View and download the Hemlock Valley Trail Society brochure — our mission, projects and how to get involved.",
      },
      { property: "og:title", content: "Brochure — Hemlock Valley Trail Society" },
      {
        property: "og:description",
        content:
          "View and download the Hemlock Valley Trail Society brochure.",
      },
    ],
  }),
});

function Brochure() {
  return (
    <main>
      <header className="border-b border-border bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 md:px-16 pt-20 pb-20 md:pt-28 md:pb-28">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/60 mb-4">
            Brochure
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            The Society, on paper.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-background/80 leading-relaxed">
            Our printable brochure — share it with neighbours, post it on the cabin fridge, or
            hand it to anyone curious about what we're building on Hemlock Mountain.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 md:px-16 py-16 md:py-24 grid gap-10">
        <a
          href={brochure1}
          target="_blank"
          rel="noreferrer"
          className="block border border-border bg-card hover:shadow-xl transition-shadow"
        >
          <img
            src={brochure1}
            alt="Hemlock Valley Trail Society brochure — page 1"
            className="w-full h-auto"
            loading="lazy"
          />
        </a>
        <a
          href={brochure2}
          target="_blank"
          rel="noreferrer"
          className="block border border-border bg-card hover:shadow-xl transition-shadow"
        >
          <img
            src={brochure2}
            alt="Hemlock Valley Trail Society brochure — page 2"
            className="w-full h-auto"
            loading="lazy"
          />
        </a>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <a
            href={brochure1}
            download
            className="inline-block bg-foreground text-background px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors"
          >
            Download Page 1
          </a>
          <a
            href={brochure2}
            download
            className="inline-block bg-foreground text-background px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors"
          >
            Download Page 2
          </a>
        </div>
      </section>
    </main>
  );
}
