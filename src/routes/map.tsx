import { createFileRoute } from "@tanstack/react-router";
import mapAsset from "@/assets/hemlock-village-map.jpg.asset.json";

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
    <main className="bg-background">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-4">
          Trail Map
        </div>
        <h1 className="font-extrabold tracking-tighter text-4xl md:text-6xl uppercase leading-none">
          Hemlock Village Map
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
          Explore the full network of trails, viewpoints, and access points
          across Hemlock Mountain. Tap or click the map to view full size.
        </p>

        <div className="mt-12 border border-border bg-card">
          <a href={mapAsset.url} target="_blank" rel="noreferrer">
            <img
              src={mapAsset.url}
              alt="Hemlock Village trail map"
              className="w-full h-auto block"
              loading="eager"
            />
          </a>
        </div>

        <div className="mt-6">
          <a
            href={mapAsset.url}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-foreground text-background px-5 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-primary transition-colors"
          >
            Open Full-Size Map
          </a>
        </div>
      </section>
    </main>
  );
}
