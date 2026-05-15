import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "../components/site/SectionLabel";
import gatheringAerial from "../assets/gallery/gathering-aerial-1.jpeg";
import gathering2 from "../assets/gallery/gathering-2.jpeg";
import gatheringTopdown from "../assets/gallery/gathering-topdown.jpeg";

export const Route = createFileRoute("/volunteers")({
  component: Volunteers,
  head: () => ({
    meta: [
      { title: "Volunteer — Hemlock Valley Trail Society" },
      {
        name: "description",
        content:
          "Volunteers are the backbone of the Hemlock Valley Trail Society. Sign up to help build and maintain trails on Hemlock Mountain.",
      },
      { property: "og:title", content: "Volunteer — Hemlock Valley Trail Society" },
      {
        property: "og:description",
        content:
          "Trail building is hard work — and our volunteers make it possible. Join us on the mountain.",
      },
    ],
  }),
});

function Volunteers() {
  return (
    <main>
      <header className="relative border-b border-border bg-foreground text-background overflow-hidden">
        <img
          src={gatheringAerial}
          alt="Volunteers gathered together on Hemlock Mountain"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-foreground/20" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-16 pt-20 pb-20 md:pt-28 md:pb-28">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/60 mb-4">
            Volunteer
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            Calluses, muddy boots, and pride.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-background/80 leading-relaxed">
            Trail building is hard work, dirty, long hours and the only thing you walk away with
            is calluses, muddy boots and a deep sense of pride in what was made possible.
          </p>
        </div>
      </header>

      {/* Gathering imagery */}
      <section className="mx-auto max-w-7xl px-6 md:px-16 pt-16 md:pt-24 grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src={gathering2}
          alt="Volunteers gathered around a campfire on the mountain"
          className="w-full h-64 md:h-80 object-cover"
        />
        <img
          src={gatheringTopdown}
          alt="Top-down view of volunteers meeting on the trail"
          className="w-full h-64 md:h-80 object-cover"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-16 py-20 md:py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <SectionLabel index="01">The Backbone</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter">
            Volunteers make this possible.
          </h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-foreground/80 leading-relaxed text-lg">
          <p>
            Volunteers are the backbone of organizations such as these and we couldn't be more
            grateful for everyone who believes in this project.
          </p>
          <p>
            To become a volunteer, please fill out the form below. To become a member, please
            visit our{" "}
            <Link to="/membership" className="text-primary underline underline-offset-4">
              Membership page
            </Link>
            . To become a sponsor, please visit our{" "}
            <Link to="/sponsors" className="text-primary underline underline-offset-4">
              Sponsorship page
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-3xl px-6 md:px-16 py-20 md:py-28">
          <SectionLabel index="02">Sign Up</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-10">
            Get in touch.
          </h2>
          <form
            action="mailto:admin@hemlockvalleytrails.ca"
            method="post"
            encType="text/plain"
            className="space-y-6"
          >
            {[
              { id: "name", label: "Name *", type: "text", required: true },
              { id: "email", label: "Email *", type: "email", required: true },
              { id: "subject", label: "Subject", type: "text", required: false },
            ].map((f) => (
              <div key={f.id}>
                <label
                  htmlFor={f.id}
                  className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                >
                  {f.label}
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  required={f.required}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary"
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="bg-foreground text-background px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
