import { createFileRoute, Link } from "@tanstack/react-router";
import heroForest from "../assets/hero-forest.jpg";
import trailConstruction from "../assets/trail-construction.jpg";
import trailMaintenance from "../assets/trail-maintenance.jpg";
import community from "../assets/community.jpg";
import logo from "../assets/hemlock-logo.jpg";
import { SectionLabel } from "../components/site/SectionLabel";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Hemlock Valley Trail Society — Trails, built by hands" },
      {
        name: "description",
        content:
          "Hemlock Valley Trail Society creates and maintains outdoor spaces on Hemlock Mountain, fostering community through trails, volunteer work and stewardship.",
      },
      { property: "og:image", content: heroForest },
      { name: "twitter:image", content: heroForest },
    ],
  }),
});

const projects = [
  {
    id: "construction",
    label: "01 / Construction",
    title: "Trail Construction",
    image: trailConstruction,
    intro:
      "Trail building is a hands-on process that involves designing, constructing, and establishing sustainable pathways that enhance outdoor experiences while minimizing environmental impact. Our trail building group is dedicated to creating well-crafted, accessible trails that blend seamlessly with the natural landscape.",
  },
  {
    id: "maintenance",
    label: "02 / Maintenance",
    title: "Trail Maintenance",
    image: trailMaintenance,
    intro:
      "Trail maintenance is an essential aspect of keeping our trails safe, accessible, and enjoyable for all users. Our trail building group is committed to ensuring that the trails we construct remain in top condition throughout the year.",
  },
  {
    id: "community",
    label: "03 / Community",
    title: "Community Engagement",
    image: community,
    intro:
      "Community engagement is a core component of our trail building efforts, as we believe that creating and maintaining trails is a collaborative process that benefits from local involvement and support. Our goal is to foster strong connections with the community and ensure that the trails we build reflect the needs and desires of those who use them.",
  },
];

function Home() {
  return (
    <main>
      {/* Hero */}
      <header className="relative w-full h-[92vh] min-h-[560px] overflow-hidden flex flex-col justify-end">
        <img
          src={heroForest}
          alt="Misty hemlock forest at dawn in the British Columbia mountains"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10 -z-10" />

        <div className="px-6 md:px-16 pb-16 md:pb-24 max-w-5xl animate-reveal">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] mb-5 text-primary">
            Hemlock Mountain &middot; British Columbia
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-balance mb-8 text-foreground">
            Built by hands.<br />Fueled by community.
          </h1>
          <p className="text-base md:text-xl max-w-2xl text-pretty leading-relaxed text-foreground/85">
            Hemlock Valley Trail Society was formed with a clear intention: to make the vast
            beauty of Hemlock Mountain and the surrounding community accessible to everyone.
          </p>
          <div className="mt-10 flex items-center gap-6">
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                to="/membership"
                className="bg-foreground text-background px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors text-center"
              >
                Become a Member
              </Link>
              <Link
                to="/projects"
                className="border border-foreground/30 text-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:border-foreground hover:bg-foreground hover:text-background transition-colors text-center"
              >
                Explore Projects
              </Link>
            </div>
            <img
              src={logo}
              alt="Hemlock Valley Trail Society logo"
              className="flex-1 w-full h-auto aspect-square rounded-full object-cover ring-2 ring-background/40 shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* Mission */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 md:px-16 py-20 md:py-28 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionLabel index="00">Our Mission</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-[0.95]">
              Hemlock Valley Trail Society
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              was formed with a clear intention: to make the vast beauty of Hemlock Mountain and
              the surrounding community accessible to everyone. The goal is to create and maintain
              outdoor spaces, create and foster a sense of community and make changes that can be
              enjoyed for many years to come.
            </p>
            <p>
              Through memberships, volunteer work, sponsorships and community support, we are
              determined to create positive changes on Hemlock.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-6 md:px-16 py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
              Projects on the mountain.
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-[11px] font-mono uppercase tracking-widest text-primary hover:underline"
          >
            View all projects &rarr;
          </Link>
        </div>

        <div className="grid gap-12 md:gap-16">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
                i % 2 === 1 ? "md:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="md:col-span-7 relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </figure>
              <div className="md:col-span-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                  {p.label}
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-5">
                  {p.title}
                </h3>
                <p className="text-foreground/75 leading-relaxed mb-6">{p.intro}</p>
                <Link
                  to="/projects"
                  hash={p.id}
                  className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-primary hover:gap-3 transition-all"
                >
                  Read more &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats / CTA */}
      <section className="border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          <div className="p-10 md:p-12">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-5">
              01 / Memberships
            </div>
            <div className="text-2xl font-extrabold tracking-tight mb-2">Join the Society</div>
            <p className="text-sm text-muted-foreground">
              Memberships fund tools, materials and the work of building lasting trails.
            </p>
          </div>
          <div className="p-10 md:p-12">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-5">
              02 / Volunteer
            </div>
            <div className="text-2xl font-extrabold tracking-tight mb-2">Lend a hand</div>
            <p className="text-sm text-muted-foreground">
              Volunteers play a critical role in trail construction, maintenance, and cleanup.
            </p>
          </div>
          <div className="p-10 md:p-12">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-5">
              03 / Sponsor
            </div>
            <div className="text-2xl font-extrabold tracking-tight mb-2">Support the work</div>
            <p className="text-sm text-muted-foreground">
              Sponsorships and community support drive positive changes on Hemlock.
            </p>
          </div>
        </div>
      </section>

      {/* Events teaser */}
      <section className="mx-auto max-w-7xl px-6 md:px-16 py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <SectionLabel>Events &amp; Updates</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
              What's Happening on Hemlock
            </h2>
          </div>
          <Link
            to="/events"
            className="text-[11px] font-mono uppercase tracking-widest text-primary hover:underline"
          >
            View calendar &rarr;
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="border border-border p-8 hover:border-foreground transition-colors group">
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">
              Holidays
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight mb-3 group-hover:text-primary transition-colors">
              Canada Day
            </h3>
            <p className="text-sm text-muted-foreground">July 1st 2025</p>
          </article>
          <article className="border border-border p-8 hover:border-foreground transition-colors group">
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">
              HVTS Meeting
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight mb-3 group-hover:text-primary transition-colors">
              HVTS July Monthly Meeting
            </h3>
            <p className="text-sm text-muted-foreground">
              Every month we invite members and volunteers to join us to discuss the current and
              upcoming trail projects on the mountain. Grizzly Den — 20753 Mount Keenan Road,
              Saturday July 5th 11:30am.
            </p>
          </article>
          <article className="border border-border p-8 hover:border-foreground transition-colors group">
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">
              HVTS Event
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight mb-3 group-hover:text-primary transition-colors">
              St. Patrick's Day Ride and BBQ
            </h3>
            <p className="text-sm text-muted-foreground">
              A community ride followed by a trailside BBQ to celebrate the season.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
