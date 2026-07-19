import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import heroForest from "../assets/hero-forest.jpg";
import trailConstruction from "../assets/trail-construction.jpg";
import trailMaintenance from "../assets/trail-maintenance.jpg";
import community from "../assets/community.jpg";
import logo from "../assets/hemlock-logo.jpg";
import gatheringAerial from "../assets/gallery/gathering-aerial-1.jpeg";
import gathering2 from "../assets/gallery/gathering-2.jpeg";
import gatheringTopdown from "../assets/gallery/gathering-topdown.jpeg";
import valleyWinter from "../assets/gallery/valley-winter.jpeg";
import mountainVista from "../assets/gallery/mountain-vista.jpeg";
import utvsTrail from "../assets/gallery/utvs-trail.jpeg";
import valleySpring from "../assets/gallery/valley-spring.jpeg";
import { SectionLabel } from "../components/site/SectionLabel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

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
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800
  );

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track viewport height
  useEffect(() => {
    const onResize = () => setVh(window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Parallax — image drifts slowly, content starts 80% down the viewport and rises fast
  const imageOffset = scrollY * 0.1;
  const startOffset = vh * 0.1;
  const contentOffset = Math.max(0, startOffset - scrollY * 1.4);
  const fadeStart = vh * 0.8;
  const fadeDistance = vh * 0.8;
  const contentOpacity = Math.max(0, 1 - Math.max(0, scrollY - fadeStart) / fadeDistance);

  return (
    <main>
      {/* Location bar */}
      <div className="bg-primary-deep text-primary-foreground">
        <div className="px-6 md:px-16 py-3 font-mono text-[11px] md:text-xs uppercase tracking-[0.3em] text-center">
          Hemlock Mountain &middot; British Columbia
        </div>
      </div>

      {/* Hero */}
      <header className="relative w-full min-h-[860px] overflow-hidden flex flex-col justify-end pt-24 md:pt-0">
        <div
          className="absolute inset-0 -z-10 will-change-transform"
          style={{ transform: `translate3d(0, ${imageOffset}px, 0)` }}
        >
          <img
            src={heroForest}
            alt="Misty hemlock forest at dawn in the British Columbia mountains"
            width={1920}
            height={1080}
            className="w-full h-[135%] object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10 -z-10" />

        <div
          style={{
            transform: `translate3d(0, ${contentOffset}px, 0)`,
            opacity: contentOpacity,
            willChange: "transform, opacity",
          }}
        >
          <div
            className="px-6 md:px-16 pb-16 md:pb-24"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
              <div className="md:col-span-7 order-2 md:order-1">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-balance mb-8 text-foreground">
                  Built by hands.<br />Fueled by community.
                </h1>
                <p className="text-base md:text-xl max-w-2xl text-pretty leading-relaxed text-foreground/85">
                  Hemlock Valley Trail Society was formed with a clear intention: to make the vast
                  beauty of Hemlock Mountain and the surrounding community accessible to everyone.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
                  <Link
                    to="/membership"
                    className="bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary-deep transition-colors text-center"
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
              </div>
              <div className="md:col-span-5 order-1 md:order-2">
                <img
                  src={logo}
                  alt="Hemlock Valley Trail Society logo"
                  className="w-[70vw] max-w-[520px] md:w-full md:max-w-none h-auto aspect-square rounded-full object-cover ring-2 ring-background/40 shadow-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </header>


      {/* Mission */}
      <section className="border-y border-border bg-primary-soft/60">
        <div className="mx-auto max-w-7xl px-6 md:px-16 py-20 md:py-28 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4" data-aos="fade-right">
            <SectionLabel index="00">Our Mission</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-[0.95]">
              Hemlock Valley Trail Society
            </h2>
          </div>
          <div
            className="md:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/80"
            data-aos="fade-left"
            data-aos-delay="100"
          >
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
              data-aos="fade-up"
              data-aos-delay={i * 100}
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
      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
          <div className="p-10 md:p-12" data-aos="zoom-in" data-aos-delay="0">
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary-foreground/70 mb-5">
              01 / Memberships
            </div>
            <div className="text-2xl font-extrabold tracking-tight mb-2">Join the Society</div>
            <p className="text-sm text-primary-foreground/85">
              Memberships fund tools, materials and the work of building lasting trails.
            </p>
          </div>
          <div className="p-10 md:p-12" data-aos="zoom-in" data-aos-delay="150">
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary-foreground/70 mb-5">
              02 / Volunteer
            </div>
            <div className="text-2xl font-extrabold tracking-tight mb-2">Lend a hand</div>
            <p className="text-sm text-primary-foreground/85">
              Volunteers play a critical role in trail construction, maintenance, and cleanup.
            </p>
          </div>
          <div className="p-10 md:p-12" data-aos="zoom-in" data-aos-delay="300">
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary-foreground/70 mb-5">
              03 / Sponsor
            </div>
            <div className="text-2xl font-extrabold tracking-tight mb-2">Support the work</div>
            <p className="text-sm text-primary-foreground/85">
              Sponsorships and community support drive positive changes on Hemlock.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-16 py-16 md:py-24">
          <div className="mb-10" data-aos="fade-up">
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
              Scenes from the mountain
            </h2>
          </div>
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent>
              {[
                { src: gatheringAerial, alt: "Volunteers gathered on the mountain" },
                { src: mountainVista, alt: "Mountain vista at Hemlock" },
                { src: valleyWinter, alt: "Hemlock Valley in winter" },
                { src: gathering2, alt: "Volunteers around a campfire" },
                { src: utvsTrail, alt: "UTVs on a trail" },
                { src: gatheringTopdown, alt: "Top-down view of a gathering" },
                { src: valleySpring, alt: "Hemlock Valley in spring" },
                { src: logo, alt: "Hemlock Valley Trail Society logo" },
              ].map((img) => (
                <CarouselItem key={img.src} className="md:basis-1/2 lg:basis-1/3">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Events teaser */}
      <section className="bg-primary-soft/40 border-b border-border"><div className="mx-auto max-w-7xl px-6 md:px-16 py-20 md:py-28">
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
          <article
            className="border border-border p-8 hover:border-foreground transition-colors group"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">
              Holidays
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight mb-3 group-hover:text-primary transition-colors">
              Canada Day
            </h3>
            <p className="text-sm text-muted-foreground">July 1st 2025</p>
          </article>
          <article
            className="border border-border p-8 hover:border-foreground transition-colors group"
            data-aos="fade-up"
            data-aos-delay="150"
          >
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
          <article
            className="border border-border p-8 hover:border-foreground transition-colors group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
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
      </div></section>
    </main>
  );
}
