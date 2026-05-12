import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/events", label: "Events" },
  { to: "/volunteers", label: "Volunteer" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/membership", label: "Membership" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center gap-4">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-extrabold tracking-tighter text-lg uppercase leading-none"
        >
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

        <div className="flex items-center gap-2">
          <Link
            to="/membership"
            onClick={() => setOpen(false)}
            className="hidden sm:inline-block bg-foreground text-background px-4 py-2 text-[11px] font-bold uppercase tracking-widest hover:bg-primary transition-colors"
          >
            Become a Member
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-border text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-4 text-[11px] font-mono uppercase tracking-widest">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="text-foreground hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/membership"
              onClick={() => setOpen(false)}
              className="sm:hidden bg-foreground text-background px-4 py-3 text-center font-bold tracking-widest hover:bg-primary transition-colors"
            >
              Become a Member
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
