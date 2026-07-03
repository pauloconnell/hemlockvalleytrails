import { createFileRoute } from "@tanstack/react-router";
import villageMap from "@/assets/hemlock-village-map.jpg";
import mountainVista from "@/assets/gallery/mountain-vista.jpeg";

export const Route = createFileRoute("/map1")({
  head: () => ({
    meta: [
      { title: "You Are Here — Hemlock Valley Trail Society" },
      {
        name: "description",
        content:
          "Trail marker map showing your location on the Hemlock Mountain trail network.",
      },
      { property: "og:title", content: "You Are Here — Hemlock Valley Trail Society" },
      {
        property: "og:description",
        content:
          "Trail marker map showing your location on the Hemlock Mountain trail network.",
      },
      { property: "og:image", content: villageMap },
      { name: "twitter:image", content: villageMap },
    ],
  }),
  component: Map1Page,
});

function Map1Page() {
  return (
    <main>
      <header className="relative border-b border-border bg-foreground text-background overflow-hidden">
        <img
          src={mountainVista}
          alt="Hemlock Mountain vista"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-foreground/20" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-16 pt-20 pb-20 md:pt-28 md:pb-28">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/60 mb-4">
            Trail Marker
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            You are here.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-background/80 leading-relaxed">
            Scan this QR code to find your bearings on the Hemlock Mountain trail network.
            Tap the map below to view it full size.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 md:px-16 py-16 md:py-24">
        <div className="border border-border bg-card">
          <a href={villageMap} target="_blank" rel="noreferrer">
            <img
              src={villageMap}
              alt="Hemlock Village trail map"
              className="w-full h-auto block"
              loading="eager"
            />
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={villageMap}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-foreground text-background px-5 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-primary transition-colors"
          >
            Open Full-Size Map
          </a>
          <a
            href="https://www.trailforks.com/region/sasquatch-mountain-resort-47246/map/"
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-border px-5 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-muted transition-colors"
          >
            View on Trailforks
          </a>
        </div>
      </section>
    </main>
  );
}
