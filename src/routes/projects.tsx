import { createFileRoute } from "@tanstack/react-router";
import trailConstruction from "../assets/trail-construction.jpg";
import trailMaintenance from "../assets/trail-maintenance.jpg";
import community from "../assets/community.jpg";
import { SectionLabel } from "../components/site/SectionLabel";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects — Hemlock Valley Trail Society" },
      {
        name: "description",
        content:
          "Trail construction, maintenance, and community engagement projects on Hemlock Mountain.",
      },
      { property: "og:image", content: trailConstruction },
    ],
  }),
});

const sections = [
  {
    id: "construction",
    label: "01 / Construction",
    title: "Trail Construction",
    image: trailConstruction,
    intro:
      "Trail building is a hands-on process that involves designing, constructing, and establishing sustainable pathways that enhance outdoor experiences while minimizing environmental impact. Our trail building group is dedicated to creating well-crafted, accessible trails that blend seamlessly with the natural landscape.",
    listIntro: "The trail building process includes several key steps:",
    items: [
      ["Planning and Design", "Before construction begins, we carefully plan each trail to ensure it aligns with the landscape, minimizes erosion, and provides safe, enjoyable routes for users. This includes determining the best path, considering factors like slope, drainage, and environmental impact."],
      ["Clearing the Path", "Once the design is finalized, the next step is clearing the trail corridor of trees, shrubs, rocks, and other obstructions. This creates a clean slate for the trail foundation and ensures it's safe for future construction."],
      ["Building the Trail Bed", "The trail bed is the foundation of the path, which must be properly leveled and compacted to create a stable, durable surface. This may involve digging, filling, or grading the land to ensure proper drainage and prevent erosion."],
      ["Erosion Control Measures", "Trail building includes implementing erosion control strategies, such as installing water bars, French drains, or armoring trail edges with rocks. These measures prevent damage from weather and maintain the trail's integrity over time."],
      ["Adding Features and Amenities", "As the trail takes shape, we may add features such as bridges, boardwalks, or steps to navigate challenging terrain. We also include signage and trail markers to guide users safely along the path."],
      ["Finishing Touches", "The final stage of trail building involves smoothing out rough edges, ensuring proper drainage, and making sure the trail blends into the surrounding environment. This includes planting native vegetation or adding mulch to help prevent erosion and enhance the natural beauty of the trail."],
    ],
    outro:
      "Our team of volunteers works diligently throughout each phase of the process, ensuring that the finished trail is sustainable, safe, and ready for use by outdoor enthusiasts of all types.",
  },
  {
    id: "maintenance",
    label: "02 / Maintenance",
    title: "Trail Maintenance",
    image: trailMaintenance,
    intro:
      "Trail maintenance is an essential aspect of keeping our trails safe, accessible, and enjoyable for all users. Our trail building group is committed to ensuring that the trails we construct remain in top condition throughout the year.",
    listIntro:
      "Maintenance tasks vary depending on the trail's location, usage, and the seasons, but they generally include:",
    items: [
      ["Clearing Vegetation", "Overgrown vegetation such as shrubs, trees, and grass can obstruct the trail, making it difficult or unsafe to navigate. Volunteers regularly clear these plants to ensure a clear path for hikers, bikers, and other users."],
      ["Erosion Control", "Weather conditions like rain can erode the trail surface, leading to uneven terrain or washed-out sections. Our team installs drainage systems, maintains water diversion structures, and reinforces areas prone to erosion to prevent long-term damage."],
      ["Repairing Trail Surface", "Over time, trail surfaces may become uneven, with ruts, holes, or loose rocks. We repair these sections by adding fresh gravel, compacting the surface, or using materials that promote smooth and safe travel."],
      ["Maintaining Signage", "Proper signage helps users navigate trails and stay informed about safety precautions. We regularly check and update trail markers, directional signs, and safety notices to ensure they are clear and visible."],
      ["Clearing Fallen Debris", "Storms and seasonal changes can lead to fallen branches, trees, or debris blocking the trail. Volunteers work to clear these obstacles and keep the trail accessible."],
      ["Trail Inspection", "Regular trail inspections help us spot potential hazards, such as damaged bridges or sections of trail in need of more substantial repairs. Ongoing assessments allow us to address issues before they become major problems."],
    ],
    outro:
      "Our volunteers play a vital role in this process, ensuring that our trails remain safe, functional, and beautiful for everyone to enjoy.",
  },
  {
    id: "community",
    label: "03 / Community",
    title: "Community Engagement",
    image: community,
    intro:
      "Community engagement is a core component of our trail building efforts, as we believe that creating and maintaining trails is a collaborative process that benefits from local involvement and support. Our goal is to foster strong connections with the community and ensure that the trails we build reflect the needs and desires of those who use them.",
    listIntro: "Here are some key ways we engage with the community:",
    items: [
      ["Volunteer Opportunities", "We actively encourage community members to get involved through volunteer programs. Volunteers play a critical role in trail construction, maintenance, and cleanup, providing hands-on opportunities for individuals of all ages to contribute to local outdoor spaces."],
      ["Public Meetings and Surveys", "To gather input on trail development, we host public meetings and surveys where community members can share their ideas, concerns, and suggestions. This helps us design trails that reflect the needs of the community and prioritize accessible, safe, and sustainable paths."],
      ["Collaborating with Local Organizations", "We partner with schools, environmental groups, local businesses, and government agencies to promote trail-building initiatives. These collaborations allow us to pool resources, knowledge, and support, creating a wider impact on the community."],
      ["Educational Programs", "We offer educational opportunities such as workshops, guided hikes, and environmental awareness campaigns. These programs help raise awareness about the importance of trails, promote outdoor recreation, and teach the community about trail stewardship."],
      ["Events and Celebrations", "To celebrate the completion of new trails or maintenance projects, we organize community events like ribbon-cutting ceremonies, trail runs, or family-friendly hikes. These events bring people together, strengthen community ties, and offer a chance for individuals to connect with the trails they've helped create or maintain."],
    ],
    outro:
      "Through these efforts, we aim to ensure that the trails we build are not just paths through nature, but vital spaces that bring people together and strengthen our community's connection to the outdoors.",
  },
] as const;

function Projects() {
  return (
    <main>
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-16 pt-20 pb-16 md:pt-28 md:pb-20">
          <SectionLabel>Projects</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            What we're building on the mountain.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/75 leading-relaxed">
            From sustainable construction to season-long maintenance and the people who make it
            possible — these are the programs that keep Hemlock's trails alive.
          </p>
          <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-primary hover:underline">
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {sections.map((s) => (
        <section
          id={s.id}
          key={s.id}
          className="border-b border-border scroll-mt-24"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-16 py-20 md:py-28 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="sticky top-28">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                  {s.label}
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">
                  {s.title}
                </h2>
                <figure className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            </div>
            <div className="md:col-span-7 space-y-8 text-foreground/85 leading-relaxed">
              <p className="text-lg">{s.intro}</p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {s.listIntro}
              </p>
              <ol className="space-y-6 counter-reset">
                {s.items.map(([title, body], i) => (
                  <li key={title} className="grid grid-cols-[auto_1fr] gap-5">
                    <span className="font-mono text-xs text-primary mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-extrabold tracking-tight text-lg mb-1">{title}</div>
                      <p className="text-foreground/75">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="text-lg italic text-foreground/80 border-l-2 border-primary pl-5">
                {s.outro}
              </p>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
