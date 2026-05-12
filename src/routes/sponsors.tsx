import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "../components/site/SectionLabel";

export const Route = createFileRoute("/sponsors")({
  component: Sponsors,
  head: () => ({
    meta: [
      { title: "Sponsors — Hemlock Valley Trail Society" },
      {
        name: "description",
        content:
          "Thank you to our sponsors. Sponsorships from the community and local businesses help fund trail construction and maintenance on Hemlock Mountain.",
      },
      { property: "og:title", content: "Sponsors — Hemlock Valley Trail Society" },
      {
        property: "og:description",
        content:
          "Sponsorships fund the additional resources and materials our volunteers need to build trails.",
      },
    ],
  }),
});

const currentSponsors = [
  { name: "The Grizzly Den at Hemlock", url: "http://www.grizzlydenathemlock.ca/" },
  { name: "Hemlock Valley Homeowners Association", url: "http://www.hvha.ca/" },
];

const tiers = [
  {
    name: "Gold Sponsorship",
    href: "https://square.link/u/HlC1aMi6",
    accent: "bg-foreground text-background",
  },
  {
    name: "Silver Sponsorship",
    href: "https://square.link/u/8JKUOBSM",
    accent: "bg-card text-foreground border border-border",
  },
  {
    name: "Bronze Sponsorship",
    href: "https://square.link/u/x6pxJhTl",
    accent: "bg-card text-foreground border border-border",
  },
];

function Sponsors() {
  return (
    <main>
      <header className="border-b border-border bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 md:px-16 pt-20 pb-20 md:pt-28 md:pb-28">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/60 mb-4">
            Sponsors
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            Sponsors make it real.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-background/80 leading-relaxed">
            A huge thank you to our sponsors for making this project a reality and for their
            continued support.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 md:px-16 py-20 md:py-28">
        <SectionLabel index="01">Current Sponsors</SectionLabel>
        <div className="grid md:grid-cols-2 gap-6">
          {currentSponsors.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border p-8 hover:border-primary transition-colors group"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                Sponsor
              </div>
              <div className="text-2xl font-extrabold tracking-tight group-hover:text-primary transition-colors">
                {s.name}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 md:px-16 py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <SectionLabel index="02">Why Sponsor</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter">
              A partnership that gets built into the mountain.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-foreground/80 leading-relaxed text-lg">
            <p>
              Sponsorships from the community and local businesses are one of the components
              required for success. Our volunteers and members supply their time, energy and
              tools, and sponsorships allow the funding of additional resources and materials.
            </p>
            <p>
              In return, sponsors can expect advertising and recognition on our signage, website,
              social media accounts and anywhere we advertise.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-16 py-20 md:py-28">
        <SectionLabel index="03">Packages</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-12">
          Choose your level of support.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <a
              key={t.name}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${t.accent} p-10 flex flex-col gap-6 hover:opacity-90 transition-opacity`}
            >
              <div className="font-mono text-[10px] uppercase tracking-widest opacity-70">
                Sponsorship
              </div>
              <div className="text-2xl font-extrabold tracking-tight">{t.name}</div>
              <div className="text-xs font-bold uppercase tracking-widest mt-auto">
                Sign up →
              </div>
            </a>
          ))}
        </div>
        <p className="mt-10 text-foreground/70 leading-relaxed max-w-2xl">
          Thank you for your support! An application form will be sent to the email on file.
        </p>
      </section>
    </main>
  );
}
