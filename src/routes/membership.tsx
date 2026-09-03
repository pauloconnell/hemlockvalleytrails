import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "../components/site/SectionLabel";

export const Route = createFileRoute("/membership")({
  component: Membership,
  head: () => ({
    meta: [
      { title: "Become a Member — Hemlock Valley Trail Society" },
      {
        name: "description",
        content:
          "Memberships, volunteer work, sponsorships and community support drive positive changes on Hemlock Mountain.",
      },
    ],
  }),
});

function Membership() {
  return (
    <main>
      <header className="border-b border-border bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 md:px-16 pt-20 pb-20 md:pt-28 md:pb-28">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/60 mb-4">
            Membership
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            Become a Member.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-background/80 leading-relaxed">
            Through memberships, volunteer work, sponsorships and community support, we are
            determined to create positive changes on Hemlock.
          </p>
          <a
            href="mailto:hemlockvalleytrailsociety@gmail.com?subject=Membership%20Inquiry"
            className="inline-block mt-10 bg-background text-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Email to Join
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 md:px-16 py-20 md:py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <SectionLabel index="01">Why Join</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter">
            Your support builds the mountain.
          </h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-foreground/80 leading-relaxed text-lg">
          <p>
            Hemlock Valley Trail Society was formed with a clear intention: to make the vast
            beauty of Hemlock Mountain and the surrounding community accessible to everyone. The
            goal is to create and maintain outdoor spaces, create and foster a sense of community
            and make changes that can be enjoyed for many years to come.
          </p>
          <p>
            Members fund the tools, materials and trail crews that keep our network alive — and
            help shape what gets built next.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 md:px-16 py-20 grid md:grid-cols-3 gap-10">
          {[
            ["Memberships", "Direct support that funds tools, materials and the trail crews who do the work."],
            ["Volunteer", "Volunteers play a critical role in trail construction, maintenance, and cleanup."],
            ["Sponsorship", "Local businesses partner with us to help create lasting outdoor infrastructure."],
          ].map(([title, body], i) => (
            <div key={title}>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                {String(i + 1).padStart(2, "0")} / Support
              </div>
              <div className="text-2xl font-extrabold tracking-tight mb-3">{title}</div>
              <p className="text-foreground/75 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-16 py-20 md:py-28">
        <div className="border border-border p-10 md:p-16 text-center bg-card">
          <SectionLabel>Get in touch</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-6 max-w-2xl mx-auto">
            Ready to help build something that lasts?
          </h2>
          <p className="text-foreground/75 max-w-xl mx-auto mb-8 leading-relaxed">
            Send us a note and we'll get you set up with a membership, a volunteer day, or a
            sponsorship conversation.
          </p>
          <a
            href="mailto:admin@hemlockvalleytrails.ca"
            className="inline-block bg-foreground text-background px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors"
          >
            admin@hemlockvalleytrails.ca
          </a>
        </div>
      </section>
    </main>
  );
}
