import { createFileRoute } from "@tanstack/react-router";
import mapAsset from "@/assets/hemlock-village-map.jpg.asset.json";
import { TrailforksMapWidget } from "@/components/site/TrailforksMapWidget";
import mountainVista from "@/assets/gallery/mountain-vista.jpeg";


export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Trail Map — Hemlock Valley Trail Society" },
      {
        name: "description",
        content:
          "Hemlock Village trail map showing routes, viewpoints, and access points across Hemlock Mountain.",
      },
      { property: "og:title", content: "Trail Map — Hemlock Valley Trail Society" },
      {
        property: "og:description",
        content:
          "Hemlock Village trail map showing routes, viewpoints, and access points across Hemlock Mountain.",
      },
      { property: "og:image", content: mapAsset.url },
      { name: "twitter:image", content: mapAsset.url },
    ],
  }),
  component: MapPage,
});

function MapPage() {
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
            Trail Map
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            Know the mountain before you ride.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-background/80 leading-relaxed">
            Explore the full network of trails, viewpoints, and access points
            across Hemlock Mountain — on Trailforks and our printable village map.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 md:px-16 pt-16 md:pt-20">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mb-6">
          Hemlock Valley Trails on Trail Forks
        </h2>
        <div className="overflow-x-auto">
          <TrailforksMapWidget />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-16 pt-16 md:pt-20">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
          Hemlock Village Map
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-foreground/75 leading-relaxed">
          Explore the full network of trails, viewpoints, and access points
          across Hemlock Mountain. Tap or click the map to view full size.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-16 py-16 md:py-24">
        <div className="border border-border bg-card">
          <a href={mapAsset.url} target="_blank" rel="noreferrer">
            <img
              src={mapAsset.url}
              alt="Hemlock Village trail map"
              className="w-full h-auto block"
              loading="eager"
            />
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={mapAsset.url}
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
