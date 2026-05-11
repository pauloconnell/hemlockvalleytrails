import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/events", label: "Events" },
  { to: "/membership", label: "Membership" },
] as const;

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-extrabold tracking-tighter text-lg uppercase leading-none">
          Hemlock Valley
          <span className="block text-[10px] font-mono tracking-[0.2em] text-muted-foreground mt-0.5">
            Trail Society
          </span>
        </Link>

        <div className="hidden md:flex gap-7 text-[11px] font-mono uppercase tracking-widest">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-foreground hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          to="/membership"
          className="bg-foreground text-background px-4 py-2 text-[11px] font-bold uppercase tracking-widest hover:bg-primary transition-colors"
        >
          Become a Member
        </Link>
      </div>
    </nav>
  );
}
