import { Link } from "@tanstack/react-router";
import logo from "@/assets/hemlock-logo.jpg";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Hemlock Valley Trail Society logo"
              className="h-14 w-14 rounded-full object-cover ring-1 ring-background/20"
            />
            <div>
              <div className="font-extrabold tracking-tighter text-2xl uppercase leading-none">
                Hemlock Valley
              </div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-background/60 mt-2">
                Trail Society &middot; BC Mountains
              </div>
            </div>
          </div>
          <p className="text-sm text-background/70 mt-6 max-w-xs leading-relaxed">
            Making the vast beauty of Hemlock Mountain accessible to everyone — through
            memberships, volunteer work, sponsorships and community support.
          </p>
        </div>

        <div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-background/50 mb-4">
            Navigate
          </div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-background/80">Home</Link></li>
            <li><Link to="/projects" className="hover:text-background/80">Projects</Link></li>
            <li><Link to="/map" className="hover:text-background/80">Map</Link></li>
            <li><Link to="/events" className="hover:text-background/80">Events &amp; Updates</Link></li>
            <li><Link to="/volunteers" className="hover:text-background/80">Volunteer</Link></li>
            <li><Link to="/sponsors" className="hover:text-background/80">Sponsors</Link></li>
            <li><Link to="/membership" className="hover:text-background/80">Become a Member</Link></li>
            <li><Link to="/brochure" className="hover:text-background/80">Brochure</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-background/50 mb-4">
            Connect
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61572828166557"
                target="_blank"
                rel="noreferrer"
                className="hover:text-background/80"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hemlockvalleytrailsociety/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-background/80"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="mailto:admin@hemlockvalleytrails.ca" className="hover:text-background/80">
                admin@hemlockvalleytrails.ca
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row gap-2 justify-between text-[10px] font-mono uppercase tracking-widest text-background/50">
          <span>&copy; {new Date().getFullYear()} Hemlock Valley Trail Society</span>
          <span>Built by hands &middot; Fueled by community</span>
        </div>
      </div>
    </footer>
  );
}
