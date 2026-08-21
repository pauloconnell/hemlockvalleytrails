import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "../components/site/SectionLabel";
import eventsHero from "../assets/gallery/utvs-trail.jpeg";

export const Route = createFileRoute("/events")({
  component: Events,
  head: () => ({
    meta: [
      { title: "Events & Updates — Hemlock Valley Trail Society" },
      {
        name: "description",
        content: "Upcoming events, monthly meetings and what's happening on Hemlock Mountain.",
      },
    ],
  }),
});

const updates = [
  {
    category: "Holidays",
    title: "Labour Day",
    body: "September 5th",
  },
  {
    category: "HVTS Meeting",
    title: "HVTS Monthly Meeting",
    body:
      "Every month we invite members and volunteers to join us to discuss the current and upcoming trail projects on the mountain. Grizzly Den — 20753 Mount Keenan Road, Date: TBD.",
  },
  {
    category: "HVTS Event",
    title: "Ride and BBQ",
    body:
      "A community ride followed by a trailside BBQ to celebrate the season together. Date: TBD",
  },
];

function Events() {
  return (
    <main>
      <header className="relative border-b border-border bg-foreground text-background overflow-hidden">
        <img
          src={eventsHero}
          alt="UTVs on a Hemlock Mountain trail"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-foreground/20" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-16 pt-20 pb-20 md:pt-28 md:pb-28">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/60 mb-4">
            Events &amp; Updates
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            Meet, ride, and celebrate the season.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-background/80 leading-relaxed">
            Join us for monthly meetings, work parties, community rides, and seasonal gatherings
            on Hemlock Mountain.
          </p>
        </div>
      </header>

      {/* Updates */}
      <section className="mx-auto max-w-7xl px-6 md:px-16 py-20 md:py-28">
        <div className="mb-12">
          <SectionLabel>Events &amp; Updates</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            What's Happening on Hemlock
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {updates.map((u) => (
            <article
              key={u.title}
              className="border border-border p-8 hover:border-foreground transition-colors group bg-card"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">
                {u.category}
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight mb-3 group-hover:text-primary transition-colors">
                {u.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{u.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
