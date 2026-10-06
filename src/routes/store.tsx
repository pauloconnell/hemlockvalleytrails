import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { SectionLabel } from "../components/site/SectionLabel";
import store1Asset from "../assets/store1.jpg.asset.json";
import store2Asset from "../assets/store2.jpg.asset.json";
import store3Asset from "../assets/store3.jpg.asset.json";

export const Route = createFileRoute("/store")({
  component: Store,
  head: () => ({
    meta: [
      { title: "Store — Hemlock Valley Trail Society" },
      {
        name: "description",
        content:
          "Official merchandise of the Hemlock Valley Trail Society. Every purchase supports trail building and maintenance on Hemlock Mountain.",
      },
      {
        property: "og:title",
        content: "Store — Hemlock Valley Trail Society",
      },
      {
        property: "og:description",
        content:
          "Official merchandise of the Hemlock Valley Trail Society. Every purchase supports the trails.",
      },
    ],
  }),
});

function Store() {
  return (
    <main>
      <header className="border-b border-border bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 md:px-16 pt-20 pb-20 md:pt-28 md:pb-28">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/60 mb-4">
            Store
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            Wear the mountain.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-background/80 leading-relaxed">
            Official Hemlock Valley Trail Society merchandise. Every purchase goes straight
            back into building and maintaining the trails.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 md:px-16 py-20 md:py-28">
        <SectionLabel index="01">First Look</SectionLabel>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          <figure className="group border border-border bg-card overflow-hidden" data-aos="fade-up">
            <img
              src={store1Asset.url}
              alt="Hemlock Valley Trail Society jerseys"
              className="w-full aspect-square object-cover group-hover:scale-[1.03] transition-transform duration-500"
              loading="lazy"
            />
            <figcaption className="p-5 border-t border-border">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                HVTS Jersey
              </div>
              <div className="mt-1 font-bold tracking-tight">Custom team jerseys</div>
            </figcaption>
          </figure>
          <figure className="group border border-border bg-card overflow-hidden" data-aos="fade-up" data-aos-delay="100">
            <img
              src={store2Asset.url}
              alt="HVTS jersey back with name and number"
              className="w-full aspect-square object-cover group-hover:scale-[1.03] transition-transform duration-500"
              loading="lazy"
            />
            <figcaption className="p-5 border-t border-border">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                HVTS Jersey
              </div>
              <div className="mt-1 font-bold tracking-tight">Personalized name & number</div>
            </figcaption>
          </figure>
          <figure className="group border border-border bg-card overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <img
              src={store3Asset.url}
              alt="Insulated tumbler with the society logo"
              className="w-full aspect-square object-cover group-hover:scale-[1.03] transition-transform duration-500"
              loading="lazy"
            />
            <figcaption className="p-5 border-t border-border">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                HVTS Tumbler
              </div>
              <div className="mt-1 font-bold tracking-tight">Logo insulated tumbler</div>
            </figcaption>
          </figure>
        </div>

        <div className="mt-14 border border-border bg-muted/40 p-10 md:p-16 text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Under Construction
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-tight">
            The store is on its way.
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-foreground/70 leading-relaxed text-lg">
            Jerseys, tumblers and more featuring the society logo. Check back soon, or
            reach out if you'd like to be notified when items go live.
          </p>
          <a
            href="mailto:hemlockvalleytrailsociety@gmail.com?subject=Store%20interest"
            className="inline-flex items-center justify-center mt-10 bg-foreground text-background px-8 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-primary transition-colors"
          >
            Email us about the store
          </a>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 md:py-20 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter">
            Can't wait? Support the trails today.
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/membership"
              className="inline-flex items-center justify-center bg-foreground text-background px-8 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-primary transition-colors"
            >
              Become a Member
            </Link>
            <Link
              to="/sponsors"
              className="inline-flex items-center justify-center bg-card text-foreground border border-border px-8 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-primary hover:text-background transition-colors"
            >
              Sponsor the Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
