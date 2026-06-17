import { createFileRoute } from "@tanstack/react-router";
import mapAsset from "@/assets/hemlock-village-map.jpg.asset.json";
import { SectionLabel } from "@/components/site/SectionLabel";
import { TrailforksMapWidget } from "@/components/site/TrailforksMapWidget";


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
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-16 pt-20 pb-16 md:pt-28 md:pb-20">
          <SectionLabel>Trail Map</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            Hemlock Village Map
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/75 leading-relaxed">
            Explore the full network of trails, viewpoints, and access points
            across Hemlock Mountain. Tap or click the map to view full size.
          </p>
        </div>
      </header>

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
