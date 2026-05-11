import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "../components/site/SectionLabel";

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
    title: "Canada Day",
    body: "July 1st 2025",
  },
  {
    category: "HVTS Meeting",
    title: "HVTS July Monthly Meeting",
    body:
      "Every month we invite members and volunteers to join us to discuss the current and upcoming trail projects on the mountain. Grizzly Den — 20753 Mount Keenan Road, Saturday July 5th 11:30am.",
  },
  {
    category: "HVTS Event",
    title: "St. Patrick's Day Ride and BBQ",
    body:
      "A community ride followed by a trailside BBQ to celebrate the season together.",
  },
];

const days = ["S", "M", "T", "W", "T", "F", "S"];

function Events() {
  // Render a static placeholder calendar grid (matches original "no upcoming events" state)
  const cells = Array.from({ length: 42 }, (_, i) => i - 4); // numbers loosely

  return (
    <main>
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-16 pt-20 pb-16 md:pt-28 md:pb-20">
          <SectionLabel>Upcoming Events</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            Calendar of Events
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/75 leading-relaxed">
            42 events found across the season. Members receive direct notifications for monthly
            meetings, work parties and community rides.
          </p>
        </div>
      </header>

      {/* Calendar */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-16 py-16 md:py-20">
          <div className="grid grid-cols-7 border-l border-t border-border bg-card">
            {days.map((d, i) => (
              <div
                key={i}
                className="border-r border-b border-border px-3 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground bg-muted/40"
              >
                {d}
              </div>
            ))}
            {cells.map((n, i) => {
              const day = ((n + 31) % 31) + 1;
              return (
                <div
                  key={i}
                  className="border-r border-b border-border aspect-square p-3 flex flex-col justify-between hover:bg-muted/40 transition-colors"
                >
                  <span className="font-mono text-[10px] text-muted-foreground">0 events</span>
                  <span className="text-2xl font-extrabold tracking-tighter self-end text-foreground/60">
                    {day}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Notice — There are no upcoming events on the days shown.
          </p>
        </div>
      </section>

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
